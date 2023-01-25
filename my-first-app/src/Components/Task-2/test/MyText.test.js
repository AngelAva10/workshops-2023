import { fireEvent, render, screen} from '@testing-library/react';
import { MyText } from '../MyText';

it('render the correct input Function', () => {
    render(<MyText/>);
    const elemento = screen.getByLabelText('Message');
    expect(elemento).toBeInTheDocument();
});


it('render the correct input Function', () => {
    render(<MyText/>);
    const elemento = screen.getByLabelText('Message');
    fireEvent.change(elemento, {target: {value: 'information'}});
    const textDisplay = screen.getByText('inforyymation');
    expect(textDisplay).toBeInTheDocument();
});
