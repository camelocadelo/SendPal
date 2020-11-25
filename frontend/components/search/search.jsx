import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            searchResults: []
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.displaySearchResults = this.displaySearchResults.bind(this);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        this.setState({ 
            search: e.target.value,
            searchResults: []});
        this.props.updateEmail(e.target.value)
    }

    handleSearch(e) {
        e.preventDefault();
        this.setState({search: e.currentTarget.value})
        let allUsers = Object.values(this.props.users)
        let searchResults = [];
        
        if (e.currentTarget.value) {
            allUsers.forEach ((user) => {
                let email = user.email;
                if (email.toLowerCase().includes(e.currentTarget.value.toLowerCase())) {
                    searchResults.push(user);
                };
            });
        };

        this.setState({searchResults: searchResults});
    }

    displaySearchResults() {
        let searchResults = this.state.searchResults;
        
        if (searchResults.length === 0) {
            return null;
        } else {
            return <ul className='search-results-container'>
                {searchResults.map ((user) => {
                return (
                    <option className="search-list-items"
                        key={user.id}
                        onClick={this.handleClick}
                        >{user.email}
                    </option>
                )
            })}</ul>
        }

    }

    render() {
        return (
            <div className="search-bar">
                <input className='search-bar' type="text"
                    onChange={this.handleSearch}
                    value={this.state.search}
                    placeholder='Search Emails...' />
                <i className="fas fa-search"></i>

                {this.displaySearchResults()}
            </div>
        )
    }
}

export default Search;