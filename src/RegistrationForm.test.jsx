import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe';
import userEvent from '@testing-library/user-event'
import RegistrationForm from './RegistrationForm'
expect.extend(toHaveNoViolations);

describe('Registration Form', () => {
  it('should be accessible', async () => {
    const submitHandlerMock = vi.fn()
    const { container } = render(<RegistrationForm submitHandler={submitHandlerMock} />)
    const results = await axe(container)
  
    expect(results).toHaveNoViolations()
  });

  it('should be able to submit using a keyboard only', async () => {
    const submitHandlerMock = vi.fn()
    const expectedEmail = 'example@email.com'
    const expectedName = 'kylie'
    render(<RegistrationForm submitHandler={submitHandlerMock} />)
    
    await userEvent.tab()
    expect(screen.getByLabelText(/name/i)).toHaveFocus()

    await userEvent.keyboard(expectedName)
    
    await userEvent.tab()
    expect(screen.getByLabelText(/email/i)).toHaveFocus()

    await userEvent.keyboard(expectedEmail)
    
    await userEvent.tab()
    expect(screen.getByRole('button', { name: /submit/i })).toHaveFocus()

    await userEvent.keyboard('{Enter}')
    expect(submitHandlerMock).toHaveBeenCalledWith({
      email: expectedEmail,
      name: expectedName
    })
  })
})