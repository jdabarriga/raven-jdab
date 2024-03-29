import {JavaTokenizer} from "../logic/lexers";
import {LocateClasses} from "../logic/parser";

// Fill out this array for more tests. Each element should be a structure with each of the following key-value pairs:
// name: The name of the test
// code: A string with all of the Java code
// expects: An array of class models that you expect the code to generate using the parser and lexer
let tests = [

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {

    name: "Test empty class", 

    code: "class VerySimpleClass { }",

    expect:
      [
        {
          name: "VerySimpleClass",
          attributes: [],
          methods: [],
          interface: false,
          extends: "",
          implements: [],
          modifiers: [],
          generics: [],
          constructors: [],
          line: 1,
          filePath: ""
        }
      ]

  },

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {

    name: "Test class with just public static void main",

    code: 
      `
      class PublicStaticVoidMainStringArgs {
        public static void main(String[] args) {
          System.out.println("AAAAAAAAA");
        }
      }
      `,

    expect: 
      [
        {
          name: "PublicStaticVoidMainStringArgs",
          attributes: [],
          methods: [
            {
              name: "main",
              parameters: [
                {
                  name: "args",
                  value: "",
                  type: "String[]",
                  modifiers: [],
                  line: 3
                }
              ],
              return: "void",
              modifiers: [
                "public",
                "static"
              ],
              generics: [],
              line: 3
            }
          ],
          interface: false,
          extends: "",
          implements: [],
          modifiers: [],
          generics: [],
          constructors: [],
          line: 2,
          filePath: ""
        }
      ]

  },

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {

    name: "Test class with public static undefined int attribute",

    code: 
      `
      class AttributeClass {
        public static int MyAttribute;
      }
      `,

    expect: 
      [
        {
          name: "AttributeClass",
          attributes: [
            {
              name: "MyAttribute",
              value: "",
              type: "int",
              modifiers: [
                "public",
                "static"
              ],
              line: 3
            }
          ],
          methods: [],
          interface: false,
          extends: "",
          implements: [],
          modifiers: [],
          generics: [],
          constructors: [],
          line: 2,
          filePath: ""
        }
      ]

  },

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {

    name: "Test class with private final defined short attribute",

    code: 
      `
      class AttributeClass {
        private final short MyAttribute = 5;
      }
      `,

    expect: 
      [
        {
          name: "AttributeClass",
          attributes: [
            {
              name: "MyAttribute",
              value: "5",
              type: "short",
              modifiers: [
                "private",
                "final"
              ],
              line: 3
            }
          ],
          methods: [],
          interface: false,
          extends: "",
          implements: [],
          modifiers: [],
          generics: [],
          constructors: [],
          line: 2,
          filePath: ""
        }
      ]

  },

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {

    name: "Test public class with constructor and modifierless attribute",

    code: 
      `
      public class ConstructorClass {
        double x;
        ConstructorClass(double x) {
          this.x = x;
        }
      }
      `,

    expect: 
      [
        {
          name: "ConstructorClass",
          attributes: [
            {
              name: "x",
              value: "",
              type: "double",
              modifiers: [],
              line: 3
            }
          ],
          methods: [],
          interface: false,
          extends: "",
          implements: [],
          modifiers: [
            "public"
          ],
          generics: [],
          constructors: [
            {
              name: "ConstructorClass",
              parameters: [
                {
                  name: "x",
                  value: "",
                  type: "double",
                  modifiers: [],
                  line: 4
                }
              ],
              return: "",
              modifiers: [],
              generics: [],
              line: 4
            }
          ],
          line: 2,
          filePath: ""
        }
      ]

  },

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {

    name: "Test multiple attribute definitions",

    code: 
      `
      public class MultipleAttributeDefinitions {
        private static double x, y, z;
        public final int i = 2, j = 4, k = 0;
        short f, g, h;
      }
      `,

    expect: 
      [
        {
          name: "MultipleAttributeDefinitions",
          attributes: [
            {
              name: "x",
              value: "",
              type: "double",
              modifiers: [
                "private",
                "static"
              ],
              line: 3
            },
            {
              name: "y",
              value: "",
              type: "double",
              modifiers: [
                "private",
                "static"
              ],
              line: 3
            },
            {
              name: "z",
              value: "",
              type: "double",
              modifiers: [
                "private",
                "static"
              ],
              line: 3
            },
            {
              name: "i",
              value: "2",
              type: "int",
              modifiers: [
                "public",
                "final"
              ],
              line: 4
            },
            {
              name: "j",
              value: "4",
              type: "int",
              modifiers: [
                "public",
                "final"
              ],
              line: 4
            },
            {
              name: "k",
              value: "0",
              type: "int",
              modifiers: [
                "public",
                "final"
              ],
              line: 4
            },
            {
              name: "f",
              value: "",
              type: "short",
              modifiers: [],
              line: 5
            },
            {
              name: "g",
              value: "",
              type: "short",
              modifiers: [],
              line: 5
            },
            {
              name: "h",
              value: "",
              type: "short",
              modifiers: [],
              line: 5
            },
          ],
          methods: [],
          interface: false,
          extends: "",
          implements: [],
          modifiers: [
            "public"
          ],
          generics: [],
          constructors: [],
          line: 2,
          filePath: ""
        }
      ]

  },

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {

    name: "Test generics",

    code: 
      `
      class Generic<T> 
      { 
        static <T> void genericDisplay(T element)
        {
          System.out.println(element.getClass().getName()+ " = " + element);
        }
      }
      `,

    expect: 
      [
        {
          name: "Generic",
          attributes: [],
          methods: [
            {
              name: "genericDisplay",
              parameters: [
                {
                  name: "element",
                  value: "",
                  type: "T",
                  modifiers: [],
                  line: 4
                }
              ],
              return: "void",
              modifiers: [
                "static"
              ],
              generics: [],
              line: 4
            }
          ],
          interface: false,
          extends: "",
          implements: [],
          modifiers: [],
          generics: [
            "T"
          ],
          constructors: [],
          line: 2,
          filePath: ""
        }
      ]

  },

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {

    name: "Test new instance attribute",

    code: 
      `
      class Instance
      { 
        MyObject obj = new MyObject(x, y);
      }
      `,

    expect: 
      [
        {
          name: "Instance",
          attributes: [
            {
              name: "obj",
              value: "MyObject",
              type: "MyObject",
              modifiers: [],
              line: 4
            }
          ],
          methods: [],
          interface: false,
          extends: "",
          implements: [],
          modifiers: [],
          generics: [],
          constructors: [],
          line: 2,
          filePath: ""
        }
      ]

  }
];

tests.forEach(t => test(t.name, () => {
  const tokenizer = new JavaTokenizer(t.code);
  let tokens = [];
  let token = tokenizer.getNextToken();
  while (token !== null) {
      tokens.push(token);
      token = tokenizer.getNextToken();
  }
  let classes = LocateClasses(tokens);
  expect(classes).toStrictEqual(t.expect)
}));