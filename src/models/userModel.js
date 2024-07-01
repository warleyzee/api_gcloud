let users = [
  {
    "id":1,
    "name": "John",
    "surname": "Doe",
    "email": "john.doe@example.com",
    "role": "admin",
    "jobTitle": "Manager",
    "phone": "123-456-7890",
    "company": "Example Corp"
  }];
let id = 1;

export const getAllUsers = ({ start = 0, end = users.length, sort = 'id', order = 'ASC' }) => {
  const sortedUsers = [...users].sort((a, b) => {
    if (a[sort] < b[sort]) return order === 'ASC' ? -1 : 1;
    if (a[sort] > b[sort]) return order === 'ASC' ? 1 : -1;
    return 0;
  });
  return sortedUsers.slice(start, end);
};

export const getUserById = (userId) => users.find(sub => sub.id === Number(userId));



export const createUser = ({ name, surname, email, role, jobTitle, phone, company}) => {
  const newUser = { id: ++id, name, surname, email, role, jobTitle, phone, company};
  users.push(newUser);
  return newUser;
};

export const updateUser = (userId, updatedFields) => {
  const userIndex = users.findIndex(sub => sub.id === Number(userId));
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...updatedFields };
    return users[userIndex];
  }
  return null;
};

export const deleteUser = (userId) => {
  const userIndex = users.findIndex(sub => sub.id === Number(userId));
  if (userIndex !== -1) {
    const deletedUser = users.splice(userIndex, 1);
    return deletedUser;
  }
  return null;
};
