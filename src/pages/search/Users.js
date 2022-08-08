import React from 'react';
import PropTypes from 'prop-types';
import UserList from '../../components/UserList/UserList';
import ListLoader from '../../components/Loader/ListLoader';

const Users = props => {

  const { users, session, isLoading } = props;
  //console.log(users);

  return (
    <>
      <UserList
        userList = { users }
        session = { session }/>

      {
        isLoading
        ?
        <ListLoader />
        :
        null
      }
    </>
  );
};

Users.propTypes = {
  session: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default Users;
