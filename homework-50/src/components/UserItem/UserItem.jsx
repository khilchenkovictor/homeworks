import { memo, useCallback } from 'react';
import './user-item.scss';
import DeleteButton from '../DeleteButton';

// ==============================
// Маппинг статусов для отображения
// ==============================

const STATUS_MAP = {
  'UserStatusLastMonth': 'LastMonth',
  'UserStatusLastWeek': 'LastWeek',
  'UserStatusRecently': 'Recently',
  'UserStatusOnline': 'Online',
  'UserStatusOffline': 'Offline'
};

// ==============================
// Компонент отдельного пользователя
// ==============================

function UserItem({ user, onDeleteUser }) {
  const [id, username, firstName, lastName, photo, status] = user;

  // ==============================
  // Вспомогательные функции отображения
  // ==============================
  const displayValue = useCallback((value) => value ? value : '-', []);
  const displayPhoto = photo === 1 ? 'Так' : photo === 0 ? 'Ні' : '-';
  const displayStatus = status ? (STATUS_MAP[status] || status) : '-';

  // ==============================
  // Мемоизированные колбеки
  // ==============================
  const handleDelete = useCallback(() => {
    onDeleteUser(id);
  }, [id, onDeleteUser]);

  // ==============================
  // Render
  // ==============================
  return (
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
