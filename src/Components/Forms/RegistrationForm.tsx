import React, { useEffect, useState } from 'react';
import { ButtonFormContainer, ButtonModalContainer, Modal, StyledPopup } from './LoginForm.styled';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../../Redax/Auth/authSlice';
import { AppDispatch } from '../../Redax/store';
import { InformContainer } from '../BookTrial/BookTrialLessons.styled';
import { toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

const RegistrationForm: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const auth = getAuth();

  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
    document.body.style.overflow = 'unset';
  }

  const initialValues = {
    name: '',
    email: '',
    password: ''
  };


  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
   }, [open]);

  
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters')
  });

  const handleSubmit = (values: any) => {
    const { name, email, password } = values;
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        user.getIdToken().then((accessToken) => {
          dispatch(
            setUser({
              id: user.uid,
              email: user.email,
              name: name,
              token: accessToken
            })
          );
          updateProfile(user, {
            displayName: name
          });
          closeModal();
        });
      })
      .catch(() => {
         toast.error('Invalid user!');
      });
  };

  return (
    <ButtonFormContainer>
      <button type="button" className="button registration" onClick={() => setOpen((o) => !o)}>
        Registration
      </button>
      <StyledPopup open={open} closeOnDocumentClick onClose={closeModal}>
        <Modal className="modal">
          <button className="close" onClick={closeModal}>
            &times;
          </button>
          <div>
            <h2>Registration</h2>
            <p>
              Thank you for your interest in our platform! In order to register, we need some information. Please provide
              us with the following information.
            </p>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
              <Form>
                <InformContainer>
                  <div>
                  
                  <Field type="text" id="name" name="name" placeholder="Enter your name" />
                  <ErrorMessage name="name" component="div" className="error" />
                </div>
                <div>
                  
                  <Field type="email" id="email" name="email" placeholder="Enter your email" />
                  <ErrorMessage name="email" component="div" className="error" />
                </div>
                <div>
                  
                  <Field type="password" id="password" name="password" placeholder="Enter your password" />
                  <ErrorMessage name="password" component="div" className="error" />
                </div>
                </InformContainer>
                <ButtonModalContainer>
                  <button type="submit">Sign Up</button>
                </ButtonModalContainer>
              </Form>
            </Formik>
          </div>
        </Modal>
      </StyledPopup>
    </ButtonFormContainer>
  );
};

export default RegistrationForm;
