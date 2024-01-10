import { useState } from "react";
import { thunkLogin } from "../../redux/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { useNavigate } from 'react-router-dom';
import "./LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serverResponse = await dispatch(
      thunkLogin({
        email,
        password,
      })
    );

    if (serverResponse) {
      setErrors(serverResponse);
    } else {
      closeModal();
    }
  };

  const handleCreate = () => {
    navigate('/signup')
    closeModal()
  }

  const handleDemo = (e) => {
    e.preventDefault();
    setErrors({});
    return dispatch(thunkLogin({ email: 'demo@aa.io', password: 'password' }))
      .then(closeModal)
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          setErrors(data.errors);
        }
      });
  };

  return (
    <>
      <div className="login-container">
        <h1>Log In</h1>
        <h2>Already client?</h2>
        <form onSubmit={handleSubmit}>
          <div className='login-form-content-container'>
            <label>
              Email <span className="red">*</span>
            </label>
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            {errors.email && <p className="red">{errors.email}</p>}
          </div>
          <div className='login-form-content-container'>
            <label>
              Password <span className="red">*</span>
            </label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            {errors.password && <p className="red">{errors.password}</p>}
          </div>
          <button type="submit" className="login-button">LOG IN</button>
        </form>
      </div>
      <div className="gray-container">
        <div className="login-container">
          <h2>New client:</h2>
          <button onClick={handleCreate} className="new-client-button">CREATE YOUR ACCOUNT</button>
          <button className="new-client-button button-gap" onClick={handleDemo}>DEMO USER</button>
        </div>
      </div>
    </>
  );
}

export default LoginFormModal;
