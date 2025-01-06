import React from "react";

const Contact = () => {
  return (
    <div className="section_contact bg-cover text-white p-16 grid gap-16 grid-cols-1 md:grid-cols-2 text-xl">
      <div>
        <h1 className="text-3xl mx-0 my-5">LET'S TALK</h1>
        <p className="text-base mb-10">
          If you want know more about me or my work or just want to say hi leave
          a massege. I'll be gald to here it!
        </p>
        <form action="" className="flex flex-col gap-2.5">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            required
            className="rounded border-none p-1.5"
          />
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            required
            className="rounded border-none p-1.5"
          />
          <label htmlFor="massege">Massege</label>
          <textarea
            name="messege"
            id="massege"
            rows="4"
            cols="5"
            className="rounded border-none p-1.5"
          ></textarea>
        </form>
      </div>
      <div
        className="contact-social justify-end flex flex-col gap-5 mr-12 mt-20 self-center justify-self-end"
        contact-social
      >
        <div>
          <p className="justify-self-center">Email Address</p>
          <p>hossainrezayi26@gmail.com</p>
        </div>
        <div>
          <p className="justify-self-center">Social Media</p>
          <p className="justify-self-center">telegram, linkdin, github</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
