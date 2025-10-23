import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Focus Management Hook
 * 
 * Manages keyboard focus on route changes for improved accessibility.
 * Moves focus to main content area when navigating between pages.
 * 
 * @example
 * function App() {
 *   useFocusManagement();
 *   return <Routes>...</Routes>;
 * }
 */

export const useFocusManagement = () => {
  const location = useLocation();

  useEffect(() => {
    // Find the main content element
    const mainContent = document.getElementById("main-content");
    
    if (mainContent) {
      // Set focus to main content
      mainContent.focus();
      
      // Announce page change to screen readers
      announcePageChange();
    } else {
      // Fallback: focus on body and scroll to top
      document.body.focus();
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);
};

/**
 * Announce route change to screen readers
 */
const announcePageChange = () => {
  // Create or update aria-live region
  let liveRegion = document.getElementById("route-announcer");
  
  if (!liveRegion) {
    liveRegion = document.createElement("div");
    liveRegion.id = "route-announcer";
    liveRegion.setAttribute("aria-live", "polite");
    liveRegion.setAttribute("aria-atomic", "true");
    liveRegion.className = "sr-only"; // Visually hidden
    document.body.appendChild(liveRegion);
  }

  // Announce the page title
  const pageTitle = document.title;
  liveRegion.textContent = `Navigated to ${pageTitle}`;

  // Clear announcement after delay
  setTimeout(() => {
    if (liveRegion) {
      liveRegion.textContent = "";
    }
  }, 1000);
};

/**
 * Hook to trap focus within a modal or dialog
 * 
 * @example
 * function Modal({ isOpen, onClose }) {
 *   const modalRef = useRef<HTMLDivElement>(null);
 *   useFocusTrap(modalRef, isOpen);
 *   return <div ref={modalRef}>...</div>;
 * }
 */
export const useFocusTrap = (
  elementRef: React.RefObject<HTMLElement>,
  isActive: boolean
) => {
  useEffect(() => {
    if (!isActive || !elementRef.current) return;

    const element = elementRef.current;
    const focusableElements = element.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Focus first element
    firstElement?.focus();

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          lastElement?.focus();
          e.preventDefault();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          firstElement?.focus();
          e.preventDefault();
        }
      }
    };

    element.addEventListener("keydown", handleTabKey);

    return () => {
      element.removeEventListener("keydown", handleTabKey);
    };
  }, [elementRef, isActive]);
};
