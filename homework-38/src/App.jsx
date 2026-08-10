import { useState } from 'react';
import AddForm from './components/AddForm';
import Articles from './components/Articles';

export default function App() {

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [articles, setArticles] = useState([])

  const createArticle = () => {

    if (!title || !text) {
      alert('Заповніть всі поля для публікації')
      return
    }

    const newArticle = {
      title: title,
      text: text,
    }

    setArticles([...articles, newArticle]);

  }



  return (
    <div 
      className='form'
    >
      <AddForm 
        title={title}
        setTitle={setTitle}
        text={text}
        setText={setText}
        createArticle={createArticle} 
      />
      <div className='articles-block'>
        {articles.map((article, index) => (
          <Articles
            key={index}
            title={article.title}
            text={article.text}
          />
        ))}
      </div>
    </div>
  )
}

