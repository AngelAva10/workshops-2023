import { fireEvent, render, screen} from '@testing-library/react'
import { TodoList } from './TodoList'

describe("Describe of TodoList component", () => {
  
  it("should render the task component", () => {
    render(<TodoList/>);
    const input = screen.getByPlaceholderText('add task')
    const button = screen.getByRole('button', { name: 'add' });
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  })

  it("should create a new task", () => {
    render(<TodoList/>);
    const input = screen.getByPlaceholderText('add task')
    const button = screen.getByRole('button', { name: 'add' });
    fireEvent.change(input, { target: { value: 'task 1' } });
    fireEvent.click(button)
    const task = screen.getByText('task 1');
    expect(task).toBeInTheDocument();
  })

  it("should delete a task", () => {
    render(<TodoList/>);
    const input = screen.getByPlaceholderText('add task')
    const button = screen.getByRole('button', { name: 'add' });
    fireEvent.change(input, { target: { value: 'task 1' } });
    fireEvent.click(button)
    const task = screen.getByText('task 1');
    expect(task).toBeInTheDocument();
    const deleteButton = screen.getByRole('button', { name: 'delete' });
    fireEvent.click(deleteButton);
    expect(task).not.toBeInTheDocument();
  })

  it("should edit a task", () => {
    render(<TodoList/>);
    const input = screen.getByPlaceholderText('add task')
    const button = screen.getByRole('button', { name: 'add' });
    fireEvent.change(input, { target: { value: 'task 1' } });
    fireEvent.click(button)
    const task = screen.getByText('task 1');
    expect(task).toBeInTheDocument();
    const editButton = screen.getByRole('button', { name: 'edit' });
    fireEvent.click(editButton);
    const inputEdit = screen.getByPlaceholderText('task 1');
    expect(inputEdit).toBeInTheDocument();
    fireEvent.change(inputEdit, { target: { value: 'task 1 edited' } });
    const buttonSaveEdit = screen.getByRole('button', { name: 'SaveEdit' } )
    expect(buttonSaveEdit).toBeInTheDocument();
    fireEvent.click(buttonSaveEdit);
    const taskEdited = screen.getByText('task 1 edited');
    expect(taskEdited).toBeInTheDocument();
  })

})