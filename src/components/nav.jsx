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
                    <Link to="/">NoWebRadar</Link>
                </div>
                <div className="nav-links">
                    <button onClick={handleHowItWorksClick} className="nav-link">
                        How it works
                    </button>
                    <a href="#pricing" className="nav-link">Pricing</a>
                    <a href="#login" className="nav-link">Login</a>
                </div>
            </header>
        </nav>
    )
}