import { render, screen} from '@testing-library/react'
import { TaskComponent } from './TaskComponent'

describe("Describe of task component", () => {
  it.only("should render the task component", () => {

    render(<TaskComponent text="task" />);
    const taskComponent = screen.getByText('task');
    expect(taskComponent).toBeInTheDocument();
  })

})