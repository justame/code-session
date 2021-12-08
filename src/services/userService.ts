export type User = {
  name: string;
  age: number;
  height: number;
  isAdmin: boolean;
  id: string;
  gender: string;
  userThumbnail?: string;
  isPremium: boolean;
};

const usersList: User[] = [
  {
    name: 'Tamrat',
    age: 36,
    height: 155,
    isAdmin: false,
    id: '54495324',
    gender: 'male',
    isPremium: true,
  },
  {
    name: 'Dana',
    age: 22,
    height: 160,
    isAdmin: true,
    id: '45333005',
    gender: 'female',
    isPremium: true,
  },
  {
    name: 'Barak',
    age: 43,
    height: 150,
    isAdmin: true,
    id: '22775305',
    gender: 'male',
    isPremium: false,
  },
  {
    name: 'Tal',
    age: 20,
    height: 180,
    isAdmin: false,
    id: '45851530',
    gender: 'male',
    isPremium: false,
  },
];

const getUserImage = (user) => {
  return `https://avatars.githubusercontent.com/u/${user.id}?v=4`;
};

export const getAllUsers = (): User[] => {
  return usersList;
};

export const getAllAdmins = (): User[] => {
  return getAllUsers().filter((user) => {
    return user.isAdmin;
  });
};

export const getAllRegularUsers = () => {
  return getAllUsers().filter((user) => {
    return !user.isAdmin;
  });
};

export const sortUsersByAge = (users: User[]) => {
  return users.sort((userA, userB) => {
    return userA.age > userB.age ? -1 : 1;
  });
};

export const addThumbnail = (user) => {
  return {
    ...user,
    userThumbnail: getUserImage(user),
  };
};
