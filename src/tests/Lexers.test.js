const { JavaTokenizer } = require('../logic/lexers.ts');

describe('JavaTokenizer', () => {
    it('should tokenize keywords', () => {
        const javaCode = `
        public class HelloWorld {
        public static void main(String[] args) {
    }
    }
    `;

        const tokenizer = new JavaTokenizer(javaCode);
        const tokens = [];
        let token = tokenizer.getNextToken();

        while (token !== null) {
            tokens.push({ type: token.type, value: token.value });
            token = tokenizer.getNextToken();
        }

        expect(tokens).toEqual([
            { type: 'KEYWORD', value: 'public' },
            { type: 'KEYWORD', value: 'class' },
            { type: 'IDENTIFIER', value: 'HelloWorld' },
            { type: 'CURLY_BRACE', value: '{' },
            { type: 'KEYWORD', value: 'public' },
            { type: 'KEYWORD', value: 'static' },
            { type: 'KEYWORD', value: 'void' },
            { type: 'IDENTIFIER', value: 'main' },
            { type: 'OTHER', value: '(' },
            { type: 'IDENTIFIER', value: 'String' },
            { type: 'OTHER', value: '[' },
            { type: 'OTHER', value: ']' },
            { type: 'IDENTIFIER', value: 'args' },
            { type: 'OTHER', value: ')' },
            { type: 'CURLY_BRACE', value: '{' },
            { type: 'CURLY_BRACE', value: '}' },
            { type: 'CURLY_BRACE', value: '}' },
        ]);
    });

    it('should tokenize strings', () => {
        const javaCode = `
        System.out.println("100 thousand");
        String name1 = "'Single quote inside!";
        String name2 = "+{start with operator}";
        String name3 = "   whitespace";
    `;

        const tokenizer = new JavaTokenizer(javaCode);
        const tokens = [];
        let token = tokenizer.getNextToken();

        while (token !== null) {
            tokens.push({ type: token.type, value: token.value });
            token = tokenizer.getNextToken();
        }

        expect(tokens).toEqual([
            { type: 'IDENTIFIER', value: 'System' },
            { type: 'OTHER', value: '.' },
            { type: 'IDENTIFIER', value: 'out' },
            { type: 'OTHER', value: '.' },
            { type: 'IDENTIFIER', value: 'println' },
            { type: 'OTHER', value: '(' },
            { type: 'QUOTES', value: '"' },
            { type: 'STRING', value: '100 thousand' },
            { type: 'ENDQUOTES', value: '"' },
            { type: 'OTHER', value: ')' },
            { type: 'OTHER', value: ';' },
            { type: 'IDENTIFIER', value: 'String' },
            { type: 'IDENTIFIER', value: 'name1' },
            { type: 'OPERATOR', value: '=' },
            { type: 'QUOTES', value: '"' },
            { type: 'STRING', value: "'Single quote inside!" },
            { type: 'ENDQUOTES', value: '"' },
            { type: 'OTHER', value: ';' },
            { type: 'IDENTIFIER', value: 'String' },
            { type: 'IDENTIFIER', value: 'name2' },
            { type: 'OPERATOR', value: '=' },
            { type: 'QUOTES', value: '"' },
            { type: 'STRING', value: '+{start with operator}' },
            { type: 'ENDQUOTES', value: '"' },
            { type: 'OTHER', value: ';' },
            { type: 'IDENTIFIER', value: 'String' },
            { type: 'IDENTIFIER', value: 'name3' },
            { type: 'OPERATOR', value: '=' },
            { type: 'QUOTES', value: '"' },
            { type: 'STRING', value: '   whitespace' },
            { type: 'ENDQUOTES', value: '"' },
            { type: 'OTHER', value: ';' },
        ]);
    });

    it('should tokenize numbers', () => {
        const javaCode = `
        int num1 = 12;
        double num2 = 9.1;
        int num3 = 09;
    `;

        const tokenizer = new JavaTokenizer(javaCode);
        const tokens = [];
        let token = tokenizer.getNextToken();

        while (token !== null) {
            tokens.push({ type: token.type, value: token.value });
            token = tokenizer.getNextToken();
        }

        expect(tokens).toEqual([
            { type: 'KEYWORD', value: 'int' },
            { type: 'IDENTIFIER', value: 'num1' },
            { type: 'OPERATOR', value: '=' },
            { type: 'NUMBER', value: '12' },
            { type: 'OTHER', value: ';' },
            { type: 'KEYWORD', value: 'double' },
            { type: 'IDENTIFIER', value: 'num2' },
            { type: 'OPERATOR', value: '=' },
            { type: 'NUMBER', value: '9.1' },
            { type: 'OTHER', value: ';' },
            { type: 'KEYWORD', value: 'int' },
            { type: 'IDENTIFIER', value: 'num3' },
            { type: 'OPERATOR', value: '=' },
            { type: 'NUMBER', value: '09' },
            { type: 'OTHER', value: ';' },
        ]);
    });
});
