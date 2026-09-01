import { useState } from 'react';
import SubNav from '../components/SubNav';
import BlogCard from '../components/BlogCard';
import { posts } from '../posts';

export default function BlogFeedPage() {
  const [activeTab, setActiveTab] = useState("RECENT");
  const categories = ["RECENT", "BEACH", "HIGHLANDS", "NATURE", "ECO-PARK"];

  const filteredPosts = activeTab === "RECENT"
    ? posts
    : posts.filter(post => post.category === activeTab);

  return (
    <div className="blog-page-container">
      <SubNav categories={categories} activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="cards-grid">
        {filteredPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}