import React, { useState } from 'react'
import { ButtonFormContainer, StyledPopup } from './LoginForm.styled';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../Redax/store';
import { setUser } from '../../Redax/Auth/authSlice';
import { useNavigate } from 'react-router-dom';

type Props = {}

const RegistrationForm: React.FC = (props: Props) => {
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();
     const auth = getAuth();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [open, setOpen] = useState(false);


    const closeModal = () => setOpen(false);
   

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        user.getIdToken()
            .then(accessToken => {
                dispatch(setUser({
                    id: user.uid,
                    email: user.email,
                    name: user.displayName, // Ensure displayName is correctly set
                    token: accessToken, 
                }))
                updateProfile(user, {
      displayName: name // Укажите имя пользователя здесь
    })
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
        Registration
      </button>
      <StyledPopup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal">
          <button className="close" onClick={closeModal}>
            &times;</button>
          <div>
            <h2>Registration</h2>
                      <p>Thank you for your interest in our platform! In order to register, we need some information.
                          Please provide us with the following information</p>
                      <form onSubmit={handleSubmit}>
                          
                <div>
                <label htmlFor="name">Name:</label>
                    <input
                        type="name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Log In</button>
            </form>
        </div>
        </div>
      </StyledPopup>
    </ButtonFormContainer>
    )
}


export default RegistrationForm