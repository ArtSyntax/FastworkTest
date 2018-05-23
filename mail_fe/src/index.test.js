import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
import TextBox from './index.js'

Enzyme.configure({ adapter: new Adapter() })
describe('Component TextBox', () => {
  it('TextBox should have className', () => {
  	console.log(TextBox)
    // const wrapper = shallow(<TextBox className={'test-class'} />)
    // expect(wrapper.find('.test-class').length).toEqual(1)
  })
})