import './user-header.scss';

function UserHeader() {
    return(
        <div className='user__header'>
            <span className='user__id'>ID</span>
            <span className='user__username'>Username</span>
            <span className='user__name'>Name</span>
            <span className='user__surname'>Surname</span>
            <span className='user__photo'>Photo</span>
            <span className='user__status'>Status</span>
            <span className='user__actions'></span>
        </div>
    )
}

export default UserHeader;
