import React, { useState } from 'react';
import { Page, Tabs } from 'wix-style-react';
import { withTranslation, WithTranslation } from '@wix/wix-i18n-config';
import UsersList from '../UsersList/UsersList';
import './App.scss';
import * as userService from '../../services/userService';

interface AppProps extends WithTranslation {}

// Task : change to display young users (below 30s)

// what we learn ?
// single source of truth
// function should say what is  say and one thing

class App extends React.Component<AppProps> {
  state = {
    activeId: 1,
  };

  setActiveId(activeId) {
    this.setState({ activeId });
  }
  render() {
    const { activeId } = this.state;
    let includeAdmins, shouldSortByAge;
    if (activeId === 1) {
      includeAdmins = false;
    }
    if (activeId === 2) {
      includeAdmins = true;
    } else if (activeId === 3) {
      includeAdmins = false;
      shouldSortByAge = true;
    }

    return (
      <Page height="100vh">
        <Page.Header title="WixTube" />
        <Page.Content>
          <div>
            <Tabs
              activeId={activeId}
              onClick={(value) => this.setActiveId(value.id)}
              items={[
                { id: 1, title: 'Users' },
                { id: 2, title: 'Users And Admins' },
                { id: 3, title: 'Only Users Sorted By Age' },
                { id: 4, title: 'Premium Only' },
              ]}
            />
          </div>
          <UsersList
            users={userService.getAllUsers(includeAdmins, shouldSortByAge)}
          />
        </Page.Content>
      </Page>
    );
  }
}

export default withTranslation()(App);
