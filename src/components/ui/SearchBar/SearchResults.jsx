import { useData } from "../../../hooks/useData";
import styles from "./SearchResults.module.css";

export default function SearchResults({ query }) {
  const posts = useData("https://cloud.codesupply.co/endpoint/react/data.json"); //Еndpoint does not support filtering and query(search)

  const lowerQuery = query.trim().toLowerCase();
  const filteredPosts = posts.filter((item) => {
    const lowerTitle = item.title.toLowerCase();
    return (
      lowerTitle.startsWith(lowerQuery) ||
      lowerTitle.indexOf(" " + lowerQuery) !== -1
    );
  });

  if (filteredPosts.length === 0) {
    return (
      <p>
        No matches for <i>"{query}"</i>
      </p>
    );
  }

  return (
    <ul className={styles.list}>
      {filteredPosts.map((post) => (
        <li key={post.title} className={styles.item}>
          <a href="#">{post.title}</a>
        </li>
      ))}
    </ul>
  );
}
