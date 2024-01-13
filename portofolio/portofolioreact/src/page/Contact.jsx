import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost/api/user/save", inputs)
      .then(function (response) {
        console.log(response.data);
      });
    console.log(inputs);
  };
  return (
    <div>
      {/* <!-- Section Contact --> */}
      <section className="contact" id="contact">
        <h2 className="heading">
          Contact <span>Me</span>
        </h2>

        <form action="#" onSubmit={handleSubmit}>
          <div className="input-box">
            <div className="input-field">
              <input
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Full Name"
                required
              />
              <span className="focus"></span>
            </div>

            <div className="input-field">
              <input
                type="text"
                name="email_address"
                onChange={handleChange}
                placeholder="Email Address"
                required
              />
              <span className="focus"></span>
            </div>

            <div className="input-field">
              <input
                type="text"
                name="mobile_phone"
                onChange={handleChange}
                placeholder="Mobile Number"
                required
              />
              <span className="focus"></span>
            </div>

            {/* <div className="input-field">
              <input type="text" placeholder="Email Subject" required />
              <span className="focus"></span>
            </div> */}

            <div className="textarea-field">
              <textarea
                name="message"
                id=""
                onChange={handleChange}
                cols="90"
                rows="10"
                placeholder="Your Message"
                required
              ></textarea>
              <span className="focus"></span>
            </div>

            <div className="btn-box.btns">
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </div>
        </form>
      </section>
      {/* <!-- Section Contact End --> */}
    </div>
  );
}
