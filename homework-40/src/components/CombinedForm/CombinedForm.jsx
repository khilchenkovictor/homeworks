import { useState, useRef } from 'react'
import './combined-form.scss';

function CombinedForm() {
    const [text, setText] = useState('');
    const emailRef = useRef(null);

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const textValue = (text) ? text : 'Пусто';
        const emailValue = (emailRef.current.value) 
        ? emailRef.current.value 
        : 'Пусто';
        alert(`Ваш текст: ${textValue}, Ваш email: ${emailValue}`)
    }

    return (
        <form 
            className="form__сombined border border-light-subtle p-4"
            onSubmit={handleSubmit}
        >
            <p className="h3 text-center">Combined</p>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                    Email address
                </label>

                <input
                    type="email"
                    ref={emailRef}
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

export default CombinedForm;