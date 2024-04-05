import React, {useState } from 'react'
import 'reactjs-popup/dist/index.css';
import { ButtonFormContainer, ButtonModalContainer, LoginRegistrationForm, Modal, StyledPopup } from './LoginForm.styled';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { setUser } from '../../Redax/Auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../../Redax/store';
import GoogleAuth from '../googleAuth/googleAuth';

import { CiLogin } from "react-icons/ci";
// type Props = {}

const LoginForm: React.FC = () => {

   const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);


   

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
            user.getIdToken()
                .then(accessToken => {
                    dispatch(setUser({
                        id: user.uid,
                        email: user.email,
                        name: user.displayName,
                        token: accessToken, 
                    }))
                     navigate('/');
                    closeModal();
                })
                   .catch(() => {" Invalid user"});
        })
              .catch(() => {" Invalid user"});
       
};



      
  return (
      <ButtonFormContainer>
      <button type="button" className="button" onClick={() => setOpen(o => !o)}>
        <CiLogin />Log In
          </button>
          
      <StyledPopup open={open} className='myPop' closeOnDocumentClick onClose={closeModal}>
        <Modal className="modal">
          <button className="close" onClick={closeModal}>
            &times;</button>
          <div>
            <h2>Log In</h2>
            <p>Welcome back! Please enter your credentials to access your account and continue your search for an teacher.</p>
            <LoginRegistrationForm onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                          </div>
                <ButtonModalContainer>
                               <button type="submit">Log In</button>
                               <GoogleAuth/>    
                          </ButtonModalContainer>
            </LoginRegistrationForm>
        </div>
        </Modal>
      </StyledPopup>
    </ButtonFormContainer>
    )
}

export default LoginForm;