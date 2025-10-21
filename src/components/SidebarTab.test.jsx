import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders, mockClassData, mockInterfaceData, mockAbstractClassData } from '../tests/testUtils';
import SidebarTab from './SidebarTab';

describe('SidebarTab Component', () => {
  const mockHandleFocusClass = {
    current: {
      focusOnNode: jest.fn()
    }
  };
  const mockCreateClassInspectorTab = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders empty state when no sidetabs provided', () => {
    renderWithProviders(
      <SidebarTab 
        sidetabs={[]} 
        handleFocusClass={mockHandleFocusClass}
        createClassInspectorTab={mockCreateClassInspectorTab}
      />
    );
    
    expect(screen.queryByText('Classes:')).not.toBeInTheDocument();
  });

  test('renders class list when sidetabs are provided', () => {
    const sidetabs = [mockClassData];
    
    renderWithProviders(
      <SidebarTab 
        sidetabs={sidetabs} 
        handleFocusClass={mockHandleFocusClass}
        createClassInspectorTab={mockCreateClassInspectorTab}
      />
    );
    
    expect(screen.getByText('Classes:')).toBeInTheDocument();
    expect(screen.getByText('TestClass')).toBeInTheDocument();
  });

  test('renders multiple classes', () => {
    const sidetabs = [mockClassData, mockInterfaceData, mockAbstractClassData];
    
    renderWithProviders(
      <SidebarTab 
        sidetabs={sidetabs} 
        handleFocusClass={mockHandleFocusClass}
        createClassInspectorTab={mockCreateClassInspectorTab}
      />
    );
    
    expect(screen.getByText('TestClass')).toBeInTheDocument();
    expect(screen.getByText('TestInterface')).toBeInTheDocument();
    expect(screen.getByText('AbstractTestClass')).toBeInTheDocument();
  });

  test('calls focusOnNode when class is clicked', () => {
    const sidetabs = [mockClassData];
    
    renderWithProviders(
      <SidebarTab 
        sidetabs={sidetabs} 
        handleFocusClass={mockHandleFocusClass}
        createClassInspectorTab={mockCreateClassInspectorTab}
      />
    );
    
    const classButton = screen.getByText('TestClass');
    fireEvent.click(classButton);
    
    expect(mockHandleFocusClass.current.focusOnNode).toHaveBeenCalledWith(0);
  });

  test('applies correct color for normal class', () => {
    const sidetabs = [mockClassData];
    
    renderWithProviders(
      <SidebarTab 
        sidetabs={sidetabs} 
        handleFocusClass={mockHandleFocusClass}
        createClassInspectorTab={mockCreateClassInspectorTab}
      />
    );
    
    const classButton = screen.getByText('TestClass');
    expect(classButton).toHaveClass('bg-gradient-to-br', 'from-blue-500', 'to-blue-800');
  });

  test('applies correct color for interface', () => {
    const sidetabs = [mockInterfaceData];
    
    renderWithProviders(
      <SidebarTab 
        sidetabs={sidetabs} 
        handleFocusClass={mockHandleFocusClass}
        createClassInspectorTab={mockCreateClassInspectorTab}
      />
    );
    
    const classButton = screen.getByText('TestInterface');
    expect(classButton).toHaveClass('bg-gradient-to-br', 'from-yellow-500', 'to-yellow-700');
  });

  test('applies correct color for abstract class', () => {
    const sidetabs = [mockAbstractClassData];
    
    renderWithProviders(
      <SidebarTab 
        sidetabs={sidetabs} 
        handleFocusClass={mockHandleFocusClass}
        createClassInspectorTab={mockCreateClassInspectorTab}
      />
    );
    
    const classButton = screen.getByText('AbstractTestClass');
    expect(classButton).toHaveClass('bg-gradient-to-br', 'from-red-500', 'to-orange-700');
  });

  test('handles keyboard focus events', () => {
    const sidetabs = [mockClassData];
    
    renderWithProviders(
      <SidebarTab 
        sidetabs={sidetabs} 
        handleFocusClass={mockHandleFocusClass}
        createClassInspectorTab={mockCreateClassInspectorTab}
      />
    );
    
    const classButton = screen.getByText('TestClass');
    
    fireEvent.focus(classButton);
    expect(classButton).toHaveClass('ring-2', 'ring-white');
    
    fireEvent.blur(classButton);
    expect(classButton).not.toHaveClass('ring-2', 'ring-white');
  });

  test('displays tooltip with instructions', () => {
    const sidetabs = [mockClassData];
    
    renderWithProviders(
      <SidebarTab 
        sidetabs={sidetabs} 
        handleFocusClass={mockHandleFocusClass}
        createClassInspectorTab={mockCreateClassInspectorTab}
      />
    );
    
    const classButton = screen.getByText('TestClass');
    expect(classButton).toHaveAttribute('title', 'Click to focus in graph, then press Ctrl to open in new tab');
  });
});
