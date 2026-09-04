import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import { posts } from '../posts';

export default function HomePage() {
  const navigate = useNavigate();
  const featuredPost = posts[0];
  const recentPosts = posts.slice(1, 4);

  // Functional navigation for category cards
  const handleCategoryClick = (category) => {
    navigate('/blog', { state: { selectedCategory: category } });
  };

  return (
    <div className="home-wrapper">
      {/* HERO BANNER */}
      <section className="hero-banner">
        <div className="hero-content">
          <span className="hero-badge">TRAVEL GUIDE</span>
          <h1 className="hero-title">Explore Top Vacation Spots in Davao Region</h1>
          <p className="hero-subtitle">
            From white-sand beaches in Samal to foggy highland escapes in BuDa, 
            discover your next destination with our local travel guides.
          </p>
          <div className="hero-actions">
            <Link to="/blog" className="btn-primary pop-btn">
              Explore All Guides →
            </Link>
            <Link to="/about" className="btn-secondary pop-btn">
              About Davao Getaways
            </Link>
          </div>
        </div>
      </section>

      <div className="home-container">
        {/* FEATURED DESTINATION */}
        <section className="featured-section">
          <div className="section-header">
            <h2 className="section-title">Featured Destination</h2>
            <p className="section-subtitle">Our top recommendation for your weekend getaway</p>
          </div>

          <div className="featured-card">
            <div className="featured-img-box">
              <img src={featuredPost.image} alt={featuredPost.title} />
              <span className="featured-tag">{featuredPost.category}</span>
            </div>

            <div className="featured-info">
              <div className="featured-header-text">
                <span className="meta-text">📍 {featuredPost.location}</span>
                <h3>{featuredPost.title}</h3>
                <p>{featuredPost.summary}</p>
              </div>

              <div className="featured-footer">
                <span className="travel-time">⏱️ {featuredPost.travelTime}</span>
                <Link to={`/blog/${featuredPost.id}`} className="read-btn pop-btn">
                  Read Full Guide →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FUNCTIONAL CATEGORY QUICK-LINKS */}
        <section className="categories-section">
          <div className="section-header">
            <h2 className="section-title">Browse by Experience</h2>
            <p className="section-subtitle">Click a category to filter vacation spots</p>
          </div>

          <div className="category-grid">
            <div 
              className="cat-card pop-card" 
              onClick={() => handleCategoryClick('BEACH')}
              role="button"
              tabIndex={0}
            >
              <span className="cat-icon">🏖️</span>
              <h4>Beaches</h4>
              <p>Samal & Dahican Coastlines</p>
            </div>

            <div 
              className="cat-card pop-card" 
              onClick={() => handleCategoryClick('HIGHLANDS')}
              role="button"
              tabIndex={0}
            >
              <span className="cat-icon">🌲</span>
              <h4>Highlands</h4>
              <p>Cool Pines in BuDa</p>
            </div>

            <div 
              className="cat-card pop-card" 
              onClick={() => handleCategoryClick('ECO-PARK')}
              role="button"
              tabIndex={0}
            >
              <span className="cat-icon">🌿</span>
              <h4>Eco-Parks & Nature</h4>
              <p>Eden & Malagos Reserves</p>
            </div>
          </div>
        </section>

        {/* RECENT POSTS */}
        <section className="recent-section">
          <div className="section-header-flex">
            <div>
              <h2 className="section-title">Recent Travel Guides</h2>
              <p className="section-subtitle">Latest articles and getaway spots</p>
            </div>
            <Link to="/blog" className="see-all-link pop-link">
              View All →
            </Link>
          </div>

          <div className="cards-grid">
            {recentPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}