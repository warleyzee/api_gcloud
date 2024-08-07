let users = [
  {
    "id": 1,
    "name": "John",
    "surname": "Doe",
    "email": "test.souza@example.com",
    "role": "admin",
    "jobTitle": "Manager",
    "phone": "123-456-7890",
    "company": "EDC - Engineering Design Consultants",
    "password": "password123"
  },
  {
    "id": 2,
    "name": "Jane",
    "surname": "Smith",
    "email": "jane.smith@example.com",
    "role": "editor",
    "jobTitle": "Senior Editor",
    "phone": "234-567-8901",
    "company": "JFA - John Fleming Architects",
    "password": "password123"
  },
  {
    "id": 3,
    "name": "Alice",
    "surname": "Johnson",
    "email": "alice.johnson@example.com",
    "role": "viewer",
    "jobTitle": "Sales Representative",
    "phone": "345-678-9012",
    "company": "JH - Jensen Hughes",
    "password": "password123"
  },
  {
    "id": 4,
    "name": "Bob",
    "surname": "Brown",
    "email": "bob.brown@example.com",
    "role": "admin",
    "jobTitle": "IT Specialist",
    "phone": "456-789-0123",
    "company": "OHAC - O’Herlihy Access Consultancy",
    "password": "password123"
  },
  {
    "id": 5,
    "name": "Charlie",
    "surname": "Davis",
    "email": "charlie.davis@example.com",
    "role": "editor",
    "jobTitle": "Content Creator",
    "phone": "567-890-1234",
    "company": "PH - Park Hood",
    "password": "password123"
  },
  {
    "id": 6,
    "name": "Eve",
    "surname": "Martinez",
    "email": "eve.martinez@example.com",
    "role": "viewer",
    "jobTitle": "Marketing Specialist",
    "phone": "678-901-2345",
    "company": "PH - Park Hood",
    "password": "password123"
  },
  {
    "id": 7,
    "name": "Warley",
    "surname": "Souza",
    "email": "warley.souza@example.com",
    "role": "Admin",
    "jobTitle": "Marketing Specialist",
    "phone": "678-901-2345",
    "company": "Glenbrier",
    "password": "password123"
  },
  {
    "id": 8,
    "name": "Diele",
    "surname": "Souza",
    "email": "diele.souza@example.com",
    "role": "Admin",
    "jobTitle": "Marketing Specialist",
    "phone": "678-901-2345",
    "company": "Glenbrier",
    "password": "password123"
  }
]

let id = 1;

export const getUserByEmail = (email) => users.find(user => user.email === email);

export const getAllUsers = ({ start = 0, end = users.length, sort = 'id', order = 'ASC' }) => {
  const sortedUsers = [...users].sort((a, b) => {
    if (a[sort] < b[sort]) return order === 'ASC' ? -1 : 1;
    if (a[sort] > b[sort]) return order === 'ASC' ? 1 : -1;
    return 0;
  });
  return sortedUsers.slice(start, end);
};

export const getUserById = (userId) => users.find(sub => sub.id === Number(userId));



export const createUser = ({ name, surname, email, role, jobTitle, phone, company, password}) => {
  const newUser = { id: ++id, name, surname, email, role, jobTitle, phone, company, password};
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
