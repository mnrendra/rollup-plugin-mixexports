import { main as mainStub } from '@tests/stubs'
import main from './main'

describe('Test `main`', () => {
  it('should return \'Hello World!\' when given an empty arugment.', () => {
    const result = main()
    expect(result).toBe(mainStub())
  })
})
