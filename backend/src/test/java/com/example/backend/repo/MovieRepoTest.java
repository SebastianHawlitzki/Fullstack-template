package com.example.backend.repo;

import com.example.backend.model.Movie;
import org.junit.jupiter.api.Test;
import java.util.ArrayList;
import java.util.List;


import static org.junit.jupiter.api.Assertions.*;

class MovieRepoTest {

    @Test
    void getList() {

        //given
        List<Movie> movieList = new ArrayList<>();
        MovieRepo movieRepo = new MovieRepo();

        //when
        List<Movie> actual = movieRepo.getList();

        //then
        assertEquals(movieList, actual);
    }


    @Test
    void addMovie() {
    }
}