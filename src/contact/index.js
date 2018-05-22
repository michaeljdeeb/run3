import React, { PureComponent } from 'react';

import { H5 } from '../styles/headings';
import { DefaultButton } from '../styles/buttons';
import { FlexColumnContainer } from '../styles/containers';
import { Input, TextArea } from '../styles/formUI';
import { NoMarginP } from '../styles/paragraph';

const InputWrapper = FlexColumnContainer.extend`
  max-width: 29.41rem;
`;

const PhoneInput = Input.extend`
  display: none;
`;

const initialState = {
  Email: '',
  Message: '',
  Name: '',
  Phone: '',
  Status: '',
};

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

class Contact extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'RunThreeFeedback', ...this.state }),
    })
      .then(() => {
        this.setState({
          ...initialState,
          message: 'Thank you for your feedback!',
        });
      })
      .catch((error) => {
        this.setState({ message: error });
      });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { message } = this.state;
    return (
      <form
        data-netlify="true"
        data-netlify-honeypot="Coach"
        method="POST"
        name="RunThreeFeedback"
        onSubmit={this.handleSubmit}
      >
        <H5>Feedback</H5>
        <NoMarginP>
          If you have any feedback about Run3 please fill out the form below. Your email address is only necessary if you would like a reply.
        </NoMarginP>
        <InputWrapper>
          <Input
            autoComplete="name"
            name="Name"
            onChange={this.handleChange}
            placeholder="Name"
            type="text"
            value={this.state.Name}
          />
          <Input
            autoComplete="email"
            name="Email"
            onChange={this.handleChange}
            placeholder="Email"
            type="email"
            value={this.state.Email}
          />
          <PhoneInput
            autoComplete="tel-national"
            name="Phone"
            onChange={this.handleChange}
            placeholder="Phone"
            type="tel"
            value={this.state.Phone}
          />
          <TextArea
            name="Message"
            onChange={this.handleChange}
            placeholder="Message"
            rows="5"
            value={this.state.Message}
          />
        </InputWrapper>
        <div>{message}</div>
        <DefaultButton type="submit" message={message}>Submit</DefaultButton>
      </form>
    );
  }
}

export default Contact;
