import { Link } from 'react-router-dom'

export default function Nav() {
    const handleHowItWorksClick = () => {
        const element = document.getElementById('how-it-works')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <nav>
            <header className="navigation-bar">
                <div className="logo">
                    <svg className="logo-icon" viewBox="0 0 24 24" aria-hidden="true">
                        <circle cx="12" cy="12" r="9.5" fill="none" stroke="var(--accent)" strokeWidth="2.2" />
                        <circle cx="12" cy="12" r="4" fill="var(--accent)" />
                    </svg>
                    <Link to="/">NoWebRadar</Link>
                </div>
                <div className="nav-links">
                    <button onClick={handleHowItWorksClick} className="nav-link">
                        How it works
                    </button>
                </div>
            </header>
        </nav>
    )
}
