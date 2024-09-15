import React from 'react';

class NoteSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query: ''
        };

        this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this);
    }

    onSearchChangeEventHandler(event) {
        const query = event.target.value;
        this.setState({query});

        this.props.onSearch(query);
    }

    render() {
        return (
            <input
                className='note-search'
                type='text'
                value={this.state.query}
                onChange={this.onSearchChangeEventHandler}
                placeholder='Cari note Anda...'
            />
        );
    }
}

export default NoteSearch;