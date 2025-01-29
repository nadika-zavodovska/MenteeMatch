import '../css/Login.css';

function Login() {
  return (
      <div id='login-page'>
          <div className='login-page_form-block'>
              <h1>Sign in with email</h1>
              <p>
                  Connect with experienced mentors who can guide you toward success. Explore
                  detailed reviews and feedback from other mentees to make the best choice. Start
                  your journey today!
              </p>
              <form action='#' className='login-page_form'>
                  <label htmlFor='email' className='form-label'>Email</label>
                  <input
                      type='email'
                      id='email'
                      name='email'
                      className='form-field-styles form-field'
                      required
                  />
                  <label htmlFor='password' className='form-label'>Password</label>
                  <input
                      type='password'
                      id='password'
                      name='password'
                      className='form-field-styles form-field'
                      required
                  />
                  <button type='submit' className='form-field-styles form-submit'>
                      Login
                  </button>
              </form>
          </div>
      </div>
  );
}

export default Login;
