import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { mask, unMask } from "remask";

const UserForm = (props) => {
  const [user, setUser] = useState(() => {
    return {
      name: props.user ? props.user.name : "",
      cpf: props.user ? props.user.cpf : "",
      phone: props.user ? props.user.phone : "",
      email: props.user ? props.user.email : "",
    };
  });

  const replaceChar = (v) => {
    return v.replace(/[^0-9]/gi, "");
  };

  const [errorMsg, setErrorMsg] = useState("");
  const { name, cpf, email, phone } = user;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [name, cpf, email, phone];
    let errorMsg = "Por favor, preencha todos os campos.";

    let allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });

    if (cpf.length < 14) {
      errorMsg = "CPF Inválido";
      allFieldsFilled = false;
    }

    if (allFieldsFilled) {
      const user = {
        id: uuidv4(),
        name,
        cpf: replaceChar(cpf),
        email,
        phone: replaceChar(phone),
      };

      props.handleOnSubmit(user);
    }

    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "cpf":
        if (value === "" || value) {
          setUser((prevState) => ({
            ...prevState,
            [name]: mask(unMask(value), ["999.999.999-99"]),
          }));
        }
        break;
      case "phone":
        if (value === "" || value) {
          setUser((prevState) => ({
            ...prevState,
            [name]: mask(unMask(value), ["(99) 9 9999-9999"]),
          }));
        }
        break;
      default:
        setUser((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="name"
            value={name}
            placeholder="Insira o nome"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="cpf">
          <Form.Label>CPF</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="cpf"
            value={cpf}
            placeholder="Insira o cpf"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label>Telefone</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="phone"
            value={phone}
            placeholder="Insira o telefone"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            className="input-control"
            type="email"
            name="email"
            value={email}
            placeholder="name@example.com"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Cadastrar
        </Button>
      </Form>
    </div>
  );
};

export default UserForm;
