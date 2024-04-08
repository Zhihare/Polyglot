import React from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { provider } from '../../firebase/conect';
import { AppDispatch } from '../../Redax/store';
import { useDispatch } from 'react-redux';
import { setUser } from '../../Redax/Auth/authSlice';

interface Props {
  closeModal: () => void;
}

const GoogleAuth: React.FC<Props> = ({ closeModal }: Props) => {
     const dispatch: AppDispatch = useDispatch();
    const auth = getAuth();

    const loginGoogle = () => {

      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const user = result.user;
              
          dispatch(setUser({
            id: user.uid,
            email: user.email,
            name: user.displayName,
            token: credential?.accessToken
          }));
          closeModal(); 

            }).catch(() => {" Invalid user"});
               
    }


  return (
    <button type='button' onClick={loginGoogle}>Google</button>
  )
}

export default GoogleAuth