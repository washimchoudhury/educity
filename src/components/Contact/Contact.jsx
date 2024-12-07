import React from 'react'
import './Contact.css'
import message_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "97193a6d-c349-409d-a986-80374c5dd90a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={message_icon} alt="" /></h3>
        <p>Feel Free to reach us through the contact form given below. Your feedback and suggestions are important to us .</p>
        <ul>
          <li><img src={mail_icon} alt="" />Max@gmail.com</li>
          <li><img src={phone_icon} alt="" />+18479505948</li>
          <li><img src={location_icon} alt="" />Local Street 07, London Usa</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label >Your Name</label>
          <input type="text" name='name' placeholder='Enter your name' required />
          <label >Your Phone No.</label>
          <input type="tel" name='phone' placeholder='Enter your Phone no.' required />
          <label>Enter your message</label>
          <textarea name='msg' id='msg' rows='6'></textarea>
          <button className='btn-dark' type='submit'>Submit</button>
        </form>
        <span>{result}</span>
      </div>

    </div>
  )
}

export default Contact
