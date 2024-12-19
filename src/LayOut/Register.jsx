import { IoIosWarning } from "react-icons/io";

import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const { handleSignUp, update } = useContext(AuthContext)
    const [regErr, setRegErr] = useState('')
    const navigate = useNavigate()
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.fullName.value
        const email = form.email.value
        const password = form.password.value
        const photoUrl = form.photoUrl.value
        console.log(name, email, password, photoUrl);
        setRegErr('')

        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(password)) {
            return setRegErr('Password must include at least one uppercase, one lowercase and one number.')
        }
        if (password.length < 6) {
            return setRegErr('your password must have atleast six char.')
        }

        handleSignUp(email, password)
            .then((result) => {
                console.log(result.user);
                form.reset()
                update(photoUrl)
                Swal.fire({
                    title: "Great",
                    text: "You successfully Join with Us!",
                    icon: "success"
                });
                navigate('/')

            }).catch((err) => {
                if (err.message === 'Firebase: Error (auth/invalid-email).') {
                    setRegErr('please input a valid email')
                }

            });
    }
    return (
        <div className="flex items-center justify-center min-h-[85vh] px-4">
            <div className="w-full max-w-md bg-white rounded-lg p-10 shadow-lg">
                <h3 className="text-center text-xl font-semibold mb-5 font-lota">Please Sign In</h3>

                <form onSubmit={handleRegister} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block font-medium mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter Full Name"
                            name="fullName"
                            required
                            className="w-full h-14 border border-[#DADAF2] rounded-md bg-[#F8F8FB] px-5 focus:outline-none focus:border-[#626cd6] transition duration-200"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="name"
                            placeholder="Enter email address"
                            required
                            className="w-full h-14 border border-[#DADAF2] rounded-md bg-[#F8F8FB] px-5 focus:outline-none focus:border-[#626cd6] transition duration-200"
                        />
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <label htmlFor="password" className="font-medium">
                                Password
                            </label>
                        </div>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            required
                            className="w-full h-14 border border-[#DADAF2] rounded-md bg-[#F8F8FB] px-5 focus:outline-none focus:border-[#626cd6] transition duration-200"
                        />
                    </div>
                    <div>
                        <label htmlFor="PhotoUrl" className="block font-medium mb-2">
                            Photo Url
                        </label>
                        <input
                            type="text"
                            id="photoUrl"
                            name="photoUrl"
                            placeholder="Enter your photo URL"
                            required
                            className="w-full h-14 border border-[#DADAF2] rounded-md bg-[#F8F8FB] px-5 focus:outline-none focus:border-[#626cd6] transition duration-200"
                        />
                    </div>
                    {regErr && <div className="flex gap-2 text-red-600"><span className="inline-block mt-1.5"><IoIosWarning /></span><span>{regErr}</span></div>}
                    <button
                        type="submit"
                        className="w-full h-14 bg-[rgba(244,152,4,0.79)] text-white font-medium uppercase rounded-md hover:bg-transparent hover:border hover:border-[rgba(244,152,4,0.79)] hover:text-[rgba(244,152,4,0.79)] transition duration-300"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="text-center mt-6">
                    Already have an account?{' '}
                    <Link to='/login' className="text-[#f49804] font-medium hover:underline">
                        Log In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;