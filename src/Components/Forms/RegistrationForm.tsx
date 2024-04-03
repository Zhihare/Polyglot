import React, { useState } from 'react'
import { ButtonFormContainer, StyledPopup } from './LoginForm.styled';

type Props = {}

const RegistrationForm: React.FC = (props: Props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Name:', name);
    };



      
  return (
       <ButtonFormContainer>
      <button type="button" className="button" onClick={() => setOpen(o => !o)}>
        Registration
      </button>
      <StyledPopup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal">
          <a className="close" onClick={closeModal}>
            &times;</a>
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