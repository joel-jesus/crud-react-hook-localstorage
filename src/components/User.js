import React from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const User = ({ name, cpf, phone, email, handleRemoveUser }) => {
  const history = useHistory();

  return (
    <Card style={{ width: "18rem" }} className="user">
      <Card.Body>
        <Card.Title className="user-title">{name}</Card.Title>
        <div className="user-details">
          <div>CPF: {cpf}</div>
          <div>Telefone: {phone} </div>
          <div>Email: {email} </div>
        </div>
        <Button variant="primary" onClick={() => history.push(`/edit/${cpf}`)}>
          Editar
        </Button>
        <Button variant="danger" onClick={() => handleRemoveUser(cpf)}>
          Deletar
        </Button>
      </Card.Body>
    </Card>
  );
};

export default User;
