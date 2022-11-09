import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import registerImg from '../../Images/Login/4957136_4957136.jpg'
import GoogleGitLogin from './GoogleGitLogin';
import toast from 'react-hot-toast';

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        setLoading(true);
        console.log(name, email, photoURL, password);
        //Creating User
        createUser(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                form.reset();
                handleUpdateProfile(name, photoURL);
                setLoading(false);
                navigate(from, { replace: true });
                toast.success('Registration Completed');
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message);
                setLoading(false);
            })
    }
    //Profile Update
    const handleUpdateProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }

    if (loading) {
        return <progress className="mx-auto my-auto progress w-56"></progress>
    }

    return (
        <div>
            <div className='container mx-auto my-5 shadow-lg rounded-xl p-5'>
                <div className='grid md:grid-cols-2'>
                    <div>
                        <img className='w-full rounded-xl' src={registerImg} alt="" />
                        <div></div>
                    </div>
                    <div className='m-auto'>
                        <div className="flex flex-col max-w-md p-6 rounded-lg sm:p-10 shadow-2xl dark:text-gray-100">
                            <div className="mb-8 text-center">
                                <h1 className="my-3 text-4xl font-bold">Registration</h1>
                                <p className="text-sm dark:text-gray-400">Register to create your account</p>
                            </div>
                            <form onSubmit={handleSubmit} className="space-y-5 ng-untouched ng-pristine ng-valid mb-5">
                                <div className="space-y-4">
                                    <div>
                                        <label className="block mb-2 text-sm">Name</label>
                                        <input type="text" name="name" id="name" placeholder="Full Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" required />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm">Photo URL</label>
                                        <input type="text" name="photoURL" id="photoURL" placeholder="Photo URL" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" required />
                                    </div>
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
                                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md btn-primary">Register</button>
                                    </div>
                                    <p className="px-6 text-sm text-center dark:text-gray-400">Already have an account?
                                        <Link to='/login' className="hover:underline dark:text-violet-400">Login</Link>.
                                    </p>
                                </div>
                            </form>
                            <GoogleGitLogin></GoogleGitLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;