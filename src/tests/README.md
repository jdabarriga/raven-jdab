# Raven Test Suite

This directory contains comprehensive tests for the Raven application.

## Test Structure

- **setupTests.js** - Global test configuration and mocks
- **testUtils.js** - Reusable test utilities and mock data
- **__mocks__/** - Mock files for static assets

## Component Tests

- **ThemeSwitcher.test.jsx** - Tests for theme switching functionality
- **SidebarTab.test.jsx** - Tests for sidebar class list display
- **CodeViewer.test.jsx** - Tests for code viewing component
- **ScrollableTabs.test.jsx** - Tests for tab navigation

## Page Tests

- **Welcome.test.jsx** - Tests for welcome/landing page
- **Home.test.jsx** - Tests for main application page

## Integration Tests

- **Integration.test.jsx** - End-to-end user flow tests

## Utility Tests

- **FolderUtils.test.js** - Tests for file utility functions
- **Lexers.test.js** - Tests for Java tokenization
- **ParserIntegration.test.js** - Tests for Java parser

## Running Tests

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in CI mode
npm run test:ci
```

## Coverage Goals

- **Branches**: 50%
- **Functions**: 50%
- **Lines**: 50%
- **Statements**: 50%

## Test Best Practices

1. Use `renderWithProviders` from testUtils for components that need routing/theme context
2. Mock external dependencies (Neutralino, file system, etc.)
3. Test user interactions, not implementation details
4. Keep tests focused and descriptive
5. Clean up mocks in `beforeEach` hooks

## Mocked Dependencies

- **@neutralinojs/lib** - Desktop application framework
- **window.matchMedia** - CSS media queries
- **IntersectionObserver** - Viewport intersection detection
- **ResizeObserver** - Element resize detection
