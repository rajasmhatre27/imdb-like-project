import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Cards = ({ movies }) => {
  return (
    <Grid container spacing={3}>
      {movies.map((movie) => (
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} key={movie.id}>
          <Card sx={{ display: "flex", flexDirection: "row", maxWidth: 600 }}>
            <CardMedia
              component="img"
              sx={{ width: 150, height: 225, objectFit: "cover" }}
              image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <CardContent>
              <Link to={`/movie/${movie.id}`} className="text-yellow-500 hover:underline">
                <Typography variant="h6" component="div">
                  {movie.title}
                </Typography>
              </Link>
              <Typography variant="body2" color="text.secondary">
                Rating: {movie.vote_average} ⭐
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Release Date: {movie.release_date}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
