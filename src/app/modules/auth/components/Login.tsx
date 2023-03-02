/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment, useEffect, useRef, useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import Swal from "sweetalert2";
import React from 'react'
import './loginStyles.scss'
// all schema for validation
const loginSchemaForUsername = Yup.object().shape({
  userName: Yup.string()
    .required("userName is required").matches(/LEGAL-MANAGER/, "not authenticated")
})
const loginSchemaForPassword = Yup.object().shape({
  password: Yup.string()
    .required("Password is required").matches(/^0$/, "wrong password"),
})
// initalValues for inputs
const initialValuesForuserName = {
  userName: '',
}
const initialValuesForPassword = {
  password: '',
}

/*
  Formik+YUP+Typescript:
  https://jaredpalmer.com/formik/docs/tutorial#getfieldprops
  https://medium.com/@maurice.de.beijer/yup-validation-and-typescript-and-formik-6c342578a20e
*/
export function Login() {
  // ref used to focusing element when mounting component
  let inputRef = useRef<HTMLInputElement | null>(null);
  // state for show/hide username input with button
  let [showUsername, setShowUsername] = useState<boolean>(true)
  // state for showing تمت المصادقه 
  let [showAuth, setShowAuth] = useState<boolean>(false)
  // state for show password input if no error in input field
  let [showPassword, setShowPassword] = useState<boolean>(false)

  // show username alert if username not matched that found in regex
  let showUsernameAlert = () => {
    Swal.fire({
      text: "اسم المستخدم غير موجود",
      icon: "error",
      buttonsStyling: false,
      confirmButtonText: "موافق",
      customClass: {
        confirmButton: "btn btn-primary",
      },
    });
  }

  // show alert for password if it's wrong
  let showPasswordAlert = () => {
    Swal.fire({
      text: "Wrong Password",
      icon: "error",
      buttonsStyling: false,
      confirmButtonText: "موافق",
      customClass: {
        confirmButton: "btn btn-primary",
      },
    })
  }
  // handlesubmit for username 
  let handleUsernameSubmit = (e: any) => {
    e.preventDefault()
    console.log(formik1)
    // if user not visited username input and clicking enter button from keyboard
    if (!formik1.touched.userName) {
      showUsernameAlert()
      return;
    }
    else {
      if (formik1.errors.userName) {
        let { errors } = formik1
        if (errors.userName == "userName is required") {
          showUsernameAlert()
        }
        else if (errors.userName == "not authenticated") {
          showUsernameAlert();
        }
        else {
          //  nothing here 
        }
        // for displaying username input with button if there's error
        setShowUsername(true)
      }
      else {
        // for hiding username input with button if there's not error 
        setShowUsername(false)
      }
    }
  }
  const formik1 = useFormik({
    initialValues: initialValuesForuserName,
    validationSchema: loginSchemaForUsername,
    onSubmit: handleUsernameSubmit
  })

  useEffect(() => {
    if (!formik1.errors.userName) {
      // applying some delay before auth is displayed 
      setShowAuth(true)

    }
  }, [formik1.errors.userName])
  // effect to show password input if showauth is true
  useEffect(() => {
    if (showAuth) {
      setShowUsername(false)
      setShowPassword(true)
    }
  }, [showAuth])
  // focusing input element after mounting the component and showauth equal false 
  useEffect(() => {
    inputRef.current?.focus()
    setShowAuth(false)
  }, [])

  const handlePasswordSubmit = (e: any) => {
    e.preventDefault()
    console.log(e)
    console.log(formik2.errors)
    console.log(formik2.errors.password)
    console.log(formik2.touched.password)
    if (!formik2.touched.password) {
      showPasswordAlert()
      return;
    }
    else {
      if (formik2.errors.password) {
        if (formik2.errors.password == "Password is required") {
          showPasswordAlert()
        }
        else if (formik2.errors.password == "wrong password") {
          showPasswordAlert()
        }
        else { console.log("unknown") }
      }
      else {
        let person = { id: 2, first_name: "Amani", last_name: "Jakubowski", email: "admin@demo.com", email_verified_at: "2023-01-25T12:13:02.000000Z", created_at: "2023-01-25T12:13:02.000000Z", updated_at: "2023-01-25T12:13:02.000000Z", api_token: "$2y$10$dtYPv.E0zua15DAvvvUQve0XdB77yo.4r.vMaiDOezKZrG7TugG9G" }
        window.localStorage.setItem("kt-auth-react-v", JSON.stringify(person))
        window.location.href = "/home/dashboard"
        console.log("entered successfully")
      }
    }

  }
  const formik2 = useFormik({
    initialValues: initialValuesForPassword,
    validationSchema: loginSchemaForPassword,
    onSubmit: handlePasswordSubmit
  })

  return (<Fragment>
    <div className="page-wrapper w-100 h-100">
      <div className="page-container w-100 h-100">
        <div className="page-content h-100 w-100 ">
          <div className="account-container h-100 w-100">
            <div className="container h-100">
              <div className="row d-flex justify-content-end h-100 w-100 ">
                <div className="col-md-12">
                  <div className="confirm-signup w-50">
                    <div className="ba-text">
                      <div className="typing-demo" >مرحبا بك فى الهيئة العامة للعقار ....</div>
                    </div>
                    <div className="ba-form continue" >
                      <form className="form-group" onSubmit={(e) => { handleUsernameSubmit(e) }}>
                        <label className="form-label" style={{ fontSize: '20px',color:"white" }}>اسم المستخدم</label>
                        <div className="input-group ba-input-group" style={{ overflow: 'hidden' }}>
                          <div className="input-icon" style={{ height: "46px" }}>
                            {showUsername && <Fragment><i className="fa-solid fa-arrow-left-long"></i>
                              <input id="loginUser" ref={inputRef} onBlur={formik1.handleBlur} type="text" className="form-control focus mb-md-2 mb-sm-1" name="userName" placeholder="فضلا أدخل اسم المستخدم" value={formik1.values.userName} onChange={formik1.handleChange} /></Fragment>}
                            {!formik1.errors.userName && showAuth ?
                              <div className="ba-text">
                                <div className="typing-demo" style={{ fontSize: "2rem" }}>تمت المصادقة ...</div>
                              </div> : <></>}
                          </div>
                          {showUsername && <button className="btn btn-ba btn-blue continue-verification" type='submit' >أستمرار</button>
                          }
                        </div>
                      </form>

                      {showPassword && <form className="form-group verification-code" onSubmit={(e) => { handlePasswordSubmit(e) }} >
                        <label className="form-label" style={{ fontSize: '20px' }}>كلمة المرور</label>
                        <div className="input-group ba-input-group">
                          <div className="input-icon">
                            <i className="fa-solid fa-arrow-left-long"></i>
                            <input id="loginPass" type="password" onBlur={formik2.handleBlur} value={formik2.values.password} onChange={formik2.handleChange} name="password" className="form-control" autoComplete="autocomplete" placeholder="فضلا أدخل كلمة المرور" />
                          </div>
                          <button className="btn btn-ba btn-blue" type='submit'  >تسجيل الدخول</button>
                        </div>
                      </form>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>)
}
