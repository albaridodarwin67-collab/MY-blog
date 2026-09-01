// src/pages/BlogDetailPage.jsx
import { useParams, Link } from 'react-router-dom';
import { posts } from '../posts';

export default function BlogDetailPage() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="not-found-container">
        <h2>Destination Guide Not Found</h2>
        <p>The getaway spot you are looking for doesn't exist or has been removed.</p>
        <Link to="/blog" className="back-btn">← Back to All Guides</Link>
      </div>
    );
  }

  return (
    <article className="detail-page-wrapper">
      <div className="detail-page-container">
        {/* Navigation Link */}
        <Link to="/blog" className="back-link">
          ← Back to All Guides
        </Link>

        {/* Header Section */}
        <header className="article-header">
          <span className="article-category">{post.category}</span>
          <h1 className="article-title">{post.title}</h1>
          
          {/* Metadata Bar */}
          <div className="article-meta-bar">
            <div className="meta-item">
              <span className="meta-icon">📍</span>
              <div>
                <span className="meta-label">Location</span>
                <span className="meta-value">{post.location}</span>
              </div>
            </div>
            <div className="meta-item">
              <span className="meta-icon">⏱️</span>
              <div>
                <span className="meta-label">Travel Time</span>
                <span className="meta-value">{post.travelTime}</span>
              </div>
            </div>
            <div className="meta-item">
              <span className="meta-icon">📅</span>
              <div>
                <span className="meta-label">Published</span>
                <span className="meta-value">{post.date}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="article-hero-box">
          <img src={post.image} alt={post.title} className="article-hero-image" />
        </div>

        {/* Article Body */}
        <div className="article-content">
          <section className="content-block">
            <h2 className="section-heading">Overview & Experience</h2>
            <p className="lead-paragraph">{post.content}</p>
          </section>

          {/* Key Highlights Card */}
          <div className="highlights-box">
            <h3>✨ Key Highlights</h3>
            <ul>
              <li>Guided interactive tours suitable for families and solo travelers</li>
              <li>Local food stalls, fresh fruits, and authentic regional delicacies nearby</li>
              <li>Scenic photo spots perfect for capturing travel memories</li>
            </ul>
          </div>

          <section className="content-block">
            <h2 className="section-heading">Traveler Tips</h2>
            <div className="tips-grid">
              <div className="tip-card">
                <h4>☀️ Best Time to Visit</h4>
                <p>Early morning to avoid midday heat and enjoy full access to daylight activities.</p>
              </div>
              <div className="tip-card">
                <h4>🎒 What to Bring</h4>
                <p>Comfortable footwear, water, sun protection, and extra cash for local entrance fees.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}