import React from "react";
import Layout from "../../components/layout";
import { Formik, Form, Field, ErrorMessage } from "formik";

import {HiOutlineMail} from 'react-icons/hi'
import {BiPhone} from 'react-icons/bi'

function Contact() {
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
                    <HiOutlineMail className="h-7 w-7 text-red-600"/>
                    <span className="self-center pl-1">team@tedxjmi.org</span>
                </div>
                <div className="flex py-2 ">
                    <BiPhone className="h-7 w-7 text-red-600"/>
                    <span className="self-center pl-1">7073269078</span>
                </div>
            </div>
          <div className="flex flex-col justify-center items-center text-center md:justify-start md:items-start">
            <p>Send us your queries by email.</p>
            <p>We endeavour to answer them all within 24 hours.</p>
          </div>
          <div className="flex flex-col justify-center items-center md:flex-row">
            <div className="flex-1">
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  message: "",
                }}
              >
                <Form>
                  <Field
                    className="p-2 border my-2 w-full border-black outline-none focus:bg-gray-200/30 transition-all"
                    name="email"
                    placeholder="Email"
                  />
                  <Field
                    className="p-2 border my-2 w-full border-black outline-none focus:bg-gray-200/30 transition-all"
                    name="name"
                    placeholder="Name"
                  />

                  <Field
                    className="w-full border my-2 p-2 border-black resize-none outline-none focus:bg-gray-200/30 h-60 transition-all"
                    placeholder="message"
                    name="message"
                    component="textarea"
                  />
                  <div className="flex flex-col justify-center items-center md:items-start">
                    <button className="px-5 py-3 bg-red-600 text-white font-bold shadow-md">
                      Submit
                    </button>
                  </div>
                </Form>
              </Formik>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <div className="p-1 border-2 inline-block border-black my-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7008.636183147335!2d77.28057272543543!3d28.560209429785534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce38acd1105e9%3A0xc7a86610a5a612d9!2sJamia%20Millia%20Islamia!5e0!3m2!1sen!2sin!4v1642704953954!5m2!1sen!2sin"
                  allowfullscreen=""
                  loading="lazy"
                  className="w-80 h-80 md:w-96"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
