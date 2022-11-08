import React from 'react';
import { Link } from 'react-router-dom';
import registerImg from '../../Images/Login/4957136_4957136.jpg'

const Register = () => {
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
                            <form className="space-y-5 ng-untouched ng-pristine ng-valid">
                                <div className="space-y-4">
                                    <div>
                                        <label for="name" className="block mb-2 text-sm">Name</label>
                                        <input type="text" name="name" id="name" placeholder="Full Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                                    </div>
                                    <div>
                                        <label for="photoURL" className="block mb-2 text-sm">Photo URL</label>
                                        <input type="text" name="photoURL" id="photoURL" placeholder="Photo URL" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                                    </div>
                                    <div>
                                        <label for="email" className="block mb-2 text-sm">Email address</label>
                                        <input type="email" name="email" id="email" placeholder="example@gmail.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <label for="password" className="text-sm">Password</label>
                                        </div>
                                        <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;