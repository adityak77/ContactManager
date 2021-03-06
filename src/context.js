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
        email: "ak@andrew.cmu.edu",
        phone: "111-111-1111",
      },
      {
        id: 2,
        name: "Nithya Kannan",
        email: "nk@yahoo.com",
        phone: "222-222-2222",
      },
      {
        id: 3,
        name: "Kannan Sundararajan",
        email: "ks@yahoo.com",
        phone: "333-333-3333",
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
