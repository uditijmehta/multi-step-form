import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import IndexPage from '../pages/index';

describe('Index Page', () => {
  it('renders correctly', () => {
    render(<IndexPage />);
    expect(screen.getByText('Enter your Details')).toBeInTheDocument();
  });
});
