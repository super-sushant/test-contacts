import React from "react";
import Create from "../create/create";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { selectors } from "../../../features/counter/contactSelector";

const Edit = () => {
  const { id } = useParams();
  const contacts = useAppSelector(selectors.getContacts);

  return <Create contact={contacts.find((i) => i.id === Number(id))} />;
};

export default Edit;
