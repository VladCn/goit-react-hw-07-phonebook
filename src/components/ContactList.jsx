import { ContactListItem } from "./ContactListItem";

export const ContactList = ({ contacts = [] }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <ContactListItem key={contact.id} {...contact} />
      ))}
    </ul>
  );
};
