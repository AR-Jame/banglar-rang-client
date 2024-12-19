import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../assest/google.png';
import twitter from '../assest/twitter.png'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import Swal from 'sweetalert2';
const Login = () => {
    const navigate = useNavigate()
    const { handleSignIn, handleGoogle, handleX } = useContext(AuthContext)
    const location = useLocation()
    const googleLogin = () => {
        handleGoogle()
            .then((result) => {
                // setUser(result.user)
                console.log(result.user.photoURL)
                Swal.fire({
                    title: "Great",
                    text: "You successfully login!",
                    icon: "success"
                });
                navigate(location.state ? location.state : '/')
            }).catch((err) => {
                console.log(err);

            });
    }
    const mailLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
        handleSignIn(email, password)
            .then((result) => {
                console.log(result.user.photoURL)
                Swal.fire({
                    title: "Great",
                    text: "You successfully login!",
                    icon: "success"
                });
                navigate(location.state ? location.state : '/')
            }).catch((err) => {
                console.log(err)
            });

    }
    const xLogin = () => {
        handleX()
            .then((result) => {
                console.log(result.user);
                Swal.fire({
                    title: "Great",
                    text: "You successfully login!",
                    icon: "success"
                });
                navigate(location.state ? location.state : '/')

            }).catch((err) => {
                console.log(err);

            });
    }
    return (
        <div className="flex items-center justify-center min-h-[85vh] px-4">
            <div className="w-full max-w-md bg-white rounded-lg p-10 shadow-lg">
                <h3 className="text-center text-xl font-semibold">Log in with</h3>
                <div className="flex justify-between mt-8">
                    <div className="w-[calc(50%-0.75rem)]">
                        <a
                            onClick={googleLogin}
                            className="flex cursor-pointer items-center justify-center h-14 gap-3 bg-[#F8F8FB] border border-[#DADAF2] rounded-md text-[#171645] font-medium hover:bg-[#ededf5] hover:border-[#626cd6] transition duration-200"
                        >
                            <img src={google} alt="Google" className="w-6" />
                            <span>Google</span>
                        </a>
                    </div>
                    <div className="w-[calc(50%-0.75rem)]">
                        <a
                            onClick={xLogin}
                            className="flex items-center justify-center h-14 gap-3 bg-[#F8F8FB] border border-[#DADAF2] rounded-md text-[#171645] font-medium hover:bg-[#ededf5] hover:border-[#626cd6] transition duration-200"
                        >
                            <img src={twitter} alt="Apple" className="w-6" />
                            <span>Twitter</span>
                        </a>
                    </div>
                </div>
                <p className="relative my-6 text-center font-medium">
                    <span className="bg-white px-2 relative z-10">or</span>
                    <span className="absolute top-1/2 left-0 w-full h-[1px] bg-[#C2C2C2]"></span>
                </p>
                <form onSubmit={mailLogin} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            name='email'
                            id="email"
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
                            <a href="#" className="text-[#f49804] font-medium hover:underline">
                                Forgot Password?
                            </a>
                        </div>
                        <input
                            type="password"
                            name='password'
                            id="password"
                            placeholder="Enter your password"
                            required
                            className="w-full h-14 border border-[#DADAF2] rounded-md bg-[#F8F8FB] px-5 focus:outline-none focus:border-[#626cd6] transition duration-200"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full h-14 bg-[rgba(244,152,4,0.79)] text-white font-medium uppercase rounded-md hover:bg-transparent hover:border hover:border-[rgba(244,152,4,0.79)] hover:text-[rgba(244,152,4,0.79)] transition duration-300"
                    >
                        Log In
                    </button>
                </form>
                <p className="text-center mt-6">
                    Don&#39;t have an account?{' '}
                    <Link to='/register' className="text-[#f49804] font-medium hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;