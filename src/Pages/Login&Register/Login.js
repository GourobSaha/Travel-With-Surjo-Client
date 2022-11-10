import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import loginImg from '../../Images/Login/20824342_6343845.jpg'
import GoogleGitLogin from './GoogleGitLogin';
import toast from 'react-hot-toast';
import useTitle from '../../Hooks/useTitle';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    useTitle('Login');


    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    //Handle Submit
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setLoading(true);
        console.log(email, password);
        //User Sign in
        signIn(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);

                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);

                form.reset();
                //get jwt token
                fetch('https://travel-more-server.vercel.app/jwt', {
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
        <div className='container mx-auto my-5 shadow-lg rounded-xl p-5'>
            <div className='grid md:grid-cols-2'>
                <div>
                    <img className='w-full rounded-xl' src={loginImg} alt="" />
                    <div></div>
                </div>
                <div className='m-auto'>
                    <div className="flex flex-col max-w-md p-6 rounded-lg sm:p-10 shadow-2xl dark:text-gray-100">
                        <div className="mb-8 text-center">
                            <h1 className="my-3 text-4xl font-bold">Login</h1>
                            <p className="text-sm dark:text-gray-400">Sign in to access your account</p>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-5 ng-untouched ng-pristine ng-valid mb-5">
                            <div className="space-y-4">
                                <div>
                                    <label className="block mb-2 text-sm">Email address</label>
                                    <input type="email" name="email" id="email" placeholder="example@gmail.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" required />
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <label className="text-sm">Password</label>
                                    </div>
                                    <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" required />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div>
                                    <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md btn-primary">Sign in</button>
                                </div>
                                <p className="px-6 text-sm text-center dark:text-gray-400">Don't have an account yet?
                                    <Link to='/register' className="hover:underline dark:text-violet-400">Register</Link>.
                                </p>
                            </div>
                        </form>
                        <GoogleGitLogin></GoogleGitLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;