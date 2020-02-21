import React, { useState,useEffect } from "react";
import axios from "axios"
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [data, setData] = useState();
  const { register, errors, handleSubmit, reset } = useForm({
    mode: "onBlur"
  });
  
  
  const onSubmit = data => {
    setData(data);
    axios
      .post("https://reqres.in/api/users", {
        first_name: data.first_name,
        last_name: data.last_name
      })
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      })

    }
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name*</label>
          <input
            name="firstName"
            placeholder="bill" //bug fixed here: the place holder was in the label above
            required="required"
            ref={register({ required: true, maxLength: 12 })} //max length was too short
          />
          {errors.firstName && (
            <p>Looks like there was an error: {errors.firstName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName">Last Name*</label>
          <input
            name="lastName"
            placeholder="luo"
            required
            ref={register({ required: true })}
          />
          {errors.lastName && (
            <p>Looks like there was an error: {errors.lastName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="email">Email*</label>
          <input
            name="email"
            placeholder="bluebill1049@hotmail.com"
            required
            ref={register({ required: true })}
          />
          {errors.email && (
            <p>Looks like there was an error: {errors.email.type}</p>
          )}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            data-testid="textarea"
            ref={register({ required: false })}
            
          />
        </div>
        {data && (
          <pre style={{ textAlign: "left", color: "white" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
        <input type="submit" />
      </form>
    </div>
  );
};

export default ContactForm
