import React from 'react';
import { render } from '@testing-library/react';
import {InfoPanel} from './InfoPanel';

describe('InfoPanel', () => {
  test('renders correctly with props', () => {
    const myProps = {
        id: 'gcaMYcvCtR8',
        description: '',
        dimensions: '1064 X 1330',
        createdAt: 'Jan 17, 2022',
    };

    const { getByText } = render(<InfoPanel {...myProps} />);

    expect(getByText(myProps.id)).toBeInTheDocument();
    expect(getByText(myProps.createdAt)).toBeInTheDocument();
  });
});