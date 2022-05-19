// NPM Packages
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
// Project files
import InputField from "components/InputField";
import fields from "data/fields-signin.json";
import { signIn } from "scripts/authentification";
import { getDocument } from "scripts/fireStore";
import { useAuth } from "state/AuthProvider";
import Logo from "assets/logo.png";
export default function SignIn() {
  // Global state
  const { setUser, setIsLogged } = useAuth();
  const history = useHistory();
  // Local state
  const [form, setForm] = useState({});
  const [errorMassage, setErrorMessage] = useState("");
  // Methods
  function onChange(key, value) {
    const field = { [key]: value };
    setForm({ ...form, ...field });
  }
  async function onSubmit(event) {
    event.preventDefault();
    setErrorMessage("");
    const account = await signIn(form.email, form.password);
    account.isLogged ? onSuccess(account.payload) : onFailure(account.payload);
  }
  async function onSuccess(uid) {
    const document = await getDocument("users", uid);
    setUser(document);
    setIsLogged(true);
    localStorage.setItem("uid", uid);
    history.push("/");
  }
  function onFailure(message) {
    setErrorMessage(message);
  }
  // Components
  const InputFields = fields.map((item) => (
    <InputField
      key={item.key}
      options={item}
      state={form[item.key]}
      onChange={onChange}
    />
  ));
  return (
    <div id="signin-page">
      <header>
        <img src={Logo} alt="" />
      </header>
      <div className="auth-content">
        <div className="auth-form">
          <h1>Sign In</h1>
          <form onSubmit={onSubmit}>
            {InputFields}
            <p>{errorMassage}</p>
            <button>Sign In</button>
            <input type="checkbox" />            
            <small>Remember me</small>
            <Link className="need-help" to="/recover-password">
              <small>Need help?</small>
            </Link>                         
            <div className="sign-bottom">
              <small>New to Netflix?</small>
              <Link to="/signup">Sign up now</Link>
            </div>
            <small>
              This page is protected by Google to ensure that you are not a bot
            </small>
          </form>
        </div>
      </div>
    </div>
  );
}
