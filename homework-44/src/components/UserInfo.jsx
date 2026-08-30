import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import './styles.css';
import Status from './Status';

function UserInfo() {

    const { user, setUser } = useContext(UserContext);

    return (
        <div className='user-info'>
            <h2>UserInfo</h2>
            <div className='info-block'>
                <p>Name: {user.name}</p>
                <p>ID: {user.id}</p>
                <p>City: {user.city}</p>
                <Status />
            </div>
        </div>
    );
}

export default UserInfo;