import React from 'react'
import { render } from 'react-dom'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ListUsers from '../../../components/users/ListUsers';

Enzyme.configure({ adapter: new Adapter() })
// const { shallow } = Enzyme

describe('ListUsers', () => {
    it('render without crash', () => {
        const div = document.createElement('div')
        render(<ListUsers />, div)
    })
})