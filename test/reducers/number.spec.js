import expect from 'expect'
import number from '../../reducers/number'

describe('reducers', () => {
  describe('number', () => {

 
    it('should handle ADD_ONE action', () => {
      expect(number(0, {type: 'ADD_ONE'})).toBe(1)
    })


  })
})
