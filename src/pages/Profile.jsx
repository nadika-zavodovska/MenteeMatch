import "../css/Profile.css";
import devAvatar from "../assets/images/developer-avatar.png";

function Profile() {
    return (
        <div id="profile-page">
            <nav className="login-page_logo-block">
                <a className="logo" href="/">
                    Mentee<span className="logo-dark">Match</span>
                </a>
            </nav>
            <div className="profile-page_info-block">
                <div className="profile-page_user-info">
                    <img
                        src={devAvatar}
                        alt="Developer Avatar"
                        className="profile-page_user-image"
                    />
                    <div className="profile-page_info-short">
                        <h1>User name</h1>
                        <h2 className="font-bold">User role - Mentee</h2>
                        <h3 className="font-bold">Main skills:</h3>
                        <div className="profile-page_main-skills">HTML, CSS, JavaScript, React</div>
                        <h3 className="font-bold">Experience: </h3>
                        <div className="profile-page_experience">2 years</div>
                    </div>
                    <button id="editProfileBtn" className="form-submit">
                        Edit Profile
                    </button>
                </div>
                <div className="profile-page_summary-block">
                    <h3 className="profile-page_h3-header">Summary</h3>
                    <div className="profile-page_summary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla natus,
                        nostrum sit ad quaerat provident totam numquam fuga dolorem nesciunt in
                        iusto eligendi. Nemo sint voluptatibus ipsam, odit repudiandae alias. Lorem
                        ipsum dolor sit amet, consectetur adipisicing elit. Ut, error suscipit
                        maxime quas officiis veritatis nisi ipsum commodi corrupti libero deleniti
                        facilis ea officia eveniet, eos quos excepturi. Quis, nesciunt.
                    </div>
                </div>
                <div className="profile-page_skills">
                    <h3 className="profile-page_h3-header">Skills</h3>
                    <div>
                        <span className="profile-page_skill">HTML</span>
                        <span className="profile-page_skill">CSS</span>
                        <span className="profile-page_skill">JavaScript</span>
                        <span className="profile-page_skill">Python</span>
                        <span className="profile-page_skill">Jest</span>
                        <span className="profile-page_skill">Tailwind</span>
                        <span className="profile-page_skill">Design</span>
                    </div>
                </div>
                <div className="profile-page_contacts-block">
                    <h3 className="profile-page_h3-header">Contacts</h3>
                    <ul>
                        <li className="font-bold">
                            Location: <span className="font-normal">London</span>
                        </li>
                        <li className="font-bold">
                            Mobile:<span className="font-normal"> +44 564 3844 893</span>
                        </li>
                        <li className="font-bold">
                            Email: <span className="font-normal">user@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Profile;
