export const createProject = (project) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const userId = getState().firebase.auth.uid;
    return firestore
      .collection('projects')
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: userId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
      })
      .catch((err) => {
        dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
      });
  };
};
