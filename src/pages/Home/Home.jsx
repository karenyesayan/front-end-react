import { useData } from "../../hooks/useData";
import Card from "../../components/ui/Card/Card";
import styles from "./Home.module.css";

export default function Home() {
  const posts = useData("https://cloud.codesupply.co/endpoint/react/data.json");

  return (
    <ul className={styles.list}>
      {posts.map((post) => (
        <li key={post.title}>
          <Card post={post} />
        </li>
      ))}
    </ul>
  );
}
