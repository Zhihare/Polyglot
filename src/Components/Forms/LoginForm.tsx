import React, {useState } from 'react'
import 'reactjs-popup/dist/index.css';
import { ButtonFormContainer, StyledPopup } from './LoginForm.styled';

// type Props = {}

const LoginForm:React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };



      
  return (
       <ButtonFormContainer>
      <button type="button" className="button" onClick={() => setOpen(o => !o)}>
        Log In
      </button>
      <StyledPopup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal">
          <a className="close" onClick={closeModal}>
            &times;</a>
          <div>
            <h2>Log In</h2>
            <p>Welcome back! Please enter your credentials to access your account and continue your search for an teacher.</p>
            <form onSubmit={handleSubmit}>
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

export default LoginForm;