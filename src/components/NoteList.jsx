import React, { useState } from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete, searchQuery, onArchive }) {
    const getFilteredNotes = () => {
        if (searchQuery === '') {
            return notes;
        }

        return notes.filter(note => 
            note.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
            note.body.toLowerCase().includes(searchQuery.toLowerCase())
        );
    };

    const filteredNotes = getFilteredNotes(); 

    return (
        <div>
            <div className="notes-list">
                {filteredNotes.length > 0 ? (
                    filteredNotes.map((note) => (
                        <NoteItem
                            key={note.id}
                            id={note.id}
                            title={note.title}
                            body={note.body}
                            createdAt={note.createdAt}
                            onDelete={onDelete}
                            archived={note.archived}
                            onArchive={onArchive}
                        />
                    ))
                ) : (
                    <p>Tidak ada note yang ditemukan.</p>
                )}
            </div>
        </div>
    );
}

export default NoteList;
