package com.sony.ps.gamelibraryservice.Service;

import com.sony.ps.gamelibraryservice.model.Game;
import com.sony.ps.gamelibraryservice.service.GameServiceImpl;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import com.sony.ps.gamelibraryservice.repository.GameRepository;

import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

@RunWith(MockitoJUnitRunner.class)
public class GameServiceImplTest {
	
	@InjectMocks
	GameServiceImpl gameService;
	
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
	public void testGetGames() {
		when(gameRepo.findAll()).thenReturn(gameList);
		List<Game> games = gameService.getGames();
		assertEquals(gameList, games);
	}

	@Test
	public void testAddGame() {
		when(gameRepo.save(gameTwo)).thenReturn(gameTwo);
		Game newGame = gameService.addGame(gameTwo);
		assertEquals(gameTwo, newGame);
	}

	@Test
	public void testGetGameByName() {
		when(gameRepo.findByName(gameTwo.getName())).thenReturn(gameTwo);
		Game game = gameService.getGameByName(gameTwo.getName());
		assertEquals(gameTwo, game);
	}

	@Test
	public void testGetGameByNameUnknownName() {
		when(gameRepo.findByName(gameOne.getName())).thenReturn(null);
		Game game = gameService.getGameByName(gameOne.getName());
		assertEquals(null, game);
	}

	@Test
	public void testDeleteGame() {
		gameService.deleteGame(gameTwo.getName());
		verify(gameRepo, times(1)).deleteByName(gameTwo.getName());
	}

}