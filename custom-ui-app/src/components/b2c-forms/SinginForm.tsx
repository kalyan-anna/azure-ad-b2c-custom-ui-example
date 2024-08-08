export const SinginForm = () => {
  return (
    <form
      id='localAccountForm'
      action='JavaScript:void(0);'
      className='localAccount'
      aria-label='Sign in with your email address'
    >
      <div className='intro'>
        <h2 aria-level={1}>Sign in with your email address</h2>
      </div>
      <div className='error pageLevel' aria-hidden='true' role='alert' style={{ display: 'none' }}>
        <p></p>
      </div>
      <div className='entry'>
        <div className='entry-item'>
          <label htmlFor='signInName'>Email address</label>
          <div className='error itemLevel' aria-hidden='true' role='alert' style={{ display: 'none' }}>
            <p></p>
          </div>
          <input
            type='text'
            id='signInName'
            name='Email address'
            title='Please enter a valid Email address'
            placeholder='Email address'
            aria-label='Email address'
          />
        </div>
        <div className='entry-item'>
          <div className='password-label'>
            <label htmlFor='password'>Password</label>
            <a
              id='forgotPassword'
              href='/authdev.awe.gov.au/B2C_1A_SignUp_SignIn_PhoneOrEmail_MFA/api/CombinedSigninAndSignup/forgotPassword?csrf_token=QmF4SXRDVlQxMDhBK3NNVEIzQmNtR3NMV2FKZTBSVHdqRG4wRGRHWkhEQjFwRkVDKy9pSjR6MmZFWFV2cjhhTTh6SW0zaWFWWXhoN2tHYWJnaTc5MGc9PTsyMDI0LTA4LTA4VDAyOjU4OjI4LjI5Mzg1NjhaO3J0NStlUzhpZWtocjBLazMwcyt3a1E9PTt7Ik9yY2hlc3RyYXRpb25TdGVwIjoxfQ==&amp;tx=StateProperties=eyJUSUQiOiI5M2I3YmQyMi02YzE4LTRlZTctODg2Yy1mYWIzNGJjODNmOWYifQ&amp;p=B2C_1A_SignUp_SignIn_PhoneOrEmail_MFA'
            >
              Forgot your password?
            </a>
          </div>
          <div className='error itemLevel' aria-hidden='true' style={{ display: 'none' }}>
            <p role='alert'></p>
          </div>
          <input
            type='password'
            id='password'
            name='Password'
            placeholder='Password'
            aria-label='Password'
            aria-required='true'
          />
        </div>
        <div className='working'></div>

        <div className='buttons'>
          <button id='next' type='submit' form='localAccountForm'>
            Sign in
          </button>
        </div>
      </div>
      <div className='divider'>
        <h2>OR</h2>
      </div>
      <div className='create'>
        <p>
          Don't have an account?
          <a
            id='createAccount'
            href='/authdev.awe.gov.au/B2C_1A_SignUp_SignIn_PhoneOrEmail_MFA/api/CombinedSigninAndSignup/unified?local=signup&amp;csrf_token=QmF4SXRDVlQxMDhBK3NNVEIzQmNtR3NMV2FKZTBSVHdqRG4wRGRHWkhEQjFwRkVDKy9pSjR6MmZFWFV2cjhhTTh6SW0zaWFWWXhoN2tHYWJnaTc5MGc9PTsyMDI0LTA4LTA4VDAyOjU4OjI4LjI5Mzg1NjhaO3J0NStlUzhpZWtocjBLazMwcyt3a1E9PTt7Ik9yY2hlc3RyYXRpb25TdGVwIjoxfQ==&amp;tx=StateProperties=eyJUSUQiOiI5M2I3YmQyMi02YzE4LTRlZTctODg2Yy1mYWIzNGJjODNmOWYifQ&amp;p=B2C_1A_SignUp_SignIn_PhoneOrEmail_MFA'
          >
            Sign up now
          </a>
        </p>
      </div>
    </form>
  );
};
