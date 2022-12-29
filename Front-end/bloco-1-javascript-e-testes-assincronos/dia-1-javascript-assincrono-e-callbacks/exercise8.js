beforeEach(() => console.log('1 - beforeEach')); // primeiro
afterEach(() => console.log('1 - afterEach')); // terceiro

test('', () => console.log('1 - test')); //segundo

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));// primeiro
  afterEach(() => console.log('2 - afterEach')); // terceiro

  test('', () => console.log('2 - test')); //segundo
});
