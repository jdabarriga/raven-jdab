import React from 'react';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import { renderWithProviders } from './testUtils';
import App from '../App';

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

jest.mock('../logic/folderUtils', () => ({
  RetrieveJavaClassModels: jest.fn(() => Promise.resolve([])),
  RetrieveJavaClassModelsFromBrowser: jest.fn(() => Promise.resolve([]))
}));

jest.mock('../logic/demoData', () => ({
  getDemoFiles: jest.fn(() => Promise.resolve([]))
}));

jest.mock('../logic/fileStorage', () => ({
  fileStorage: {
    clear: jest.fn(),
    storeFile: jest.fn()
  }
}));

describe('Integration Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('full user flow: Welcome to Home page', async () => {
    renderWithProviders(<App />);
    
    // Should start on Welcome page
    expect(screen.getByText('WELCOME TO')).toBeInTheDocument();
    expect(screen.getByText('RAVEN')).toBeInTheDocument();
    
    // Click Continue button
    const continueButton = screen.getByText('Continue');
    fireEvent.click(continueButton);
    
    // Should navigate to Home page
    await waitFor(() => {
      expect(screen.getByText('Upload Project')).toBeInTheDocument();
    });
  });

  test('theme switcher works across pages', async () => {
    renderWithProviders(<App />);
    
    // Open theme switcher on Welcome page
    const themeSwitcher = screen.getByTitle('Change Theme');
    fireEvent.click(themeSwitcher);
    
    // Verify theme options are visible
    expect(screen.getByText('Midnight Raven')).toBeInTheDocument();
    
    // Select a theme
    const shadowRavenTheme = screen.getByText('Shadow Raven');
    fireEvent.click(shadowRavenTheme);
    
    // Navigate to Home page
    const continueButton = screen.getByText('Continue');
    fireEvent.click(continueButton);
    
    // Theme switcher should still be available on Home page
    await waitFor(() => {
      const homeThemeSwitcher = screen.getByTitle('Change Theme');
      expect(homeThemeSwitcher).toBeInTheDocument();
    });
  });

  test('application renders without errors', () => {
    const { container } = renderWithProviders(<App />);
    expect(container).toBeInTheDocument();
  });

  test('routing works correctly', async () => {
    const { container } = renderWithProviders(<App />);
    
    // Start on Welcome page
    expect(screen.getByText('WELCOME TO')).toBeInTheDocument();
    
    // Navigate to Home
    const continueButton = screen.getByText('Continue');
    fireEvent.click(continueButton);
    
    await waitFor(() => {
      expect(screen.getByText('Upload Project')).toBeInTheDocument();
    });
    
    // Navigate back to Welcome using browser back
    window.history.back();
    
    await waitFor(() => {
      expect(screen.getByText('WELCOME TO')).toBeInTheDocument();
    });
  });
});
