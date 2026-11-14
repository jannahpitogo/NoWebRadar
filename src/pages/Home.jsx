import { Link } from 'react-router-dom'
import '../styles/Home.css'

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Find businesses that don't have a website.</h1>
          <p>Discover local businesses on Google Maps with no website listed, so you can find potential web-design clients faster.</p>
          <Link to="/search" className="hero-button">Start finding businesses</Link>
          <p className="hero-subtitle">Search by location • Filter by category • See rating & website status</p>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works">
        <h2>How it works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Choose a location</h3>
            <p>Enter a city, neighborhood, or area.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Choose a business type</h3>
            <p>Restaurants, salons, dentists, plumbers, gyms, and more.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Find opportunities</h3>
            <p>Get a simple list with each business's rating and website status.</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <h2>Stop searching Google Maps manually.</h2>
        <p>Instead of opening hundreds of listings one by one, quickly spot the businesses that already have customers but no website.</p>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to find your first leads?</h2>
        <p>Find businesses without websites in your area.</p>
        <Link to="/search" className="cta-button">Find businesses</Link>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© NoWebRadar</p>
      </footer>
    </div>
  )
}
