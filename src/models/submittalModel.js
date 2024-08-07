let submittals = [
  {
    "id": 1,
    "description": "Initial project draft",
    "location": "New York",
    "dateSubmitted": "2024-06-01",
    "rev": "A",
    "status": "Pending",
    "issuedTo": ["JFA - John Fleming Architects", "JH - Jensen Hughes"],
    "accepted": "Yes",
    "file": ["example2.pdf", "example1.pdf","example1.pdf" ],
    "comments": [
      {
        "id": 1,
        "text": "Initial comment",
        "date": "2023-06-02",
        "author": "Warley Souza"
      }
    ]
  },
  {
    "id": 2,
    "description": "Second project draft",
    "location": "San Francisco",
    "dateSubmitted": "2024-06-02",
    "rev": "B",
    "status": "Approved",
    "issuedTo": ["PH - Park Hood"],
    "accepted": "Yes",
    "file": ["example2.pdf", "example1.pdf","example1.pdf" ],
    "comments": [
      {
        "id": 2,
        "text": "Review comment",
        "date": "2023-06-03",
        "author": "Ana Silva"
      }
    ]
  },
  {
    "id": 3,
    "description": "Third project draft",
    "location": "Chicago",
    "dateSubmitted": "2024-06-03",
    "rev": "C",
    "status": "Revision",
    "issuedTo": ["JFA - John Fleming Architects", "JH - Jensen Hughes"],
    "accepted": "No",
    "file": ["example2.pdf", "example1.pdf","example1.pdf" ],
    "comments": [
      {
        "id": 3,
        "text": "Needs revision",
        "date": "2023-06-04",
        "author": "Carlos Lima"
      }
    ]
  },
  {
    "id": 4,
    "description": "Fourth project draft",
    "location": "Miami",
    "dateSubmitted": "2024-06-04",
    "rev": "D",
    "status": "Pending",
    "issuedTo":  ["OHAC - O’Herlihy Access Consultancy"],
    "accepted": "Yes",
    "file": ["example2.pdf", "example1.pdf","example1.pdf" ],
    "comments": [
      {
        "id": 4,
        "text": "Pending review",
        "date": "2023-06-05",
        "author": "Paulo Souza"
      }
    ]
  },
  {
    "id": 5,
    "description": "Fifth project draft",
    "location": "Los Angeles",
    "dateSubmitted": "2024-06-05",
    "rev": "E",
    "status": "Approved",
    "issuedTo": ["JFA - John Fleming Architects", "PH - Park Hood"],
    "accepted": "Yes",
    "file": ["example2.pdf", "example1.pdf","example1.pdf" ],
    "comments": [
      {
        "id": 5,
        "text": "Looks good",
        "date": "2023-06-06",
        "author": "Rita Alves"
      }
    ]
  },
  {
    "id": 6,
    "description": "Sixth project draft",
    "location": "Seattle",
    "dateSubmitted": "2024-06-06",
    "rev": "F",
    "status": "Revision",
    "issuedTo":  ["JH - Jensen Hughes", "OHAC - O’Herlihy Access Consultancy"],
    "accepted": "No",
    "file": ["example2.pdf", "example1.pdf","example1.pdf" ],
    "comments": [
      {
        "id": 6,
        "text": "Needs changes",
        "date": "2023-06-07",
        "author": "Marcelo Santos"
      }
    ]
  },
  {
    "id": 7,
    "description": "Seventh project draft",
    "location": "Boston",
    "dateSubmitted": "2024-06-07",
    "rev": "G",
    "status": "Pending",
    "issuedTo": ["EDC - Engineering Design Consultants", "JH - Jensen Hughes", "PH - Park Hood"],
    "accepted": "Yes",
    "file": ["example2.pdf", "example1.pdf","example1.pdf" ],
    "comments": [
      {
        "id": 7,
        "text": "Pending approval",
        "date": "2023-06-08",
        "author": "Lara Mendes"
      }
    ]
  },
  {
    "id": 8,
    "description": "Eighth project draft",
    "location": "Denver",
    "dateSubmitted": "2024-06-08",
    "rev": "H",
    "status": "Approved",
    "issuedTo": ["JFA - John Fleming Architects"],
    "accepted": "Yes",
    "file": ["example2.pdf", "example1.pdf","example1.pdf" ],
    "comments": [
      {
        "id": 8,
        "text": "Approved",
        "date": "2023-06-09",
        "author": "Renato Oliveira"
      }
    ]
  },
  {
    "id": 9,
    "description": "Ninth project draft",
    "location": "Austin",
    "dateSubmitted": "2024-06-09",
    "rev": "I",
    "status": "Revision",
    "issuedTo": ["EDC - Engineering Design Consultants", "OHAC - O’Herlihy Access Consultancy"],
    "accepted": "No",
    "file": ["example2.pdf", "example1.pdf","example1.pdf" ],
    "comments": [
      {
        "id": 9,
        "text": "Revise and resubmit",
        "date": "2023-06-10",
        "author": "Fabiana Pereira"
      }
    ]
  },
  {
    "id": 10,
    "description": "Tenth project draft",
    "location": "Dallas",
    "dateSubmitted": "2024-06-10",
    "rev": "J",
    "status": "Pending",
    "issuedTo": ["PH - Park Hood", "JH - Jensen Hughes"],
    "accepted": "Yes",
    "file": ["example2.pdf", "example1.pdf","example1.pdf" ],
    "comments": [
      {
        "id": 10,
        "text": "Waiting for review",
        "date": "2023-06-11",
        "author": "Gabriel Lima"
      }
    ]
  },
  {
    "id": 11,
    "description": "Eleventh project draft",
    "location": "Houston",
    "dateSubmitted": "2024-06-11",
    "rev": "K",
    "status": "Approved",
    "issuedTo": ["JH - Jensen Hughes"],
    "accepted": "Yes",
    "file": ["example2.pdf", "example1.pdf","example1.pdf" ],
    "comments": [
      {
        "id": 11,
        "text": "Approved",
        "date": "2023-06-12",
        "author": "Sofia Carvalho"
      }
    ]
  },
  {
    "id": 12,
    "description": "Twelfth project draft",
    "location": "Phoenix",
    "dateSubmitted": "2024-06-12",
    "rev": "L",
    "status": "Revision",
    "issuedTo": ["JH - Jensen Hughes"],
    "accepted": "No",
    "file": ["example2.pdf", "example1.pdf","example1.pdf" ],
    "comments": [
      {
        "id": 12,
        "text": "Needs corrections",
        "date": "2023-06-13",
        "author": "Pedro Henrique"
      }
    ]
  },
  {
    "id": 13,
    "description": "Thirteenth project draft",
    "location": "Philadelphia",
    "dateSubmitted": "2024-06-13",
    "rev": "M",
    "status": "Pending",
    "issuedTo": ["EDC - Engineering Design Consultants", "JH - Jensen Hughes"],
    "accepted": "Yes",
    "file": ["example2.pdf", "example1.pdf","example1.pdf" ],
    "comments": [
      {
        "id": 13,
        "text": "Under review",
        "date": "2023-06-14",
        "author": "Julia Castro"
      }
    ]
  },
  {
    "id": 14,
    "description": "Fourteenth project draft",
    "location": "San Diego",
    "dateSubmitted": "2024-06-14",
    "rev": "N",
    "status": "Approved",
    "issuedTo":  ["PH - Park Hood", "OHAC - O’Herlihy Access Consultancy"],
    "file": ["example2.pdf", "example1.pdf","example1.pdf" ],
    "comments": [
      {
        "id": 14,
        "text": "Approved",
        "date": "2023-06-15",
        "author": "Fernanda Souza"
      }
    ]
  },
  {
    "id": 15,
    "description": "Fifteenth project draft",
    "location": "San Jose",
    "dateSubmitted": "2024-06-15",
    "rev": "O",
    "status": "Revision",
    "issuedTo": ["JFA - John Fleming Architects", "EDC - Engineering Design Consultants", "PH - Park Hood"],
    "accepted": "No",
    "file": ["example2.pdf", "example1.pdf","example1.pdf" ],
    "comments": [
      {
        "id": 15,
        "text": "Needs major revisions",
        "date": "2023-06-16",
        "author": "Roberto Alves"
      }
    ]
  },
  {
    "id": 16,
    "description": "Fifteenth project draft",
    "location": "San Jose",
    "dateSubmitted": "2024-06-18",
    "rev": "A",
    "status": "Revision",
    "issuedTo": ["JFA - John Fleming Architects", "EDC - Engineering Design Consultants", "PH - Park Hood"],
    "accepted": "No",
    "file": ["example2.pdf", "example1.pdf","example1.pdf" ],
    "comments": [
      {
        "id": 16,
        "text": "Needs major revisions",
        "date": "2023-06-16",
        "author": "Roberto Alves"
      }
    ]
  }
]

let id = 16;

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
