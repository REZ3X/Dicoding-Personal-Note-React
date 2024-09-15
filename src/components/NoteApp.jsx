import React from 'react';
import { getInitialData } from '../utils';
import Header from './Header';
import NoteList from './NoteList';
import NoteInput from './NoteInput';
import ArchiveNoteList from './ArchiveNoteList';

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            searchQuery: ''
        };

        this.onDelete = this.onDelete.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.addNote = this.addNote.bind(this);
        this.onArchive = this.onArchive.bind(this);
    }
    onDelete(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }
    onSearch(query) {
        this.setState({ searchQuery: query });
    }
    addNote(newNote) {
        const noteWithArchive = {
            ...newNote,
            archived: false,
        };

        const notes = [...this.state.notes, noteWithArchive];
        this.setState({ notes });
    }
    onArchive(id) {
        const notes = this.state.notes.map(note => {
            if (note.id === id) {
                return {
                    ...note, archived: !note.archived
                };
            }
            return note;
        });
        this.setState({ notes });
    }
    render() {
        const activeNotes = this.state.notes.filter(note => !note.archived);
        const archivedNotes = this.state.notes.filter(note => note.archived);
        return (
            <div>
                <Header onSearch={this.onSearch} />
                <div className='note-app__body'>
                    <h1>NOTES, Aplikasi Note Untuk Anda</h1>
                    <NoteInput addNote={this.addNote} />
                    <h2>List Note Anda</h2>
                    <NoteList notes={activeNotes} onDelete={this.onDelete} onArchive={this.onArchive} searchQuery={this.state.searchQuery} />
                    <h2>Arsip</h2>
                    <ArchiveNoteList notes={archivedNotes} onDelete={this.onDelete} onArchive={this.onArchive} />
                </div>
            </div>
        );
    }
}

export default NoteApp;