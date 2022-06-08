module.exports = class PublishService {
    publishNews() {
        throw new Error('This method must be implemented');
    }

    formatArticle() {
        throw new Error('This method must be implemented');
    }

    formatArticles(articles) {
        return articles.map(article => this.formatArticle(article)).join('\n');
    }
}
