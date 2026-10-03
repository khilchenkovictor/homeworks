import UserItem from '../UserItem';
import UserHeader from '../UserHeader';
import FilterPanel from '../FilterPanel';
import './user-list.scss';

function UserList({ users, onDeleteUser, search, onSearchChange, statusFilter, setStatusFilter, photoFilter, setPhotoFilter, lastNameFilter, setLastNameFilter, currentPage, setCurrentPage, totalPages }) {
    return(
        <div className='user__list'>
            <FilterPanel
                search={search}
                onSearchChange={onSearchChange}
                statusFilter={statusFilter}
                setStatusFilter={setStatusFilter}
                photoFilter={photoFilter}
                setPhotoFilter={setPhotoFilter}
                lastNameFilter={lastNameFilter}
                setLastNameFilter={setLastNameFilter}
            />
            <UserHeader />
            {users.map((user) => (
                <UserItem
                    key={user[0]}
                    user={user}
                    onDeleteUser={onDeleteUser}
                />
            ))}
            <div className="user__pagination">
                <button className="user__pagination-button" onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1}>←</button>
                <span className="user__pagination-info">{currentPage} / {totalPages}</span>
                <button className="user__pagination-button" onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages}>→</button>
            </div>
        </div>
    );
}

export default UserList;
