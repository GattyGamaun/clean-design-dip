const PublishService = require('./PublishService');

module.exports = class RegionalNews extends PublishService {
    publishNews(articles) {
        return `Regional News:\n${this.formatArticles(articles)}`;
    }

    formatArticle(article) {
        return `<${article.headline}>`;
    }
}
