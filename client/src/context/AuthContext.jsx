import { createContext, useEffect, useReducer } from 'react';

export const AuthContext = createContext();

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                user: action.payload
            }
        case 'LOGOUT':
            return {
                user: null
            }
        default:
            return state;
    }
};

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    });
<<<<<<< HEAD

=======
    
>>>>>>> 6f4f9cbf364843a30155649354dc71b07d8c7e16
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) dispatch({ type: 'LOGIN', payload: user });
    }, []);
<<<<<<< HEAD

=======
    
>>>>>>> 6f4f9cbf364843a30155649354dc71b07d8c7e16
    console.log('AuthContext', state);

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
<<<<<<< HEAD
            {children}
=======
            { children }
>>>>>>> 6f4f9cbf364843a30155649354dc71b07d8c7e16
        </AuthContext.Provider>
    );
};

