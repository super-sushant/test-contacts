import React from "react";
import { Link } from "react-router-dom";
import Card from "./card";
import { useAppSelector } from "../../../app/hooks";
import { selectors } from "../../../features/counter/contactSelector";
import { RxCrossCircled } from "react-icons/rx";

const View = () => {
  const contacts = useAppSelector(selectors.getContacts);
  return (
    <div>
      <Link to="create">
        <button className="shadow mt-9 bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
          Create Contact
        </button>
      </Link>
      <div className="gap-5 flex p-2 m-5 flex-wrap">
        {contacts.map((contact) => (
          <Card contact={contact} />
        ))}
        {contacts.length === 0 && (
          <div className="flex items-center justify-center text-xl max-w-md border-solid border-2 border-gray-700 p-3 m-3 rounded-lg">
            <RxCrossCircled style={{ fontSize: "200px" }} />
            <span>
              No Contacts Found Please Add Contact From the Create Contact
              Button
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default View;
