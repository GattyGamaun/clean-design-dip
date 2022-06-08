module.exports = class NewsBroadcaster {
    constructor(entityManager) {
        this.entityManager = entityManager;
    }

    broadcastNews(newsType) {
        const newsArticles = this.entityManager.getAll().filter(article => newsType === article.newsType);
        return newsType.publishNews(newsArticles);
    }
}
