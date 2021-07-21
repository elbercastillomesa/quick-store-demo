export const CreateProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //async call to db

        dispatch({
            type: 'CREATE_PROJECT',
            project
        });
    }
}