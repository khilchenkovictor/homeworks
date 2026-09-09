import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {
    updateName,
    updateCity,
    updateStatus,
} from '../../redux/userSlice';
import { UpdateUserDataContainer, Input, Button } from '../../styles';


function UpdateUserData() {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    const [name, setName] = useState(user.name);
    const [city, setCity] = useState(user.city);

    const handleUpdate = () => {

        if (name) {
            dispatch(updateName(name));
        }

        if (city) {
            dispatch(updateCity(city));
        }
        
    }

    const handleStatusChange = () => {
        dispatch(updateStatus(
            user.status === 'online' ? 'offline' : 'online'
        ));
    };

    return(
        <UpdateUserDataContainer>
            <Input
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
            />

            <Input
                placeholder="City"
                onChange={(e) => setCity(e.target.value)}
            />

            <Button onClick={handleUpdate}>
                Update user
            </Button>

            <Button onClick={handleStatusChange}>
                Change status
            </Button>
        </UpdateUserDataContainer>
    )
}

export default UpdateUserData;