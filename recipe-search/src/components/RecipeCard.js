import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  container: {
    margin: '20px auto',
  },
  recipeName: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
});

export default function RecipeCard({ recipes }) {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid container spacing={4}>
        {recipes.map((recipe, i) => (
          <Grid key={i} item xs={12} sm={6} md={3}>
            <Card>
              <CardMedia
                className={classes.media}
                image={recipe.image}
                title={recipe.label}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  component="h4"
                  align="center"
                  className={classes.recipeName}
                >
                  {recipe.label}
                </Typography>
              </CardContent>

              <CardActions>
                <Button
                  href={recipe.url}
                  size="small"
                  color="secondary"
                  variant="outlined"
                  fullWidth
                >
                  View Recipe
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
