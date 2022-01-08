import React from 'react'
import { object, func } from 'prop-types'

export class ContactForm extends React.Component {
  static defaultProps = {
    data: {
      name: '',
      email: '',
      option: '',
      select: '',
      message: '',
      terms: false
    }
  }

  static propTypes = {
    onChange: func.isRequired,
    onSubmit: func.isRequired,
    data: object.isRequired
  }

  constructor(props) {
    super(props)
    this.fieldChange = this.fieldChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.isSelected = this.isSelected.bind(this)
    //state was created for tracking and manipulating data changes
    this.state = {
      name: '',
      email: '',
      option: '',
      select: '',
      message: '',
      terms: false
    }
  }

  /**
   * When form is submitted forward contact data to parent
   * @param {event} DOMEvent
   */
  handleSubmit(event) {
    event.preventDefault()
    this.props.onSubmit(this.props.data)
  }

  fieldChange(event) {
    let target = event.target
    /*  let value = target.type === 'checkbox' ? target.checked : target.value

    this.setState({
      [target]: value
    }) */

    let value = target.type === 'checkbox' ? target.checked : target.value

    this.setState({
      [event.target]: event.target.value
    })

    this.props.data[target.name] = value

    // console.log(target,value)
    // this.props.data[target.name] = value
    // console.log(this.props.data[target.name])
  }

  isSelected(key, option) {
    return this.props.data[key] === option
  }

  options = [
    { id: 1, label: 'I have question about my membership' },
    { id: 2, label: 'I have technical question' },
    { id: 3, label: 'I would like to change membership' },
    { id: 4, label: 'Other question' }
  ]

  render() {
    let data = this.props.data
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Contact Form</h3>

        <div className='form-group'>
          <label className='form-label'>Your Name:</label>
          <input
            name='name'
            className='form-control'
            value={data.name}
            onChange={this.fieldChange}
          />
        </div>

        <div className='form-group'>
          <label className='form-label'>Your Best Email:</label>
          <input
            name='email'
            className='form-control'
            value={data.email}
            onChange={this.fieldChange}
          />
        </div>

        <label className='form-label'>Select your membership option:</label>
        <div className='form-group row' onChange={this.isSelected}>
          <label className='form-label col-xs-4'>
            <input type='radio' name='option' value={data.value} />
            Option A
          </label>
          <label className='form-label col-xs-4'>
            <input type='radio' name='option' value={data.value} />
            Option B
          </label>
          <label className='form-label col-xs-4'>
            <input type='radio' name='option' value={data.value} />
            Option C
          </label>
        </div>

        <hr />

        <div className='form-group'>
          <label className='form-label'>What can we help you with:</label>
          <select
            className='form-control'
            value={data.select}
            name='select'
            onChange={this.fieldChange}>
            <option value='1'>{this.options[0].label}</option>
            <option value='2'>{this.options[1].label}</option>
            <option value='3'>{this.options[2].label}</option>
            <option value='4'>{this.options[3].label}</option>
            {this.options.forEach(ele => {
              return <option value={ele.id + 1}>{ele.label}</option>
            })}
          </select>
        </div>

        <div className='form-group'>
          <label className='form-label'>Message:</label>
          <textarea
            name='message'
            rows='10'
            placeholder='Please type your question here'
            value={data.message}
            className='form-control'
            onChange={this.fieldChange}
          />
        </div>

        <div className='form-group'>
          <label className='form-label'>
            <input
              name='terms'
              type='checkbox'
              checked={data.terms}
              onChange={this.fieldChange}
            />
            I agree to terms and conditions
          </label>
        </div>

        <input type='submit' value='Send' className='contactform-submit' />
      </form>
    )
  }
}
