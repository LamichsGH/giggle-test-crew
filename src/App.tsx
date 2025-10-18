import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

function Navigation() {
  return (
    <div className="nav-container">
      <nav>
        <div className="nav-bar">
          <div className="module left">
            <Link to="/">
              <img className="logo logo-dark" alt="Globall" src="/globall.png" style={{ maxHeight: '60px' }} />
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
}

function Footer() {
  return (
    <footer className="footer-2 bg-primary text-center-xs">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 text-center">
            <Link to="/">
              <img className="image-xs" alt="Globall" src="/index.png" style={{ maxWidth: '150px' }} />
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
}

function HomePage() {
  useEffect(() => {
    const initBackgrounds = () => {
      document.querySelectorAll('.background-image-holder').forEach((holder: any) => {
        const img = holder.querySelector('img');
        if (img) {
          holder.style.backgroundImage = `url('${img.src}')`;
          holder.style.backgroundSize = 'cover';
          holder.style.backgroundPosition = 'center';
          img.style.display = 'none';
        }
      });
    };
    setTimeout(initBackgrounds, 100);
  }, []);

  return (
    <>
      <Navigation />
      <div className="main-container">
        <section className="fullscreen image-bg">
          <div className="background-image-holder">
            <img alt="Globall" className="background-image" src="/index.jpg" />
          </div>
          <div className="container v-align-transform">
            <div className="row">
              <div className="col-sm-12 text-center">
                <img alt="Globall" src="/index.png" style={{ maxWidth: '400px', marginBottom: '30px' }} />
                <h5 className="large bold mb40 mb-xs-16" style={{ color: 'white', fontSize: '24px' }}>
                  We travel to communities globally where children face extreme poverty, conflict, & social challenges, using football as a tool
                </h5>
              </div>
            </div>
          </div>
        </section>

        <section className="image-bg parallax pt240 pb180 pt-xs-80 pb-xs-80">
          <div className="background-image-holder">
            <img alt="Mission" className="background-image" src="/globall1.jpg" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-10 col-md-offset-1 text-center">
                <h1 className="large bold uppercase mb50 mb-xs-16" style={{ color: 'white' }}>MISSION</h1>
                <p className="lead mb48 mb-xs-32" style={{ color: 'white', fontSize: '18px' }}>
                  We travel to communities globally where children face extreme poverty, conflict, & social challenges, using football as a tool
                </p>
                <Link className="btn-lg btn" to="/about" style={{ padding: '15px 30px', backgroundColor: '#fff', color: '#333', textDecoration: 'none', display: 'inline-block', borderRadius: '4px' }}>View More</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="image-bg parallax pt240 pb180 pt-xs-80 pb-xs-80">
          <div className="background-image-holder">
            <img alt="Donate" className="background-image" src="/globall2.jpg" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-10 col-md-offset-1 text-center">
                <h1 className="large bold uppercase mb40 mb-xs-16" style={{ color: 'white' }}>DONATE</h1>
                <p className="lead mb48 mb-xs-32" style={{ color: 'white', fontSize: '18px' }}>
                  To find out how to donate to GLO-BALL, contact us today
                </p>
                <Link className="btn-lg btn" to="/contact" style={{ padding: '15px 30px', backgroundColor: '#fff', color: '#333', textDecoration: 'none', display: 'inline-block', borderRadius: '4px' }}>Contact Us</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="image-bg parallax pt240 pb180 pt-xs-80 pb-xs-80">
          <div className="background-image-holder">
            <img alt="Follow" className="background-image" src="/glo1.jpg" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-10 col-md-offset-1 text-center">
                <h1 className="large bold uppercase mb40 mb-xs-16" style={{ color: 'white' }}>Follow Us</h1>
                <a href="https://www.instagram.com/globalluk/" target="_blank" rel="noopener noreferrer">
                  <img className="image-xs" alt="Instagram" src="/insta.png" style={{ maxWidth: '100px' }} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

function AboutPage() {
  useEffect(() => {
    const initBackgrounds = () => {
      document.querySelectorAll('.background-image-holder').forEach((holder: any) => {
        const img = holder.querySelector('img');
        if (img) {
          holder.style.backgroundImage = `url('${img.src}')`;
          holder.style.backgroundSize = 'cover';
          holder.style.backgroundPosition = 'center';
          img.style.display = 'none';
        }
      });
    };
    setTimeout(initBackgrounds, 100);
  }, []);

  return (
    <>
      <Navigation />
      <div className="main-container">
        <section className="fullscreen image-bg">
          <div className="background-image-holder">
            <img alt="Mission" className="background-image" src="/globall1.jpg" />
          </div>
          <div className="container v-align-transform">
            <div className="row">
              <div className="col-sm-12 text-center">
                <img alt="Mission" src="/about.png" style={{ maxWidth: '400px' }} />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary" style={{ padding: '80px 0', backgroundColor: '#2c3e50' }}>
          <div className="container">
            <div className="row">
              <div className="col-sm-10 col-sm-offset-1" style={{ color: 'white' }}>
                <h2 className="large bold uppercase mb40 mb-xs-16">What is GLO-BALL</h2>
                <p className="lead" style={{ marginBottom: '40px', fontSize: '18px' }}>
                  Here at GLO-BALL, we believe in the magic of a single football, the power it has to bring joy, unite communities, and inspire hope. In the world's most deprived areas, where opportunities are scarce but dreams are limitless, we use football as a bridge to connect, uplift, and empower underprivileged children.
                </p>

                <h2 className="large bold uppercase mb40 mb-xs-16">How We Help</h2>
                <p className="lead" style={{ marginBottom: '40px', fontSize: '18px' }}>
                  Through football, we aim to break down barriers, foster friendships, and inspire children to believe in their potential. By providing access to the game, we create safe spaces where kids can play, grow, and develop essential life skills.
                </p>

                <h2 className="large bold uppercase mb40 mb-xs-16">Sponsor Us</h2>
                <p className="lead" style={{ marginBottom: '40px', fontSize: '18px' }}>
                  GLO-BALL offers organizations the opportunity to make a tangible social impact through the universal language of football. By becoming a sponsor, your brand will directly support programs that provide underprivileged children with access to football and safe community spaces.
                </p>

                <h2 className="large bold uppercase mb40 mb-xs-16">Get Involved</h2>
                <p className="lead" style={{ fontSize: '18px' }}>
                  Whether you're a coach, creative, mentor, or simply someone who believes in the unifying power of football, there's a place for you in our team. Reach out to our partnerships team to get involved.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

function ContactPage() {
  useEffect(() => {
    const initBackgrounds = () => {
      document.querySelectorAll('.background-image-holder').forEach((holder: any) => {
        const img = holder.querySelector('img');
        if (img) {
          holder.style.backgroundImage = `url('${img.src}')`;
          holder.style.backgroundSize = 'cover';
          holder.style.backgroundPosition = 'center';
          img.style.display = 'none';
        }
      });
    };
    setTimeout(initBackgrounds, 100);
  }, []);

  return (
    <>
      <Navigation />
      <div className="main-container">
        <section className="fullscreen image-bg">
          <div className="background-image-holder">
            <img alt="Contact" className="background-image" src="/contact.jpg" />
          </div>
          <div className="container v-align-transform">
            <div className="row">
              <div className="col-sm-12 text-center">
                <img alt="Contact" src="/contact.png" style={{ maxWidth: '400px', marginBottom: '30px' }} />
                <h5 className="mb20 mb-xs-16 large" style={{ color: 'white', fontSize: '22px' }}>
                  If you have any questions or need to contact us, please email:
                </h5>
                <h4>
                  <a href="mailto:enquiries@globall.uk" style={{ color: 'white', fontSize: '28px' }}>enquiries@globall.uk</a>
                </h4>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

function FAQsPage() {
  return (
    <>
      <Navigation />
      <div className="main-container">
        <section className="bg-primary" style={{ padding: '80px 0', backgroundColor: '#2c3e50', minHeight: '100vh' }}>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <h1 className="large bold uppercase mb40 mb-xs-16" style={{ color: 'white' }}>FAQ's</h1>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-10 col-sm-offset-1" style={{ color: 'white' }}>
                <div style={{ marginBottom: '30px' }}>
                  <h4 className="bold uppercase" style={{ marginBottom: '15px' }}>What is Globall?</h4>
                  <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
                    Here at GLO-BALL, we believe in the magic of a single football, the power it has to bring joy, unite communities, and inspire hope. In the world's most deprived areas, where opportunities are scarce but dreams are limitless, we use football as a bridge to connect, uplift, and empower underprivileged children.
                  </p>
                </div>

                <div style={{ marginBottom: '30px' }}>
                  <h4 className="bold uppercase" style={{ marginBottom: '15px' }}>How We Help?</h4>
                  <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
                    Through football, we aim to break down barriers, foster friendships, and inspire children to believe in their potential. By providing access to the game, we create safe spaces where kids can play, grow, and develop essential life skills.
                  </p>
                </div>

                <div style={{ marginBottom: '30px' }}>
                  <h4 className="bold uppercase" style={{ marginBottom: '15px' }}>Sponsor Us?</h4>
                  <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
                    GLO-BALL offers organizations the opportunity to make a tangible social impact through the universal language of football. By becoming a sponsor, your brand will directly support programs that provide underprivileged children with access to football and safe community spaces.
                  </p>
                </div>

                <div style={{ marginBottom: '30px' }}>
                  <h4 className="bold uppercase" style={{ marginBottom: '15px' }}>Get Involved?</h4>
                  <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
                    Whether you're a coach, creative, mentor, or simply someone who believes in the unifying power of football, there's a place for you in our team. Reach out to our partnerships team to get involved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

function TermsPage() {
  return (
    <>
      <Navigation />
      <div className="main-container">
        <section className="bg-primary" style={{ padding: '80px 0', backgroundColor: '#2c3e50', minHeight: '80vh' }}>
          <div className="container">
            <div className="row">
              <div className="col-sm-10 col-sm-offset-1" style={{ color: 'white' }}>
                <h1 className="text-center mb40">Site Terms</h1>
                <p className="lead">Terms and conditions content goes here.</p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

function PrivacyPage() {
  return (
    <>
      <Navigation />
      <div className="main-container">
        <section className="bg-primary" style={{ padding: '80px 0', backgroundColor: '#2c3e50', minHeight: '80vh' }}>
          <div className="container">
            <div className="row">
              <div className="col-sm-10 col-sm-offset-1" style={{ color: 'white' }}>
                <h1 className="text-center mb40">Privacy Policy</h1>
                <p className="lead">Privacy policy content goes here.</p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faqs" element={<FAQsPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
