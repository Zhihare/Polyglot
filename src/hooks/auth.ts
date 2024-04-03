import { useSelector } from 'react-redux';
import { selectUser } from '../Redax/Auth/authSelector';

interface AuthSelector {
    isAuth: boolean;
    email: string;
    token: string;
    id: string;
}

export const useAuth = () => {
    const userData = useSelector(selectUser) as AuthSelector | undefined;

    const { email = '', token = '', id = '' } = userData || {};

    return {
        isAuth: !!email, // This will return false if email is empty or undefined
        email,
        token,
        id
    };
};
