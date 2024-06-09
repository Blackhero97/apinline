import { useState } from "react";
import "./contact.css";
import axios from "axios";


function Contact() {
  var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1; // Month is zero-based, so we add 1
    var year = currentDate.getFullYear();
    var formattedDate = day + "/" + month + "/ " + year;

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const sendMessageToTelegram = (e) => {
      e.preventDefault();
      setErrorMessage('');

      const telegramMessage = `New Message!\n\nFirst Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}\nDate: ${formattedDate}`;

      const token = '7408762382:AAFIQpx6se__8tnnLy0TkjQbSySapY9FKIA';
      const chatId = -1002197848312;

      axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
          chat_id: chatId,
          text: telegramMessage
      })
          .then(response => {
              alert('Message sent to Telegram:', response.data);
              setFirstName('');
              setLastName('');
              setEmail('');
              setPhone('');
              setSubject('');
              setMessage('');
          })
          // .catch(error => {
          //     setErrorMessage('Error sending message to Telegram. Please try again later.');
          // });
      };
  return (
    <>
      <div className="contact page-padding">
        <div className="contact-box">
          <div className="contect-box-info card-padding">
            <h2>Connect with Us Today!</h2>
            <p>
              At Apinline, we value your inquiries, feedback, and
              collaborations. Whether you are interested in our digital
              services, have questions about our projects
            </p>
            <div className="commitment card-padding">
              <h3>Our Commitment to You</h3>
              <ul>
                <li>
                  <i className="bx bxs-badge-check"></i>Swift responses, dedicated
                  support
                </li>
                <li>
                  <i className="bx bxs-badge-check"></i>Efficient and always here
                  for you
                </li>
                <li>
                  <i className="bx bxs-badge-check"></i>We listen, understand, and
                  act promptly
                </li>
              </ul>
            </div>
          </div>
          <div className="contect-box-form card-padding">
            <form action="" onSubmit={sendMessageToTelegram}>
              <div className="input-boxes">
                <div className="input-box">
                  <label htmlFor="">First Name</label>
                  <input required placeholder="Enter First Name" type="text" value={firstName}
                                    onChange={e => setFirstName(e.target.value)} />
                </div>
                <div className="input-box">
                  {" "}
                  <label htmlFor="">Last Name</label>
                  <input required placeholder="Enter Last Name" type="text" value={lastName}
                                    onChange={e => setLastName(e.target.value)} />
                </div>
              </div>
              <div className="input-boxes">
                <div className="input-box">
                  <label htmlFor="">Email</label>
                  <input required placeholder="Enter your Email" type="email" value={email}
                                    onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="input-box">
                  {" "}
                  <label htmlFor="">Phone</label>
                  <input
                    required
                    placeholder="Enter Phone Number"
                    type="number"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="input-boxes">
                <div className="input-box">
                  <label htmlFor="">Subject</label>
                  <input
                    required
                    placeholder="Enter your Subject"
                    type="text"
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                  />
                </div>
              </div>
              <div className="input-boxes">
                <div className="input-box">
                  <label htmlFor="">Message</label>
                  <textarea
                    required
                    placeholder="Enter your Message here.."
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                  ></textarea>
                </div>
              </div>
              {errorMessage && <p className="text-center pt-2.5 text-red-500">{errorMessage}</p>}
              <div className="form-btn-box">
                <button className="primary-btn" type="submit">
                  <i className="bx bxs-send"></i>Send Your Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="contact-info-location ">
          <div className="contact-info-card card-padding">
            <div className="contact-info-card-left">
              <span>You can email us here</span>
              <h4>apinline@gmail.com</h4>
            </div>
            <div className="contact-info-card-right">
              <i className="bx bxs-chevron-right-circle"></i>
            </div>
          </div>
          <div className="contact-info-card card-padding">
            <div className="contact-info-card-left">
              <span>Give us a call on</span>
              <h4>+998(88)-371-52-71</h4>
            </div>
            <div className="contact-info-card-right">
              <i className="bx bxs-chevron-right-circle"></i>
            </div>
          </div>
          <div className="contact-info-card card-padding">
            <div className="contact-info-card-left">
              <span>Office Hours</span>
              <h4>9:00 am - 6:00 pm</h4>
            </div>
            <div className="contact-info-card-right">
              <i className="bx bxs-chevron-right-circle"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
