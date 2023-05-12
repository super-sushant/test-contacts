import React, { FC } from "react";
import { useFormik } from "formik";
import { useAppDispatch } from "../../../app/hooks";
import {
  Contact,
  increment,
  incrementByAmount,
} from "../../../features/counter/counterSlice";

interface Props {
  contact?: Contact;
}
const Create: FC<Props> = ({ contact }) => {
  const dispatch = useAppDispatch();

  const { values, handleChange, resetForm, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: contact || {
        firstName: "",
        lastName: "",
        active: false,
      },
      enableReinitialize: true,
      onSubmit: (values) => {
        if (contact) {
          dispatch(incrementByAmount(values));
        } else {
          dispatch(increment(values));
        }
        resetForm();
      },
    });

  return (
    <div className="border-gray-700 border-2 p-20 rounded-xl">
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              First Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              value={values.firstName}
              onChange={handleChange}
              name="firstName"
              //   value="Jane Doe"
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-last-name"
            >
              Last Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-last-name"
              type="text"
              value={values.lastName}
              onChange={handleChange}
              name="lastName"
              //   value="Jane Doe"
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-last-name"
            >
              Status
            </label>
          </div>
          <div className="md:w-2/3">
            <div className="flex items-center mb-4">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                checked={values.active}
                onChange={(e) => setFieldValue("active", true)}
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-1"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Active
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="default-radio-2"
                type="radio"
                value=""
                checked={!values.active}
                onChange={(e) => setFieldValue("active", false)}
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-2"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                InActive
              </label>
            </div>
          </div>
        </div>

        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              SAVE
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Create;
