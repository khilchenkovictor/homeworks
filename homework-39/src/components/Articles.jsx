import '../styles/index.css';

export default function Articles({title, text}) {

    return(
        <div className='articles-list'>
            <h2 className='article-title'>
                {title ? title : 'Title'}
            </h2>
            <p className='article-description'>
                {text ? text : 'Description'}
            </p>
        </div>
    )
}