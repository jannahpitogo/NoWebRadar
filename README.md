# NoWebRadar

NoWebRadar helps web designers find local businesses that have no website. It is a React single-page app for searching by location and business type, then showing each business's rating and whether it has a website, so a designer can spot potential clients quickly.

> **Status:** early frontend prototype. The search results come from hard-coded sample data. Live Google Maps lookup is planned but not built yet.

## Features

- **Home page** with a hero, a three-step "How it works" section, a benefits section, and a call to action.
- **Search page** with a location field, a business-type dropdown, a "no website only" filter, and a results table with each business's rating and website status.
- **Light and dark themes** switched from the navigation bar. The choice is saved in the browser.
- **Responsive layout** for phones, tablets, and desktops.
- **Client-side routing** between `/` and `/search` with React Router.

## Tech stack

| Area | Tools |
| --- | --- |
| UI | React 19 (`react`, `react-dom`) |
| Routing | React Router 7 (`react-router-dom`) |
| Build and dev server | Vite 8 with `@vitejs/plugin-react` |
| Linting | Oxlint (`oxlint`) with React rules |
| Typography | DM Sans, loaded from Google Fonts |
| Styling | Plain CSS with custom properties (no CSS framework) |

## Getting started

Requirements: a current Node.js LTS release and npm.

```bash
# Install dependencies
npm install

# Start the dev server with hot reload (default: http://localhost:5173)
npm run dev

# Lint the source
npm run lint

# Create a production build in dist/
npm run build

# Serve the production build locally
npm run preview
```

## Project structure

```
nowebradar/
├── index.html              # HTML shell; loads the DM Sans font and mounts #root
├── vite.config.js          # Vite config (React plugin only)
├── .oxlintrc.json          # Lint rules
├── package.json
├── public/
│   ├── favicon.svg         # Browser tab icon
│   └── icons.svg           # SVG sprite
└── src/
    ├── main.jsx            # Entry point: imports global CSS and renders <App /> in StrictMode
    ├── App.jsx             # Router setup, theme state, and the shared Nav
    ├── App.css             # Navigation, theme switch, and responsive nav styles
    ├── index.css           # Design tokens (light and dark colors), base body styles
    ├── components/
    │   ├── nav.jsx         # Top navigation: logo, "How it works" link, theme switch
    │   ├── Logo.jsx        # Inline SVG logo (radar sweep with a "no website" slash)
    │   └── ThemeSwitch.jsx # Accessible on/off switch for dark mode
    ├── pages/
    │   ├── Home.jsx        # Landing page (route /)
    │   └── Search.jsx      # Search form and results table (route /search)
    ├── styles/
    │   ├── Home.css        # Landing page styles and breakpoints
    │   └── Search.css      # Search page styles and breakpoints
    └── assets/             # Template images (hero.png, react.svg, vite.svg); not all are used
```

## How the app works

### Entry and routing

`src/main.jsx` loads `index.css` and `App.css`, then renders `<App />` into `#root`. `App.jsx` wraps the app in a `BrowserRouter`:

| Path | Component | Purpose |
| --- | --- | --- |
| `/` | `Home` | Landing page |
| `/search` | `Search` | Search and results |

The `Nav` component is rendered above the routes, so it appears on every page.

### Theme

- `App.jsx` holds the theme state (`'light'` or `'dark'`). The default is light.
- On load, the saved value is read from `localStorage` under the key `nowebradar-theme`. If storage is blocked or the value is invalid, the app uses light.
- Each change sets `document.documentElement.dataset.theme` and saves the value. Storage errors are caught, so the theme still applies for the current visit.
- `src/index.css` defines colors as custom properties on `:root` (light) and `:root[data-theme="dark"]` (dark). Components use these variables, so changing a color means editing one place.

### Navigation

- `nav.jsx` shows the logo with a link home, a "How it works" button that smooth-scrolls to `#how-it-works` on the Home page, and the `ThemeSwitch`.
- `ThemeSwitch.jsx` is a `<button role="switch">` with `aria-checked`. "On" means dark mode.

### Search page

- The form has three inputs: `location` (text), `businessType` (dropdown), and `noWebsiteOnly` (checkbox). They are controlled React state.
- Submitting the form runs `handleSearch`. It filters the sample data and shows the results table, or a "No results" message when nothing matches.
- Before the first search, a note says that sample data is shown.

## Current limitations

- **Sample data only.** `Search.jsx` contains six hard-coded businesses. Results are not fetched from any API.
- **Location and business type are not used yet.** Submitting the form filters only by "no website." The location and business-type values are stored but do not change the results.
- **No backend.** Nothing is saved between visits except the theme choice.
- **Template leftovers.** The `src/assets/` images and the `public/icons.svg` sprite are not used by the app.

## Roadmap

- Connect the search to a real business-listing source (for example, Google Maps Places) through a backend that keeps API keys off the client.
- Filter results by the entered location and business type.
- Add sorting, pagination, and export of results.
- Store saved searches and leads.

## Design notes

- **Colors:** teal-green accent (`#1F8F6A` in light mode, `#6BCDAA` in dark mode) on a soft blue-gray background.
- **Font:** DM Sans, weights 400 to 700, loaded with `display=swap`.
- **Breakpoints:** navigation shrinks below 600px. Home and Search step down section padding and headings at 768px and 480px. On Search, the form stacks on narrow screens and the results table scrolls sideways.

## Contributing

1. Create a branch from `main`.
2. Run `npm run lint` and `npm run build` before opening a pull request.
3. Describe user-visible changes in the pull request, including any responsive or dark-mode effects.

## License

No license has been set for this project yet. All rights are reserved by the author until one is added.
