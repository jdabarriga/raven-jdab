import React, { useRef, useState, useEffect } from 'react';
import { TabList } from '@mui/lab';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const ScrollableTabs = ({ children, ...props }) => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Check scroll position to show/hide arrows
  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    const maxScroll = scrollWidth - clientWidth;
    
    // Enable left arrow if we can scroll left (not at the beginning)
    setCanScrollLeft(scrollLeft > 1);
    
    // Enable right arrow if we can scroll right (not at the end)
    setCanScrollRight(maxScroll > 1 && scrollLeft < maxScroll - 1);
    
    // Debug logging
    console.log('Scroll check:', {
      scrollLeft,
      scrollWidth,
      clientWidth,
      maxScroll,
      canScrollLeft: scrollLeft > 1,
      canScrollRight: maxScroll > 1 && scrollLeft < maxScroll - 1,
      hasOverflow: scrollWidth > clientWidth
    });
  };

  useEffect(() => {
    // Check immediately and after delays to ensure tabs are rendered
    checkScroll();
    const timeoutId1 = setTimeout(checkScroll, 100);
    const timeoutId2 = setTimeout(checkScroll, 500); // Longer delay for MUI tabs
    
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
    }
    return () => {
      clearTimeout(timeoutId1);
      clearTimeout(timeoutId2);
      if (container) {
        container.removeEventListener('scroll', checkScroll);
      }
      window.removeEventListener('resize', checkScroll);
    };
  }, [children]);

  // Force check when component mounts or children change
  useEffect(() => {
    const forceCheck = () => {
      setTimeout(checkScroll, 0);
      setTimeout(checkScroll, 100);
      setTimeout(checkScroll, 300);
    };
    forceCheck();
  }, [children]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'center' }}>
      <div
        ref={scrollContainerRef}
        style={{
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          position: 'relative',
          width: '100%',
          // Hide scrollbar
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
        className="scrollable-tabs-container"
      >
        {/* Scroll arrows hidden for now */}

        <style>{`
          .scrollable-tabs-container::-webkit-scrollbar {
            display: none;
          }
          .scrollable-tabs-container .MuiTabs-flexContainer {
            flex-wrap: nowrap;
          }
        `}</style>
        <TabList {...props} variant="scrollable" scrollButtons={false}>
          {children}
        </TabList>
      </div>
    </div>
  );
};

export default ScrollableTabs;
