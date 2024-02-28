// Import the JavaTokenizer class from the lexers.ts file
import { JavaTokenizer } from '../logic/lexers';

const javaCode = `
public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello, 5th World!");
    // I am a comment
    int num = 50/2;
  }
  /*I am multiple lines
  but also a comment*/
}`;

test('JavaTokenizer should tokenize Java code correctly', () => {
// Instantiate a JavaTokenizer object with the Java code
  const tokenizer = new JavaTokenizer(javaCode);

  // Iterate through the tokens returned by the getNextToken() method
  let tokens = [];
  let token = tokenizer.getNextToken();
  while (token !== null) {
    // Push each token to the tokens array
    tokens.push({ type: token.type, value: token.value });
    // Get the next token
    token = tokenizer.getNextToken();
  }
  const expectedTokens = [
    { type: 'IDENTIFIER', value: 'public' },
    { type: 'IDENTIFIER', value: 'class' },
    { type: 'IDENTIFIER', value: 'HelloWorld' },
    { type: 'Curly Brace', value: '{' },
    { type: 'IDENTIFIER', value: 'public' },
    { type: 'IDENTIFIER', value: 'static' },
    { type: 'IDENTIFIER', value: 'void' },
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
    { type: 'COMMENT', value: 'I am multiple lines\n  but also a comment' },
    { type: 'Curly Brace', value: '}' }
  ];

// tokenizer produced the expected tokens
  expect(tokens).toEqual(expectedTokens);
});

/*test('JavaTokenizer should tokenize method invocations with arguments correctly', () => {
  const javaCode = `
      public class TestClass {
          public static void main(String[] args) {
              int result = add(5, 3);
          }

          public static int add(int a, int b) {
              return a + b;
          }
      }
  `;

  const tokenizer = new JavaTokenizer(javaCode);

  const expectedTokens = [
      { type: 'IDENTIFIER', value: 'public' },
      { type: 'IDENTIFIER', value: 'class' },
      { type: 'IDENTIFIER', value: 'TestClass' },
      { type: 'IDENTIFIER', value: 'int' },
      { type: 'IDENTIFIER', value: 'result' },
      { type: 'OPERATOR', value: '=' },
      { type: 'IDENTIFIER', value: 'add' },
      { type: 'OTHER', value: '(' },
      { type: 'NUMBER', value: '5' },
      { type: 'OTHER', value: ',' },
      { type: 'NUMBER', value: '3' },
      { type: 'OTHER', value: ')' },
      { type: 'OTHER', value: ';' }
  ];

  let tokens = [];
  let token = tokenizer.getNextToken();
  while (token !== null) {
      tokens.push({ type: token.type, value: token.value });
      token = tokenizer.getNextToken();
  }

  expect(tokens).toEqual(expectedTokens);
});*/
