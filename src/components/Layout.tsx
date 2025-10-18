import { ReactNode, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  useEffect(() => {
    // Ensure theme JS effects run AFTER React renders
    const initBackgrounds = () => {
      const holders = Array.from(document.querySelectorAll('.background-image-holder')) as HTMLElement[];
      holders.forEach((holder) => {
        const img = holder.querySelector('img') as HTMLImageElement | null;
        if (img && img.src) {
          holder.style.backgroundImage = `url("${img.src}")`;
          holder.style.backgroundPosition = 'initial';
          img.style.display = 'none';
          holder.classList.add('fadeIn');
        }
      });
    };

    const adjustLayout = () => {
      const nav = document.querySelector('body .nav-container nav:first-of-type') as HTMLElement | null;
      const navContainer = document.querySelector('.nav-container') as HTMLElement | null;
      if (nav && navContainer) {
        navContainer.style.minHeight = `${nav.offsetHeight}px`;
        const firstFullscreen = document.querySelector('section.fullscreen:nth-of-type(1)') as HTMLElement | null;
        if (firstFullscreen && window.innerWidth > 768) {
          firstFullscreen.style.height = `${window.innerHeight - nav.offsetHeight}px`;
        }
      }
    };

    requestAnimationFrame(() => {
      initBackgrounds();
      adjustLayout();
    });

    window.addEventListener('resize', adjustLayout);
    return () => window.removeEventListener('resize', adjustLayout);
  }, [location]);

  return (
    <>
      <div className="nav-container">
        <nav className="">
          <div className="nav-bar">
            <div className="module left">
              <Link to="/">
                <img className="logo logo-light" alt="Globall" src="/globall.png" />
                <div className="vnu">
                  <img className="logo logo-dark" alt="Globall" src="/globall.png" />
                </div>
              </Link>
            </div>
            <div className="module widget-handle mobile-toggle right visible-sm visible-xs">
              <i className="ti-menu"></i>
            </div>
            <div className="module-group right">
              <div className="module left">
                <ul className="menu">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">Mission</Link>
                  </li>
                  <li>
                    <Link to="/faqs">FAQ's</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="main-container">{children}</div>

      <footer className="footer-2 bg-primary text-center-xs">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 text-center">
              <Link to="/">
                <div className="vnu">
                  <img className="image-xs" alt="Pic" src="/index.png" />
                </div>
              </Link>
            </div>
            <div className="col-sm-12 col-md-8 col-md-offset-2 text-center">
              <ul className="list-inline social-list mb0">
                <Link to="/terms">SITE TERMS</Link> | <Link to="/privacy">PRIVACY</Link>
              </ul>
              <span className="fade-half"></span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
