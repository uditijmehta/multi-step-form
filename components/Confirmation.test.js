import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Confirmation from './Confirmation';

describe('Confirmation Component', () => {
    it('renders correctly', () => {
      const data = {
        name: 'Test User',
        email: 'test@test.com'
      };
  
      render(<Confirmation data={data} />);
      expect(screen.getByText('Confirm Your Details')).toBeInTheDocument();
    });
  });
  
