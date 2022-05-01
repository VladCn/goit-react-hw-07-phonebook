import React, { useEffect } from "react";
import { ContactForm } from "../pages/ContactForm";
import { FilterInput } from "./FilterInput";
import {
  useCreateContactMutation,
  useLazyFetchContactQuery,
} from "../redux/contactSlice";
import { ContactList } from "./ContactList";

export function App() {
  const [trigger, { data }] = useLazyFetchContactQuery();
  const [createContact] = useCreateContactMutation();

  const handleFilterContacts = ({ name }) => {
    trigger({ name });
  };

  useEffect(() => {
    trigger();
  }, [trigger]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        // alignItems: "center",
        marginLeft: "50px",
        // fontSize: 40,
        // textTransform: "uppercase",
        color: "#010101",
      }}
    >
      <ContactForm createContact={createContact} contacts={data} />
      <ContactList contacts={data} />
      <FilterInput onFilterContacts={handleFilterContacts} />
    </div>
  );
}
