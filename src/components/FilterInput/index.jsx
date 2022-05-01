import React, { useState } from "react";

export function FilterInput({ onFilterContacts }) {
  const [state, setState] = useState("");

  const handleFilterContact = (event) => {
    setState(event.target.value);
    onFilterContacts({ name: event.target.value });
  };

  return (
    <>
      <h2>Contacts</h2>

      <label>
        Find contacts by name
        <br />
        <input
          type="text"
          name="name"
          required
          value={state}
          onChange={handleFilterContact}
        />
      </label>
    </>
  );
}
