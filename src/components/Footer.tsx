import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-2 bg-primary text-center-xs">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 text-center">
            <Link to="/">
              <img className="image-xs" alt="Globall" src="/index.png" />
            </Link>
          </div>
          <div className="col-sm-12 col-md-8 col-md-offset-2 text-center">
            <ul className="list-inline social-list mb0">
              <Link to="/terms">SITE TERMS</Link> | <Link to="/privacy">PRIVACY</Link>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;