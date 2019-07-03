import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
      .then(this.props.closeModal);
      // .catch();
  }

  handleInput(type) {
    return e => {
      this.setState({
        [type]: e.target.value
      });
    }
  }

  loginDemoUser() {
    // create mock user credentials
    // create default empty state
    // update state inside of helper function until 
      // demo password.length == 0
    // submit form using updated state
    // closemodal + clear session errors
    
  }

  render() {

    // Errors
    let errors;
    if (this.props.errors) {
      errors = (
        <div className="modal__errors-container">
          {this.props.errors.map((error, idx) => {
              return (
                <p 
                  key={idx}
                  className="modal__errors-single">
                  {error}
                </p>
              )
            })
          }
        </div>
      );
    }

    // Sign up/Log in message
    let existingAccountMessage;
    if (this.props.formType === 'Log in') {
      existingAccountMessage = "Don't have an account?";
    } else {
      existingAccountMessage = "Already have an Airbnb account?";
    }

    return (
      <div className="modal__form-container">
        <h2 className="modal__header">{this.props.formType}</h2>
        <a 
          href="#" 
          className="modal__btn-close"
          onClick={this.props.closeModal} >
          <i className="fas fa-times"></i>
        </a>


        <a 
          href="#" 
          onClick={this.loginDemoUser} 
          id="modal__btn-submit-id"
          className="modal__btn--submit modal__btn--submit-demo modal__btn">Log in with demo account</a>
        <div className="modal__divider-container">
          <p className="modal__divider-content">or</p>
        </div>

        <br/>
        {errors}
        <br/>
        <form 
          onSubmit={this.handleSubmit} 
          className="ui form modal__form">


          <input 
            type="text" 
            value={this.state.username} 
            placeholder="Username"
            onChange={this.handleInput('username')} 
            className="modal__input-text input__text modal__input-text--username"/>
          <br/>
          <input 
            type="text" 
            value={this.state.password}
            placeholder="Password"
            onChange={this.handleInput('password')} 
            className="modal__input-text input__text modal__input-text--password"/>
          <br /><br />
          <input 
            type="submit" 
            value={this.props.formType} 
            id="modal__btn-submit-id"
            className="ui button basic modal__btn--submit modal__btn" />
        </form>
        <div className="modal__other-form-container">
          <p className="modal__account-msg">
            {existingAccountMessage}
          </p>
          {this.props.otherForm}
        </div>
      </div>
    );
  }
}

export default SessionForm;