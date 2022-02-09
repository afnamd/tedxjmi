import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { HiOutlineMail } from "react-icons/hi";
import { BiPhone } from "react-icons/bi";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const emailChangeHandler = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };
  const nameChangeHandler = (e) => {
    setFormData({ ...formData, name: e.target.value });
  };
  const messageChangeHandler = (e) => {
    setFormData({ ...formData, message: e.target.value });
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(formData);
    const req = await axios.post("/different-lenses/contact_us", formData);
    if (req.status === 200) {
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };
  return (
    <Layout>
      <div className="bg-white font-Cinzel flex flex-col justify-center items-center p-3">
        <div className="py-4 flex flex-col justify-center items-center">
          <h1 className="text-5xl">Contact Us </h1>
          <p className="py-2">Feel Free to contact us</p>
        </div>
        <div className="w-full md:p-4 font-Lora">
          <div className="flex flex-col justify-center items-center">
            <div className="flex py-2 border-b-2 border-red-200">
              <HiOutlineMail className="h-7 w-7 text-red-600" />
              <span className="self-center pl-1">team@tedxjmi.org</span>
            </div>
            <div className="flex py-2 ">
              <BiPhone className="h-7 w-7 text-red-600" />
              <span className="self-center pl-1">7073269078</span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center text-center mt-8 font-Cinzel">
            <p >Send us your queries by email.</p>
            <p>We endeavour to answer them all within 24 hours.</p>
          </div>
          <div className="flex flex-col justify-center items-center md:flex-row">
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  message: "",
                }}
              >
                <Form onSubmit={formSubmitHandler}>
                  <Field value={formData.email} onChange={emailChangeHandler} className="p-2 border my-2 w-full border-black outline-none focus:bg-gray-200/30 transition-all" name="email" placeholder="Email" />
                  <Field value={formData.name} onChange={nameChangeHandler} className="p-2 border my-2 w-full border-black outline-none focus:bg-gray-200/30 transition-all" name="name" placeholder="Name" />

                  <Field
                    value={formData.message}
                    onChange={messageChangeHandler}
                    className="w-full border my-2 p-2 border-black resize-none outline-none focus:bg-gray-200/30 h-60 transition-all"
                    placeholder="message"
                    name="message"
                    component="textarea"
                  />
                  <div className="flex flex-col justify-center items-center md:items-start">
                    <button className="px-5 py-3 bg-red-600 text-white font-bold shadow-md">Submit</button>
                  </div>
                </Form>
              </Formik>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
