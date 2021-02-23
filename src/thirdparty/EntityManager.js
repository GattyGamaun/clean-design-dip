const NewsArticleTable = require('./NewsArticleTable');

module.exports = class EntityManager {
    getAll() {
        return new Array(10).fill().map(
            (_, i) => new NewsArticleTable(
                i,
                `Headline ${i}`,
                `News description ${i}`,
                i < 4 ? 'Regional' : 'National'
            )
        );
    }
}
