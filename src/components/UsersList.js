import React, { useContext } from "react";
import _ from "lodash";
import User from "./User";
import UsersContext from "../context/UsersContext";

const UsersList = () => {
  const { users, setUsers } = useContext(UsersContext);
  
  const handleRemoveUser = (id) => {
    setUsers(users.filter((user) => user.cpf !== id));
  };

  return (
    <React.Fragment>
      <div className="user-list">
        {!_.isEmpty(users) ? (
          users.map((user) => (
            <User key={user.id} {...user} handleRemoveUser={handleRemoveUser} />
          ))
        ) : (
          <p className="message">
            Nenhum usuário disponível. Adicione alguns usuários.
          </p>
        )}
      </div>
    </React.Fragment>
  );
};

export default UsersList;
