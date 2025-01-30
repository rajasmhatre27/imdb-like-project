import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography, Button, Grid, Paper } from "@mui/material";

const MovieDetails = () => {
  const { id } = useParams(); // Get the movie ID from the URL
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Start loading and reset any errors
    setLoading(true);
    setError(null);

    // Fetch movie details from the API
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=YOUR_API_KEY&language=en-US`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Movie Details:", data); // Debugging log
        setMovie(data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to fetch movie details.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {/* Banner Section */}
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${movie.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <Typography variant="h2">{movie.title}</Typography>
        <Typography variant="h6" sx={{ marginTop: "10px" }}>
          {movie.release_date} | Rating: {movie.vote_average} ⭐
        </Typography>
      </div>

      {/* Movie Details Section */}
      <Grid container spacing={4} sx={{ padding: "40px 20px" }}>
        <Grid item xs={12} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="450"
              image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Typography variant="h4" sx={{ marginBottom: "20px" }}>
            Overview
          </Typography>
          <Typography variant="body1" paragraph>
            {movie.overview}
          </Typography>

          <Typography variant="h6" sx={{ marginBottom: "10px" }}>
            Genres:
          </Typography>
          <Grid container spacing={2}>
            {movie.genres.map((genre) => (
              <Grid item key={genre.id}>
                <Paper
                  sx={{
                    padding: "5px 15px",
                    backgroundColor: "#f3f4f6",
                    borderRadius: "20px",
                  }}
                >
                  <Typography variant="body2">{genre.name}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Typography variant="h6" sx={{ marginTop: "20px" }}>
            Release Date: {movie.release_date}
          </Typography>
          <Typography variant="body2" sx={{ marginTop: "10px" }}>
            Language: {movie.original_language.toUpperCase()}
          </Typography>

          <Button variant="contained" color="primary" href={movie.homepage} target="_blank" sx={{ marginTop: "20px" }}>
            Official Website
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default MovieDetails;
