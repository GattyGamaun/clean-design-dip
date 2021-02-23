module.exports = class PublishService {
    publishNews(newsType, newsArticles) {
        const articles = newsArticles.map(article => this.formatArticle(article)).join('\n');
        return `${newsType} News:\n${articles}`;
    }

    formatArticle(article) {
        return article.newsType === 'Regional' ?
            `<${article.headline}>` :
            `${article.headline} -- ${article.description}`;
    }
}
