import {useState, createContext, useEffect} from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token) {
            axios.get('http://localhost:3000/user/', {headers: {'x-auth-token': token}})
            .then(response => setUser(response.data))
            .catch((error) => {
                console.log('Error while fetching the user', error);
                localStorage.removeItem('token')})
            .finally(() => setLoading(false));
        } else {
            setLoading(false);
        }
    },[])

    const login = async (email, password) => {
        await axios.post('http://localhost:3000/user/login', {
            email: email,
            password: password
        })
            .then(response => {
                setUser(response.data);
                localStorage.setItem('token', response.data.token);    
                window.location.href = '/';
            })
            .catch(error => {
                setError(error.response?.data?.message || error.message);
            });
    };

    const register = async (name, email, password) => {
        axios.post('http://localhost:3000/user/register', {
            name: name,
            email: email,
            password: password,
        })
        .then(response => {
            window.location.reload();
        }).
        catch(error => {
            setError(error.response?.data?.message || error.message);   
        })
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
    };
    return (
        <AuthContext.Provider value={{ user, error, setError, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
}