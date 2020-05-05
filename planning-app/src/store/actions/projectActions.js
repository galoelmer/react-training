export const createProject = (project) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    return firestore
      .collection('projects')
      .add({
        ...project,
        authorFirstName: 'Bob',
        authorLastName: 'Ninja',
        authorId: 12345,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
      })
      .catch((err) => {
        dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
      });
  };
};
