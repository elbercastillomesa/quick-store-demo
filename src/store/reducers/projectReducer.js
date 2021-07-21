const initState = {
    projects: [
        {id: '1', title: 'test 1', content: 'content 1'},
        {id: '2', title: 'test 2', content: 'content 2'},
    ]
}

const projectReducer = (state = initState, action) => {

    switch (action.type) {
        case 'CREATE_PROJECT':
            
            break;
    
        default:
            break;
    }

    return state;
}

export default projectReducer;