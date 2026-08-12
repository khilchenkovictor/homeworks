

export default function Button({ deleteArticle }) {


    return (
        <button
            type='submit'
            onClick={deleteArticle}
        >
            Видалити всі статті
        </button>
    )
}