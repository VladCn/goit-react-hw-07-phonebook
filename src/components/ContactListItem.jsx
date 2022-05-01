import { useDeleteContactMutation } from "../redux/contactSlice";

export const ContactListItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <li>
      {name}: {number}{" "}
      <button onClick={() => deleteContact(id)}>
        {isDeleting ? "Deleting..." : "Delete"}
      </button>
    </li>
  );
};
