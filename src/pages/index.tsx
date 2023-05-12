import React from "react";
import { Route, Routes } from "react-router";
import Layout from "../components/layout";
import Contacts from "../components/contacts";
import Create from "../components/contacts/create/create";
import View from "../components/contacts/view/view";
import Edit from "../components/contacts/edit/Edit";
import Maps from "../components/maps";

const Pages = () => {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route path="" element={<Contacts />}>
          <Route path="" element={<View />} />
          <Route path="edit/:id" element={<Edit />} />
          <Route path="create" element={<Create />} />
        </Route>
        <Route path="maps" element={<Maps />} />
      </Route>
    </Routes>
  );
};

export default Pages;
