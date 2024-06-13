import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthProviderProps } from '../interface/interface';

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const number = localStorage.getItem('number')
    const surname = localStorage.getItem('surname')
    const firstname = localStorage.getItem('firstname')
    const region = localStorage.getItem('region')
    const navigate = useNavigate()

    useEffect(() => {
        if (!number || !surname || !firstname || !region) {
            navigate('auth/login')


        }
    }, [number, surname, firstname, region])

    return (
        <>
            {
                children
            }
        </>
    );
}

export default AuthProvider;

