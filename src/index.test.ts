import index from '.'

describe('Test `index`', () => {
  it('should return \'Hello World!\' when given an empty arugment.', () => {
    const result = index()
    expect(result).toBe('Hello World!')
  })
})
