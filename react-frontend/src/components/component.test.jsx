import { render } from '@testing-library/react';
// The component to be tested
import Home from './home';

describe('Test if home component is loading', () => {
  it('renders the component', () => {
    const { getByText } = render(<Home />);
    // Find an element that is rendered by the component
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const element = getByText('Write a small description of what you where doing:');
    // If the element is found, the component is being rendered
    expect(element).toBeInTheDocument();
  });
});
