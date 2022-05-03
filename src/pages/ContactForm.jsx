import { toast } from "react-hot-toast";
import styled from "styled-components";
import React, { useState } from "react";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 400px;
  padding: 10px;
`;

const Name = styled.h3`
  font-size: 20px;
  margin: 0 0 10px 0;
  font-weight: normal;
`;
const Input = styled.input`
  margin-bottom: 15px;
`;
const Button = styled.button`
  width: 100px;
`;

export const ContactForm = ({ createContact, contacts = [] }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = contacts.map((item) => {
      return item.name;
    });

    if (res.includes(name)) {
      return toast.error(`${name} is already in contacts`);
    }

    createContact({ name, number });
    setName("");
    setNumber("");

    toast.success("Контакт создан");
  };
  const handleChange = (event) => {
    if (event.currentTarget.name === "name") {
      setName(event.currentTarget.value);
    } else setNumber(event.currentTarget.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        <Name>Name</Name>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        <Name>Number</Name>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
