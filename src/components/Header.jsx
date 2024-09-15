import React from 'react';
import NoteSearch from './NoteSearch';
import HeaderImage from './HeaderImage';

function Header ({onSearch}) {
    return (
        <header className='note-app__header'>
            <HeaderImage/>
            <NoteSearch onSearch={onSearch}/>
        </header>
    )
}

export default Header;