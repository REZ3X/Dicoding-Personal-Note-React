import React from 'react';

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            charLimit: 50,
        }
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        const charLimit = this.state.charLimit;
        const newTitle = event.target.value;
        if (newTitle.length <= charLimit) {
            this.setState(() => {
                return {
                    title: newTitle
                }
            });
        }
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        const newNote = {
            id: +new Date(),
            title: this.state.title,
            body: this.state.body,
            createdAt: new Date().toISOString(),
        };
        this.props.addNote(newNote);
        this.setState(() => {
            return {
                title: '',
                body: ''
            }
        });
    }

    render() {
        const remainingChars = this.state.charLimit - this.state.title.length;
        return (
            <form className='note-input' onSubmit={this.onSubmitEventHandler}>
                <h2>Tambah Note Baru</h2>
                <p className='note-input__title__char-limit'>
                    {remainingChars} huruf tersisa
                </p>
                <input
                    type='text'
                    placeholder='Judul'
                    value={this.state.title}
                    onChange={this.onTitleChangeEventHandler}
                />
                <textarea
                    placeholder='Isi'
                    value={this.state.body}
                    onChange={this.onBodyChangeEventHandler}
                />
                <button type='submit'>Tambah Note</button>
            </form>
        )
    }
}

export default NoteInput;