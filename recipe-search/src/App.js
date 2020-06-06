import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Form from './components/Form';
import { Container, CssBaseline } from '@material-ui/core';
import RecipeCard from './components/RecipeCard';

//TEST DATA
import data from './testData';
const testData = data.map(({ recipe }) => recipe);

const { REACT_APP_API_ID: API_ID, REACT_APP_API_KEY: API_KEY } = process.env;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      recipes: [],
      inputError: false,
    };
  }
  // Get Recipes API call
  getRecipe = async (e) => {
    e.preventDefault();
    const recipeName = this.inputRef.current.value;
    const corsURL = 'https://cors-anywhere.herokuapp.com/';
    const apiURL = `https://api.edamam.com/search?app_id=${API_ID}&app_key=${API_KEY}&q=${recipeName}&to=12`;
    // Check for empty input recipe name
    // if (recipeName.trim().length !== 0) {
    //   try {
    //     const apiCall = await fetch(corsURL + apiURL);
    //     const { hits } = await apiCall.json();
    //     const recipeList = hits.map(({ recipe }) => recipe);
    //     this.setState({ ...this.state, inputError: false });

    //     if (recipeList.length) {
    //       this.setState({ recipes: recipeList });
    //     } else {
    //       this.setState({ ...this.state, inputError: true });
    //       throw new Error('Whoops! No Recipe Found');
    //     }
    //   } catch (err) {
    //     this.setState({ ...this.state, inputError: true });
    //     console.log(err);
    //   }
    // } else {
    //   this.setState({ ...this.state, inputError: true });
    //   console.log('No Recipe found');
    // }
    // this.inputRef.current.value = '';
    
    // Setting state with Test data
    this.setState({ recipes: testData });
  };

  render() {
    return (
      <Container disableGutters maxWidth={false}>
        <CssBaseline />
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h4" component="h2">
              Recipe Search
            </Typography>
          </Toolbar>
        </AppBar>
        <Form
          getRecipe={this.getRecipe}
          inputRef={this.inputRef}
          inputError={this.state.inputError}
        />
        <RecipeCard recipes={this.state.recipes} />
      </Container>
    );
  }
}

export default App;
