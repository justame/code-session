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

const users: User[] = [
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

// const getUserImage = (user) => {
//   return `https://avatars.githubusercontent.com/u/${user.id}?v=4`;
// };

export const getUsers = (
  forceAdminsOnly = false,
  shouldSortByAge = false,
): User[] => {
  let allUsers = users;
  if (forceAdminsOnly) {
    allUsers = users.filter((user) => {
      return user.isAdmin;
    });
  }
  if (shouldSortByAge) {
    allUsers = allUsers.sort((a, b) => (a.age < b.age ? -1 : 1));
  }
  return allUsers;
};
