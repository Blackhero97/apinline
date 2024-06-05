import React from "react";
import "./contact.css";

function Contact() {
  return (
    <>
      <div className="contact">
        <div className="contact-box">
          <div className="contect-box-info">
            <h2>Connect with Us Today!</h2>
            <p>
              At Apinline, we value your inquiries, feedback, and
              collaborations. Whether you are interested in our digital
              services, have questions about our projects
            </p>
            <div className="commitment">
              <h3>Our Commitment to You</h3>
              <ul>
                <li>
                  <i class="bx bxs-badge-check"></i>Swift responses, dedicated
                  support
                </li>
                <li>
                  <i class="bx bxs-badge-check"></i>Efficient and always here
                  for you
                </li>
                <li>
                  <i class="bx bxs-badge-check"></i>We listen, understand, and
                  act promptly
                </li>
              </ul>
            </div>
          </div>
          <div className="contect-box-form">
            <form action="">
              <div className="input-boxes">
                <div className="input-box">
                  <label htmlFor="">First Name</label>
                  <input required placeholder="Enter First Name" type="text" />
                </div>
                <div className="input-box">
                  {" "}
                  <label htmlFor="">Last Name</label>
                  <input required placeholder="Enter Last Name" type="text" />
                </div>
              </div>
              <div className="input-boxes">
                <div className="input-box">
                  <label htmlFor="">Email</label>
                  <input required placeholder="Enter your Email" type="text" />
                </div>
                <div className="input-box">
                  {" "}
                  <label htmlFor="">Phone</label>
                  <input
                    required
                    placeholder="Enter Phone Number"
                    type="text"
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
                  ></textarea>
                </div>
              </div>
              <div className="form-btn-box">
                <button className="primary-btn">
                  <i class="bx bxs-send"></i>Send Your Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="contact-info-location">
          <div className="contact-info-card">
            <div className="contact-info-card-left">
              <span>You can email us here</span>
              <h4>apinline@gmail.com</h4>
            </div>
            <div className="contact-info-card-right">
              <i class="bx bxs-chevron-right-circle"></i>
            </div>
          </div>
          <div className="contact-info-card">
            <div className="contact-info-card-left">
              <span>Give us a call on</span>
              <h4>+998(88)-371-52-71</h4>
            </div>
            <div className="contact-info-card-right">
              <i class="bx bxs-chevron-right-circle"></i>
            </div>
          </div>
          <div className="contact-info-card">
            <div className="contact-info-card-left">
              <span>Office Hours</span>
              <h4>9:00 am - 6:00 pm</h4>
            </div>
            <div className="contact-info-card-right">
              <i class="bx bxs-chevron-right-circle"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
