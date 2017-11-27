import { greet } from './greet';

describe('compute', () => {
    it('should include the name in the message', () => {
        expect(greet('Albert')).toContain('Albert');
    });

});
