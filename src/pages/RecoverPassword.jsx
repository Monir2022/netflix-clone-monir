// NPM packages
import { useState } from "react";
import { Link } from "react-router-dom";

// Project files
import InputField from "../components/InputField";
import fields from "../data/fields-recoverPasswordForm.json";
import { recoverUser } from "../scripts/authentification";
import Logo from "assets/logo.png";

export default function RecoverPassword() {
  // Local state
  const [form, setForm] = useState({});
  function onChange(key, value) {
    const field = { [key]: value };
    setForm({ ...form, ...field });
  }
  // Method
  async function onRecover(event) {
    event.preventDefault();
    await recoverUser(form.email);
    alert(`We sent an email to ${form.email}`);
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
    <div id="recover-password">
      <header>
        <img src={Logo} alt="netflix logo" />
        <div className="recover-password-link">
          <Link to="/">Sign in</Link>
        </div>
      </header>
      <div className="password-content">
        <form onSubmit={onRecover}>
          <h1>Forgot Email/Password</h1>
          <p>You can reset your password if you know the email.</p>
          <p>
            We will send you an email with instructions on how to reset your
            password
          </p>
          {InputFields}
          <button>Email me</button>
        </form>
      </div>
    </div>
  );
}
