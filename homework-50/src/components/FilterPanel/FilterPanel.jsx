import './filter-panel.scss';

function FilterPanel({ 
    search, 
    onSearchChange, 
    statusFilter, 
    setStatusFilter, 
    photoFilter, 
    setPhotoFilter, 
    lastNameFilter, 
    setLastNameFilter }) 
    
{
    return (
        <div className='filter-panel'>
            <input
                className='filter-panel__input'
                type='text'
                placeholder='Пошук користувачів...'
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
            />
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                <option value="all">Всі статуси</option>
                <option value="UserStatusLastMonth">LastMonth</option>
                <option value="UserStatusLastWeek">LastWeek</option>
                <option value="UserStatusRecently">Recently</option>
                <option value="UserStatusOnline">Online</option>
                <option value="UserStatusOffline">Offline</option>
            </select>

            <select value={photoFilter} onChange={(e) => setPhotoFilter(e.target.value)}>
                <option value="all">Всі фото</option>
                <option value="yes">Є фото</option>
                <option value="no">Немає фото</option>
            </select>

            <select value={lastNameFilter} onChange={(e) => setLastNameFilter(e.target.value)}>
                <option value="all">Всі прізвища</option>
                <option value="yes">Є прізвище</option>
                <option value="no">Немає прізвища</option>
            </select>
        </div>
    );
}

export default FilterPanel;
