import { Link } from 'react-router-dom';

const Navigation = () => {
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
            <i className="ti-menu"></i>
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