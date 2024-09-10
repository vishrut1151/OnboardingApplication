import '../styles/ContactForm.css';
//import submitForm from './submitForm';

export default function App() {
  return (
    <form 
      // Ignore the onSubmit prop, it's used by GFE to
      // intercept the form submit event to check your solution.
      //onSubmit={submitForm} 
      //action="https://www.greatfrontend.com/api/questions/contact-form"
      method="post">
      <div className = "form">
      <label htmlFor = "name">
       Name
      </label>
      <input  id="email-input" name="name" type="text"/>
      <label>
      Email
      </label>
      <input id="email-input" name="email" type="email" />
     <textarea
          id="message-input"
          name="message"
          placeholder = "Message..">
      </textarea>
      <button> 
      Submit
      </button>
      </div>
    </form>
  );
}