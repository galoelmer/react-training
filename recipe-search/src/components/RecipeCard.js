import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: (imgProps) => ({
    height: 240,
    width: '100%',
    opacity: imgProps.opacity,
  }),
  container: {
    margin: '20px auto',
  },
  recipeName: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  loader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  recipeButton: {
    textDecoration: 'none',
    color: 'tomato',
  },
});

export default function RecipeCard({ recipes }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgProps = { opacity: imageLoaded ? '1' : '0' };
  const classes = useStyles(imgProps);

  return (
    <Container className={classes.container}>
      <Grid container spacing={4}>
        {recipes.map((recipe) => (
          <Grid key={recipe.id} item xs={12} sm={6} md={3}>
            <Card style={{ position: 'relative' }}>
              {!!recipe.image ? (
                <img
                  className={`${classes.media}`}
                  src={`https://spoonacular.com/recipeImages/${recipe.image}`}
                  alt={recipe.title}
                  onLoad={() => setImageLoaded(true)}
                />
              ) : (
                <div>Loading...</div>
              )}
              {!!recipe.image && !imageLoaded && (
                <div className={classes.loader}>
                  <CircularProgress />
                </div>
              )}
              <CardContent>
                <Typography
                  variant="h6"
                  component="h4"
                  align="center"
                  className={classes.recipeName}
                >
                  {recipe.title}
                </Typography>
              </CardContent>

              <CardActions>
                <Button
                  size="small"
                  color="secondary"
                  variant="outlined"
                  fullWidth
                >
                  <Link
                    className={`${classes.recipeButton}`}
                    to={{
                      pathname: `/recipe/${recipe.id}`,
                      state: { recipeId: recipe.id },
                    }}
                  >
                    View Recipe
                  </Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
