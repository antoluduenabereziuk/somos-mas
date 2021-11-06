import React, { useState , useEffect} from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import logo from "../../assets/images/logo.png";
import "./FormHome.scss";

// const validationSchema = Yup.object({
//   welcomeMessage: Yup.string()
//     .required("Required")
//     .min(20, "Mínimo 20 caracteres"),
//   image: Yup.string().required("Required"),
//   description: Yup.string().required("Required").min(6, "Mínimo 6 caracteres"),
// });

// const initialValues = {
//   welcomeMessage: "",
//   image: "",
//   description: "",
// };

export const FormHome = () => {

  const [image, setImage] = useState(null);
    const [data, setData]= useState({
          welcomeMessage: "",
          image: "",
          description: "",
        }
        );

    const handleSubmit = (values) => {
        console.log(values);
        // console.log({ 
        //     fileName: values.file.name, 
        //     type: values.file.type,
        //     size: `${values.file.size} bytes`
        //   });
    //     const {image} = values
    //   setData({
    //     ...data,
    //         image:image
    //   })
    //   console.log(data);
    };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(`${URL.createObjectURL(event.target.files[0])}`);
        console.log(event.target.files);
    }
    
  };

//   useEffect(() => {
//       console.log(image);
//   }, [image])

  return (
    <div className="container text-center p-3">
      <img src={logo} alt="Somos Mas Logo" />
      <div className="row">
        <div className="mx-auto col-lg-12 col-md-12 col-xs-12">
          <Formik
          // initialValues={initialValues}
          // validationSchema={validationSchema}
          onSubmit={handleSubmit}
          >
            <Form className="wrapper">
              <div className="one">            
                  <input
                    // value={image}
                    name="file"
                    type="file"
                    onChange={onImageChange}
                    className="filetype"
                  />
                  <div className="image-preview">
                    <img src={image} alt="preview image"  class="image-preview__image"/>
                  </div>
                <div className="my-3">
                  <button type="submit" className="btn btn-primary">
                    Subir Imagen
                  </button>
                </div>
              </div>
              {/* <div className="two">
                <label htmlFor="text-area">
                  Ingrese El Texto De Bienvenida
                  <Field
                    type="textarea"
                    className="form-control"
                    name="welcomeMessage"
                    id="welcomeMessage"
                    required
                  />
                  <ErrorMessage name="file">
                    {(error) => (
                      <div className="alert alert-danger">{error}</div>
                    )}
                  </ErrorMessage>
                </label>
                <div className="my-3">
                  <button type="submit" className="btn btn-primary">
                    Subir Imagen
                  </button>
                </div>
              </div> */}
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};
