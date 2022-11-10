import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

const GoogleGitLogin = () => {
    const { providerLogin } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        setLoading(true);
        providerLogin(googleProvider)
            .then(res => {
                const user = res.user;
                console.log(user);

                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);
                //get jwt token
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        localStorage.setItem('Secret-Token', data.token);
                        navigate(from, { replace: true });
                    });
                toast.success('Successfully Logged In');
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message);
                setLoading(false);
            })
    }
    const handleGitHubSignIn = () => {
        setLoading(true);
        providerLogin(gitHubProvider)
            .then(res => {
                const user = res.user;
                console.log(user);

                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);
                //get jwt token
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        localStorage.setItem('Secret-Token', data.token);
                        navigate(from, { replace: true });
                    })
                toast.success('Successfully Logged In');
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message);
                setLoading(false);
            })
    }

    if (loading) {
        return <progress className="mx-auto my-auto progress w-56"></progress>
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn btn-secondary w-full btn-sm mb-2"><FaGoogle className='mr-1' /> Login With Google</button>
            <button onClick={handleGitHubSignIn} className="btn btn-accent w-full btn-sm"><FaGithub className='mr-1' /> Login With GitHub</button>
        </div>
    );
};

export default GoogleGitLogin;