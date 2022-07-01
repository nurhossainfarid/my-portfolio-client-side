import React from 'react';
import emailjs from 'emailjs-com';
import { BsPersonFill, BsFillTelephoneFill, BsMailbox2 } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import './ContactMe.css';


const ContactMe = () => {
  const sendEmail = event => {
    event.preventDefault();

    emailjs.sendForm('service_mrocs38', 'template_v3cvqp4', event.target, 'pvStW713lYoezKmPh')
      .then(res => {
      console.log(res);
    }).catch(err => {console.log(err);})
  }
  return (
    <div className="relative" id="contact">
      <div class="p-10 md:p-28 md:pt-16 md:pb-6 bg-black">
      <h1 className="text-4xl md:text-5xl font-bold text-white text-center pb-16">Contact Me</h1>
          <div class="flex md:flex-row flex-col gap-16">
            {/* <img src={HireMe} class="w-full md:w-1/2 rounded-lg shadow-2xl order-1 md:order-2" data-aos="zoom-in-right"/> */}
          <div class="w-full md:w-1/2 order-2" data-aos="zoom-in-left">
            <h1 className="text-4xl md:text-3xl font-bold text-white">Hire Me!</h1>
            <p className="text-lg text-gray-300 py-3 pb-5">If we need any kinds of web application, I will try to provide your expectation project.</p>
            <form action="" onSubmit={sendEmail}>
                      <div>
                        <label class="label">
                          <span class="label-text text-lg md:text-xl text-white md:font-semibold">Full Name : </span>
                        </label>
                        <input type="text" name='name' placeholder="Write your full name" class="input input-bordered w-full" />
                      </div>
                      <div>
                        <label class="label">
                          <span class="label-text text-lg md:text-xl text-white md:font-semibold">Email : </span>
                        </label>
                        <input type="email" name="user_email" placeholder="email" class="input input-bordered w-full" />
                      </div>
                      <div>
                        <label class="label">
                          <span class="label-text text-lg md:text-xl text-white md:font-semibold">Description : </span>
                        </label>
                        <textarea name="message" id="" cols="30" rows="3" placeholder="Your Message" class="input2 rounded p-3 w-full"></textarea>
                      </div>
                      <div>
                        <label class="label">
                          <span class="label-text text-lg md:text-xl text-white md:font-semibold">Contact Number : </span>
                        </label>
                        <input type="tel" placeholder="Your phone number" class="input input-bordered w-full" />
                      </div>
                      <button className='btn bg-inherit border-2 hover:bg-primary text-lg text-white hover:scale-110 hover:border-primary mt-5'>Submit</button>
                </form>
          </div>
          <div class="w-full md:w-1/2">
            <h1 className="text-4xl md:text-3xl font-bold text-white">Get in Touch</h1>
            <p className="text-lg text-gray-300 py-3">If you have any query want to ask me or want to give me any important message, you can send me a message at any time and yes, I will try to reply to your message in your email.</p>
            <ul className="gap-16 grid grid-cols-1 mt-6">
              <li className="flex gap-4 items-center">
                <BsPersonFill className="text-white text-4xl hover:text-primary"></BsPersonFill>
                <span>
                <h3 className="text-xl font-bold text-white">Name</h3>
                <h3 className="text-lg font-semibold text-gray-100 hover:text-primary">Nur Hossain Farid</h3>
                </span>
              </li>
              <li className="flex gap-4 items-center">
                <BsFillTelephoneFill className="text-white text-4xl hover:text-primary"></BsFillTelephoneFill>
                <span>
                <h3 className="text-xl font-bold text-white">Cell/WhatsApp</h3>
                <h3 className="text-lg font-semibold text-gray-100 hover:text-primary">01841268946</h3>
                </span>
              </li>
              <li className="flex gap-4 items-center">
                <BsMailbox2 className="text-white text-4xl hover:text-primary"></BsMailbox2>
                <span>
                <h3 className="text-xl font-bold text-white">Email</h3>
                <h3 className="text-lg font-semibold text-gray-100 hover:text-primary">nurhossainfarid1516@gmail.com</h3>
                </span>
              </li>
              <li className="flex gap-4 items-center">
                <MdLocationOn className="text-white text-4xl hover:text-primary"></MdLocationOn>
                <span>
                <h3 className="text-xl font-bold text-white">Address</h3>
                <h3 className="text-lg font-semibold text-gray-100 hover:text-primary">Ashulia, Dhaka, Bangladesh</h3>
                </span>
              </li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          </div>
        </div>
    </div>
  );
};

export default ContactMe;