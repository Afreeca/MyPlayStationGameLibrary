package com.sony.ps.gamelibraryservice.GameServiceTest;

import com.sony.ps.gamelibraryservice.model.Game;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnit;
import org.mockito.junit.MockitoJUnitRunner;
import org.mockito.junit.MockitoRule;

import com.sony.ps.gamelibraryservice.repository.GameRepository;
import com.sony.ps.gamelibraryservice.service.GameService;
import org.springframework.http.ResponseEntity;

import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class GameServiceTest {
	
	@InjectMocks
	GameService gameService;
	
	@Mock
	GameRepository gameRepo;

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

}
