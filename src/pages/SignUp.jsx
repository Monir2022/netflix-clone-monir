// NPM Packages
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

// Project files
import InputField from "components/InputField";
import fields from "data/fields-signup.json";
import { createAccount } from "scripts/authentification";
import { createDocumentWithId } from "scripts/fireStore";

export default function SignUp() {
  // Global state
  const navigation = useNavigate();

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
    const newUser = { name: form.name, city: form.city, isTeacher: false };
    await createDocumentWithId("users", uid, newUser);
    alert("Your account is successfully created, please login now");
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
    <div id="signup">
      <header>
        <h3>Register to Netelix</h3>
      </header>
      <div className="auth-page-content">
        <form onSubmit={onSubmit}>
          {InputFields}
          <p>{errorMassage}</p>
          <button>Register</button>
          <Link to="/">Login instead</Link>
        </form>
      </div>
    </div>
  );
}