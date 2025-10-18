import { ReactNode, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  useEffect(() => {
    // Scripts are already loaded in index.html
    // Reinitialize on route change if needed
    const $ = (window as any).jQuery;
    if ($ && typeof $ === 'function') {
      // Reinitialize any jQuery plugins if needed
    }
  }, [location]);

  return (
    <>
      <div className="nav-container">
        <nav className="">
          <div className="nav-bar">
            <div className="module left">
              <Link to="/">
                <img className="logo logo-light" alt="Globall" src="/img/logo-light.png" />
                <div className="vnu">
                  <img className="logo logo-dark" alt="Globall" src="/img/globall.png" />
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
                  <img className="image-xs" alt="Pic" src="/img/index.png" />
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
