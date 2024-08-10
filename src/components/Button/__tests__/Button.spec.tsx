import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Button } from '..'
import { themes } from '../../../themes'

describe('Button Component', () => {
    const mockOnClick = jest.fn()

    afterEach(() => {
        jest.clearAllMocks()
    })

    test('renders the Button with default props', () => {
        render(<Button onClick={mockOnClick}>Click Me</Button>)

        const buttonElement = screen.getByRole('button')
        expect(buttonElement).toBeInTheDocument()
        expect(buttonElement).toHaveTextContent('Click Me')
        expect(buttonElement).toHaveStyle(
            `background-color: ${themes.colors.primary}`,
        )
        expect(buttonElement).toHaveStyle(
            `color: ${themes.colors.primaryLight}`,
        )
    })

    test('renders the Button with isDark prop', () => {
        render(
            <Button onClick={mockOnClick} isDark>
                Dark Mode
            </Button>,
        )

        const buttonElement = screen.getByRole('button')
        expect(buttonElement).toHaveStyle(
            `background-color: ${themes.colors.primaryDark}`,
        )
        expect(buttonElement).toHaveStyle(
            `color: ${themes.colors.highlightPrimary}`,
        )
    })

    test('renders the Button with disabled prop', () => {
        render(
            <Button onClick={mockOnClick} disabled>
                Disabled
            </Button>,
        )

        const buttonElement = screen.getByRole('button')
        expect(buttonElement).toBeDisabled()
        expect(buttonElement).toHaveStyle(
            `background-color: ${themes.colors.primaryLight}`,
        )
        expect(buttonElement).toHaveStyle(
            `color: ${themes.colors.disabledPrimary}`,
        )
    })

    test('calls onClick handler when clicked', () => {
        render(<Button onClick={mockOnClick}>Click Me</Button>)

        const buttonElement = screen.getByRole('button')
        fireEvent.click(buttonElement)

        expect(mockOnClick).toHaveBeenCalledTimes(1)
    })

    test('does not call onClick handler when disabled', () => {
        render(
            <Button onClick={mockOnClick} disabled>
                Disabled
            </Button>,
        )

        const buttonElement = screen.getByRole('button')
        fireEvent.click(buttonElement)

        expect(mockOnClick).not.toHaveBeenCalled()
    })

    test('renders with provided id and name', () => {
        render(
            <Button onClick={mockOnClick} id='test-id' name='test-name'>
                With ID and Name
            </Button>,
        )

        const buttonElement = screen.getByRole('button')
        expect(buttonElement).toHaveAttribute('id', 'test-id')
        expect(buttonElement).toHaveAttribute('name', 'test-name')
    })
})
