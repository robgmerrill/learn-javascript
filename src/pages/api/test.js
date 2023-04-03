import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Greeting from '../components/Greeting';
import CodeEditor from '../components/CodeEditor';

describe('Greeting', () => {
  it('should render a greeting message with the name provided', () => {
    const { getByText } = render(<Greeting name="John" />);
    const greetingMessage = getByText('Hello John');
    expect(greetingMessage).toBeInTheDocument();
  });
});

describe('CodeEditor', () => {
  it('should render a code editor and trigger onChange with new code', () => {
    const handleChange = jest.fn();
    const { getByLabelText } = render(
      <CodeEditor value="" onChange={handleChange} />
    );
    const editor = getByLabelText('code-editor');
    fireEvent.change(editor, { target: { value: 'console.log("Hello world")' } });
    expect(handleChange).toHaveBeenCalledWith('console.log("Hello world")');
  });
});