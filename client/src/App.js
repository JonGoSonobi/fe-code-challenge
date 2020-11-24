import './App.css';
import axios from 'axios';
import React from 'react';

var buttonStyle = {
  margin: '10px 10px 10px 0'
};


class Inv extends React.Component {
  constructor(props) {
    super(props);
    this.submitRecord = this.submitRecord.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.typeChange = this.typeChange.bind(this);
    this.urlChange = this.urlChange.bind(this);
    this.state = { list: [], name: "", type: "", url: "" };
  }

  nameChange(event) { this.setState({ name: event.target.value }); }
  typeChange(event) { this.setState({ type: event.target.value }); }
  urlChange(event) { this.setState({ url: event.target.value }); }

  submitRecord(event) {

    let payload = {
      name: this.state.name,
      type: this.state.type,
      url: this.state.url
    }

    axios.post('http://localhost:3001/inventoryset', payload)
      .then((response) => {
        console.log(response);
        this.getInv();
      })
      .catch((error) => {
        console.log(error);
      });

    event.preventDefault();
  }

  getInv() {
    axios.get('http://localhost:3001/inventoryget')
      .then((response) => {
        let temp = []
        for (let x of response.data.result)
          temp.push(<li>{x.id}, {x.name}, {x.type}, {x.url}</li>);
        console.log(temp);
        this.setState({ list: temp })
      })
      .catch((error) => {
        console.log(error);
        this.setState({ list: [<li>Could not grab inventory</li>] })
      })
  }

  componentDidMount() {
    this.getInv();
  }

  render() {
    return <div>
      <form onSubmit={this.submitRecord}>
        <label>Name: <input type="text" value={this.state.name} onChange={this.nameChange} /></label>
        <label>Type: <input type="text" value={this.state.type} onChange={this.typeChange} /></label>
        <label>Url: <input type="text" value={this.state.url} onChange={this.urlChange} /></label>
        <input type="submit" value="Submit Record" />
      </form>
      <ul>{this.state.list}</ul>
    </div>;
  }
}



function App() {
  return (
    <div className="App">
      <Inv />
    </div>
  );
}

export default App;
