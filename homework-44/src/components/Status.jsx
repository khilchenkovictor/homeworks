import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import Card from './Card';
import './styles.css';


function Status() {

    const { user, setUser } = useContext(UserContext);

    return (
        <p>Status: {user.status}</p>
    )
}

export default Status;