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
import static org.mockito.Mockito.when;
import org.mockito.junit.MockitoJUnitRunner;

import java.time.ZonedDateTime;
import java.util.ArrayList;


@RunWith(MockitoJUnitRunner.class)
public class GameController {

    @InjectMocks
    GameController gameController;

    @Mock
    GameService gameService;

    ArrayList<Game> gameList;

    @Before
    public void init() {
        gameList = new ArrayList<>();
        gameList.add(new Game("Game 1", "PS4, XBox One", "Sports game", ZonedDateTime.now(), 8, "Electronic Arts", "https:url1.com"));
        gameList.add(new Game("Game 2", "PS4", "Action-adventure", ZonedDateTime.now(), 2, "Kojima Productions", "https:url2.com"));
    }

    @Test
    public void testGetAll() throws NotFoundException {

        when(gameService.getGames()).thenReturn(gameList);
        when(companyService.getCompanyById(companyData.companyB.getId())).thenReturn(companyData.companyB);

        ResponseEntity<Company> response = gameController.);
        assertEquals(updatedObject, response.getBody());
    }

    @After
    public void finalise(){
        gameList.clear();
    }


}
