import { useSelector } from 'react-redux';

function DisplayForm() {
    const formData = useSelector(state => state.form.formData);

    if (!formData) {
        return (
            <div className="data-display">
                <p>Немає збереженних даних</p>
            </div>
        );
    }

    return (
        <div className="data-display">
            <h3>Збережені дані:</h3>
            <p>Ім'я: {formData.name}</p>
            <p>Email: {formData.email}</p>
            <p>Пароль к-ть символів: {formData.password.length}</p>
            <p>Вік: {formData.age}</p>
        </div>
    );
};

export default DisplayForm;