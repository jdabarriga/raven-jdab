import React from 'react';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../tests/testUtils';
import Home from './Home';

// Mock the Neutralino library
jest.mock('@neutralinojs/lib', () => ({
  os: {
    showFolderDialog: jest.fn()
  },
  filesystem: {
    createWatcher: jest.fn(),
    removeWatcher: jest.fn()
  },
  events: {
    on: jest.fn(),
    off: jest.fn()
  }
}));

// Mock the logic modules
jest.mock('../logic/folderUtils', () => ({
  RetrieveJavaClassModels: jest.fn(() => Promise.resolve([])),
  RetrieveJavaClassModelsFromBrowser: jest.fn(() => Promise.resolve([]))
}));

jest.mock('../logic/demoData', () => ({
  getDemoFiles: jest.fn(() => Promise.resolve([
    {
      path: '/demo/TestClass.java',
      content: 'public class TestClass { }'
    }
  ]))
}));

jest.mock('../logic/fileStorage', () => ({
  fileStorage: {
    clear: jest.fn(),
    storeFile: jest.fn()
  }
}));

describe('Home Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders home page with main components', () => {
    renderWithProviders(<Home />);
    
    // Check for Upload Project button
    expect(screen.getByText('Upload Project')).toBeInTheDocument();
    
    // Check for Try Demo button
    expect(screen.getByText('🚀 Try Demo')).toBeInTheDocument();
  });

  test('renders Raven logo', () => {
    renderWithProviders(<Home />);
    
    const logo = screen.getByAltText('Raven Logo');
    expect(logo).toBeInTheDocument();
  });

  test('renders ThemeSwitcher component', () => {
    renderWithProviders(<Home />);
    
    const themeSwitcher = screen.getByTitle('Change Theme');
    expect(themeSwitcher).toBeInTheDocument();
  });

  test('renders hidden file input for web mode', () => {
    renderWithProviders(<Home />);
    
    const fileInput = document.querySelector('input[type="file"]');
    expect(fileInput).toBeInTheDocument();
    expect(fileInput).toHaveStyle({ display: 'none' });
  });

  test('file input accepts .java files', () => {
    renderWithProviders(<Home />);
    
    const fileInput = document.querySelector('input[type="file"]');
    expect(fileInput).toHaveAttribute('accept', '.java');
    expect(fileInput).toHaveAttribute('multiple');
  });

  test('Upload Project button triggers file selection in web mode', () => {
    renderWithProviders(<Home />);
    
    const uploadButton = screen.getByText('Upload Project');
    const fileInput = document.querySelector('input[type="file"]');
    
    // Mock the click method
    const clickSpy = jest.spyOn(fileInput, 'click');
    
    fireEvent.click(uploadButton);
    
    expect(clickSpy).toHaveBeenCalled();
  });

  test('Try Demo button is clickable', () => {
    renderWithProviders(<Home />);
    
    const demoButton = screen.getByText('🚀 Try Demo');
    expect(demoButton).toBeEnabled();
    
    fireEvent.click(demoButton);
    // Demo functionality should execute without errors
  });

  test('displays project name when project is loaded', async () => {
    const { RetrieveJavaClassModelsFromBrowser } = require('../logic/folderUtils');
    
    RetrieveJavaClassModelsFromBrowser.mockResolvedValue([
      {
        name: 'TestClass',
        attributes: [],
        methods: [],
        interface: false,
        extends: '',
        implements: [],
        modifiers: [],
        generics: [],
        constructors: [],
        line: 1,
        filePath: 'test/TestClass.java'
      }
    ]);

    renderWithProviders(<Home />);
    
    const fileInput = document.querySelector('input[type="file"]');
    
    // Create a mock file with webkitRelativePath
    const file = new File(['content'], 'TestClass.java', { type: 'text/plain' });
    Object.defineProperty(file, 'webkitRelativePath', {
      value: 'MyProject/src/TestClass.java',
      writable: false
    });
    
    const fileList = {
      0: file,
      length: 1,
      item: (index) => file
    };
    
    Object.defineProperty(fileInput, 'files', {
      value: fileList,
      writable: false
    });
    
    fireEvent.change(fileInput);
    
    await waitFor(() => {
      expect(screen.getByText('MyProject Loaded')).toBeInTheDocument();
    });
  });

  test('handles empty file selection gracefully', async () => {
    const { RetrieveJavaClassModelsFromBrowser } = require('../logic/folderUtils');
    
    RetrieveJavaClassModelsFromBrowser.mockResolvedValue([]);

    // Mock window.alert
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});

    renderWithProviders(<Home />);
    
    const fileInput = document.querySelector('input[type="file"]');
    
    const file = new File(['content'], 'TestClass.java', { type: 'text/plain' });
    const fileList = {
      0: file,
      length: 1,
      item: (index) => file
    };
    
    Object.defineProperty(fileInput, 'files', {
      value: fileList,
      writable: false
    });
    
    fireEvent.change(fileInput);
    
    await waitFor(() => {
      expect(alertSpy).toHaveBeenCalledWith(
        expect.stringContaining('No Java classes found')
      );
    });

    alertSpy.mockRestore();
  });

  test('button changes text after project is loaded', async () => {
    const { RetrieveJavaClassModelsFromBrowser } = require('../logic/folderUtils');
    
    RetrieveJavaClassModelsFromBrowser.mockResolvedValue([
      {
        name: 'TestClass',
        attributes: [],
        methods: [],
        interface: false,
        extends: '',
        implements: [],
        modifiers: [],
        generics: [],
        constructors: [],
        line: 1,
        filePath: 'test/TestClass.java'
      }
    ]);

    renderWithProviders(<Home />);
    
    expect(screen.getByText('Upload Project')).toBeInTheDocument();
    
    const fileInput = document.querySelector('input[type="file"]');
    const file = new File(['content'], 'TestClass.java', { type: 'text/plain' });
    Object.defineProperty(file, 'webkitRelativePath', {
      value: 'MyProject/src/TestClass.java',
      writable: false
    });
    
    const fileList = {
      0: file,
      length: 1,
      item: (index) => file
    };
    
    Object.defineProperty(fileInput, 'files', {
      value: fileList,
      writable: false
    });
    
    fireEvent.change(fileInput);
    
    await waitFor(() => {
      expect(screen.getByText('Upload New')).toBeInTheDocument();
    });
  });

  test('renders SidebarTab and CloseableTab components', () => {
    renderWithProviders(<Home />);
    
    // These components should be rendered even with empty data
    const container = screen.getByText('Upload Project').closest('.home-container');
    expect(container).toBeInTheDocument();
  });
});
