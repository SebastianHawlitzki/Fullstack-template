package com.example.backend.service;

import com.example.backend.model.Movie;
import com.example.backend.repo.MovieRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class MovieService {

    private final MovieRepo movieRepo;


    public List<Movie> getList (){
        return movieRepo.getList();
    }


    public Movie addMovie(Movie movie) {
        String uuid = UUID.randomUUID().toString();
        Movie x = new Movie(movie.getId(), movie.getTitle(), movie.getPosterUrl(), movie.getYear());
        movie.setId(uuid);
        return movieRepo.addMovie(movie);
    }
}
