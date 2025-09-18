import articles from "../data/articals"

export const MainContent = () => {
    return <main>
        <h2>Today's News</h2>
        {articles.map(article => (
            <article key={article.id} style={{ marginBottom: "20px" }}>
              <h2>{article.title}</h2>
              <img
                src={article.image}
                alt={article.title}
                style={{ width: "250px", height: "150px", objectFit: "cover" }}
              />
              <p>{article.text}</p>
            </article>
          ))}
      </main>
}