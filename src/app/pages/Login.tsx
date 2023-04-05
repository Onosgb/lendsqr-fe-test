import { useState } from "react";
import Button from "../compnents/Button";
import Input from "../compnents/Input";
const Login: React.FC = () => {
  const [authForm, setAuthForm] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (name: string, value: string) => {
    // handle the input change here
    setAuthForm({ ...authForm, [name]: value });
  };

  return (
    <main>
      <div className="sign_in-container">
        <div className="img_container">
          <div className="logo">
            <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="" />
          </div>

          <img
            className="highlight_img"
            src={`${process.env.PUBLIC_URL}/img/pablo-sign-in.svg`}
            alt=""
          />
        </div>
        <div className="form_container">
          <div className="greet">
            <h1>Welcome!</h1>
            <p>Enter details to login</p>
          </div>

          <form action="" className="signin_form">
            <div className="text_input">
              <Input
                type="text"
                placeholder="Email"
                name="email"
                onChange={handleInputChange}
                value={authForm.email}
              />
            </div>

            <div className="password">
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={authForm.password}
                onChange={handleInputChange}
              />
              <Button className="show" label="Show" />
            </div>
            <Button className="forgot" label="Forgot Password?" />

            <Button className="submit" label="Log in" />
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
