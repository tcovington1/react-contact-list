import React, { Component } from 'react';
import { Container, Header, Image } from 'semantic-ui-react';
import ContactList from './components/contacts/ContactList';
import ContactForm from './components/contacts/ContactForm'


class App extends Component {
  state = {
    contacts: [
      { id: 1, firstName: 'Joe', phone: '123-345-9584'},
      { id: 2, firstName: 'Tanner', phone: '543-876-8765'},
      { id: 3, firstName: 'Brynne', phone: '364-378-4534'}
    ]
  }

    //as long as the ID is not two, it'll keep looping
    removeContact = (id) => {
      const contacts = this.state.contacts.filter( contact => {
        if ( contact.id !== id )
          return contact 
      })
      this.setState({ contacts: [ ...contacts ]})
    }

  getId = () => {
    // NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };


                    //(firstname: 'tom' , phone: '23423432')
  addContact = (incomingContact) => {
                                     //firstName: newContact.firstName, etc
                                    //  (firstname: 'tom' , phone: '23423432')
    let newContact = { id: this.getId(), ...incomingContact }
    this.setState({ contacts: [newContact, ...this.state.contacts ]})
  }

  render() {
    const { contacts } = this.state
    return (
      <Container>
        <Header as='h2'>
            React Contact List
        </Header>
        <ContactForm add={this.addContact}/>
        <Image 
           src="https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            bordered
            size='tiny'
        />
        <ContactList  contacts={contacts} remove={this.removeContact}/>
      </Container>
    )
  }
}

export default App;
