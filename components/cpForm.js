import { useState } from "react";
import { Form, Rules } from "../styles/style.js";
// import codePostaux from "codes-postaux";

export function CpForm() {
  const [form, setForm] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const handleSubmit = (e) => {
    setForm({ postalCode });
    e.preventDefault();
  };

  const handleChange = (e) => {
    setPostalCode({ value: e.target.value });
  };

  const handleClick = (e) => {
    setForm(false);
  };

  return (
    <>
      {!form ? (
        <Form>
          <h3>Recevez les règles d'urbanisme pour votre ville !</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="postalCode">Votre code postal:</label>
            <input
              type="text"
              name="postalCode"
              autoComplete="postal-code"
              maxLength="5"
              onChange={handleChange}
            />
            <button type="submit">Valider</button>
          </form>
        </Form>
      ) : (
        <Rules>
          <button onClick={handleClick}>X</button>
          <p>Le guide l'urbanisme à ... est le suivant:</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Rules>
      )}
    </>
  );
}
