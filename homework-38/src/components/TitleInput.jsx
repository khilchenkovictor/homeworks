import '../styles/index.css'

export default function InputTitle({value, setTitle}) {

    return (
        <input
            id='input-title'
            placeholder='Введіть заголовок статі'
            type='text'
            value={value}
            onChange={(event) => setTitle(event.target.value)}
        ></input>
    )
}