import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../tests/testUtils';
import CodeViewer from './CodeViewer';

describe('CodeViewer Component', () => {
  test('renders code viewer with provided code', () => {
    const testCode = 'public class Test { }';
    
    renderWithProviders(<CodeViewer code={testCode} />);
    
    // Check if Monaco Editor container is rendered
    const codeViewer = screen.getByRole('presentation');
    expect(codeViewer).toBeInTheDocument();
  });

  test('renders with empty code', () => {
    renderWithProviders(<CodeViewer code="" />);
    
    const codeViewer = screen.getByRole('presentation');
    expect(codeViewer).toBeInTheDocument();
  });

  test('renders with multi-line code', () => {
    const multiLineCode = `public class Test {
  private String name;
  
  public Test(String name) {
    this.name = name;
  }
}`;
    
    renderWithProviders(<CodeViewer code={multiLineCode} />);
    
    const codeViewer = screen.getByRole('presentation');
    expect(codeViewer).toBeInTheDocument();
  });
});
