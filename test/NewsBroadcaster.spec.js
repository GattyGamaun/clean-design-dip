const assert = require('assert');
const NewsBroadcaster = require('../src/NewsBroadcaster');

describe('NewsBroadcaster', () => {
    let newsBroadcaster;

    beforeEach(() => {
        newsBroadcaster = new NewsBroadcaster();
    });

    it('should publish regional news', () => {
        const regional = newsBroadcaster.broadcastNews('Regional');
        assert(regional, regional.startsWith('Regional News:'));
        assert(regional, regional.includes('<'));
        assert(regional, regional.includes('>'));
    });

    it('should publish national news', () => {
        const national = newsBroadcaster.broadcastNews('National');
        assert(national, national.startsWith('National News:'));
        assert(national, !national.includes('<'));
        assert(national, !national.includes('>'));
        assert(national, national.includes(' -- '));
    });
});
