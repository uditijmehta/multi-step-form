import React from 'react';
import { render, screen } from '@testing-library/react';
import Survey from './Survey';
import '@testing-library/jest-dom';


describe('Survey Component', () => {
  it('renders correctly', () => {
    render(<Survey />);
    expect(screen.getByText('Survey')).toBeInTheDocument();
  });
});

