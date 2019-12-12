package com.sony.ps.gamelibraryservice.service;

import com.sony.ps.gamelibraryservice.model.Game;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface GameService {
    Game addGame(Game game);
    List<Game> getGames();
    Game getGameByName(String name);
    void deleteGame(String name);
    Boolean gameExists(String name);
}
