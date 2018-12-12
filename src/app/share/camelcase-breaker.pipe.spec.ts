import { CamelcaseBreakerPipe } from './camelcase-breaker.pipe';

describe('CamelcaseBreakerPipe', () => {
  it('create an instance', () => {
    const pipe = new CamelcaseBreakerPipe();
    expect(pipe).toBeTruthy();
  });
});
