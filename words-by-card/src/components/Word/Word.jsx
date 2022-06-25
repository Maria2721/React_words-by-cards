import React from 'react';

import "./Word.scss";

function Word(props) {
    return (
        <div>
            <div className='word-card' key={props.id}>
                <div className='word-text'>Значение {props.meaning}</div>
                <div className='word-text'>Транскрипция {props.transcription}</div>
                <div className='word-text'>Перевод {props.translation}</div>
                <div className='word-text'>Тема {props.subject}</div>
                <button>Удалить</button>
                <button>Редактировать</button>
            </div>
        </div>
    )
}

export default Word;