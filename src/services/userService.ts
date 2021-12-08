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

export const getAllUsers = (
  includeAdmins = false,
  shouldSortByAge = false,
): User[] => {
  let allUsers = users;
  allUsers = users.filter((user) => {
    return includeAdmins || !user.isAdmin;
  });

  allUsers = allUsers.map((user) => {
    return {
      ...user,
      userThumbnail: `https://avatars.githubusercontent.com/u/${user.id}?v=4`,
    };
  });
  if (shouldSortByAge) {
    allUsers = allUsers.sort((a, b) => (a.age < b.age ? -1 : 1));
  }
  return allUsers;
};
