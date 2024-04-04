import { useSelector } from 'react-redux';
import { selectUser } from '../Redax/Auth/authSelector';

interface AuthSelector {
    name: string;
    email: string;
    token: string;
    id: string;
}

export const useAuth = () => {
    const userData = useSelector(selectUser) as AuthSelector | undefined;

    const { email = '', token = '', id = '', name = '' } = userData || {};

    return {
        isAuth: !!email,
        email,
        token,
        id,
        name,
    };
};
