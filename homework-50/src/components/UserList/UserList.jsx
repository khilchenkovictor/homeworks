import UserItem from '../UserItem';
import './user-list.scss';

function UserList({ users }) {
    return(
        <div className='user__list'>
            {users.map((user) => (
                <UserItem 
                    key={user[0]}
                    user={user}
                />
            ))}
        </div>
    );
}

export default UserList;
