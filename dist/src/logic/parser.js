"use strict";
// @ts-nocheck
exports.__esModule = true;
exports.CreateClassModelFromTokens = exports.CreateMethodModelFromTokens = exports.CreateVariableModelFromTokens = exports.LocateMethodsAndAttributes = exports.LocateClasses = exports.GetTokensInScope = void 0;
// An array of tokens that describe a method, class, or attribute
var descriptorTokens = ["public", "private", "protected", "abstract", "static", "final", "extends", "implements", "class", "interface"];
var symbols = "{}[]()<>=;+-/?:,.\"|*&^%$#@!~`";
/**
 * Returns all of the tokens within a certian scope indicated by {}, [], (), "", '', or <>
 *
 * @param {string[]} tokens - An array of tokens to look through
 * @param {number} startToken - The index of the token that indicates the beginning of the scope. The token at that
 * index must be {, [, (, ", ', or <
 *
 * @returns {string[]} - An array of tokens within the scope
 */
function GetTokensInScope(tokens, startToken) {
    var index = startToken + 1;
    var firstToken = tokens[startToken];
    var lastToken = "";
    switch (firstToken) {
        case "{":
            lastToken = "}";
            break;
        case "[":
            lastToken = "]";
            break;
        case "(":
            lastToken = ")";
            break;
        case '"':
            lastToken = '"';
            break;
        case "'":
            lastToken = "'";
            break;
        case "<":
            lastToken = ">";
            break;
        default:
            console.warn("Invalid starting token. The token at the specified starting index must be '{', '[', '(', '\"', ''', or '<'");
            return [];
    }
    var firstTokenCount = 0;
    while (index < tokens.length) {
        if (tokens[index] === firstToken) {
            firstTokenCount++;
        }
        else if (tokens[index] === lastToken) {
            if (firstTokenCount > 0) {
                firstTokenCount--;
            }
            else {
                return tokens.slice(startToken + 1, index);
            }
        }
        index++;
    }
    console.warn("Couldn't find the corresponding closing token in the tokens provided");
    return [];
}
exports.GetTokensInScope = GetTokensInScope;
/**
 * Searches through an array of tokens for classes, and returns them as an array of Class Models.
 *
 * @param {string[]} tokens - An array of tokens to look through
 *
 * @returns {string[]} - An array of Class Models
 */
function LocateClasses(tokens) {
    var classes = [];
    var index = 0;
    while (index < tokens.length) {
        if (descriptorTokens.includes(tokens[index])) {
            var descriptorsBeforeName = [];
            var descriptorsAfterName = [];
            while (tokens[index] !== "class" && tokens[index] !== "interface") {
                descriptorsBeforeName.push(tokens[index]);
                index++;
            }
            descriptorsBeforeName.push(tokens[index]);
            index++;
            descriptorsBeforeName.push(tokens[index]);
            index++;
            while (tokens[index] !== "{") {
                descriptorsAfterName.push(tokens[index]);
                index++;
            }
            var tokensInClass = GetTokensInScope(tokens, index);
            index += tokensInClass.length + 2;
            classes.push(CreateClassModelFromTokens(descriptorsBeforeName, descriptorsAfterName, tokensInClass));
        }
        else {
            index++;
        }
    }
    return classes;
}
exports.LocateClasses = LocateClasses;
/**
 * Looks through an array of tokens for attributes and methods, and returns a structure containing an array of Variable Models (attributes)
 * and an array of Method Models (methods) based on the attributes and methods found.
 *
 * @param {string[]} tokens - An array of tokens to look through
 *
 * @returns {AttributesAndMethods} - A data structure containing arrays of Variable and Method Models.
 */
function LocateMethodsAndAttributes(tokens) {
    var ret = {
        attributes: [],
        methods: []
    };
    var index = 0;
    while (index < tokens.length) {
        var descriptors = [];
        var parameters = [];
        // TODO: Filter out annotations
        while (descriptorTokens.includes(tokens[index])) {
            descriptors.push(tokens[index]);
            index++;
        }
        while (!symbols.includes(tokens[index])) {
            descriptors.push(tokens[index]);
            index++;
        }
        if (tokens[index] === "=") {
            index++;
            parameters = [];
            while (tokens[index] !== ";") {
                parameters.push(tokens[index]);
                index++;
            }
            ret.attributes.push(CreateVariableModelFromTokens(descriptors, parameters));
        }
        else if (tokens[index] === "(") {
            parameters = GetTokensInScope(tokens, index);
            index += parameters.length + 2;
            while (tokens[index] !== "{") {
                index++;
            }
            var content = GetTokensInScope(tokens, index);
            index += content.length + 2;
            ret.methods.push(CreateMethodModelFromTokens(descriptors, parameters));
        }
        else if (tokens[index] === ";") {
            ret.attributes.push(CreateVariableModelFromTokens(descriptors, []));
        }
        index++;
    }
    return ret;
}
exports.LocateMethodsAndAttributes = LocateMethodsAndAttributes;
/**
 * Looks through tokens that represent a variable definition and creates a Variabe Model from them.
 *
 * @param {string[]} descriptorTokens - An array of tokens that make up the definition of the variable
 * @param {string[]} valueTokens - An array of tokens that make up the value of the variable
 *
 * @returns {VariableModel} - The variable model created
 */
function CreateVariableModelFromTokens(descriptorTokens, valueTokens) {
    var model = { name: "", value: undefined, type: "", access: "private", static: false, final: false };
    for (var _i = 0, descriptorTokens_1 = descriptorTokens; _i < descriptorTokens_1.length; _i++) {
        var token = descriptorTokens_1[_i];
        switch (token) {
            case ("public" || "private" || "protected"):
                model.access = token;
                break;
            case ("static"):
                model.static = true;
                break;
            case ("final"):
                model.final = true;
                break;
        }
    }
    // TODO: Figure out if this breaks in any scenario
    model.type = descriptorTokens[descriptorTokens.length - 2];
    model.name = descriptorTokens[descriptorTokens.length - 1];
    // TODO: Parse value tokens
    return model;
}
exports.CreateVariableModelFromTokens = CreateVariableModelFromTokens;
/**
 * Looks through tokens that represent a method definition and creates a Method Model from them.
 *
 * @param {string[]} descriptorTokens - An array of tokens that make up the definition of the method
 * @param {string[]} parameterTokens - An array of tokens that make up the parameters of the method (between the parintheses)
 *
 * @returns {MethodModel} - The method model created
 */
function CreateMethodModelFromTokens(descriptorTokens, parameterTokens) {
    var model = { name: "", parameters: [], "return": "", access: "private", static: false, final: false };
    for (var _i = 0, descriptorTokens_2 = descriptorTokens; _i < descriptorTokens_2.length; _i++) {
        var token = descriptorTokens_2[_i];
        switch (token) {
            case ("public" || "private" || "protected"):
                model.access = token;
                break;
            case ("static"):
                model.static = true;
                break;
            case ("final"):
                model.final = true;
                break;
        }
    }
    // TODO: Figure out if this breaks in any scenario
    if (!descriptorTokens.includes(descriptorTokens[descriptorTokens.length - 2])) {
        model["return"] = descriptorTokens[descriptorTokens.length - 2];
    }
    model.name = descriptorTokens[descriptorTokens.length - 1];
    // TODO: Parse parameter tokens
    return model;
}
exports.CreateMethodModelFromTokens = CreateMethodModelFromTokens;
/**
 * Looks through tokens that represent a class definition and creates a Class Model from them.
 *
 * @param {string[]} descriptorTokensBeforeName - An array of tokens that appear before (or at) the class name
 * @param {string[]} descriptorTokensAfterName - An array of tokens that appear after the class name
 * @param {string[]} contentTokens - An array of tokens that hold the content of the class
 *
 * @returns {ClassModel} - The class model created
 */
function CreateClassModelFromTokens(descriptorTokensBeforeName, descriptorTokensAfterName, contentTokens) {
    var model = { name: "", attributes: [], methods: [], abstract: false, interface: false, access: "public", "extends": "", static: false, implements: [] };
    for (var _i = 0, descriptorTokensBeforeName_1 = descriptorTokensBeforeName; _i < descriptorTokensBeforeName_1.length; _i++) {
        var token = descriptorTokensBeforeName_1[_i];
        switch (token) {
            case ("public" || "private" || "protected"):
                model.access = token;
                break;
            case ("static"):
                model.static = true;
                break;
            case ("abstract"):
                model.abstract = true;
                break;
            case ("interface"):
                model.interface = true;
                break;
        }
    }
    // TODO: Figure out if this breaks in any scenario
    model.name = descriptorTokensBeforeName[descriptorTokensBeforeName.length - 1];
    var index = 0;
    while (index < descriptorTokensAfterName.length) {
        var token = descriptorTokensAfterName[index];
        if (token === "extends") {
            index++;
            model["extends"] = descriptorTokensAfterName[index];
        }
        else if (token === "implements") {
            index++;
            model.implements = [descriptorTokensAfterName[index]];
            index++;
            while (index < descriptorTokensAfterName.length && descriptorTokensAfterName[index] !== ",") {
                index++;
                model.implements.push(descriptorTokensAfterName[index]);
                index++;
            }
        }
        index++;
    }
    var attributesAndMethods = LocateMethodsAndAttributes(contentTokens);
    model.attributes = attributesAndMethods.attributes;
    model.methods = attributesAndMethods.methods;
    return model;
}
exports.CreateClassModelFromTokens = CreateClassModelFromTokens;
