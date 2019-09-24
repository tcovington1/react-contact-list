import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class ContactForm extends Component {
  state = { firstName: "", phone: "" }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({  [name]: value })
                    //firstName: Tom
    //to make it dynamic we just use name because that can be for any input, look below
    //grabs the input of what the user is typing in
  }

  handleSubmit = (e) => {
    e.preventDefault()
      //this mean we don't want to refresh the page every time
    //call a function to add the item
    this.props.add(this.state)
    // clean up phase
    this.setState({ firstName: '', phone: '' })
  } 

  render() {
    const { firstName, phone } = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          fluid
          label='First Name'
          plaeholder= 'First name here'
          //required
          //will always have name, this input represents 'firstName'
          name='firstName'
          //this one gets the user input
          value={firstName}
          //this changes what the user enters and stores as state
          onChange={this.handleChange}
        />
        <Form.Input
          fluid
          label='Phone'
          plaeholder= 'Phone here'
          //required
          //will always have name, this input represents 'firstName'
          name='phone'
          //this one gets the user input
          value={phone}
          //this changes what the user enters and stores as state
          onChange={this.handleChange}
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default ContactForm;