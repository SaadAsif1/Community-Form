import React from 'react';

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: '',
      buttonText: 'Submit',
    };
  }

  // Submit form functions
  submitForm(ev) {
    ev.preventDefault();
    this.setState({ buttonText: 'Submitting...' });
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ buttonText: 'Submited' });
        this.setState({ status: 'SUCCESS' });
      } else {
        this.setState({ status: 'ERROR' });
      }
    };
    xhr.send(data);
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action='https://formspree.io/xoqkdowg'
        method='POST'
        className='form'
      >
        <div className='form-title-container'>
          <div className='form-title'>Contribute Your Ideas</div>
        </div>
        <div>
          <label>Name:</label>
          <input type='text' name='name' required />
        </div>
        <div>
          <label>Email:</label>
          <input type='email' name='email' required />
        </div>
        <div>
          <label>Community Name:</label>
          <input type='text' name='community' required />
        </div>
        <div>
          <label>Idea:</label>
          <textarea name='idea' id='idea' required></textarea>
        </div>
        {status === 'SUCCESS' ? (
          <p className='submit-thanks'>Thank You!</p>
        ) : (
          <button className='submit-button'>{this.state.buttonText}</button>
        )}
        {status === 'ERROR' && (
          <p className='submit-thanks'>Ooops! There was an error.</p>
        )}
      </form>
    );
  }
}
