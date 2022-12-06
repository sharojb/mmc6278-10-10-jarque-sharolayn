const { expect } = require('chai')
const {
  getPounds,
  getFeetAndInches
} = require('../util/convertUnits')

describe('unit conversion helpers', () => {
  describe('getPounds', () => {
    // Weight of Snorlax
    it('should convert 4600 hectograms to "1014 pounds"', async()=>{
      let response = getPounds(4600)
      expect(response).to.equal("1014 pounds")
    })
    // Weight of Gengar
    it('should convert 400 hectograms to "88 pounds"', async()=>{
      let response = getPounds(400)
      expect(response).to.equal("88 pounds")
    })
    // Weight of Scyther
    it('should convert 560 hectograms to "123 pounds"', async()=>{
      let response = getPounds(560)
      expect(response).to.equal("123 pounds")
    })
  })
  describe('getFeetAndInches', () => {
    // Height of Gengar
    it('should convert 15 decimeters to "4 feet 11 inches"', async()=>{
      let response = getFeetAndInches(15)
      expect(response).to.equal("4 feet 11 inches")
    })
    // Height of Snorlax
    it('should convert 21 decimeters to "6 feet 10 inches"', async()=>{
      let response = getFeetAndInches(21)
      expect(response).to.equal("6 feet 10 inches")
    })
    // Height of Gyarados
    it('should convert 65 decimeters to "21 feet 3 inches"', async()=>{
      let response = getFeetAndInches(65)
      expect(response).to.equal("21 feet 3 inches")
    })
  })
})
