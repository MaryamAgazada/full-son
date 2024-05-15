import React from 'react'
import { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useParams } from 'react-router-dom';

function Update() {

    const [data, setData] = useState([]);
let{id}=useParams()


async function getAllData() {
 const res = await fetch("http://localhost:3000/products/"+id)
 const data = res.json()
return data
}
  
  useEffect(() => {
    datalar()
  }, []);


  async function datalar() {
    const datalars = await getAllData(id)
    setData(datalars)
  }


  return (
    <div>
     <Formik
       initialValues={{ name: data.name, age: data.age}}
       valageationSchema={Yup.object({
         name: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .required('Required'),
         age: Yup.number()
           .max(20, 'Must be 20 characters or less')
           .required('Required'),
       
       })}
       onSubmit={(values, { setSubmitting }) => {
        console.log(values)
        setTimeout(() => {
          fetch("http://localhost:3000/products/" + id, {
            method: "put",
            headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            }, body: JSON.stringify({ name: values.name,age: values.age }),
          });

          setSubmitting(false);
        }, 400);
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

export default Update
