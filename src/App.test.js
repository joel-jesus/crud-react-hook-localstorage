import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import UsersContext from "./context/UsersContext";
import UsersList from "./components/UsersList";
import User from "./components/User";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

function renderUser(users, setUsers) {
  return render(
    <UsersContext.Provider value={{ users, setUsers }}>
      <UsersList />
      <AddUser />
    </UsersContext.Provider>
  );
}

describe("Componente UsersList", () => {
  it("Mostra Mensagem", () => {
    renderUser(null, null);
    expect(
      screen.getByText("Nenhum usuário disponível. Adicione alguns usuários.")
    ).toBeInTheDocument();
  });

  it("Card", () => {
    renderUser(null, null);
    render(<User />);

    expect(screen.getByText("CPF:")).toBeInTheDocument();

    expect(screen.getByText("Telefone:")).toBeInTheDocument();

    expect(screen.getByText("Email:")).toBeInTheDocument();
  });
});

describe("Componente Form", () => {
  it("Mostra label corretamente", () => {
    renderUser(null, null);

    expect(screen.getByText("Nome")).toBeInTheDocument();
    expect(screen.getByText("CPF")).toBeInTheDocument();
    expect(screen.getByText("Telefone")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
  });
});
