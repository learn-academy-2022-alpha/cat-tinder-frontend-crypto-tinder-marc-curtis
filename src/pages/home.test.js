// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import Home from './Home'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({adapter: new Adapter()})

let renderedHome = shallow(<Home />)

describe("When Home renders", () => {
  it("display home page", () => {
    const renderedText = renderedHome.find("h1").text()
    expect(renderedText).toEqual("Home")
  })
})
describe("When Home renders image", () => {
  it("display home image", () => {
    const renderedText = renderedHome.find("img")
    expect(renderedText.length).toEqual(1)
  })
})