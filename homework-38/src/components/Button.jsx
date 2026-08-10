

export default function Button({ createArticle }) {


    return(
        <button
            type='submit'
            onClick={createArticle}
        >
            Додати статтю
        </button>
    )
}