package com.sony.ps.gamelibraryservice.controller;

import org.junit.Before;
import org.junit.Rule;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnit;
import org.mockito.junit.MockitoRule;

import com.sony.ps.gamelibraryservice.repository.GameRepository;
import com.sony.ps.gamelibraryservice.service.GameService;

public class GameServiceTest {

	@Rule
	public MockitoRule rule = MockitoJUnit.rule();
	
	@InjectMocks
	GameService gameService;
	
	@Mock
	GameRepository gameRepo;
	
//	@Before
//	public void setUp() {
//		Game 
//	}

}
