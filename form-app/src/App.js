import { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";

const App = () => {
  const [values, setValues] = useState({
    pid: "",
    pname: "",
    pprice:"",
    mdate: "",
    exdate: "",
    
  });

  const inputs = [
    {
      id: 1,
      name: "pid",
      type: "text",
      placeholder: "Product ID",
      errorMessage:
        "ID should be 3-16 characters and shouldn't include any special character!",
      label: "Product ID",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "pname",
      type: "text",
      placeholder: "Product Name",
      errorMessage:
      "Name should be 3-16 characters and shouldn't include any special character!",
      label: "Product Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 3,
      name: "pprice",
      type: "text",
      placeholder: "Product Price",
      errorMessage:
      "Only number is valid",
      label: "Product Price",
      pattern: "[0-9]",
      required: true,
    },
    {
      id: 4,
      name: "mdate",
      type: "date",
      placeholder: "Manufactoring Date",
      label: "Manufactoring Date",
      required: true,
    },
    {
      id: 5,
      name: "exdate",
      type: "date",
      placeholder: "Expiration Date",
      label: "Expiration Date",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setInterval('window.location.reload(false)', 3000);
    const data= new FormData(e.target)
    console.log(Object.fromEntries(data.entries()))
    
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>New User</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;