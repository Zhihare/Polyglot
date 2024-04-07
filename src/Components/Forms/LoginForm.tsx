import React, { useState } from 'react';
import { ButtonFormContainer, ButtonModalContainer, Modal, StyledPopup } from './LoginForm.styled';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../../Redax/Auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../../Redax/store';
import GoogleAuth from '../googleAuth/googleAuth';
import { CiLogin } from 'react-icons/ci';
import { InformContainer } from '../BookTrial/BookTrialLessons.styled';
import { toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

interface LoginProps {
  toggleMenu?: () => void;
}

const LoginForm: React.FC<LoginProps> = ({ toggleMenu }: LoginProps) => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  const initialValues = {
    email: '',
    password: ''
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required')
  });

  const handleSubmit = (values: any) => {
    const { email, password } = values;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        user.getIdToken()
          .then((accessToken) => {
            dispatch(
              setUser({
                id: user.uid,
                email: user.email,
                name: user.displayName,
                token: accessToken
              })
            );
            navigate('/');
            closeModal();
          })
          .catch(() => {
             toast.error('Invalid user!', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });;
          });
      })
      .catch(() => {
         toast.error('Invalid user!', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });;
      });
  };

  return (
    <ButtonFormContainer>
      <button type="button" className="button" onClick={() => setOpen(true)}>
        <CiLogin />Log In
      </button>

      <StyledPopup open={open} className="myPop" closeOnDocumentClick onClose={closeModal}>
        <Modal className="modal">
          <button className="close" onClick={closeModal}>
            &times;
          </button>
          <div>
            <h2>Log In</h2>
            <p>Welcome back! Please enter your credentials to access your account and continue your search for a teacher.</p>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
              <Form>
                 <InformContainer>
                <div>
                  <Field type="email" id="email" name="email" required placeholder="Enter your email"/>
                  <ErrorMessage name="email" component="div" className="error" />
                </div>
                <div> 
                  <Field type="password" id="password" name="password" required placeholder="Enter your password"/>
                  <ErrorMessage name="password" component="div" className="error" />
                </div>
                  </InformContainer>  
                <ButtonModalContainer>
                  <button type="submit">Log In</button>
                  <GoogleAuth />
                </ButtonModalContainer>
              </Form>
            </Formik>
          </div>
        </Modal>
      </StyledPopup>
    </ButtonFormContainer>
  );
};

export default LoginForm;
