import React from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Contact = () => {
    const initialValues = {
        name: "",
        email: "",
        phone: "",
        services: "",
        message: "",
      };
      const validationSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Email is invalid").required("Email is required"),
        phone: Yup.string().min(10,"enter 10 num").matches(/^[0-9]*$/,"Only allow numbers").required("Password is required"),
        services: Yup.string().required("Select services"),
        message: Yup.string().required("Message is required"),
      });

      async function OnSubmit(values) {
        console.log(values);
      }
  return (
   
     <Formik 
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={OnSubmit}
     >
      {/*  contact */}
      {({ errors, touched, isSubmitting }) => (
      <>   
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Contact Now</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <Form id="request" className="main_form">
                <div className="row">
                  <div className="col-md-12 ">
                    
                    <Field
                        type="text"
                        className={
                        "contactus" +
                        (errors.name && touched.name
                            ? " is-invalid"
                            : "")
                        }
                        name="name"
                        placeholder="Your name"
                    />
                    <ErrorMessage
                        name="name"
                        component="div"
                        className="error-msg"
                    />
                  </div>
                  <div className="col-md-12">
                   
                    <Field
                        type="text"
                        className={
                        "contactus" +
                        (errors.email && touched.email
                            ? " is-invalid"
                            : "")
                        }
                        name="email"
                        placeholder="Your Email"
                    />
                    <ErrorMessage
                        name="email"
                        component="div"
                        className="error-msg"
                    />
                  </div>
                  <div className="col-md-12">
                   
                    <Field
                        type="text"
                        className={
                        "contactus" +
                        (errors.phone && touched.phone
                            ? " is-invalid"
                            : "")
                        }
                        name="phone"
                        placeholder="Phone no"
                    />
                    <ErrorMessage
                        name="phone"
                        component="div"
                        className="error-msg"
                    />
                  </div>
                  <div className="col-md-12">
                   
                     <Field
                        as="select"
                        className={
                        "contactus" +
                        (errors.services && touched.services
                            ? " is-invalid"
                            : "")
                        }
                        name="services"
                        >
                         <option value="">Select Services</option>   
                        <option value="Web Devolopment">Web Devolopment</option>
                        <option value="Graphic Design">Graphic Design</option>
                        <option value="Web Designer">Web Design</option>
                        </Field>  
                        <ErrorMessage
                              name="services"
                              component="div"
                              className="error-msg"
                            /> 
                  </div>
                  <div className="col-md-12">
                   
                    <Field
                        type="text"
                        // rows={20}
                        as="textarea"
                        className={
                        "textarea" +
                        (errors.message && touched.message
                            ? " is-invalid"
                            : "")
                        }
                        name="message"
                        placeholder="Write here your message"
                    />
                    <ErrorMessage
                        name="message"
                        component="div"
                        className="error-msg"
                    />
                  </div>
                  <div className="col-md-12">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="send_btn"
                        >
                        {isSubmitting && (
                            <span className="spinner-border spinner-border-sm mr-1"></span>
                        )}
                        Send Message
                        </button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
      </>
      )}
      {/* end contact */}
    </Formik>
  
  )
}

export default Contact