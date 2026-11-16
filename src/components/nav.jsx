import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import ThemeSwitch from './ThemeSwitch.jsx'

export default function Nav({ theme, onToggleTheme }) {
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
                    <Logo className="logo-icon" />
                    <Link to="/">NoWebRadar</Link>
                </div>
                <div className="nav-links">
                    <button onClick={handleHowItWorksClick} className="nav-link">
                        How it works
                    </button>
                    <ThemeSwitch theme={theme} onToggle={onToggleTheme} />
                </div>
            </header>
        </nav>
    )
}
