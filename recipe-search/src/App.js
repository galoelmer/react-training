import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Form from './components/Form';
import { Container, CssBaseline } from '@material-ui/core';
import RecipeCard from './components/RecipeCard';

//TEST DATA
import testData from './testData';

const { REACT_APP_API_KEY: API_KEY } = process.env;

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
    const apiURL = `https://api.spoonacular.com/recipes/search?query=${recipeName}&number=12&apiKey=${API_KEY}`;
    // Check for empty input recipe name
    // if (recipeName.trim().length !== 0) {
    //   try {
    //     const apiCall = await fetch(corsURL + apiURL);
    //     const { results: recipeList } = await apiCall.json();
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
    this.inputRef.current.value = '';

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
