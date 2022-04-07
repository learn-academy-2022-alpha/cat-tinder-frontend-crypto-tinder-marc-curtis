import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CryptoNew from './CryptoNew'
Enzyme.configure({ adapter: new Adapter() })



describe("When CryptoNew renders", () => {
    let newCrypto
    beforeEach(() => {
        newCrypto = shallow(<CryptoNew />)
    })
    it("displays a heading", () => {
        const renderedText = newCrypto.find("h3").text()
        expect(renderedText).toEqual("Create A New Crypto Profile")
    })
    it("displays a form", () => {
        const cryptoNew = shallow(<CryptoNew />)
        const newForm = cryptoNew.find("Form")
        expect(newForm.length).toEqual(1)
    })
    it("displays a crypto name input", () => {
        const cryptoNew = shallow(<CryptoNew />)
        const catNewNameInput = cryptoNew.find("[name='name']")
        expect(catNewNameInput.length).toEqual(1)
    })
    it("displays a crypto age input", () => {
        const cryptoNew = shallow(<CryptoNew />)
        const catNewAgeInput = cryptoNew.find("[name='age']")
        expect(catNewAgeInput.length).toEqual(1)
    })
    it("displays a crypto creator input", () => {
        const cryptoNew = shallow(<CryptoNew />)
        const catNewEnjoysInput = cryptoNew.find("[name='creator']")
        expect(catNewEnjoysInput.length).toEqual(1)
    })
    it("displays a crypto image input", () => {
        const cryptoNew = shallow(<CryptoNew />)
        const catNewImageInput = cryptoNew.find("[name='image']")
        expect(catNewImageInput.length).toEqual(1)
    })
})
