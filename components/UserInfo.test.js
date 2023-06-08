import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserInfo from './UserInfo';

describe('UserInfo Component', () => {
    it('handles form submission', async () => {
        const onSubmitMock = jest.fn((event) => {
          const form = event.target;
          const name = form.elements.name.value;
          const email = form.elements.email.value;
          return { name, email };
        });
      
        render(<UserInfo onSubmit={onSubmitMock} />);
      
        const nameInput = screen.getByLabelText(/name/i);
        const emailInput = screen.getByLabelText(/email/i);
      
        // Simulate user input
        fireEvent.change(nameInput, { target: { value: 'Test Name' } });
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
      
        // Simulate form submission by clicking the submit button
        const submitButton = screen.getByRole('button', { name: /next/i });
        fireEvent.click(submitButton);
      
        // Wait for any async actions to complete
        await waitFor(() => expect(onSubmitMock).toHaveBeenCalled());
      
        // Verify that the form was submitted with the correct data
        expect(onSubmitMock.mock.results[0].value).toEqual({
          name: 'Test Name',
          email: 'test@example.com',
        });
      });                          
});
