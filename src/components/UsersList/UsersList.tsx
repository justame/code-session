import React from 'react';
import type { User } from '../../services/userService';

const UserItem = (props: any) => {
  const user: User = props.user;
  return (
    <div style={{ border: '1px solid #CCC', display: 'flex' }}>
      <div style={{ marginRight: 20 }}>
        <img
          style={{ borderRadius: '50%' }}
          width="60"
          height="60"
          alt="user"
          src={user.userThumbnail}
        />
      </div>
      <div>
        <div>name : {user.name}</div>
        <div>age : {user.age}</div>
        <div>Admin : {user.isAdmin.toString()}</div>
        <div>Premium : {user.isPremium.toString()}</div>
      </div>
    </div>
  );
};

const UsersList = (props: any) => {
  const users = props.users.map((user: any) => {
    return <UserItem key={user.name} user={user} />;
  });
  return (
    <div style={{ border: 'solid 1px #AAA', padding: '10px' }}>{users}</div>
  );
};

export default UsersList;
