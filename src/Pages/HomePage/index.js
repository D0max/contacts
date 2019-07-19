import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { NotificationContainer } from 'react-notifications';
import Cards from '../../components/UI/Card';
import { fetchUsers, makeUserFavorite, deleteUserContact } from '../../store/actions/UserActions/actions';

const useFetching = (someFetchActionCreator) => {
  useEffect(() => {
    someFetchActionCreator();
  }, [someFetchActionCreator]);
};

const HomePage = (props) => {
  useFetching(props.fetchUsers);
  return (
    <>
      <NotificationContainer />
      <Cards {...props} />
    </>
  );
};
const mapStateToProps = state => ({
  user: state.users.users,
});
const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  makeUserFavorite: id => dispatch(makeUserFavorite(id)),
  deleteUser: id => dispatch(deleteUserContact(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
