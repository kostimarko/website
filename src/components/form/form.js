import React, { useState } from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import { FormContainer, Input, Button, Label, TextArea } from './form.css';
import Lottie from 'react-lottie';

const Form = () => {
  const [emailStatus, setEmailStatus] = useState(false);
  const [isDone, setDone] = useState(false);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require('../../animations/sendingMail.json'),
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const doneOptions = {
    loop: false,
    autoplay: true,
    animationData: require('../../animations/Done.json'),
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  if (emailStatus === false) {
    return (
      <Formik
        initialValues={{ email: '', name: '', message: '' }}
        validate={values => {
          let errors = {};

          if (!values.name) {
            errors.name = 'How will I know who you are?';
          }
          if (!values.email) {
            errors.email = 'How will I contact you without an email?';
          }
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Thats not an email.';
          }
          if (!values.message) {
            errors.message = 'How can I help you?';
          }

          return errors;
        }}
        onSubmit={values => {
          setEmailStatus(true);
          axios
            .post(
              'https://us-central1-website-e7696.cloudfunctions.net/addContact',
              {
                name: values.name,
                email: values.email,
                message: values.message,
              }
            )
            .then(response => {
              setDone(true);
              setTimeout(() => {
                setEmailStatus(false);
              }, 1000);
            })
            .catch(error => {
              console.log(error);
            });
        }}
        render={({
          touched,
          errors,
          values,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <FormContainer onSubmit={handleSubmit}>
            <Label>
              Name
              {touched.name && errors.name && (
                <span style={{ color: 'red', paddingLeft: 10 }}>
                  {errors.name}
                </span>
              )}
            </Label>
            <Input
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              type="text"
              name="name"
              placeholder="What do I call you?"
              border={touched.name && errors.name && '1px solid red'}
            />

            <Label>
              Email
              {touched.email && errors.email && (
                <span style={{ color: 'red', paddingLeft: 10 }}>
                  {errors.email}
                </span>
              )}
            </Label>
            <Input
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              type="text"
              name="email"
              placeholder="What's your email?"
              border={touched.email && errors.email && '1px solid red'}
            />

            <Label>
              Message
              {touched.message && errors.message && (
                <span style={{ color: 'red', paddingLeft: 10 }}>
                  {errors.message}
                </span>
              )}
            </Label>
            <TextArea
              placeholder="What's up?"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
              type="text"
              name="message"
              border={touched.message && errors.message && '1px solid red'}
            />
            <Button type="submit">Send Message</Button>
          </FormContainer>
        )}
      />
    );
  }
  if (emailStatus === true) {
    if (isDone === false) {
      return <Lottie options={defaultOptions} height={400} width={400} />;
    }
    if (isDone === true) {
      return <Lottie options={doneOptions} height={400} width={400} />;
    }
  }
};
export default Form;
