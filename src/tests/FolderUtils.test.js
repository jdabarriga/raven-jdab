import { GetExtension } from "../logic/folderUtils";

describe('FolderUtils - GetExtension', () => {
  test('extracts extension from filename with single extension', () => {
    const filename = "mycoolfile.exe";
    const filenameExtension = GetExtension(filename);
    expect(filenameExtension).toBe("exe");
  });

  test('extracts extension from .java file', () => {
    const filename = "TestClass.java";
    const filenameExtension = GetExtension(filename);
    expect(filenameExtension).toBe("java");
  });

  test('extracts extension from file with path', () => {
    const filename = "/path/to/file.txt";
    const filenameExtension = GetExtension(filename);
    expect(filenameExtension).toBe("txt");
  });

  test('handles file with multiple dots', () => {
    const filename = "my.cool.file.js";
    const filenameExtension = GetExtension(filename);
    expect(filenameExtension).toBe("js");
  });

  test('handles file with no extension', () => {
    const filename = "README";
    const filenameExtension = GetExtension(filename);
    expect(filenameExtension).toBe("");
  });

  test('handles empty string', () => {
    const filename = "";
    const filenameExtension = GetExtension(filename);
    expect(filenameExtension).toBe("");
  });

  test('handles file starting with dot', () => {
    const filename = ".gitignore";
    const filenameExtension = GetExtension(filename);
    expect(filenameExtension).toBe("gitignore");
  });
});
