import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { action, decorate, observable } from 'mobx'
import SearchBar from '../components/SearchBar'
// import SearchField from 'react-search-field';
import SearchResults from '../components/SearchResults'
import SearchFilters from '../components/SearchFilters'

class Home extends Component {
  state = observable({
    query: '',
    filters: {},
  })

  setQuery = (query) => {
    this.setState({ query })
  }

  setFilters = (filters) => {
    this.setState({ filters })
  }

  showFilters = () => {
    return this.state.query !== ''
  }

  render () {
    return (
      <>
        <div>Welcome to Asoures!</div>
        <SearchBar setQuery={ this.setQuery } />
        <SearchFilters
          display={ this.showFilters() }
          setFilters={ this.setFilters }
        />
        <SearchResults
          query={ this.state.query }
          filters={ this.state.filters }
        />
      </>
    )
  }
}

decorate(Home, {
  setQuery: action,
})

export default inject('store')(observer(Home))
