import { useSelector } from "react-redux";
import UpdateUserData from '../UpdateUserData';
import { UserDataContainer, UserInfo, UserInfoText } from '../../styles';

function UserData() {

    const user = useSelector(state => state.user);

    return(
        <UserDataContainer>
            <UserInfo>
                <UserInfoText>Name: {user.name}</UserInfoText>
                <UserInfoText>Id: {user.id}</UserInfoText>
                <UserInfoText>City: {user.city}</UserInfoText>
                <UserInfoText>Status: {user.status}</UserInfoText>
            </UserInfo>
            <UpdateUserData />
        </UserDataContainer>
    )
};

export default UserData;