import React from 'react';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';

// Import Test Data
import { recipe as testData } from './../testData';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
// }));

class Recipe extends React.Component {
  state = {
    activeRecipe: {},
  };

  componentDidMount = async() => {
    const { REACT_APP_API_KEY: API_KEY } = process.env;
    const corsURL = 'https://cors-anywhere.herokuapp.com/';
    const apiURL = `https://api.spoonacular.com/recipes/${this.props.location.state.recipeId}/information?apiKey=${API_KEY}`;
    const apiCall = await fetch(corsURL + apiURL);
    const recipe = await apiCall.json();
    this.setState({activeRecipe: recipe});

    // Test Data
    // this.setState({ activeRecipe: testData });
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
