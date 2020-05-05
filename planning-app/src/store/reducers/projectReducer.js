const initState = {
  projects: [
    {
      id: '1',
      title: 'Lorem ipsum dolor sit amet',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, enim.',
    },
    {
      id: '2',
      title: 'Lorem ipsum dolor sit amet',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, enim.',
    },
    {
      id: '3',
      title: 'Lorem ipsum dolor sit amet',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, enim.',
    },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT_SUCCESS':
      console.log('created project success', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('created project error');
      return state;
    default:
      return state;
  }
};

export default projectReducer;
