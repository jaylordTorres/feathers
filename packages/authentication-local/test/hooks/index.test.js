const { expect } = require('chai');
const hooks = require('../../lib/hooks');

describe('hooks', () => {
  it('is CommonJS compatible', () => {
    expect(typeof require('../../lib/hooks')).to.equal('object');
  });

  it('is ES6 compatible', () => {
    expect(typeof hooks).to.equal('object');
  });

  it('exposes hashPassword hook', () => {
    expect(typeof hooks.hashPassword).to.equal('function');
  });
});
