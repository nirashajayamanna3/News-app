import { Link } from "react-router-dom";

function ArticleCard({ article }) {
  return (
    <div style={{border: "1px solid gray", margin: "10px", padding: "10px"}}>
      <h3>{article.title}</h3>
      <Link to={`/article/${article.id}`}>Read More</Link>
    </div>
  );
}

export default ArticleCard;