import userEvent from '@testing-library/user-event';
import TextInput from './TextInput';
import { render, screen } from '@testing-library/react';

test('TextInput Components Test', async () => {
  const user = userEvent.setup();
  render(<TextInput />);

  const textElement = screen.getByText('Entered:');
  expect(textElement).toBeInTheDocument();

  const inputElement = screen.getByLabelText('Text Input');
  await user.type(inputElement, 'Hello World');
  expect(screen.getByText('Entered: Hello World'));
});
