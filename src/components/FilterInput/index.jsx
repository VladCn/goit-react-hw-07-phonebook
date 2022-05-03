import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filterSlice";

export function FilterInput() {
  const dispatch = useDispatch();
  const [state, setState] = useState("");

  const handleFilterContact = (event) => {
    setState(event.target.value);
    dispatch(setFilter(event.target.value));
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
