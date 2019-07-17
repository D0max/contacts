import React, { useState } from 'react';
import Container from '@material-ui/core/Container/Container';
import Form from '../../components/UI/Form';
import './addPage.css';
import Button from '@material-ui/core/Button/Button';

const AddPage = () => {
  const [user, changeUser] = useState({
    id: Math.floor(Math.random() * (999 - 60) - 60),
    name: '',
    phone: '',
  });
  const changeHendler = (event) => {
    changeUser({ ...user, [event.target.name]: event.target.value });
  };
  const saveLocal = () =>{}
  return (
    <>
      <Container>
        <div className="add">
          <div className="add-form">
            <Form
              title="Имя"
              type="text"
              value={user.name}
              name="name"
              onChange={changeHendler}
            />
            <Form
              title="Номер тел."
              type="tel"
              value={user.phone}
              name="phone"
              onChange={changeHendler}
            />
            <Button onClick={()=> console.log(user)}>Сохранить</Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AddPage;
