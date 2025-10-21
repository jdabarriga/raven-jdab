import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../tests/testUtils';
import ScrollableTabs from './ScrollableTabs';

describe('ScrollableTabs Component', () => {
  const mockTabs = [
    { label: 'Tab 1', content: <div>Content 1</div> },
    { label: 'Tab 2', content: <div>Content 2</div> },
    { label: 'Tab 3', content: <div>Content 3</div> }
  ];

  test('renders with tabs', () => {
    renderWithProviders(<ScrollableTabs tabs={mockTabs} />);
    
    expect(screen.getByText('Tab 1')).toBeInTheDocument();
    expect(screen.getByText('Tab 2')).toBeInTheDocument();
    expect(screen.getByText('Tab 3')).toBeInTheDocument();
  });

  test('displays first tab content by default', () => {
    renderWithProviders(<ScrollableTabs tabs={mockTabs} />);
    
    expect(screen.getByText('Content 1')).toBeInTheDocument();
  });

  test('switches tab content when tab is clicked', () => {
    renderWithProviders(<ScrollableTabs tabs={mockTabs} />);
    
    const tab2 = screen.getByText('Tab 2');
    fireEvent.click(tab2);
    
    expect(screen.getByText('Content 2')).toBeInTheDocument();
  });

  test('renders with empty tabs array', () => {
    renderWithProviders(<ScrollableTabs tabs={[]} />);
    
    // Should render without crashing
    const container = screen.getByRole('tablist', { hidden: true });
    expect(container).toBeInTheDocument();
  });

  test('handles single tab', () => {
    const singleTab = [{ label: 'Only Tab', content: <div>Only Content</div> }];
    
    renderWithProviders(<ScrollableTabs tabs={singleTab} />);
    
    expect(screen.getByText('Only Tab')).toBeInTheDocument();
    expect(screen.getByText('Only Content')).toBeInTheDocument();
  });
});
