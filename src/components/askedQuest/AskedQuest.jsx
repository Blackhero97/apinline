import React, { useState } from "react";
import "./quest.css";
function AskedQuest() {
  const [open, setOpen] = useState(null);
  const accordionOpen = (i) => {
    if (open == i) {
      return setOpen(i);
    }
    setOpen(i);
  };
  return (
    <>
      <div className="asked">
        <div className="asked-box">
          <div className="asked-box-top">
            <h2>Frequently Asked Question</h2>
            <p>
              If your question isn't addressed here, feel free to reach out—I'm
              always ready to provide further assistance
            </p>
          </div>
          <div className="asked-box-bottom-wrapper">
            <div className="asked-box-bottom-quest-box">
              <div className="asked-card">
                <h3>Ask A Question</h3>
                <p>
                  Here's what some of my satisfied clients have to say about my
                  work
                </p>
                <button className="primary-btn">Book a Call</button>
              </div>
            </div>
            <div className="asked-box-bottom">
              <div
                onClick={(i) => accordionOpen(1)}
                className={
                  open == 1 ? "asked-accordion active" : "asked-accordion"
                }
              >
                <div className="asked-accordion-head">
                  <h4>Can you work with clients remotely?</h4>
                  <div className="open-box">
                    <i class="bx bx-plus"></i>
                  </div>
                </div>

                <div className="asked-accordion-body">
                  <p>
                    Our Web Design service is all about creating visually
                    stunning and user-friendly websites that leave a lasting
                    impression on your audience. We blend creativity with
                    functionality to deliver websites that showcase your brand's
                    identity while ensuring seamless navigation and optimal user
                    experience.
                  </p>
                </div>
              </div>
              <div
                onClick={(i) => accordionOpen(2)}
                className={
                  open == 2 ? "asked-accordion active" : "asked-accordion"
                }
              >
                <div className="asked-accordion-head">
                  <h4>
                    How long does it typically take to complete a web design
                    project?
                  </h4>
                  <div className="open-box">
                    <i class="bx bx-plus"></i>
                  </div>
                </div>

                <div className="asked-accordion-body">
                  <p>
                    Our Web Design service is all about creating visually
                    stunning and user-friendly websites that leave a lasting
                    impression on your audience. We blend creativity with
                    functionality to deliver websites that showcase your brand's
                    identity while ensuring seamless navigation and optimal user
                    experience.
                  </p>
                </div>
              </div>
              <div
                onClick={(i) => accordionOpen(3)}
                className={
                  open == 3 ? "asked-accordion active" : "asked-accordion"
                }
              >
                <div className="asked-accordion-head">
                  <h4>Do you offer website maintenance services?</h4>
                  <div className="open-box">
                    <i class="bx bx-plus"></i>
                  </div>
                </div>

                <div className="asked-accordion-body">
                  <p>
                    Our Web Design service is all about creating visually
                    stunning and user-friendly websites that leave a lasting
                    impression on your audience. We blend creativity with
                    functionality to deliver websites that showcase your brand's
                    identity while ensuring seamless navigation and optimal user
                    experience.
                  </p>
                </div>
              </div>
              <div
                onClick={(i) => accordionOpen(4)}
                className={
                  open == 4 ? "asked-accordion active" : "asked-accordion"
                }
              >
                <div className="asked-accordion-head">
                  <h4>Can you optimize my website for search engines?</h4>
                  <div className="open-box">
                    <i class="bx bx-plus"></i>
                  </div>
                </div>
                <div className="asked-accordion-body">
                  <p>
                    Our Web Design service is all about creating visually
                    stunning and user-friendly websites that leave a lasting
                    impression on your audience. We blend creativity with
                    functionality to deliver websites that showcase your brand's
                    identity while ensuring seamless navigation and optimal user
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AskedQuest;
