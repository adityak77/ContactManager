import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Aditya Kannan",
        email: "akannan2@andrew.cmu.edu",
        phone: "425-785-7221",
      },
      {
        id: 2,
        name: "Nithya Kannan",
        email: "hidrnithya@yahoo.com",
        phone: "425-698-8122",
      },
      {
        id: 3,
        name: "Kannan Sundararajan",
        email: "hidrkannan@yahoo.com",
        phone: "425-350-0007",
      },
    ],
    dispatch: (action) => this.setState((state) => reducer(state, action)),
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
