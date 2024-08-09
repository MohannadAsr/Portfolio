'use client';
import emailjs from '@emailjs/browser';

import React from 'react';
import MainSection from '../shared/MainSection';
import Logo from '../NavBar/Logo';

function ContactMe() {
  const [disableBtn, setDisableBtn] = React.useState<boolean>(false);
  const [alert, setAlert] = React.useState({ state: false, result: 200 });

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_hbr3vjl',
        'template_vaytgkm',
        e.currentTarget,
        'IfGxXlyWC1PbHM1O9'
      )
      .then(
        (result) => {
          setAlert({ state: true, result: result.status });
          if (result.status === 200) {
            setDisableBtn(true);
          }
        },
        (error) => {
          setAlert({ state: true, result: 0 });
        }
      );
  };
  return (
    <MainSection title="Contact Me">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-3 " id="contact">
        <form
          className="flex flex-col gap-2"
          onSubmit={(e) => {
            sendEmail(e);
          }}
        >
          <label>Name</label>
          <input type="text" placeholder="Enter Your Name" name="name" />
          <label>Email</label>
          <input
            type="email"
            placeholder="*Enter Your E-mail"
            name="email"
            required
          />
          <label>Subject</label>
          <input type="text" placeholder="Enter your Subject" name="subject" />
          <label>Message</label>
          <textarea name="message" placeholder="*Your Message Here" required />
          <button
            type="submit"
            value="Send"
            className="w-full bg-white/5 p-3 rounded-lg font-bold main-button"
            disabled={disableBtn}
          >
            Send
          </button>
        </form>
        <div className=" flex flex-col gap-3 p-6">
          <Logo />
          <p className="fs-4 mt-md-5 mt-1">
            Feel free to contact me if you need any help, advice or to discuss
            your project , you can fill this form and send me an instant message
          </p>

          <p className=" fs-6">
            All new projects and designs will be uploaded here in my portfolio,
            stay tuned for more
          </p>
          <p className="">
            <span className=" text-orange-400"> Last Update : </span>
            {new Date('2024-8-9').toDateString()}
          </p>
        </div>
      </div>
      {/* <Alert alert={alert} /> */}
    </MainSection>
  );
}

export default ContactMe;
