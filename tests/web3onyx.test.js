// tests/web3onyx.test.js
/**
 * Tests for Web3Onyx module
 */

const { Web3Onyx } = require('../src/web3onyx');

describe('Web3Onyx', () => {
    let instance;

    beforeEach(() => {
        instance = new Web3Onyx({ verbose: false });
    });

    test('should create instance with default config', () => {
        expect(instance).toBeDefined();
        expect(instance.timeout).toBe(30000);
        expect(instance.maxRetries).toBe(3);
    });

    test('should execute successfully', async () => {
        const result = await instance.execute();
        expect(result.success).toBe(true);
        expect(result.message).toBeTruthy();
    });

    test('should process data', async () => {
        const result = await instance.process();
        expect(result.processed).toBe(true);
    });
});
