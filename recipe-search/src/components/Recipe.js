import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class Recipe extends React.Component {
  state = {
    activeRecipe: {},
  };

  componentDidMount = async () => {
    const { REACT_APP_API_KEY: API_KEY } = process.env;
    const corsURL = 'https://cors-anywhere.herokuapp.com/';
    const apiURL = `https://api.spoonacular.com/recipes/${this.props.location.state.recipeId}/information?apiKey=${API_KEY}`;
    const apiCall = await fetch(corsURL + apiURL);
    const recipe = await apiCall.json();
    /* Remove unnecessary text from recipe summary */
    const regex = /.+(?= All things considered)/gim;
    recipe.summary = recipe.summary.match(regex);

    this.setState({ activeRecipe: recipe });
  };

  render() {
    return (
      <Container>
        {this.state.activeRecipe.title !== undefined && (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h6">
                {this.state.activeRecipe.title}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <CardMedia component="img" src={this.state.activeRecipe.image} />
              <Button
                style={{ margin: 10 }}
                variant="outlined"
                color="secondary"
              >
                <Link to="/">Go Home</Link>
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                dangerouslySetInnerHTML={{
                  __html: this.state.activeRecipe.summary,
                }}
              ></Typography>
            </Grid>
          </Grid>
        )}
      </Container>
    );
  }
}

export default Recipe;
