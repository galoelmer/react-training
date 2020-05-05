const initState = {
    projects: [
        {id: '1', title: 'Lorem ipsum dolor sit amet', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, enim.'}, 
        {id: '2', title: 'Lorem ipsum dolor sit amet', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, enim.'}, 
        {id: '3', title: 'Lorem ipsum dolor sit amet', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, enim.'}
    ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('create project', action.project);
      break;
    default: console.log("Hit default");
  }
  return state;
};

export default projectReducer;
