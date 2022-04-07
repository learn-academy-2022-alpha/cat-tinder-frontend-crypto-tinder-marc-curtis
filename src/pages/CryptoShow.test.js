import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CryptoShow from './CryptoShow'
Enzyme.configure({ adapter: new Adapter() })



describe("When CryptoShow renders", () => {
    let cryptos = {
        id: 1,
        name: "Bitcoin",
        age: 13,
        creator: "Satoshi Nakamoto",
        image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }
    let renderedCryptoShow
    beforeEach(() => {
        renderedCryptoShow = shallow(<CryptoShow />)
    })
    it("displays a header", () => {
        const renderedText = renderedCryptoShow.find("h3").text()
        expect(renderedText).toEqual("Crypto Description")
    })
    it("displays a card", () => {
        const cryptoShow = shallow(<CryptoShow crypto={cryptos} />)
        const card = cryptoShow.find("Card")
        expect(card.length).toEqual(1)
        const cardTitle = cryptoShow.find("CardTitle")
        expect(cardTitle.length).toEqual(1)
        const cardText = cryptoShow.find("CardText")
        expect(cardText.length).toEqual(1)
        const showImage = cryptoShow.find("img")
        expect(showImage.length).toEqual(1)
    })
})
