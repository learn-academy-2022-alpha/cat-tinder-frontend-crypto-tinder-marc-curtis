import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './Header'
Enzyme.configure({adapter: new Adapter()})

describe("When header renders", () => {
  it("display header page", () => {
    const renderedHeader = shallow(<Header />)
    const renderedText = renderedHeader.find("h1").text()
    expect(renderedText).toEqual("Welcome to Crypto Tinder!!!")
  })
})