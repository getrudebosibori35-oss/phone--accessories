import { useRef } from "react";

function SearchBar({ searchTerm, onSearchChange }) {
  const searchInput = useRef(null);

  function focusSearch() {
    searchInput.current.focus();
  }

  return (
    <div className="search-container">
      <input
        ref={searchInput}
        type="text"
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Search by product name or category..."
        aria-label="Search products"
      />

      <button
        type="button"
        onClick={focusSearch}
        className="focus-button"
      >
        Focus Search
      </button>
    </div>
  );
}

export default SearchBar;
