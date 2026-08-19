import { useState } from 'react';
import './controlled-form.scss';

function ControlledForm() {
    const [text, setText] = useState('');
    const [email, setEmail] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const textValue = (text) ? text : 'Пусто';
        const emailValue = (email) ? email : 'Пусто';
        alert(`Ваш текст: ${textValue}, Ваш email: ${emailValue}`)
    }

    return (
        <form 
            className="form__controlled border border-light-subtle p-4"
            onSubmit={handleSubmit}
        >
            <p className="h3 text-center">Controlled</p>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                    Email address
                </label>

                <input
                    type="email"
                    value={email}
                    onChange={handleEmail}
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    Example textarea
                </label>

                <textarea
                    value={text}
                    onChange={handleChange}
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                ></textarea>
                <button type="submit" className="btn btn-secondary mx-auto mt-4">SEND</button>
            </div>
        </form>
    )
}

export default ControlledForm;