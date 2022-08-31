import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

it.todo('should render a button with the text containing view upgraded answer')
it.todo('should render a disabled button with the class of primary')
it.todo('should render a button with the class of secondary')
it.todo('should render a disabled button with the class of secondary')
it.todo('should render a disabled button with the class of white')
it.todo('should render a disabled button with the class of secondary')
it.todo('should render a button as a Link, checks for href attribute and primary class')

describe('Home', () => {
  it('renders a button called upgrade answer', () => {
    render(<Home />)
    const upgradeButton = screen.getByRole('button', { name: 'View Upgraded Answer' })
    expect(upgradeButton).toBeInTheDocument()
  })
})