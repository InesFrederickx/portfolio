import React, { Component } from 'react'
import './home.css'

export class home extends Component {
  render() {
    return (
      <div className='home'> 
        <div className='name'><h1>Ines Frederickx</h1></div>
        <div className='container'>
          <div className='branche'><h3>WEB-DEVELOPMENT</h3></div>
        </div>
      </div>
    )
  }
}

export default home