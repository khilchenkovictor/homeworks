import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './loader.css';
import './style.css';


function UserProfile() {

    const BASE_URL = 'https://jsonplaceholder.typicode.com/users/'

    const [userData, setUserData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const randomNumber = Math.floor(Math.random() * 10) + 1;

        axios
            .get(BASE_URL + randomNumber)
            .then(res => {
                setUserData(res.data);
                setIsLoading(false);
            })
            .catch (err => {
                setError('Помилка завантаження данних');
                setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return (
            <div className="loader-container">
                <span className="loader"></span>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error-container">
                <h1>Error</h1>
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div className="profile-container">
            <div className="profile-card">
                <h1>Дані користувача</h1>
                <p>Ім'я: {userData.name}</p>
                <p>Email: {userData.email}</p>
            </div>
        </div>
    );
}

export default UserProfile;