import { useState } from 'react';

// SearchForm component handles user input for searching a city's weather
// props: onSearch (function to call with the search term), error (boolean indicating if there's an error)
export default function SearchForm({ onSearch, error }) {
    const [term, setTerm] = useState('');

    // Handles form submission, prevents empty searches, and calls the onSearch prop with the trimmed term
    // call onSearch with the search term
    const submit = (e) => {
        e.preventDefault();
        if (!term.trim()) return;
        onSearch(term.trim());
    };

    // Renders the search form with an input field and a submit button
    // Displays an error message if the error prop is true
    return (
        <div className="search">
            <form onSubmit={submit}>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Search city"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        required
                    />
                    <button type="submit" className="submit-btn">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                    <br />
                    <span className="error-msg" style={{ display: error ? 'block' : 'none' }}>
                        No matching location found!
                    </span>
                </div>
            </form>
        </div>
    );
}
