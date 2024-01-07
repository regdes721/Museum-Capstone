import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { thunkSignup } from "../../redux/session";
import "./SignupForm.css"

function SignupFormPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sessionUser = useSelector((state) => state.session.user);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [location, setLocation] = useState("")
  const [mobileNumber, setMobileNumber] = useState("")
  const [errors, setErrors] = useState({});

  if (sessionUser) return <Navigate to="/" replace={true} />;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const mobileNumberRegex = /^[0-9]*$/

    if (password !== confirmPassword) {
      return setErrors({
        confirmPassword:
          "Confirm Password field must be the same as the Password field",
      });
    }

    if (mobileNumber.split(" ").join("").length !== 10 || !mobileNumberRegex.test(mobileNumber.split(" ").join(""))) {
      return setErrors({
        mobile_number: "Mobile Number must be exactly 10 digits"
      })
    }

    const serverResponse = await dispatch(
      thunkSignup({
        first_name: firstName,
        last_name: lastName,
        email,
        username,
        password,
        location,
        mobile_number: mobileNumber
      })
    );

    if (serverResponse) {
      setErrors(serverResponse);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="signup-container">
      <h1>Create your account</h1>
      <form onSubmit={handleSubmit}>
        <div className="signup-content-container">
          <label>
            First Name
          </label>
          <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          {errors.first_name && <p className="red">{errors.first_name}</p>}
        </div>
        <div className="signup-content-container">
          <label>
            Last Name
          </label>
          <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          {errors.last_name && <p className="red">{errors.last_name}</p>}
        </div>
        <div className="signup-content-container">
          <label>
            Email
          </label>
          <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          {errors.email && <p className="red">{errors.email}</p>}
        </div>
        <div className="signup-content-container">
          <label>
            Username
          </label>
          <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          {errors.username && <p className="red">{errors.username}</p>}
        </div>
        <div className="signup-content-container">
          <label>
            Password
          </label>
          <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          {errors.password && <p className="red">{errors.password}</p>}
        </div>
        <div className="signup-content-container">
          <label>
            Confirm Password
          </label>
          <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          {errors.confirmPassword && <p className="red">{errors.confirmPassword}</p>}
        </div>
        <div className="signup-content-container">
          <label>
            Address
          </label>
          <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          {errors.location && <p className="red">{errors.location}</p>}
        </div>
        <div className="signup-content-container">
          <label>
            Mobile Number
          </label>
          <input
              type="text"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
            />
          {errors.mobile_number && <p className="red">{errors.mobile_number}</p>}
        </div>
        <button type="submit" className="signup-button">SAVE</button>
      </form>
    </div>
  );
}

export default SignupFormPage;
