export default function SubNav({ categories, activeTab, onTabChange }) {
  return (
    <div className="sub-nav-wrapper">
      <div className="sub-nav">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`sub-nav-item ${activeTab === cat ? "active" : ""}`}
            onClick={() => onTabChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}