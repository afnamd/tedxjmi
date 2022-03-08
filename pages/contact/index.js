import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { HiOutlineMail } from "react-icons/hi";
import { BiPhone } from "react-icons/bi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function isValidEmail(email){
  const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

  return emailRegex.test(email);
}


function Contact(props) {

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

                onSubmit={async (values) => {
                  if(isValidEmail(values.email) == false){
                    toast.error("Please enter a valid email address");
                    return;
                  }

                  try {

                    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/different-lenses/contact_us`;
                    console.log(url);
                    const res = await axios.post(url, values);
                    if (res.status === 200) {
                      toast.success("Your message has been sent successfully");
                    }

                  } catch (err){
                    console.log(err);
                    toast.error("Error Sending Message");
                  }

                }}

              >
                <Form>
                  <Field className="p-2 border my-2 w-full border-black outline-none focus:bg-gray-200/30 transition-all" name="email" placeholder="Email" />
                  <Field className="p-2 border my-2 w-full border-black outline-none focus:bg-gray-200/30 transition-all" name="name" placeholder="Name" />

                  <Field
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
      <ToastContainer />
    </Layout>
  );
}

export default Contact;
