import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import logo from '../../Images/Logo/delivery_transportation_vehicle_transport_travel_icon_225386.png'
import toast from 'react-hot-toast';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Logged Out');
            })
            .catch(error => console.error(error))
    }
    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link>Blogs</Link></li>
        {
            user?.uid ?
                <>
                    <li><Link>My Reviews</Link></li>
                    <li><Link>Add Services</Link></li>
                    {
                        user?.photoURL ?
                            <li>
                                <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                                    <img style={{ height: '40px' }} alt='user' className='rounded-lg my-auto' src={user?.photoURL} />
                                </div>
                            </li>
                            :
                            <li>
                                <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                                    <FaUser className='h-10'></FaUser>
                                </div>
                            </li>
                    }
                    <li className='my-auto'><button onClick={handleLogOut} className='btn btn-outline btn-accent'>Logout</button></li>
                </>
                :
                <>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/register'>Registration</Link></li>
                </>
        }
    </>
    return (
        <div className="navbar bg-indigo-100 mb-7">
            <div className="container mx-auto">
                <div className="navbar-start">
                    <Link to='/' className="btn btn-ghost normal-case text-xl"><img className='w-12' src={logo} alt="logo" /> Travel with Surjo</Link>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;