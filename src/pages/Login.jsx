import "../css/Login.css";
import mentorMeet from "../assets/images/online-mentor-meeting.jpg";

function Login() {
    return (
        <div id="login-page">
            <nav className="login-page_logo-block">
                <a className="logo" href="/">
                    Mentee<span className="logo-dark">Match</span>
                </a>
            </nav>
            <div className="login-page_form-block">
                <h1>Sign in with email</h1>
                <p>
                    Connect with experienced mentors who can guide you toward success. Explore
                    detailed reviews and feedback from other mentees to make the best choice. Start
                    your journey today!
                </p>
                <form action="#" className="login-page_form">
                    <label htmlFor="email" className="form-label">
                        Email <span className="required-mark">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-field-styles"
                        required
                    />
                    <label htmlFor="password" className="form-label">
                        Password <span className="required-mark">*</span>
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-field-styles"
                        required
                    />
                    <a className="forgot-pass-link" href="#">
                        Forgot password
                    </a>

                    <button type="submit" className="form-submit">
                        Login
                    </button>
                </form>
            </div>
            <div className="login-page_img-block">
                <img className="login-page_img-block_img" src={mentorMeet} alt="Mentor meeting" />
            </div>
        </div>
    );
}

export default Login;
