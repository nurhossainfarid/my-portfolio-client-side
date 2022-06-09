import React from 'react';
import Mypic4 from '../../../images/mypic4.jpeg';
import emailjs from 'emailjs-com';

const ContactMe = () => {
  const sendEmail = event => {
    event.preventDefault();

    emailjs.sendForm('service_mrocs38', 'template_v3cvqp4', event.target, 'pvStW713lYoezKmPh')
      .then(res => {
      console.log(res);
    }).catch(err => {console.log(err);})
  }
  return (
    <div className="" id="contact">
        <div class="px-28 bg-black py-28">
          <div class="flex gap-16">
            <img src={Mypic4} class="w-1/2 rounded-lg shadow-2xl order-1 md:order-2" />
          <div class="w-1/2">
            <h1 className="text-5xl font-bold text-white">Hire Me!</h1>
            <p className="text-lg text-gray-400 py-3">I am available for freelance work. Connect with me via phone: 01923 088574 or email: admin@example.com</p>
            <form action="" onSubmit={sendEmail}>
                      <div>
                        <label class="label">
                          <span class="label-text text-xl text-white font-semibold">Full Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Write your full name" class="input input-bordered w-full" />
                      </div>
                      <div>
                        <label class="label">
                          <span class="label-text text-xl text-white font-semibold">Email</span>
                        </label>
                        <input type="email" name="user_email" placeholder="email" class="input input-bordered w-full" />
                      </div>
                      <div>
                        <label class="label">
                          <span class="label-text text-xl text-white font-semibold">Description</span>
                        </label>
                        <textarea name="message" id="" cols="30" rows="5" placeholder="Your Message" class=" rounded p-3 w-full"></textarea>
                      </div>
                      <div>
                        <label class="label">
                          <span class="label-text text-xl text-white font-semibold">Contact Number</span>
                        </label>
                        <input type="tel" placeholder="Your phone number" class="input input-bordered w-full" />
                      </div>
                      <button className='btn w-1/4 bg-primary mt-5 text-xl'>Submit</button>
                </form>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ContactMe;