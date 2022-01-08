import React, { Component } from 'react'
import { ContactForm } from './contact-form'
import { Message } from './message'
import { UserPanel } from './user-panel'

export class App extends Component {
  CONTACT_FORM_DEFAULTS = {
    name: '',
    email: '',
    option: 'A',
    select: 1,
    type: '',
    message: ''
  }
  constructor(props) {
    super(props)
    this.state = {
      contact: {
        ...this.CONTACT_FORM_DEFAULTS
      },

      sent: false,
      currentUser: null
    }

    this.contactChanged = this.contactChanged.bind(this)
    this.sendContact = this.sendContact.bind(this)
    this.logIn = this.logIn.bind(this)
    // this.handleClick = this.handleClick.bind(this)
  }

  contactChanged(contact) {
    this.setState({
      contact
    })
    console.log(this.state)
  }

  sendContact(contact) {
    // For now just mark it as `sent`w
    this.setState({
      sent: true
    })
  }

  logIn = () => {
    if (this.state.contact.name !== '' && this.state.contact.email !== '') {
      this.setState({
        currentUser: {
          name: this.state.contact.name,
          email: this.state.contact.email
        }
      })
    } else {
      this.setState({
        currentUser: {
          name: '',
          email: ''
        }
      })
    }
  }

  onKeyDown = event => {
    if (event.key === 'Enter' && event.target.name !== 'message') {
      if (event.target.checkValidity && event.target.checkValidity()) {
        this.sendContact(event)
      }
    }
  }

  render() {
    let userPanel = this.state.currentUser && (
      <UserPanel user={this.state.currentUser} />
    )
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='pull-right'>
              <button className='btn btn-default' onClick={this.logIn}>
                <i className='glyphicon glyphicon-user'></i> Log In
              </button>
            </div>
          </div>
        </div>
        {userPanel}

        <div className='row'>
          <div className='col-md-4'>
            <h2>Contact us</h2>
            <p>Please fill in form on the right to get fast reply</p>
            <img
              alt='user'
              style={{ width: '100%' }}
              src='http://via.placeholder.com/300x200'
            />
          </div>
          <div className='col-md-8'>
            {this.state.sent ? (
              <Message
                header={this.state.contact.select === 1 ? false : true}
                text={this.state.contact.message}></Message>
            ) : (
              <ContactForm
                data={this.state.contact}
                onChange={this.contactChanged}
                onSubmit={this.sendContact}
                onKeyDown={this.onKeyDown}
              />
            )}
          </div>
        </div>
      </div>
    )
  }
}
