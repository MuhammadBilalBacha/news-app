import React, { Component } from 'react'
import loading from '../components/loading.gif'

export class Spanner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="" />
      </div>
    )
  }
}

export default Spanner
