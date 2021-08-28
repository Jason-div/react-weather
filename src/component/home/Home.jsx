
import { Component } from 'react';
import  './index.css'

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <button
          className="start"
          onClick={()=>this.props.history.push('/weather')}
        >Start App</button>
      </div>
    )
  }
}