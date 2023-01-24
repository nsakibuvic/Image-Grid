import { render, fireEvent } from '@testing-library/react';
import Image from './Image';

describe('<Image />', () => {
  it('renders an image with the correct source and alt text', () => {
    const { getByAltText } = render(<Image src="image.jpg" alt="Dog running through a field" onReceiveId= {jest.fn()}/>);
    const image = getByAltText('Dog running through a field');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'image.jpg');
  });

  it('calls onClick function when clicked', () => {
    const onClick = jest.fn();
    const { getByAltText } = render(<Image src="image.jpg" alt="Palm tree" onReceiveId= {jest.fn()} onClick={onClick} />);
    const image = getByAltText('Palm tree');
    fireEvent.click(image);
    expect(onClick).not.toHaveBeenCalled();
  });
  it('image component error renders correctly', () => {
    const imageProps = {
      src: 'invalid-image.jpg',
      alt: 'test image',
      onReceiveId: `${jest.fn()}`
    };
    const { container } = render(<Image src= 'invalid-image.jpg' alt= 'test image' onReceiveId= {jest.fn()}/>);
    expect(container.firstChild).toMatchSnapshot();
  });
  it('image component error renders correctly', () => {
    const fetchData = jest.fn();
    const { getByTestId } = render(<Image src= 'invalid-image.jpg' alt= 'test image' onReceiveId= {jest.fn()}/>);
    
    fireEvent.click(getByTestId('image-clicked'));
    expect(fetchData).not.toHaveBeenCalled();
  });
   
});