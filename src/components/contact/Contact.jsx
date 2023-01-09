import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import SectionTitle from "../SectionTitle";
import Email from "./Email";
import InputName from "./InputName";
import Message from "./Message";
import Socials from "./Socials";

import { projectVariant } from "../../utility/variant";

const Contact = () => {
  const form = useRef();
  // const inputRef = useRef();

  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publickey = import.meta.env.VITE_PUBLIC_KEY;
  const sendEmail = (e) => {
    e.preventDefault();

    // if (inputRef.current.value === "") {
    //   console.log("input can't be empty");
    //   return;
    // }

    emailjs.sendForm(serviceId, templateId, form.current, publickey).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    e.target.reset();
  };

  return (
    <motion.section
      initial='offScreen'
      whileInView={"onScreen"}
      variants={projectVariant}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45 }}
      id='contact'
    >
      <div className='t-container mt-24 font-serif text-zinc-50 '>
        <SectionTitle number={3} text='Contact' />
        <div className='flex flex-col items-center w-full'>
          <p className='mb-8 text-2xl'>Write me a message</p>

          <form
            onSubmit={sendEmail}
            ref={form}
            className='space-y-6  text-base w-full max-w-md'
          >
            <InputName />
            <Email />
            <Message />
            <div className='flex justify-end'>
              <button
                type='submit'
                className='py-2 px-4 bg-zinc-900 text-zinc-50 border-zinc-50 border hover:bg-tint'
              >
                Send Message
              </button>
            </div>
          </form>

          <Socials />
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
