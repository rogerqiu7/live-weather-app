// import state to manage the search term
import { useState } from 'react';

// create searchForm component for user input, displays error message if location not found
export default function SearchForm({ onSearch, error }) {
    // state to hold the current search term
    const [term, setTerm] = useState('');

    // submit variable gets plugged into html form element
    // form submissions handler: prevents form default behvior of reloading the page
    // ignores whitespace, trim the input, calls the parent component's onSearch function
    const submit = (e) => {
        e.preventDefault();
        if (!term.trim()) return;
        onSearch(term.trim());
    };

    // renders the search form with an input field and a submit button
    // displays an error message if the error prop is true
    return (
        <div className="search">
            {/* when the form is submitted, call the submit function */}
            <form onSubmit={submit}>
                <div className="form-group">
                    {/* show current state value, updates state on every keystroke */}
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
                    {/* only show error message if error prop is true */}
                    <span className="error-msg" style={{ display: error ? 'block' : 'none' }}>
                        No matching location found!
                    </span>
                </div>
            </form>
        </div>
    );
}
