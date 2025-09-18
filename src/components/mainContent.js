import articles from "../data/articals"
import "../css/mainContent.css"

export const MainContent = () => {
    return (
        <div className="main-content">
            <div className="hero-section">
                <h1 className="page-title">Todays News</h1>
<p className="page-subtitle">Hot and current updates from around the world</p>            </div>
            
            <div className="articles-grid">
                {articles.map(article => (
                    <article key={article.id} className="article-card">
                        <div className="article-image-container">
                            <img
                                src={article.image}
                                alt={article.title}
                                className="article-image"
                            />
                            <div className="article-overlay"></div>
                        </div>
                        
                        <div className="article-content">
                            <h3 className="article-title">{article.title}</h3>
                            <p className="article-text">{article.text}</p>
                            
                            <div className="article-footer">
                                <span className="article-date">
                                    {new Date().toLocaleDateString('he-IL')}
                                </span>
                                <button className="read-more-btn">קרא עוד</button>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}