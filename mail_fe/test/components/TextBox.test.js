import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
import TextBox from '../src/components/TextBox'

Enzyme.configure({ adapter: new Adapter() })
describe('Component TextBox', () => {
  it('TextBox should have type', () => {
    // const wrapper = shallow(<TextBox type="type" />)
    // expect(wrapper.find('input').prop('type')).toEqual('type')
  })
  
  it('TextBox should have value', () => {
    // const wrapper = shallow(<TextBox value="value" />)
    // expect(wrapper.find('input').prop('value')).toEqual('value')
  })

})