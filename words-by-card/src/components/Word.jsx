import React from 'react';

import "./Word.css";

function Word(props) {
    return (
        <div className='word-card'>
            <div className='word-text'>{props.meaning}</div>
            <div className='word-text'>{props.transcription}</div>
            <div className='word-text'>{props.translation}</div>
            <div className='word-text'>{props.subject}</div>
            <button>Удалить</button>
            <button>Редактировать</button>
        </div>
    )
}

export default Word;