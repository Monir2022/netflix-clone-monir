//NPM Packages
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Project files
import InputField from "../components/InputField";
import fields from "../data/fields-login.json";
import { signIn } from "scripts/authentification";
import InputCheckbox from "components/InputCheckbox";
import { getDocument } from "scripts/fireStore";
import { useAuth } from "state/AuthProvider";

export default function Login() {
  // Global state
  const { setUser, setIsLogged } = useAuth();
  const navigation = useNavigate();

  // Local state
  const [form, setForm] = useState({});
  const [remember, setRemember] = useState(false);
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
    if (remember) localStorage.setItem("uid", uid);
    navigation("/");
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
    <div id="login">
      <header>
        <h3>Login to Netelix</h3>
      </header>
      <div className="auth-page-content">
        <form onSubmit={onSubmit}>
          {InputFields}
          <p>{errorMassage}</p>
          <InputCheckbox state={[remember, setRemember]}>
            Remember me
          </InputCheckbox>
          <button>Login</button>
          <Link to="/signup">Registration</Link>
        </form>
      </div>
    </div>
  );
}