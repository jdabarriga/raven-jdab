// @ts-nocheck

import { filesystem } from "@neutralinojs/lib"

import { LocateClasses } from './parser';
import { JavaTokenizer } from './lexers';
import { FileModel } from '../structures/filesystemModels'

/**
 * Reads in the contents of each java file within the specified directory and returns an array of class models
 * @param {string} projectDir - The directory to look through
 * 
 * @returns {Promise<ClassModel[]>} - The classes found in the directory as a list of ClassModels
 */
export async function RetrieveJavaClassModels(projectDir: string): Promise<ClassModel[]> {
  let files = await GetRecursiveContentsOfDirectoryByExtension(projectDir, "java");
  let classes: FileModel[] = [];
  for (const file of files) {
    const tokenizer = new JavaTokenizer(file.content);
    let tokens = [];
    let token = tokenizer.getNextToken();
    while (token !== null) {
        tokens.push(token);
        token = tokenizer.getNextToken();
    }
    let fileClasses = LocateClasses(tokens);
    fileClasses.forEach(cl => {
      cl.filePath = file.path;
    });
    classes.push(...fileClasses);
  }
  return classes;
}

/**
 * Returns all files within a directory that have the specified extension as a string
 * @param {string} dir - The directory to look through
 * @param {string} extension - The extension to look for
 * 
 * @returns {Promise<FileModel[]>} - The files in the directory
 */
export async function GetRecursiveContentsOfDirectoryByExtension(dir: string, extension: string): Promise<FileModel[]> {
  let items: string[][] = await GetItemsInDirectoryRecursive(dir, extension);
  let fileArr = await ReadFiles(items[0]);
  return fileArr;
}

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
export async function GetItemsInDirectory(dir: string, extension: string = ""): Promise<string[][]> {
  let readDir = await filesystem.readDirectory(dir);
  let fileArr: string[] = [];
  let dirArr: string[] = [];
  for (const item of readDir)
  {
    if (item.type === "FILE" && (extension === "" || GetExtension(item.entry) === extension)) {
      fileArr.push(dir + "/" + item.entry);
    }
    else if (item.type === "DIRECTORY" && item.entry !== "." && item.entry !== "..") {
      dirArr.push(dir + "/" + item.entry);
    }
  }
  return [fileArr, dirArr];
}

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
async function GetItemsInDirectoryRecursive (dir: string, extension: string = ""): Promise<string[][]> {
  let itemsInSubdir: string[][] = [[],[]];
  let itemsInDir: string[][] = await GetItemsInDirectory(dir, extension);

  if (itemsInDir[1].length === 0) {
    for (const i of itemsInDir[0]) {
      itemsInSubdir[0].push(i);
    }
    return itemsInSubdir;
  }

  for (const item of itemsInDir[1]) {
    let subdir: string[][] = await GetItemsInDirectoryRecursive(item, extension);
    for (const i of subdir[0]) {
      itemsInSubdir[0].push(i);
    }
    for (const i of subdir[1]) {
      itemsInSubdir[1].push(i);
    }
  }

  for (const i of itemsInSubdir[0]) {
    itemsInDir[0].push(i);
  }
  for (const i of itemsInSubdir[1]) {
    itemsInDir[1].push(i);
  }

  return itemsInDir;
}

/**
 * Takes in a list of strings of file paths and returns the files as FileModels
 *
 * @param {string[]} files - An array of the file paths
 * 
 * @returns {Promise<FileModel>} - The file
 */
export async function ReadFiles(files: string[]): Promise<FileModel> {
  let ret: FileModel = [];
  for (const file of files) {
    ret.push({
        path: file, 
        content: await filesystem.readFile(file, {pos:0, size: 100000})
      });
  }
  return ret;
}

/**
 * Takes in a file name as a string and returns its extension
 * 
 * @param {string} filename - The file name or path including the extension
 * @returns {string | undefined} - The extension (without the .) if the filename had one, undefined if not
 */
export function GetExtension(filename: string): string | undefined {
  return filename.split('.').pop();
}