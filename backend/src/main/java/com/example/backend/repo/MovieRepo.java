package com.example.backend.repo;

import com.example.backend.model.Movie;
import lombok.Data;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
@Data

public class MovieRepo {

    private final Map<String, Movie> movieList = new HashMap<>();



    public List<Movie> getList() {
        return new ArrayList<>(movieList.values());

    }

    public Movie addMovie(Movie movie) {
        movieList.put(movie.getId(), movie);

        return movie;
    }
}
