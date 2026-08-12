import { useState, useEffect } from 'react';
import AddForm from './components/AddForm';
import Articles from './components/Articles';

export default function App() {

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [articles, setArticles] = useState(() => {
    const savedArticles = localStorage.getItem('articleData');
    return savedArticles ? JSON.parse(savedArticles) : [];
  })

  const deleteArticle = () => {
    if (articles.length > 0) {
      setArticles([]);
    } else {
      alert('Немає статей для видалення');
    }
  }

  const clearField = () => {
    setText('');
    setTitle('');
  }

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

    clearField();
  }

  useEffect(() => {
    document.title = `Статей збережено: ${articles.length}`;
  }, [articles]);

  useEffect(() => {
    localStorage.setItem('articleData', JSON.stringify(articles));
  }, [articles]);

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
        deleteArticle={deleteArticle}
        clearField={clearField}
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

