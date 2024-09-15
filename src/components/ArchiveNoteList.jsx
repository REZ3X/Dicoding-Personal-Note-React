import React from 'react';
import NoteItem from './NoteItem';

function ArchiveNoteList({ notes, onDelete, onArchive }) {
    return (
        <div className="archive-notes-list">
            {notes.length > 0 ? (
                notes.map(note => (
                    <NoteItem
                        key={note.id}
                        id={note.id}
                        title={note.title}
                        body={note.body}
                        createdAt={note.createdAt}
                        archived={note.archived}
                        onDelete={onDelete}
                        onArchive={onArchive}
                    />
                ))
            ) : (
                <p>Tidak ada note yang diarsipkan.</p>
            )}
        </div>
    );
}

export default ArchiveNoteList;