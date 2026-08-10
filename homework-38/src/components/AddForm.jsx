import { useState } from 'react'
import Button from './Button';
import Input from './Input';
import InputTitle from './TitleInput';
import '../styles/index.css'

export default function AddForm({      
    title,
    setTitle,
    text,
    setText,
    createArticle,
}) {

    return(
        <div className='add-form'>
            <Button 
                createArticle={createArticle}
            />
            <InputTitle
                value={title}
                setTitle={setTitle}
            />
            <Input
                value={text}
                setText={setText}
            />
        </div>
    )
}