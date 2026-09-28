import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, clearError } from '../store/UserSlice';
import Loader from './Loader';
import Error from './Error';
import axios from 'axios';
import './loader.css';
import './style.css';


function UserProfile() {

    const dispatch = useDispatch();

    const { users, loading, error } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleReload = () => {
        dispatch(clearError());
        dispatch(fetchUsers());
    };


    if (loading) {
        return (
            <Loader />
        );
    }

    if (error) {
        return (
            <Error 
                error={error}
            />
        );
    }

    return (
        <div className="profile-container">
            {users.map((user) => (
                <div key = { user.id } className = "profile-card" >
                        <h3>{user.name}</h3>
                        <p>Email: {user.email}</p>
                        <p>Телефон: {user.phone}</p>
                        <p>Компанія: {user.company.name}</p>
                    </div >
                ))}
        </div>
    );
}

export default UserProfile;