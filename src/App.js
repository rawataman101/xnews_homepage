import React, { useEffect, useState } from 'react';
import './App.css';
import logo from './assets/images/logo.svg';
import heroDesktop from './assets/images/image-web-3-desktop.jpg';
import heroMobile from './assets/images/image-web-3-mobile.jpg';
import retroPcs from './assets/images/image-retro-pcs.jpg';
import topLaptops from './assets/images/image-top-laptops.jpg';
import gaming from './assets/images/image-gaming-growth.jpg';


const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="app-container">
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
        <nav className={menuOpen ? 'nav open' : 'nav'}>
          <button id="menu-close" className="menu-button" onClick={toggleMenu}>
            ×
          </button>
          <ul className="nav-items">
             <li><a href="#home">Home</a></li>
            <li><a href="#new">New</a></li>
            <li><a href="#popular">Popular</a></li>
            <li><a href="#trending">Trending</a></li>
            <li><a href="#categories">Categories</a></li>
          </ul>
        </nav>
        <button id="menu-button" className="menu-button" onClick={toggleMenu}>
          ☰
        </button>
      </header>

      <main className="main-content">
        <section className="hero-section">
          <div className="hero-img">
            <img src={isMobile ? heroMobile : heroDesktop} alt="Hero Image" />
          </div>
          <div className="hero-text">
            <h1 className="main-text">The Bright Future of Web 3.0?</h1>
            <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
            <button className="read-more">Read more</button>
          </div>
        </section>

        <aside className="right-block">
          <div className="news1">
            <h3 className="news1-h3">Hydrogen VS Electric Cars</h3>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>
          <div className="news2">
            <h3 className="news2-h3">The Downsides of AI Artistry</h3>
            <p>What are the possible adverse effects of on-demand AI image generation?</p>
          </div>
          <div className="news3">
            <h3 className="news3-h3">Is VC Funding Drying Up?</h3>
            <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
          </div>
        </aside>
      </main>

      <section className="second-section">
        <div className="card">
          <img src={retroPcs} alt="Reviving Retro PCs" />
          <div className="card-content">
            <h3>01</h3>
            <h3 className="card-h3">Reviving Retro PCs</h3>
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>
        </div>
        <div className="card">
          <img src={topLaptops} alt="Top 10 Laptops of 2022" />
          <div className="card-content">
            <h3>02</h3>
            <h3 className="card-h3">Top 10 Laptops of 2022</h3>
            <p>Our best picks for various needs and budgets.</p>
          </div>
        </div>
        <div className="card">
          <img src={gaming} alt="The Growth of Gaming" />
          <div className="card-content">
            <h3>03</h3>
            <h3 className="card-h3">The Growth of Gaming</h3>
            <p>How the pandemic has sparked fresh opportunities.</p>
          </div>
        </div>
      </section>

      <footer>
        <p>Challenge by <a href="https://www.crio.do/" target="_blank" rel="noopener noreferrer">Crio.Do</a>. Coded by <a href="https://github.com/ShivamSh002" target="_blank" rel="noopener noreferrer">Shivam Sharma</a>.</p>
      </footer>
    </div>
  );
};

export default App;