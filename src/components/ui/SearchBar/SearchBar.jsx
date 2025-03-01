import { Suspense, useState } from "react";
import SearchResults from "./SearchResults";
import SearchIcon from "../../../assets/icons/search.svg?react";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <>
      <label className={styles.searchField}>
        <SearchIcon />
        <input
          autoFocus
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.searchInput}
        />
      </label>
      <Suspense fallback={<h2>Loading...</h2>}>
        {query && <SearchResults query={query} />}
      </Suspense>
    </>
  );
}
