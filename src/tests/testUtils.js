import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '../theme/ThemeContext';

// Custom render function that includes all providers
export function renderWithProviders(ui, options = {}) {
  const Wrapper = ({ children }) => (
    <BrowserRouter>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </BrowserRouter>
  );

  return render(ui, { wrapper: Wrapper, ...options });
}

// Mock class data for testing
export const mockClassData = {
  name: "TestClass",
  attributes: [
    {
      name: "testAttribute",
      value: "",
      type: "String",
      modifiers: ["private"],
      line: 5
    }
  ],
  methods: [
    {
      name: "testMethod",
      parameters: [],
      return: "void",
      modifiers: ["public"],
      generics: [],
      line: 10
    }
  ],
  interface: false,
  extends: "",
  implements: [],
  modifiers: ["public"],
  generics: [],
  constructors: [],
  line: 1,
  filePath: "/test/TestClass.java"
};

export const mockInterfaceData = {
  ...mockClassData,
  name: "TestInterface",
  interface: true,
  methods: [
    {
      name: "interfaceMethod",
      parameters: [],
      return: "String",
      modifiers: ["public", "abstract"],
      generics: [],
      line: 5
    }
  ]
};

export const mockAbstractClassData = {
  ...mockClassData,
  name: "AbstractTestClass",
  modifiers: ["public", "abstract"],
  methods: [
    {
      name: "abstractMethod",
      parameters: [],
      return: "void",
      modifiers: ["public", "abstract"],
      generics: [],
      line: 8
    }
  ]
};

// Re-export everything from React Testing Library
export * from '@testing-library/react';
export { renderWithProviders as render };
