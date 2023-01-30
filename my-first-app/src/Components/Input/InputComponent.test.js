import {fireEvent, render, screen} from '@testing-library/react'
import { InputComponent } from './InputComponent'

describe("Describe of input component", () => {
  it("should render the input component", () => {

    render(<InputComponent/>);
    const inputComponent = screen.getByPlaceholderText('add task');
    expect(inputComponent).toBeInTheDocument();
  })

  it("should execute function on change", () => {
    const handleChange = jest.fn();

    render(<InputComponent onChange={ handleChange } />);
    const inputComponent = screen.getByPlaceholderText('add task');
    fireEvent.change(inputComponent, { target: { value: 'test' } });
    expect(handleChange).toHaveBeenCalled();
  })

  it("should have the correct value", () => {
    const handleChange = jest.fn();

    render(<InputComponent onChange={ handleChange } />);
    const inputComponent = screen.getByPlaceholderText('add task');
    fireEvent.change(inputComponent, { target: { value: 'test' } });
    expect(inputComponent.value).toBe("test");
  })

})