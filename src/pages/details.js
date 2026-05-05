import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setArticle(data));
  }, [id]);

  if (!article) {
    return <h3 className="text-center mt-5">Loading...</h3>;
  }

  return (
    <div className="container mt-4">
      <div className="card shadow p-4">
        <h2 className="mb-3">{article.title}</h2>
        <p>{article.body}</p>
      </div>
    </div>
  );
}

export default Detail;