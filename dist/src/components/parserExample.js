var parse = require("java-parser").parse;
var javaText = "\npublic class HelloWorldExample{\n  public static void main(String args[]){\n    System.out.println(\"Hello World !\");\n  }\n}\n";
var cst = parse(javaText);
console.log(cst);
