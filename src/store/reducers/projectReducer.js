const initState = {
    projects: [
        {id: '1', title: 'test 1', content: 'content 1'},
        {id: '2', title: 'test 2', content: 'content 2'},
    ]
}

const projectReducer = (state = initState, action) => {

    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created', action.project);
            return state;
            //break;
        case 'CREATE_PROJECT_ERROR':
            console.log('error', action.err);
            return state;
            //break;
        default:
            return state;
            //break;
    }    
}

export default projectReducer;