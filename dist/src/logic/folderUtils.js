"use strict";
// @ts-nocheck
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.GetExtension = exports.ReadFilesToString = exports.GetItemsInDirectory = exports.GetRecursiveContentsOfDirectoryByExtension = exports.RetrieveJavaClassModelBySelectingProjectDirectory = void 0;
var lib_1 = require("@neutralinojs/lib");
var parser_1 = require("./parser");
var lexers_1 = require("./lexers");
/**
 * Opens dialog for the user to select a directory for a java project, and then reads in the contents
 * of each java file within
 */
function RetrieveJavaClassModelBySelectingProjectDirectory() {
    return __awaiter(this, void 0, void 0, function () {
        var projectDir, code, tokenizer, tokens, token, classes;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, lib_1.os.showFolderDialog('Open a project Directory', {})];
                case 1:
                    projectDir = _a.sent();
                    return [4 /*yield*/, GetRecursiveContentsOfDirectoryByExtension(projectDir, "java")];
                case 2:
                    code = _a.sent();
                    tokenizer = new lexers_1.JavaTokenizer(code);
                    tokens = [];
                    token = tokenizer.getNextToken();
                    while (token !== null) {
                        tokens.push(token.value);
                        token = tokenizer.getNextToken();
                    }
                    classes = (0, parser_1.LocateClasses)(tokens);
                    return [2 /*return*/, classes];
            }
        });
    });
}
exports.RetrieveJavaClassModelBySelectingProjectDirectory = RetrieveJavaClassModelBySelectingProjectDirectory;
/**
 * Returns the contents of all files within a directory that have the specified extension as a string
 * @param {string} dir - The directory to look through
 * @param {string} extension - The extension to look for
 *
 * @returns {Promise<string>} - A string of the contents of each file concatenated together
 */
function GetRecursiveContentsOfDirectoryByExtension(dir, extension) {
    return __awaiter(this, void 0, void 0, function () {
        var items, fileStr;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, GetItemsInDirectoryRecursive(dir, extension)];
                case 1:
                    items = _a.sent();
                    return [4 /*yield*/, ReadFilesToString(items[0])];
                case 2:
                    fileStr = _a.sent();
                    return [2 /*return*/, fileStr];
            }
        });
    });
}
exports.GetRecursiveContentsOfDirectoryByExtension = GetRecursiveContentsOfDirectoryByExtension;
/**
 * Returns a 2 element array. The first element is an array of paths (as strings) to each file in a directory,
 * and the second is an array of paths (also as strings) to each sub-directory in the directory
 *
 * @param {string} dir - The directory to look through
 * @param {string} extension - (optional) Retrieve only files with the specified extension
 *
 * @returns {Promise<string[][]>} - 2 element array, with the first element being an array of file paths and
 * the second being an array of directory paths
 */
function GetItemsInDirectory(dir, extension) {
    if (extension === void 0) { extension = ""; }
    return __awaiter(this, void 0, void 0, function () {
        var readDir, fileArr, dirArr, _i, readDir_1, item;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, lib_1.filesystem.readDirectory(dir)];
                case 1:
                    readDir = _a.sent();
                    fileArr = [];
                    dirArr = [];
                    for (_i = 0, readDir_1 = readDir; _i < readDir_1.length; _i++) {
                        item = readDir_1[_i];
                        if (item.type === "FILE" && (extension === "" || GetExtension(item.entry) === extension)) {
                            fileArr.push(dir + "/" + item.entry);
                        }
                        else if (item.type === "DIRECTORY" && item.entry !== "." && item.entry !== "..") {
                            dirArr.push(dir + "/" + item.entry);
                        }
                    }
                    return [2 /*return*/, [fileArr, dirArr]];
            }
        });
    });
}
exports.GetItemsInDirectory = GetItemsInDirectory;
/**
 * Returns a 2D array all items in this directory and in all subdirectories within it recursively. Index
 * 0 contains an array of file paths found while index 1 contains an array of directory paths found. I
 * hate recursion.
 *
 * @param {string} dir - The directory to look through
 * @param {string} extension - (optional) Only search for files of this extension
 *
 * @returns {Promise<string[][]>} - All items found
 */
function GetItemsInDirectoryRecursive(dir, extension) {
    if (extension === void 0) { extension = ""; }
    return __awaiter(this, void 0, void 0, function () {
        var itemsInSubdir, itemsInDir, _i, _a, i, _b, _c, item, subdir, _d, _e, i, _f, _g, i, _h, _j, i, _k, _l, i;
        return __generator(this, function (_m) {
            switch (_m.label) {
                case 0:
                    itemsInSubdir = [[], []];
                    return [4 /*yield*/, GetItemsInDirectory(dir, extension)];
                case 1:
                    itemsInDir = _m.sent();
                    if (itemsInDir[1].length === 0) {
                        for (_i = 0, _a = itemsInDir[0]; _i < _a.length; _i++) {
                            i = _a[_i];
                            itemsInSubdir[0].push(i);
                        }
                        return [2 /*return*/, itemsInSubdir];
                    }
                    _b = 0, _c = itemsInDir[1];
                    _m.label = 2;
                case 2:
                    if (!(_b < _c.length)) return [3 /*break*/, 5];
                    item = _c[_b];
                    return [4 /*yield*/, GetItemsInDirectoryRecursive(item, extension)];
                case 3:
                    subdir = _m.sent();
                    for (_d = 0, _e = subdir[0]; _d < _e.length; _d++) {
                        i = _e[_d];
                        itemsInSubdir[0].push(i);
                    }
                    for (_f = 0, _g = subdir[1]; _f < _g.length; _f++) {
                        i = _g[_f];
                        itemsInSubdir[1].push(i);
                    }
                    _m.label = 4;
                case 4:
                    _b++;
                    return [3 /*break*/, 2];
                case 5:
                    for (_h = 0, _j = itemsInSubdir[0]; _h < _j.length; _h++) {
                        i = _j[_h];
                        itemsInDir[0].push(i);
                    }
                    for (_k = 0, _l = itemsInSubdir[1]; _k < _l.length; _k++) {
                        i = _l[_k];
                        itemsInDir[1].push(i);
                    }
                    return [2 /*return*/, itemsInDir];
            }
        });
    });
}
/**
 * Takes in a list of strings of file paths and returns the contents of all files as a string
 *
 * @param {string[]} files - An array of the file paths
 *
 * @returns {Promise<string>} - The content of the file as a string
 */
function ReadFilesToString(files) {
    return __awaiter(this, void 0, void 0, function () {
        var fileStr, _i, files_1, file, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    fileStr = "";
                    _i = 0, files_1 = files;
                    _b.label = 1;
                case 1:
                    if (!(_i < files_1.length)) return [3 /*break*/, 4];
                    file = files_1[_i];
                    _a = fileStr;
                    return [4 /*yield*/, lib_1.filesystem.readFile(file, { pos: 0, size: 100000 })];
                case 2:
                    fileStr = _a + ((_b.sent()) + "\n");
                    _b.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/, fileStr];
            }
        });
    });
}
exports.ReadFilesToString = ReadFilesToString;
/**
 * Takes in a file name as a string and returns its extension
 *
 * @param {string} filename - The file name or path including the extension
 * @returns {string | undefined} - The extension (without the .) if the filename had one, undefined if not
 */
function GetExtension(filename) {
    return filename.split('.').pop();
}
exports.GetExtension = GetExtension;
