"use strict";
exports.__esModule = true;
exports.JavaTokenizer = void 0;
var Token = /** @class */ (function () {
    function Token(type, value) {
        this.type = type;
        this.value = value;
    }
    return Token;
}());
var JavaTokenizer = /** @class */ (function () {
    function JavaTokenizer(code) {
        this.index = 0;
        this.code = code;
    }
    JavaTokenizer.prototype.isWhitespace = function (char) {
        return /\s/.test(char);
    };
    JavaTokenizer.prototype.isDigit = function (char) {
        return /\d/.test(char);
    };
    JavaTokenizer.prototype.isLetter = function (char) {
        return /[a-zA-Z]/.test(char);
    };
    JavaTokenizer.prototype.isIdentifierStart = function (char) {
        return this.isLetter(char) || char === '_';
    };
    JavaTokenizer.prototype.isOperator = function (char) {
        return /[+\-*/=<>!&|]/.test(char);
    };
    JavaTokenizer.prototype.isQuote = function (char) {
        return char === '"' || char === "'";
    };
    JavaTokenizer.prototype.isCurlyBrace = function (char) {
        return /[{}]/.test(char);
    };
    JavaTokenizer.prototype.isCommentStart = function (char) {
        return char === '/' && this.code[this.index + 1] === '/';
    };
    JavaTokenizer.prototype.isMultiLineCommentStart = function (char) {
        return char === '/' && this.code[this.index + 1] === '*';
    };
    JavaTokenizer.prototype.readWhile = function (predicate) {
        var result = '';
        while (this.code[this.index] !== undefined && predicate(this.code[this.index])) {
            result += this.code[this.index];
            this.index++;
        }
        return result;
    };
    JavaTokenizer.prototype.readIdentifier = function () {
        var _this = this;
        if ((this.code[this.index - 1] == '"') || (this.code[this.index - 1] == "'")) {
            var quote_1 = this.code[this.index - 1];
            var value_1 = this.readWhile(function (char) { return char !== quote_1; });
            return new Token('String', value_1);
        }
        var value = this.readWhile(function (char) { return _this.isIdentifierStart(char) || _this.isDigit(char); });
        return new Token('IDENTIFIER', value);
    };
    JavaTokenizer.prototype.readNumber = function () {
        var _this = this;
        var value = this.readWhile(function (char) { return _this.isDigit(char); });
        return new Token('NUMBER', value);
    };
    JavaTokenizer.prototype.readQuote = function () {
        var _this = this;
        var value = this.readWhile(function (char) { return _this.isQuote(char); });
        return new Token('Quotes', value);
    };
    JavaTokenizer.prototype.readOperator = function () {
        var _this = this;
        var value = this.readWhile(function (char) { return _this.isOperator(char); });
        return new Token('OPERATOR', value);
    };
    JavaTokenizer.prototype.readCurlyBrace = function () {
        var _this = this;
        var value = this.readWhile(function (char) { return _this.isCurlyBrace(char); });
        return new Token('Curly Brace', value);
    };
    JavaTokenizer.prototype.readSingleLineComment = function () {
        var value = this.readWhile(function (char) { return char !== '\n' && char !== '\r'; });
        return new Token('COMMENT', value);
    };
    JavaTokenizer.prototype.readMultiLineComment = function () {
        var value = '';
        while (this.code[this.index] !== undefined) {
            var char = this.getNextChar();
            if (char === '*' && this.code[this.index] === '/') {
                this.index++;
                break;
            }
            value += char;
        }
        return new Token('COMMENT', value);
    };
    JavaTokenizer.prototype.readOther = function () {
        var value = this.code[this.index];
        this.index++;
        return new Token('OTHER', value);
    };
    JavaTokenizer.prototype.skipWhitespace = function () {
        var _this = this;
        this.readWhile(function (char) { return _this.isWhitespace(char); });
    };
    JavaTokenizer.prototype.getNextChar = function () {
        return this.code[this.index++];
    };
    JavaTokenizer.prototype.getNextToken = function () {
        this.skipWhitespace();
        if (this.code[this.index] === undefined) {
            return null; // End of input
        }
        var char = this.code[this.index];
        if (this.isIdentifierStart(char)) {
            return this.readIdentifier();
        }
        if (this.isDigit(char)) {
            return this.readNumber();
        }
        if (this.isQuote(char)) {
            return this.readQuote();
        }
        if (this.isCurlyBrace(char)) {
            return this.readCurlyBrace();
        }
        if (this.isCommentStart(char)) {
            return this.readSingleLineComment();
        }
        if (this.isMultiLineCommentStart(char)) {
            this.index += 2; // Skip '/*'
            return this.readMultiLineComment();
        }
        //moved so comments come first
        if (this.isOperator(char)) {
            return this.readOperator();
        }
        // If none of the above, treat it as a single character token
        return this.readOther();
    };
    return JavaTokenizer;
}());
exports.JavaTokenizer = JavaTokenizer;
//------ Test example java code
var javaCode = "\npublic class HelloWorld {\n  public static void main(String[] args) {\n    System.out.println(\"Hello, 5th World!\");\n    // I am a comment\n    int num = 50/2;\n  }\n  /*\n  I am multiple lines >2\n  but also a comment\n  */\n}\n";
/*
const tokenizer = new JavaTokenizer(javaCode);
let token = tokenizer.getNextToken();
while (token !== null) {
    console.log(token);
    token = tokenizer.getNextToken();
}
*/ 
