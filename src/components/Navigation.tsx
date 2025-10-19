import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    // Initialize mobile menu functionality
    if (typeof window !== 'undefined') {
      
      const handleMobileToggle = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const navBar = document.querySelector('.nav-bar');
        const hamburgerBtn = document.querySelector('.custom-hamburger-btn');
        const moduleGroup = document.querySelector('.module-group');
        
        if (navBar && hamburgerBtn && moduleGroup) {
          // Toggle classes
          navBar.classList.toggle('mobile-open');
          hamburgerBtn.classList.toggle('active');
          
          // Handle smooth animation
          if (navBar.classList.contains('mobile-open')) {
            moduleGroup.style.display = 'block';
            // Force reflow
            moduleGroup.offsetHeight;
            moduleGroup.style.opacity = '1';
            moduleGroup.style.transform = 'translateY(0)';
          } else {
            moduleGroup.style.opacity = '0';
            moduleGroup.style.transform = 'translateY(-20px)';
            setTimeout(() => {
              if (!navBar.classList.contains('mobile-open')) {
                moduleGroup.style.display = 'none';
              }
            }, 300);
          }
        }
      };
      
      // Add event listener to hamburger button
      const hamburgerBtn = document.querySelector('.custom-hamburger-btn');
      if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', handleMobileToggle);
      }
      
      // Fallback with jQuery if available
      if (window.jQuery) {
        const $ = window.jQuery;
        $('.custom-hamburger-btn').off('click').on('click', handleMobileToggle);
      }
      
      // Cleanup
      return () => {
        if (hamburgerBtn) {
          hamburgerBtn.removeEventListener('click', handleMobileToggle);
        }
      };
    }
  }, []);

  return (
    <div className="nav-container">
      <nav>
        <div className="nav-bar">
          <div className="module left">
            <Link to="/">
              <img className="logo logo-dark" alt="Globall" src="/globall.png" />
            </Link>
          </div>
          <div className="module widget-handle mobile-toggle right visible-sm visible-xs">
            <button className="custom-hamburger-btn" type="button">
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
          <div className="module-group right">
            <div className="module left">
              <ul className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">Mission</Link></li>
                <li><Link to="/faqs">FAQ's</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;