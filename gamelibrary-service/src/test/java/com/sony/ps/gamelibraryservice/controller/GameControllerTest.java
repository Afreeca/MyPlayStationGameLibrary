package com.sony.ps.gamelibraryservice.controller;

import com.sony.ps.gamelibraryservice.exception.NotFoundException;
import com.sony.ps.gamelibraryservice.model.Game;
import com.sony.ps.gamelibraryservice.service.GameService;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.http.ResponseEntity;

import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;


@RunWith(MockitoJUnitRunner.class)
public class GameControllerTest {

    @InjectMocks
    GameController gameController;

    @Mock
    GameService gameService;

    ArrayList<Game> gameList;
    Game gameOne, gameTwo;

    @Before
    public void init() {
        gameList = new ArrayList<>();

        gameOne = new Game("Game 1", "PS4, XBox One", "Sports game", ZonedDateTime.now(), 8, "Electronic Arts", "https:url1.com");
        gameTwo = new Game("Game 2", "PS4", "Action-adventure", ZonedDateTime.now(), 2, "Kojima Productions", "https:url2.com");

        gameList.add(gameOne);
        gameList.add(gameTwo);
    }

    @Test
    public void testGetAll() {
        when(gameService.getGames()).thenReturn(gameList);
        ResponseEntity<List<Game>> response = gameController.getAll();
        assertEquals(gameList, response.getBody());
    }

    @Test
    public void testGeGame() {
        when(gameService.getGameByName(gameOne.getName())).thenReturn(gameOne);
        ResponseEntity<Game> response = gameController.getGame(gameOne.getName());
        assertEquals(gameOne, response.getBody());
    }

    @Test(expected = NotFoundException.class)
    public void testGeGameUnknownName() {
        when(gameService.getGameByName(gameOne.getName())).thenThrow(new NotFoundException(""));
        ResponseEntity<Game> response = gameController.getGame(gameOne.getName());
    }

    @Test
    public void testAddGame() {
        when(gameService.addGame(gameTwo)).thenReturn(gameTwo);
        ResponseEntity<Game> response = gameController.addGame(gameTwo);
        assertEquals(gameTwo, response.getBody());
    }

    @Test
    public void testDeleteGame() {
        when(gameService.gameExists(gameTwo.getName())).thenReturn(true);
        gameController.deleteGame(gameTwo.getName());
        verify(gameService, times(1)).deleteGame(gameTwo.getName());
    }


    @Test(expected = NotFoundException.class)
    public void testDeleteGameUnknownName() {
        when(gameService.gameExists(gameTwo.getName())).thenThrow(new NotFoundException(""));
        gameController.deleteGame(gameTwo.getName());
        verify(gameService, times(0)).deleteGame(gameTwo.getName());
    }

    @After
    public void finalise(){
        gameList.clear();
    }

}
