import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import ContactManager from "./components/ContactManager";
import "./style.css";

const App = () => {
  const initialState = {
    contacts: [
      { name: "Tony Shark", number: 9871157865 },
      { name: "Barry Allen", number: 9871157865 },
      { name: "Bruce Wayne", number: 9871157865 },
      { name: "Deepak Kumar", number: 8468869474 },
    ],
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_CONTACT":
        return { ...state, contacts: [...state.contacts, action.contact] };
      case "DELETE_CONTACT":
        const index = state.contacts.indexOf(action.contact);
        console.log(index, state);
        return {
          ...state,
          contacts: [
            ...state.contacts.slice(0, index),
            ...state.contacts.slice(index + 1),
          ],
        };
      default:
        return state;
    }
  };

  const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return (
    <Provider store={store}>
      <ContactManager />
    </Provider>
  );
};

export default App;
