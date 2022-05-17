// NPM packages
import { useState } from "react";
import { Link } from "react-router-dom";

// Project files
import InputField from "../components/InputField";
import fields from "../data/fields-recoverPasswordForm.json";
import { recoverUser } from "../scripts/authentification";

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
      <h1>Don´t worry you will help you to get a new password</h1>
      <p>
        Please write the email you used to created your account so we can send
        you an email with instructions on how to reset and create a new
        password.
      </p>
      <form onSubmit={onRecover}>
        {InputFields}
        <button>Submit</button>
      </form>
      <p>
        You can click here for going to login page instead
        <div className="recover-password-link">
          <Link to="/login">Login</Link>
        </div>
      </p>
    </div>
  );
}
