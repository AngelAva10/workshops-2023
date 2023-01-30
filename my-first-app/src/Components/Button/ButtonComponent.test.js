import {fireEvent, render, screen} from '@testing-library/react'
import { ButtonComponent } from './ButtonComponent'

describe("Describe of button component", () => {
  it("should render the input component", () => {

    render(<ButtonComponent name="add" />);
    const buttonComponent = screen.getByRole('button', { name: 'add' });
    expect(buttonComponent).toBeInTheDocument();
  })

  it("should execute function on click", () => {
    const handleClick = jest.fn();

    render(<ButtonComponent name="add" onClick={ handleClick } />);
    const buttonComponent = screen.getByRole('button', { name: 'add' });
    fireEvent.click(buttonComponent);
    expect(handleClick).toHaveBeenCalledTimes(1);
  })

})