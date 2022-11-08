import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const GoogleGitLogin = () => {
    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(res => {
                const user = res.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn btn-secondary w-full btn-sm mb-2"><FaGoogle className='mr-1' /> Login With Google</button>
            <button className="btn btn-accent w-full btn-sm"><FaGithub className='mr-1' /> Login With GitHub</button>
        </div>
    );
};

export default GoogleGitLogin;