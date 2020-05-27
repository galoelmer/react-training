import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Form from './components/Form';
import { Container, CssBaseline } from '@material-ui/core';
import RecipeCard from './components/RecipeCard';

//TEST DATA
import data from './testData';
const testData = data.map(({recipe}) => recipe);

const { REACT_APP_API_ID: API_ID, REACT_APP_API_KEY: API_KEY } = process.env;

class App extends React.Component {
  state = {
    recipes: [],
  };
  // Get Recipes API call
  getRecipe = async (e) => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    const corsURL = 'https://cors-anywhere.herokuapp.com/';
    const apiURL = `https://api.edamam.com/search?app_id=${API_ID}&app_key=${API_KEY}&q=${recipeName}&to=12`;
    // Check for empty input recipe name
    if (recipeName.trim().length !== 0) {
      try {
        const apiCall = await fetch(corsURL + apiURL);
        const { hits } = await apiCall.json();
        const recipeList = hits.map(({ recipe }) => recipe);

        if (recipeList.length) {
          this.setState({ recipes: recipeList });
        } else {
          throw new Error('Whoops! No Recipe Found');
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log('No Recipe found');
    }

    // Setting state with Test data
    // this.setState({recipes: testData})
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
        <Form getRecipe={this.getRecipe} />
        <RecipeCard recipes={this.state.recipes} />
      </Container>
    );
  }
}

export default App;
