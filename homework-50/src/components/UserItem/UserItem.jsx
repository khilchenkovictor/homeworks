import { memo } from 'react';
import './user-item.scss';
import DeleteButton from '../DeleteButton';

function UserItem({ user, onSelectUser, onDeleteUser }) {

    const [id, username, firstName, lastName, photo, status] = user;

    const handleDelete = () => {
        onDeleteUser(id);
    };

    const displayValue = (value) => value ? value : '-';
    const displayPhoto = photo === 1 ? 'Так' : photo === 0 ? 'Ні' : '-';

    const statusMap = {
        'UserStatusLastMonth': 'LastMonth',
        'UserStatusLastWeek': 'LastWeek',
        'UserStatusRecently': 'Recently',
        'UserStatusOnline': 'Online',
        'UserStatusOffline': 'Offline'
    };

    const displayStatus = status ? (statusMap[status] || status) : '-';

    return(
        <div className='user__item'>
            <span className='user__id'>
                {displayValue(id)}
            </span>
            <span className='user__username'>
                {displayValue(username)}
            </span>
            <span className='user__name'>
                {displayValue(firstName)}
            </span>
            <span className='user__surname'>
                {displayValue(lastName)}
            </span>
            <span className='user__photo'>
                {displayPhoto}
            </span>
            <span className='user__status'>
                {displayStatus}
            </span>
            <DeleteButton
                onClick={handleDelete}
            />
        </div>
    );
}

export default memo(UserItem);
