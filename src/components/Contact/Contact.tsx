"use client";

import { useState } from "react";
import Image from "next/image";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import emailjs from "emailjs-com"; // Make sure to install EmailJS in your project
import Modal from "./Modal/Modal"; // Import the Modal component

const Contact = () => {
  const [formData, setFormData] = useState({
    fromName: "",
    replyTo: "",
    subject: "",
    message: "",
  });

  // Modal state
  const [modal, setModal] = useState({
    isOpen: false,
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: sanitizeInput(value),
    });
  };

  const sanitizeInput = (input: string) => {
    return input.replace(/<[^>]*>?/gm, ""); // No trim here
  };

  const sendEmail = () => {
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        {
          fromName: formData.fromName,
          email: formData.replyTo,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      )
      .then(
        () => {
          // Show success modal
          setModal({
            isOpen: true,
            message: "Email sent successfully!",
          });
        },
        (error) => {
          // Show error modal
          setModal({
            isOpen: true,
            message: "Failed to send email. Please try again.",
          });
          console.error("EmailJS Error:", error);
        }
      );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendEmail();
  };

  const closeModal = () => {
    setModal({ isOpen: false, message: "" });
  };

  return (
    <div className="w-full animate-fade-in-slide-bottom !overflow-clip  lg:my-0 flex-col flex justify-center lg:space-x-0 xl:space-x-8 text-3xl">
      {/* Modal */}
      <Modal
        isOpen={modal.isOpen}
        message={modal.message}
        onClose={closeModal}
      />

      <div className="flex justify-center space-x-6"></div>
      <div className="flex lg:flex-row flex-col justify-center lg:space-x-40">
        <div className="px-4 text-black my-8 space-y-10 xl:space-y-0 lg:flex-row flex-col flex xl:max-w-[66%] lg:space-x-0 xl:space-x-4 text-3xl">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-7 text-xl px-8 min-h-32 rounded-3xl min-w-[50%]">
              <p className="xl:w-full text-center lg:text-6xl mb-2 text-4xl xl:text-left  mt-8 font-medium text-dark-blue">
                CONTACT
              </p>
              <input
                type="text"
                name="fromName"
                placeholder="Name"
                className="border-2 xl:min-w-[40rem] border-gray-300 rounded-lg p-2"
                value={formData.fromName}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="replyTo"
                placeholder="Email"
                className="border-2 border-gray-300 rounded-lg p-2"
                value={formData.replyTo}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="border-2 border-gray-300 rounded-lg p-2"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                className="border-2 min-h-32 border-gray-300 rounded-lg p-2"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>

              {/* <ReCAPTCHA
                sitekey="YOUR_RECAPTCHA_SITE_KEY" // Replace with your reCAPTCHA site key
                onChange={handleCaptchaChange}
              /> */}

              <button
                type="submit"
                className="bg-light-blue text-white py-2 rounded-lg"
              >
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="px-4 my-8 space-y-10 xl:space-y-0 lg:flex-row flex-col flex xl:max-w-[66%] lg:space-x-0 xl:space-x-4 text-3xl">
          <div className="lg:max-w-[426px] lg:mx-0 flex flex-col justify-center lg:my-0 my-6 space-y-8">
            <Image
              src="/images/me.png"
              className="xl:min-w-[426px] lg:min-w-[300px] lg:min-h-[282px] place-self-center md:w-[213px] md:h-[200px] xl:h-[400px] rounded-full"
              alt="hero"
              width={400}
              height={400}
            />
            <div className="self-center xl:max-mx-56 lg:mx-0 justify-center flex mx-12 lg:my-0 my-8 w-full space-x-4">
              <button
                className="rounded-full hover:bg-dark-blue font-medium px-7 py-2 xl:text-xl text-[1rem] bg-light-blue transition-colors duration-300 ease-in-out"
                onClick={() => {
                  window.open("/files/Resume - Zied Kharrat.pdf", "_blank");
                }}
              >
                View Resume
              </button>

              <button
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/zied-kharrat/",
                    "_blank"
                  )
                }
                className=" text-light-blue rounded-lg text-5xl hover:text-dark-blue transition-colors duration-300 ease-in-out "
              >
                <IoLogoLinkedin />
              </button>
              <button
                onClick={() =>
                  window.open("https://github.com/zk2k2", "_blank")
                }
                className="text-light-blue rounded-lg text-5xl hover:text-dark-blue transition-colors duration-300 ease-in-out"
              >
                <IoLogoGithub />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
