import React, { FormEvent, FormEventHandler } from 'react';
import styled from 'styled-components';
import { Section } from './styled/styles/Section.style';
import { UniqueHead } from './styled/styles/UniqueHead';
import { Col, Container, Row } from 'react-bootstrap';
import { Button } from './styled/styles/Button.style';
import emailjs from '@emailjs/browser';
import Alert from './Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faGithubSquare,
  faInstagramSquare,
  faLinkedin,
  faWhatsappSquare,
} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ContactSection = styled(Section)``;

export default function ContactMe() {
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
    <ContactSection className="py-3" id="contact">
      <Container>
        <motion.div
          key={4}
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <UniqueHead className="my-3">Contact Me</UniqueHead>
        </motion.div>
        <div>
          <Row>
            <Col xs={12} md={6} className="my-5">
              <form
                className="d-flex flex-column gap-2 m-auto"
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
                <input
                  type="text"
                  placeholder="Enter your Subject"
                  name="subject"
                />
                <label>Message</label>
                <textarea
                  name="message"
                  placeholder="*Your Message Here"
                  required
                />
                <Button
                  type="submit"
                  value="Send"
                  className="w-25 m-auto my-2 text-uppercase"
                  disabled={disableBtn}
                >
                  Send
                </Button>
              </form>
            </Col>
            <Col xs={12} md={6}>
              <p className="fs-4 mt-md-5 mt-1">
                Feel free to contact me if you need any help, advice or to
                discuss your project , you can fill this form and send me an
                instant message , also you can find me in :
              </p>
              <div className="d-flex flex-row gap-3 px-3 my-3">
                {[
                  {
                    name: faLinkedin,
                    link: 'https://www.linkedin.com/in/mohannad-alassar-137597275/',
                  },
                  {
                    name: faFacebookSquare,
                    link: 'https://www.facebook.com/mohannad.ala2sar/',
                  },
                  {
                    name: faWhatsappSquare,
                    link: 'https://api.whatsapp.com/send/?phone=963964539647',
                  },
                  {
                    name: faGithubSquare,
                    link: 'https://github.com/MohannadAsr',
                  },
                  {
                    name: faInstagramSquare,
                    link: 'https://www.instagram.com/alassarmohannad/',
                  },
                ].map((logo, index) => {
                  return (
                    <motion.div
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                      key={index}
                    >
                      <Link
                        href={logo.link}
                        target="blank"
                        aria-label={`Visit My Account on ${logo.name}`}
                      >
                        <FontAwesomeIcon
                          icon={logo.name}
                          size="2xl"
                          role="button"
                          style={{ color: '#fff' }}
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
              <p className="text-center fs-1">M.ASR Portfolio</p>
              <p className="text-center fs-6">
                All new projects and designs will upload here in my portfolio,
                stay tuned for more
              </p>
              <p className=" text-center">
                <span className=" text-warning"> Last Update : </span>
                {new Date('2023-12-1').toDateString()}
              </p>
            </Col>
          </Row>
        </div>
        <Alert alert={alert} />
      </Container>
    </ContactSection>
  );
}
