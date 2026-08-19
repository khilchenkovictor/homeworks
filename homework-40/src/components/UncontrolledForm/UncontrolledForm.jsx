import './uncontrolled-form.scss';

function UncontrolledForm() {

    const handleSubmit = (event) => {
        event.preventDefault();

        // useRef будет в элементе combined

        const textValue = event.target.elements.field.value;
        const emailValue = event.target.elements.name.value;

        const text = (textValue) ? textValue : 'Пусто';
        const email = (emailValue) ? emailValue : 'Пусто';
        alert(`Ваш текст: ${text}, Ваш email: ${email}`)
    }

    return (
        <form 
            className="form__uncontrolled border border-light-subtle p-4"
            onSubmit={handleSubmit}
        >
            <p className="h3 text-center">Uncontrolled</p>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                    Email address
                </label>

                <input
                    type="email"
                    name="name"
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
                    name="field"
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                ></textarea>
                <button type="submit" className="btn btn-secondary mx-auto mt-4">SEND</button>
            </div>
        </form>
    )
}

export default UncontrolledForm;