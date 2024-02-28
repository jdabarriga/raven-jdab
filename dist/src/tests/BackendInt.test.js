// Import the JavaTokenizer class from the lexer.ts file
var JavaTokenizer = require('../logic/lexers').JavaTokenizer;
var javaCode = "\npublic class HelloWorld {\n  public static void main(String[] args) {\n    System.out.println(\"Hello, 5th World!\");\n    // I am a comment\n    int num = 50/2;\n  }\n  /*\n  I am multiple lines >2\n  but also a comment\n  */\n}\n";
// Define the expected tokens for the given Java code
var expectedTokens = [
    { type: 'OTHER', value: 'public' },
    { type: 'OTHER', value: 'class' },
    { type: 'IDENTIFIER', value: 'HelloWorld' },
    { type: 'Curly Brace', value: '{' },
    { type: 'OTHER', value: 'public' },
    { type: 'OTHER', value: 'static' },
    { type: 'OTHER', value: 'void' },
    { type: 'IDENTIFIER', value: 'main' },
    { type: 'OTHER', value: '(' },
    { type: 'IDENTIFIER', value: 'String' },
    { type: 'OTHER', value: '[' },
    { type: 'OTHER', value: ']' },
    { type: 'IDENTIFIER', value: 'args' },
    { type: 'OTHER', value: ')' },
    { type: 'Curly Brace', value: '{' },
    { type: 'IDENTIFIER', value: 'System' },
    { type: 'OTHER', value: '.' },
    { type: 'IDENTIFIER', value: 'out' },
    { type: 'OTHER', value: '.' },
    { type: 'IDENTIFIER', value: 'println' },
    { type: 'OTHER', value: '(' },
    { type: 'Quotes', value: '"' },
    { type: 'String', value: 'Hello, 5th World!' },
    { type: 'Quotes', value: '"' },
    { type: 'OTHER', value: ')' },
    { type: 'OTHER', value: ';' },
    { type: 'COMMENT', value: '// I am a comment' },
    { type: 'IDENTIFIER', value: 'int' },
    { type: 'IDENTIFIER', value: 'num' },
    { type: 'OPERATOR', value: '=' },
    { type: 'NUMBER', value: '50' },
    { type: 'OPERATOR', value: '/' },
    { type: 'NUMBER', value: '2' },
    { type: 'OTHER', value: ';' },
    { type: 'Curly Brace', value: '}' },
    { type: 'COMMENT', value: '/*\n  I am multiple lines >2\n  but also a comment\n*/' },
    { type: 'Curly Brace', value: '}' }
];
// Instantiate a JavaTokenizer object with the Java code
var tokenizer = new JavaTokenizer(javaCode);
// Iterate through the tokens returned by the getNextToken() method
var tokens = [];
var token = tokenizer.getNextToken();
while (token !== null) {
    // Push each token to the tokens array
    tokens.push({ type: token.type, value: token.value });
    // Get the next token
    token = tokenizer.getNextToken();
}
// Assert that the tokenizer produced the expected tokens
expect(tokens).toEqual(expectedTokens);
