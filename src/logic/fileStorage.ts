/**
 * Simple in-memory file storage for web mode
 * Stores file contents so they can be accessed by the Code Editor
 */

interface StoredFile {
  path: string;
  content: string;
}

class FileStorage {
  private files: Map<string, string> = new Map();

  /**
   * Store a file's content
   */
  storeFile(path: string, content: string): void {
    this.files.set(path, content);
  }

  /**
   * Retrieve a file's content
   */
  getFile(path: string): string | null {
    return this.files.get(path) || null;
  }

  /**
   * Check if a file exists
   */
  hasFile(path: string): boolean {
    return this.files.has(path);
  }

  /**
   * Clear all stored files
   */
  clear(): void {
    this.files.clear();
  }

  /**
   * Get all stored file paths
   */
  getAllPaths(): string[] {
    return Array.from(this.files.keys());
  }
}

// Export a singleton instance
export const fileStorage = new FileStorage();
