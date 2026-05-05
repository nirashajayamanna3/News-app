import { useEffect, useState } from "react";
import ArticleCard from "../components/articlesCard";

function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => {
        setArticles(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  // 🔍 Search filter
  const filtered = articles.filter(article =>
    article.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>News Feed</h1>

      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {filtered.map(article => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}

export default Home;