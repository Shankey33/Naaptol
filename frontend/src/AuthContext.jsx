import {useState, createContext, useEffect} from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token) {
            axios.get('http://localhost:3000/user/', {headers: {'x-auth-token': token}})
            .then(response => setUser(response.data))
            .catch(() => localStorage.removeItem('token'))
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
                
                window.location.href = '/';
            })
            .catch(error => {
                console.error('Error during login:', error);
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
            console.error('Error during registration:', error);   
        })
    }

    const logout = () => {
        setUser(null);
    };
    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
}