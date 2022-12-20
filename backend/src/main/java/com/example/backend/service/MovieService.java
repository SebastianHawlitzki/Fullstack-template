package com.example.backend.service;

import com.example.backend.model.Movie;
import com.example.backend.repo.MovieRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MovieService {

    private final MovieRepo movieRepo;


    public List<Movie> getList (){
        return movieRepo.getList();
    }


    public Movie addMovie(Movie movie) {
        return movieRepo.addMovie(movie);
    }
}
