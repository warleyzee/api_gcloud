let submittals = [];
let currentId = 1;

const getAllSubmittals = () => submittals;

const getSubmittalById = (id) => submittals.find(s => s.id === parseInt(id));

const createSubmittal = (data) => {
    const newSubmittal = { id: currentId++, ...data };
    submittals.push(newSubmittal);
    return newSubmittal;
};

const updateSubmittal = (id, data) => {
    const index = submittals.findIndex(s => s.id === parseInt(id));
    if (index !== -1) {
        submittals[index] = { ...submittals[index], ...data };
        return submittals[index];
    }
    return null;
};

const deleteSubmittal = (id) => {
    const initialLength = submittals.length;
    submittals = submittals.filter(s => s.id !== parseInt(id));
    return submittals.length < initialLength;
};

export {
    getAllSubmittals,
    getSubmittalById,
    createSubmittal,
    updateSubmittal,
    deleteSubmittal
};
