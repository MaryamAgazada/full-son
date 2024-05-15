import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
function Add() {
  return (
    <div>
    <Formik
       initialValues={{ name: '', age: ''}}
       valageationSchema={Yup.object({
         name: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .required('Required'),
         age: Yup.number()
           .max(20, 'Must be 20 characters or less')
           .required('Required'),
       
       })}
       onSubmit={(values) => {
        fetch('http://localhost:3000/products', {
            method: 'POST',
            body: JSON.stringify(values)
          })
              .then(response => response.json())
       }}
     >
       <Form>
         <label htmlFor="name"> Name</label>
         <Field name="name" type="text" />
         <ErrorMessage name="name" />
 
         <label htmlFor="age">age</label>
         <Field name="age" type="number" />
         <ErrorMessage name="age" />
 
         <button type="submit">Submit</button>
       </Form>
     </Formik>
    </div>
  )
}

export default Add
