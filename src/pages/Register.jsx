import { useState } from "react";
import mentorCoding from "../assets/images/mentor_coding-sm.jpg";
import "../css/register.css";

function Register() {
    const [userType, setUserType] = useState("");

    const handleUserType = (event) => {
        setUserType(event.target.value);
    };
    return (
        <div id="register-page">
            <nav className="register-page_logo-block">
                <a className="logo" href="/">
                    Mentee<span className="logo-dark">Match</span>
                </a>
            </nav>
            <div className="register-page_form-block">
                <h1>Create an account</h1>
                <p>
                    Create your account to connect with experienced mentors and eager mentees.
                    Unlock personalized guidance, insightful feedback, and a network that helps you
                    grow. Get started today!
                </p>
                <form action="#" className="register-page_form">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-field-styles"
                        required
                    />
                    <label htmlFor="email" className="form-label">
                        Email <span className="required-mark">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-field-styles"
                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                        required
                    />
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-field-styles"
                        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                        required
                    />

                    <label htmlFor="role" className="form-label">
                        Are you a Mentor or Mentee?
                    </label>
                    <select
                        name="role"
                        id="role"
                        className="form-field-styles"
                        onChange={handleUserType}
                        required
                    >
                        <option value="">Select</option>
                        <option value="mentee">Mentee</option>
                        <option value="mentor">Mentor</option>
                    </select>

                    {userType === "mentee" && (
                        <div>
                            <label htmlFor="learningGoals">What do you want to learn?</label>
                            <textarea
                                className="form-field-styles"
                                name="learningGoals"
                                id="learningGoals"
                                placeholder="What are your learning goals?"
                                rows="4"
                                cols="44"
                                required
                            ></textarea>
                        </div>
                    )}
                    {userType === "mentor" && (
                        <div>
                            <label htmlFor="skills">Enter your skills:</label>
                            <textarea
                                name="skills"
                                id="skills"
                                className="form-field-styles"
                                placeholder="What skills do you offer?"
                                rows="4"
                                cols="44"
                                required
                            ></textarea>
                        </div>
                    )}

                    <button type="submit" className="form-submit">
                        Submit
                    </button>
                </form>
            </div>
            <div className="register-page_img-block">
                <img
                    className="register-page_img-block_img"
                    src={mentorCoding}
                    alt="Mentor is coding"
                />
            </div>
        </div>
    );
}

export default Register;
