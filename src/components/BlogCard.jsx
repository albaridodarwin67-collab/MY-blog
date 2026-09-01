import { Link } from 'react-router-dom';

export default function BlogCard({ post }) {
  return (
    <Link to={`/blog/${post.id}`} className="card-link">
      <div className="blog-card">
        <div className="card-image-box">
          <img src={post.image} alt={post.title} />
        </div>
        <div className="card-content">
          <span className="card-category">{post.category}</span>
          <span className="card-date">{post.date}</span>
          <h3 className="card-title">{post.title}</h3>
          <div className="card-author">
            <div className="author-avatar">{post.author.charAt(0)}</div>
            <span>{post.author}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}