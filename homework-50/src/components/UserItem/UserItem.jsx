import { memo } from 'react';
import './user-item.scss';
import DeleteButton from '../DeleteButton';

function UserItem({ user }) {

    const [id, username, firstName, lastName, photo, status] = user;
    return(
        <div className='user__item'>
            <span className='user__id'>
                {id}
            </span>
            <span className='user__username'>
                {username}
            </span>
            <span className='user__name'>
                {firstName}
            </span>
            <span className='user__surname'>
                {lastName}
            </span>
            <span className='user__photo'>
                {photo}
            </span>
            <span className='user__status'>
                {status}
            </span>
            <DeleteButton />
        </div>
    );
}

export default UserItem;
