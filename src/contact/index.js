import React, { PureComponent } from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 29.41rem;
`;

const Input = styled.input`
  appearance: none;
  background: none;
  box-sizing: border-box;
  border: 0.2rem solid #fff;
  border-radius: 0;
  color: #fff;
  margin-bottom: 1rem;
  padding: 0.47rem;
  width: 100%;

  &::placeholder {
    color: #fff;
  }
`;

const PhoneInput = Input.extend`
  display: none;
`;

const TextArea = styled.textarea`
  appearance: none;
  background: none;
  box-sizing: border-box;
  border: 0.2rem solid #fff;
  border-radius: 0;
  color: #fff;
  margin-bottom: 1rem;
  padding: 0.47rem;
  width: 100%;

  &::placeholder {
    color: #fff;
  }
`;

const Submit = styled.button`
  border: 0.2rem solid #fff;
  border-radius: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  margin-top: ${props => props.message ? '1rem' : 0};
  padding: 0.5rem 1rem;
  text-transform: uppercase;
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
        <Submit type="submit" message={message}>Submit</Submit>
      </form>
    );
  }
}

export default Contact;
