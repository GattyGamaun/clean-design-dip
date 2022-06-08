const PublishService = require('./PublishService');

module.exports = class NationalNews extends PublishService {
    publishNews(articles) {
        return `National News:\n${this.formatArticles(articles)}`;
    }

    formatArticle(article) {
        return `${article.headline} -- ${article.description}`;
    }
}
