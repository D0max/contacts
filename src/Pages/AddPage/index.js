import React, { useState } from 'react';
import Container from '@material-ui/core/Container/Container';
import './addPage.css';
import Button from '@material-ui/core/Button/Button';
import { connect } from 'react-redux';
import Form from '../../components/UI/Form';
import { postUserContact } from '../../store/actions/UserActions/actions';

const AddPage = (props) => {
  const [user, changeUser] = useState({
    id: Date.now().toString(),
    name: '',
    phone: '',
  });
  const changeHendler = (event) => {
    event.preventDefault();
    changeUser({ ...user, [event.target.name]: event.target.value });
  };
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
            <Button onClick={() => props.postUser(user)}>Сохранить</Button>
          </div>
        </div>
      </Container>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  postUser: user => dispatch(postUserContact(user)),
});

export default connect(null, mapDispatchToProps)(AddPage);
