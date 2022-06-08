const assert = require('assert');
const NewsBroadcaster = require('../src/NewsBroadcaster');
const EntityManager = require('../src/thirdparty/EntityManager');
const NationalNews = require('../src/publishing/NationalNews');
const RegionalNews = require('../src/publishing/RegionalNews');

describe('NewsBroadcaster', () => {
    let newsBroadcaster;
    let entityManager;

    beforeEach(() => {
        entityManager = new EntityManager();
        newsBroadcaster = new NewsBroadcaster(entityManager);
    });

    it('should publish regional news', () => {
        const regional = newsBroadcaster.broadcastNews(new RegionalNews());
        assert(regional, regional.startsWith('Regional News:'));
        assert(regional, regional.includes('<'));
        assert(regional, regional.includes('>'));
    });

    it('should publish national news', () => {
        const national = newsBroadcaster.broadcastNews(new NationalNews());
        assert(national, national.startsWith('National News:'));
        assert(national, !national.includes('<'));
        assert(national, !national.includes('>'));
        assert(national, national.includes(' -- '));
    });
});
