import React, { useState , useEffect} from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import logo from "../../assets/images/logo.png";
import "./FormHome.scss";


export const FormHome = () => {
  
  const [image, setImage] = useState("");
  


  const handleOnSubmit = ({image}) => {
    ///for access tu values use valuesForm object: example valuesForm.name
    console.log(JSON.stringify({image}));
    // setMessage("Su mensaje fue recepcionado a la brevedad se contestara");
    console.log({image})
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
      console.log(event.target.files[0]);
    }
    
  };
  return (
    <div className="container text-center p-3">
      <img src={logo} alt="Somos Mas Logo" />
      <div className="row">
        <div className="mx-auto col-lg-12 col-md-12 col-xs-12">
          <Formik
          initialValues={{
            lastModified:"",
            name:"", 
            size: "",
            type:""
          }}
          // validationSchema={validationSchema}
          onSubmit={handleOnSubmit}
          >
            {({
          values,
          handleSubmit,
          handleChange,
          handleBlur,
          errors,
          touched,
        }) => (
            <Form className="wrapper" onSubmit={handleOnSubmit}>
              <div className="one">            
                  <input
                    id="image"
                    name="file"
                    accept=".png"
                    type="file"
                    value={values.image}
                    onChange={onImageChange}
                    className="filetype"
                  />
                  <div className="image-preview">
                    <img src={image} alt="preview image"  className="image-preview__image"/>
                  </div>
                <div className="my-3">
                  <button type="submit" className="btn btn-primary">
                    Subir Imagen
                  </button>
                </div>
              </div>
            </Form>
        )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
