import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const GoogleGitLogin = () => {
    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(res => {
                const user = res.user;
                console.log(user);
                toast.success('Successfully Logged In');
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message);
            })
    }
    const handleGitHubSignIn = () => {
        providerLogin(gitHubProvider)
            .then(res => {
                const user = res.user;
                console.log(user);
                toast.success('Successfully Logged In');
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message);
            })
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn btn-secondary w-full btn-sm mb-2"><FaGoogle className='mr-1' /> Login With Google</button>
            <button onClick={handleGitHubSignIn} className="btn btn-accent w-full btn-sm"><FaGithub className='mr-1' /> Login With GitHub</button>
        </div>
    );
};

export default GoogleGitLogin;