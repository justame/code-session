import React, { useState } from 'react';
import { Page, Tabs } from 'wix-style-react';
import { withTranslation, WithTranslation } from '@wix/wix-i18n-config';
import UsersList from '../UsersList/UsersList';
import './App.scss';
import * as userService from '../../services/userService';

interface AppProps extends WithTranslation {}

// Task : Users And Admins With Image tab doesn't show images - fix it

const TABS_IDS = {
  ALL: 1,
  ADMINS: 2,
  REGULAR_USERS: 3,
  USERS_ADMINS_WITH_IMAGE: 4,
};
class App extends React.Component<AppProps> {
  state = {
    activeId: 1,
  };

  setActiveId(activeId) {
    this.setState({ activeId });
  }

  getUsersByTab() {
    const { activeId } = this.state;
    let users = [];
    switch (activeId) {
      case TABS_IDS.ALL:
        users = userService.getUsers();
        break;
      case TABS_IDS.ADMINS:
        users = userService.getAllAdmins();
        break;
      case TABS_IDS.REGULAR_USERS:
        users = userService.sortUsersByAge(userService.getAllRegularUsers());
        break;
      case TABS_IDS.USERS_ADMINS_WITH_IMAGE: {
        users = userService
          // userService.sortUsersByAge
          .getUsers()
          .map((user) => userService.addThumbnail(user));
      }
    }

    return users;
  }
  render() {
    const users = this.getUsersByTab();
    const { activeId } = this.state;

    return (
      <Page height="100vh">
        <Page.Header title="WixTube" />
        <Page.Content>
          <div>
            <Tabs
              activeId={activeId}
              onClick={(value) => this.setActiveId(value.id)}
              items={[
                { id: 1, title: 'All' },
                { id: 2, title: 'Admins' },
                { id: 3, title: 'Regular Users Sorted By Age' },
                { id: 4, title: 'Users And Admins With Image' },
              ]}
            />
          </div>
          <UsersList users={users} />
        </Page.Content>
      </Page>
    );
  }
}

export default withTranslation()(App);
