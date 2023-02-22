import {useState} from 'react';
import { FaSignInAlt } from 'react-icons/fa';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: [e.target.value]
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const {email, password} = formData; 
  return (
    <section className='heading'>
      <h1>
        <FaSignInAlt /> Login
        <p>Login and start setting goals</p>
      </h1>
      <section className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="email" className='form-control' id='email' name='email' value={email} placeholder='Enter your email' onChange={handleChange} />
          </div>
          <div className="form-group">
            <input type="password" className='form-control' id='password' name='password' value={password} placeholder='Enter your password' onChange={handleChange} />
          </div>
          <div className="form-group">
            <button type='submit' className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </section>
  )
}

export default Login