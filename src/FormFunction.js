import React, { useState } from "react";

const Formfunction = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gen, setGen] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
    // console.log(name);
  };

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
    // console.log(email);
  };
  const handleGenChange = (e) => {
    e.preventDefault();
    setGen(e.target.value);
    // console.log(gen);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let studentsDetails = {
      name,
      email,
      gen,
    };

    console.log(studentsDetails);
  };
  return (
    <div>
      <h1>Student function Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Full name:</label>
        <input type="text" value={name} onChange={handleChange} />
        <br></br>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
        <br></br>
        <label>Gen:</label>
        <input type="text" value={gen} onChange={handleGenChange} />
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Formfunction;
