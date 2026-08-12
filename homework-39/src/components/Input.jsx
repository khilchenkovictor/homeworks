import '../styles/index.css'

export default function Input({value, setText}) {

    return (
        <textarea
            id='input-text'
            placeholder='Введіть текст статі'
            type='text'
            value={value}
            onChange={(event) => setText(event.target.value)}
        ></textarea>
    )
}