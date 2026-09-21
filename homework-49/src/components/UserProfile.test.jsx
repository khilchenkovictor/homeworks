import { render, screen, waitFor } from '@testing-library/react';
import UserProfile from './UserProfile';
import axios from 'axios';
import { vi } from 'vitest';
import '@testing-library/jest-dom';

vi.mock('axios');

describe('UserProfile Component', () => {

    test('відображає індикатор завантаження під час запиту', () => {
        axios.get.mockResolvedValue({});
        const { container } = render(<UserProfile />);
        expect(container.querySelector('.loader')).toBeInTheDocument();
    });

    test('відображає дані користувача після успішного запиту', async () => {
        const mockData = { name: 'John Doe', email: 'john@example.com' };
        axios.get.mockResolvedValue({ data: mockData });

        render(<UserProfile />);

        await waitFor(() => {
            expect(screen.getByText(/John Doe/)).toBeInTheDocument();
            expect(screen.getByText(/john@example.com/)).toBeInTheDocument();
        });
    });

    test('відображає помилку при невдалому запиті', async () => {
        axios.get.mockRejectedValue(new Error('Network error'));

        render(<UserProfile />);

        await waitFor(() => {
            expect(screen.getByText('Error')).toBeInTheDocument();
            expect(screen.getByText('Помилка завантаження данних')).toBeInTheDocument();
        });
    });

    test('компонент рендерится без помилок', () => {
        const { container } = render(<UserProfile />);
        expect(container.querySelector('.profile-container') || container.querySelector('.loader-container')).toBeInTheDocument();
    });

    test('відображає правильну кількість елементів', async () => {
        const mockData = { name: 'John Doe', email: 'john@example.com' };
        axios.get.mockResolvedValue({ data: mockData });

        render(<UserProfile />);

        await waitFor(() => {
            const paragraphs = screen.getAllByRole('paragraph');
            expect(paragraphs).toHaveLength(2);
        });
    });

    test('axios.get викликається з правильним URL', async () => {
        const mockData = { name: 'John Doe', email: 'john@example.com' };
        axios.get.mockResolvedValue({ data: mockData });

        render(<UserProfile />);

        await waitFor(() => {
            expect(axios.get).toHaveBeenCalled();
            expect(axios.get).toHaveBeenCalledWith(
                expect.stringContaining('jsonplaceholder.typicode.com/users/')
            );
        });
    });
});