import React, { useEffect } from "react";
import { ContactForm } from "../pages/ContactForm";
import { FilterInput } from "./FilterInput";
import {
  useCreateContactMutation,
  useLazyFetchContactQuery,
} from "../redux/contactSlice";
import { ContactList } from "./ContactList";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";

export function App() {
  const [trigger, { data, error: contactsError }] = useLazyFetchContactQuery();
  const [createContact, { error: createContactError }] =
    useCreateContactMutation();

  const filter = useSelector((state) => state.filter.value);

  useEffect(() => {
    if (contactsError || createContactError) {
      toast.error("Error");
    }
  }, [contactsError, createContactError]);

  useEffect(() => {
    trigger({ name: filter });
  }, [filter, trigger]);

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
      <FilterInput />
    </div>
  );
}
