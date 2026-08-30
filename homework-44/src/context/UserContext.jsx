import { createContext } from 'react';

export const UserContext = createContext({
    user: {
        name: 'Guest',
        id: '0',
        city: 'Unknown',
        status: 'offline',
    }, setUser: () => {}
});