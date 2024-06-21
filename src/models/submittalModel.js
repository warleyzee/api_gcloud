let submittals = [ 
  {
  "id": 1,
  "description": "Initial project draft",
  "location": "New York",
  "dateSubmitted": "2024-06-01",
  "rev": "A",
  "status": "Pending",
  "issuedTo": "John Doe",
  "accepted": "Yes",
  "file": "example1.pdf",
  "comments": [
    { 
      id: 1, 
      text: 'Initial comment', 
      date: '02/06/2023', 
      author: 'Warley Souza' 
    },
    { 
      id: 2, 
      text: 'Second comment', 
      date: '02/06/2023', 
      author: 'Warley Souza' 
    }
  ]

}];
let id = 1;

export const getAllSubmittals = ({ start = 0, end = submittals.length, sort = 'id', order = 'ASC' }) => {
  const sortedSubmittals = [...submittals].sort((a, b) => {
    if (a[sort] < b[sort]) return order === 'ASC' ? -1 : 1;
    if (a[sort] > b[sort]) return order === 'ASC' ? 1 : -1;
    return 0;
  });
  return sortedSubmittals.slice(start, end);
};

export const getSubmittalById = (submittalId) => submittals.find(sub => sub.id === Number(submittalId));

export const createSubmittal = ({ description, location, dateSubmitted, rev, status, issuedTo, accepted, file}) => {
  const newSubmittal = { id: ++id, description, location, dateSubmitted, rev, status, issuedTo, accepted, file};
  submittals.push(newSubmittal);
  return newSubmittal;
};

export const updateSubmittal = (submittalId, updatedFields) => {
  const submittalIndex = submittals.findIndex(sub => sub.id === Number(submittalId));
  if (submittalIndex !== -1) {
    submittals[submittalIndex] = { ...submittals[submittalIndex], ...updatedFields };
    return submittals[submittalIndex];
  }
  return null;
};

export const deleteSubmittal = (submittalId) => {
  const submittalIndex = submittals.findIndex(sub => sub.id === Number(submittalId));
  if (submittalIndex !== -1) {
    const deletedSubmittal = submittals.splice(submittalIndex, 1);
    return deletedSubmittal;
  }
  return null;
};

export const addCommentToSubmittal = (id, comment) => {
  const submittal = getSubmittalById(id);
  if (submittal) {
      const newComment = { 
        id: submittal.comments.length + 1, 
        ...comment };
      submittal.comments.push(newComment);
      return newComment;
  }
  return null;
};
