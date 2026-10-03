import './delete-button.scss';
import trash from '@assets/trash.svg';

function DeleteButton({ onClick }) {

    return (
        <div className='button__container'>
            <button className="button" type="button" onClick={onClick}>
                <img src={trash} alt="Видалити" className="button__icon" />
            </button>
        </div>
    )
}

export default DeleteButton;