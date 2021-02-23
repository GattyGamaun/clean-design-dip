const EntityManager = require('./thirdparty/EntityManager');
const PublishService = require('./publishing/PublishService');

module.exports = class NewsBroadcaster {
    constructor() {
        this.entityManager =  new EntityManager();
        this.publishService = new PublishService();
    }

    broadcastNews(newsType) {
        const newsArticles = this.entityManager.getAll().filter(article => newsType === article.newsType);
        return this.publishService.publishNews(newsType, newsArticles);
    }
}
