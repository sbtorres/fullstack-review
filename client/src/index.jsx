import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

  }

  componentDidMount() { 
    $.ajax({
      type: "GET",
      url: "/repos",
      success: (data) => {
        this.setState({repos: JSON.parse(data)})
      },
      error: (err) => {
        console.log('Could not retrieve repos from server: ', err);
      },
      dataType: "json",
    })
  }

  search (term) {
    $.ajax({
      type: "POST",
      url: "/repos",
      data: {username: term},
      success: (data) => {
        console.log("success, the returned data was: " , data);
        this.componentDidMount();
      },
      error: (err) => {
        console.log("error posting to server: ",  err);
      },
      dataType: "json",
    })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.search.bind(this)}/>
      <RepoList repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));