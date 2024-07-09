let companys = [
  {
    "id":1,
    "name": "EDC - Engineering Design Consultants",
    "acronym": "EDC",
    "address": "APT 1 - GRAND CANAL WHARF",
    "address1": "SOUTH DOCK ROAD",
    "address2": "DUBLIN 4",
    "eircode": "D04 YX05",
    "email": "john.doe@company.com",
    "phone": "015313693"
  },{
    "id":2,
    "name": "JFA - John Fleming Architects",
    "acronym": "JFA",
    "address": "APT 1 - GRAND CANAL WHARF",
    "address1": "SOUTH DOCK ROAD",
    "address2": "DUBLIN 4",
    "eircode": "D04 YX05",
    "email": "john.doe@company.com",
    "phone": "015313693"
  },
  {
    "id":3,
    "name": "JH - Jensen Hughes",
    "acronym": "JH",
    "address": "APT 1 - GRAND CANAL WHARF",
    "address1": "SOUTH DOCK ROAD",
    "address2": "DUBLIN 4",
    "eircode": "D04 YX05",
    "email": "john.doe@company.com",
    "phone": "015313693"
  },
  {
    "id":4,
    "name": "OHAC - O’Herlihy Access Consultancy",
    "acronym": "OHAC",
    "address": "APT 1 - GRAND CANAL WHARF",
    "address1": "SOUTH DOCK ROAD",
    "address2": "DUBLIN 4",
    "eircode": "D04 YX05",
    "email": "john.doe@company.com",
    "phone": "015313693"
  },
  {
    "id":5,
    "name": "PH - Park Hood",
    "acronym": "PH",
    "address": "APT 1 - GRAND CANAL WHARF",
    "address1": "SOUTH DOCK ROAD",
    "address2": "DUBLIN 4",
    "eircode": "D04 YX05",
    "email": "john.doe@company.com",
    "phone": "015313693"
  },
  {
    "id":6,
    "name": "Glenbrier ",
    "acronym": "GB",
    "address": "APT 1 - GRAND CANAL WHARF",
    "address1": "SOUTH DOCK ROAD",
    "address2": "DUBLIN 4",
    "eircode": "D04 YX05",
    "email": "john.doe@company.com",
    "phone": "015313693"
  },
  

  
  

];
let id = 1;

export const getAllCompanys = ({ start = 0, end = companys.length, sort = 'id', order = 'ASC' }) => {
  const sortedCompanys = [...companys].sort((a, b) => {
    if (a[sort] < b[sort]) return order === 'ASC' ? -1 : 1;
    if (a[sort] > b[sort]) return order === 'ASC' ? 1 : -1;
    return 0;
  });
  return sortedCompanys.slice(start, end);
};

export const getCompanyById = (companyId) => companys.find(sub => sub.id === Number(companyId));



export const createCompany = ({ name, acronym, address, address1, address2, eircode, email,  phone}) => {
  const newCompany = { id: ++id, name, acronym, address, address1, address2, eircode, email,  phone};
  companys.push(newCompany);
  return newCompany;
};

export const updateCompany = (companyId, updatedFields) => {
  const companyIndex = companys.findIndex(sub => sub.id === Number(companyId));
  if (companyIndex !== -1) {
    companys[companyIndex] = { ...companys[companyIndex], ...updatedFields };
    return companys[companyIndex];
  }
  return null;
};

export const deleteCompany = (companyId) => {
  const companyIndex = companys.findIndex(sub => sub.id === Number(companyId));
  if (companyIndex !== -1) {
    const deletedCompany = companys.splice(companyIndex, 1);
    return deletedCompany;
  }
  return null;
};
