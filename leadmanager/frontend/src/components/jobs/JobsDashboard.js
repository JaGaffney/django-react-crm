import React, { Component } from 'react'

import Form from './Form'
import Jobs from './Jobs'

export class JobsDashboard extends Component {
  state = {
    loadForm: false
  }

  onFormHandler(){
    this.setState(prevState => {
      const updatedState = prevState
      return {loadForm: !updatedState.loadForm}
      
    })
  }


  render() {

    let formPage 
    if (this.state.loadForm){
      formPage = <Form />
    } else {
      formPage
    }
    
    

    return (
      <>
      <br></br>
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-items-center">
            <button className="btn btn-primary" onClick={this.onFormHandler.bind(this)}>Add Job</button>
          </div>
        </div>
        {formPage}
        <Jobs />
      </>
    )
  }
}

export default JobsDashboard

