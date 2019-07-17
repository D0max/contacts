import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Cards from '../../components/UI/Card';
import { fetchUsers, makeUserFavorite } from '../../store/actions/UserActions/actions';

const useFetching = (someFetchActionCreator) => {
  useEffect(() => {
    someFetchActionCreator();
  }, [someFetchActionCreator]);
};

const HomePage = (props) => {
  useFetching(props.fetchUsers);
  return (
    <>
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
});
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);