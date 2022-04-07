import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CryptoIndex from './CryptoIndex'
Enzyme.configure({ adapter: new Adapter() })



describe("When CryptoIndex renders", () => {
    let renderedCryptoIndex
    beforeEach(() => {
        renderedCryptoIndex = shallow(<CryptoIndex />)
    })
    it("displays a heading", () => {
        const renderedText = renderedCryptoIndex.find("h3").text()
        expect(renderedText).toEqual("Meet the Cryptos!")
    })
})
