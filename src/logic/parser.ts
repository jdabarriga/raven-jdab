import { VariableModel, MethodModel, ClassModel, Members } from '../structures/classModels';
import { Token } from './lexers';

const CLASS_MODIFIERS = ["public", "abstract", "final"];
const MEMBER_MODIFIERS = ["public", "private", "protected", "final", "abstract", "static", "transient", "synchronized", "volatile"];

function IsClassModifier(token) {
    return CLASS_MODIFIERS.includes(token.value);
}
function IsClassKeyword(token) {
    return token.value === "class" || token.value === "interface";
}
function IsMemberModifier(token) {
    return MEMBER_MODIFIERS.includes(token.value);
}
function SkipAnnotation(tokens, index) {
    if (index < tokens.length) index ++;
    if (tokens[index].value === "interface") {
        while (index < tokens.length && tokens[index].value !== "{") index ++;
        if (index >= tokens.length) {
            console.warn("A syntax error was found in the code. Check that your annotation definitions are correct");
            return [];
        }
        index += GetTokensInScope(tokens, index).length + 2;
    } else {
        if (index < tokens.length) index ++;
        if (tokens[index].value === "(") index += GetTokensInScope(tokens, index).length + 2;
        console.log(tokens[index]);
    }
    return index;
}

/**
 * Returns all of the tokens within a certian scope indicated by {}, [], (), "", '', or <>
 *
 * @param {Token[]} tokens - An array of tokens to look through
 * @param {number} startToken - The index of the token that indicates the beginning of the scope. The token at that
 * index must be {, [, (, ", ', or <
 * 
 * @returns {Token[]} - An array of tokens within the scope
 */
export function GetTokensInScope(tokens: Token[], startToken: number): Token[] {
    let index: number = startToken + 1;
    let firstToken: string = tokens[startToken].value;
    let lastToken: string = "";
    // Figure out the closing bracket token that corresponds to the opening bracket token
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
    // Reads through each token after the starting index, and counts the nummber of times it runs into the opening bracket.
    // Each time it runs into a closing bracket, decrement this count by 1 unless the count is 0, in which case we know that 
    // is the closing bracket to the opening bracket we started from.
    let firstTokenCount = 0;
    while (index < tokens.length) {
        if (tokens[index].value === firstToken) {
            firstTokenCount ++;
        } else if (tokens[index].value === lastToken) {
            if (firstTokenCount > 0) {
                firstTokenCount --;
            } else {
                return tokens.slice(startToken + 1, index);
            }
        }
        index ++;
    }
    console.warn("Couldn't find the corresponding closing token in the tokens provided");
    return [];
}

/**
 * Searches through an array of tokens for classes, and returns them as an array of Class Models.
 *
 * @param {Token[]} tokens - An array of tokens to look through
 * 
 * @returns {ClassModel[]} - An array of Class Models
 */
export function LocateClasses(tokens: Token[]): ClassModel[] {
    // Read through each token until you get to a keyword
    let classes: ClassModel[] = [];
    let index = 0;
    while (index < tokens.length) {
        // Skip over any annotations
        if (tokens[index].value === "@") {
            index = SkipAnnotation(tokens, index);
        }
        // If we run into a class modifier, or the class or interface keywords, this is a class definition, and we should start gathering the symbols
        else if (IsClassModifier(tokens[index]) || IsClassKeyword(tokens[index])) {
            let model: ClassModel = {modifiers: [], generics: [], interface: false, name: "", extends: "", implements: [], attributes: [], methods: [], filePath: "", line: tokens[index].line};
            // Gather modifiers
            while (index < tokens.length && IsClassModifier(tokens[index])) {
                model.modifiers.push(tokens[index].value);
                index ++;
            }
            // If the syntax is correct, the next two tokens should be the class keyword and class name respectively
            if (!(index >= tokens.length - 2) && IsClassKeyword(tokens[index])) {
                model.interface = tokens[index].value === "interface";
                index ++;
                model.name = tokens[index].value;
                index ++;
            } else {
                console.warn("A syntax error was found in the code. Check that your class definitions are correct");
                return [];
            }
            // For generic classes
            if (index < tokens.length && tokens[index].value === "<") {
                let genericTokens = GetTokensInScope(tokens, index);
                model.generics.push(...genericTokens.map((t) => t.value));
                index += genericTokens.length + 2;
            }
            // Get extended class
            if (index < tokens.length - 1 && tokens[index].value === "extends") {
                index ++;
                model.extends = tokens[index].value;
                index ++;
                // Skip generic definition for extended class
                if (index < tokens.length && tokens[index].value === "<") {
                    let genericTokens = GetTokensInScope(tokens, index);
                    index += genericTokens.length + 2;
                }
            }
            // Get implementations
            if (index < tokens.length - 1 && tokens[index].value === "implements") {
                while (index < tokens.length && tokens[index].value !== ",") {
                    index ++;
                    model.implements.push(tokens[index].value);
                    // Skip generic definitions for implementations
                    if (index < tokens.length && tokens[index].value === "<") {
                        let genericTokens = GetTokensInScope(tokens, index);
                        index += genericTokens.length + 2;
                    }
                    index ++;
                }
            }
            // If there are no syntax errors, there should be an opening curly brace here
            if (tokens[index].value !== "{") {
                console.warn ("A syntax error was found in the code. Check that your class definitions are correct");
                return [];
            }
            // Gather all tokens within the curly braces
            let tokensInClass = GetTokensInScope(tokens, index);
            // Gather all of the members
            let members: Members = LocateMembers(tokensInClass);
            // Insert members into the class model
            model.attributes = [...members.attributes];
            model.methods = [...members.methods];
            // Create the class model from the tokens gathered
            classes.push(model);
            // Update the index to start after the class content to continue parsing through the rest of the code
            index += tokensInClass.length + 2;
        } else {
            index ++;
        }
    }
    return classes;
}

/**
 * Looks through an array of tokens for attributes and methods, and returns a structure containing an array of Variable Models (attributes)
 * and an array of Method Models (methods) based on the attributes and methods found.
 * 
 * @param {Token[]} tokens - An array of tokens to look through
 * 
 * @returns {Members} - A data structure containing arrays of Variable and Method Models.
 */
export function LocateMembers(tokens: Token[]): Members {
    let ret: Members = {
        attributes: [],
        methods: []
    }
    let index = 0;
    while (index < tokens.length) {
        let modifierTokens: Token[] = [];
        let nameToken: Token;
        let typeTokens: Token[] = [];
        let valueTokens: Token[] = [];
        let methodGenericTokens: Token[] = [];
        if (tokens[index].value === "@") {
            index = SkipAnnotation(tokens, index);
        } else if (IsMemberModifier(tokens[index]) || tokens[index].type === "KEYWORD") {
            let line = tokens[index].line;
            while (index < tokens.length && IsMemberModifier(tokens[index])) {
                modifierTokens.push(tokens[index]);
                index ++;
            }
            // For generic method definitions
            if (index < tokens.length && tokens[index].value === "<") {
                methodGenericTokens.push(tokens[index]);
                let genericTokens = GetTokensInScope(tokens, index);
                methodGenericTokens.push(...genericTokens);
                index += genericTokens.length + 1;
                methodGenericTokens.push(tokens[index]);
                index ++;
            }
            // If the syntax is correct, the next token should indicate the type
            if (index < tokens.length) {
                typeTokens.push(tokens[index]);
                index ++;
            }
            // For generic types
            if (index < tokens.length && tokens[index].value === "<") {
                typeTokens.push(tokens[index]);
                let genericTokens = GetTokensInScope(tokens, index);
                typeTokens.push(...genericTokens);
                index += genericTokens.length + 1;
                typeTokens.push(tokens[index]);
                index ++;
            }
            // If the syntax is correct, the next token should be the name of the member
            if (index < tokens.length) {
                nameToken = tokens[index];
                index ++;
            }
            if (index >= tokens.length) {
                console.warn("A syntax error was found in the code. Check that your member definitions are correct");
                return {attributes: [], methods: []};
            }
            // Equal sign here means that this is a defined attribute
            if (tokens[index].value === "=") {
                index ++;
                // TODO: ACCOUNT FOR DEFINING MULTIPLE ATTRIBUTES AT ONCE
                while (index < tokens.length && tokens[index].value !== ";") {
                    valueTokens.push(tokens[index]);
                    index ++;
                }
            }
            // Opening parinthese here means that this is a method definition
            else if (tokens[index].value === "(") {
                // TODO: GET METHOD PARAMETERS (RECURSION?)
                valueTokens = GetTokensInScope(tokens, index);
                index += valueTokens.length + 2;
                let content = GetTokensInScope(tokens, index);
                index += content.length + 2;
                ret.methods.push({
                    modifiers: [...modifierTokens.map((t) => t.value)], 
                    return: typeTokens.map((t) => t.value).toString().replaceAll(",", ""), 
                    name: nameToken.value, 
                    parameters: [],
                    generics: [],
                    line: line
                });
            }
            // Semicolon here means that this is the end of an attribute definition
            if (index < tokens.length && tokens[index].value === ";") {
                // Add a variable model to the return structure's attributes
                ret.attributes.push({
                    modifiers: [...modifierTokens.map((t) => t.value)], 
                    type: typeTokens.map((t) => t.value).toString().replaceAll(",", ""), 
                    name: nameToken.value, 
                    value: valueTokens.map((t) => t.value).toString().replaceAll(",", ""),
                    line: line
                });
            }
        } else {
            index ++;
        }
    }
    return ret;
}