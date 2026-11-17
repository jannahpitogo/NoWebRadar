import { useState } from 'react'
import '../styles/Search.css'

export default function Search() {
  const [location, setLocation] = useState('')
  const [businessType, setBusinessType] = useState('')
  const [noWebsiteOnly, setNoWebsiteOnly] = useState(false)
  const [results, setResults] = useState([])
  const [hasSearched, setHasSearched] = useState(false)

  const businessTypes = [
    'Restaurants',
    'Salons',
    'Dentists',
    'Plumbers',
    'Gyms',
    'Cafes',
    'Bakeries',
    'Pet Stores',
    'Florists',
    'Other'
  ]

  // Sample data for demonstration
  const sampleData = [
    { id: 1, name: 'Joe\'s Pizza', rating: 4.5, website: 'No' },
    { id: 2, name: 'Beauty Salon Pro', rating: 4.8, website: 'No' },
    { id: 3, name: 'The Daily Grind Coffee', rating: 4.3, website: 'Yes' },
    { id: 4, name: 'Local Dentistry', rating: 4.6, website: 'No' },
    { id: 5, name: 'Fit Life Gym', rating: 4.2, website: 'No' },
    { id: 6, name: 'Sweet Treats Bakery', rating: 4.7, website: 'No' },
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    setHasSearched(true)

    // Filter sample data
    let filtered = sampleData

    if (noWebsiteOnly) {
      filtered = filtered.filter(business => business.website === 'No')
    }

    setResults(filtered)
  }

  return (
    <div className="search-page">
      <section className="search-section">
        <h1>Find Local Businesses</h1>

        <form onSubmit={handleSearch} className="search-form">
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              id="location"
              type="text"
              placeholder="Enter city, neighborhood, or area"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="businessType">Business Type</label>
            <select
              id="businessType"
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
              required
            >
              <option value="">Select a business type</option>
              {businessTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="form-group checkbox-group">
            <input
              id="noWebsite"
              type="checkbox"
              checked={noWebsiteOnly}
              onChange={(e) => setNoWebsiteOnly(e.target.checked)}
            />
            <label htmlFor="noWebsite">No website only</label>
          </div>

          <button type="submit" className="search-button">Search</button>
        </form>
      </section>

      {hasSearched && (
        <section className="results-section">
          {results.length > 0 ? (
            <div className="results-container">
              <h2>Results ({results.length})</h2>
              <table className="results-table">
                <thead>
                  <tr>
                    <th>Business</th>
                    <th>Rating</th>
                    <th>Website</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((business) => (
                    <tr key={business.id}>
                      <td>{business.name}</td>
                      <td className="rating">{business.rating}★</td>
                      <td className={`website ${business.website === 'No' ? 'no-website' : 'has-website'}`}>
                        {business.website}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="no-results">
              <p>No results found. Try adjusting your filters.</p>
            </div>
          )}
        </section>
      )}

      {!hasSearched && (
        <section className="demo-info">
          <p>Sample data shown. The live version will pull from Google Maps.</p>
        </section>
      )}
    </div>
  )
}
