// NPM Packages
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";

// Project files
import InputField from "components/InputField";
import fields from "data/fields-signup.json";
import { createAccount } from "scripts/authentification";
import { createDocumentWithId } from "scripts/fireStore";
import Logo from "assets/logo.png";

export default function SignUp() {
  // Global state
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
    const account = await createAccount(form.email, form.password);

    account.isCreated ? onSuccess(account.payload) : onFailure(account.payload);
  }

  async function onSuccess(uid) {
    const newUser = { name: form.name, isContentManager: false };
    await createDocumentWithId("users", uid, newUser);
    alert("Your account is successfully created, please sign-in now");
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
    <div id="signup-page">
      <header>
        <div className="signup-logo">
          <img src={Logo} alt="" />
        </div>
        <div className="signin-link">
          <Link to="/">Sign In</Link>
        </div>
      </header>
      <div className="signup-page-content">
        <div className="signup-form">
          <h2>Create a password to start your membership</h2>
          <p>Just a few more steps and you're finished!</p> 
          <h3>We hate paperwork, too.</h3>
          <form onSubmit={onSubmit} className="form">
            {InputFields}
            <p>{errorMassage}</p>
            <button>Sign up</button>
          </form>
        </div>
      </div>
    </div>
  );
}