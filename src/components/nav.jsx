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
                <button onClick={handleHowItWorksClick} className="how-it-works__button">
                    How It Works
                </button>
            </header>
        </nav>
    )
}