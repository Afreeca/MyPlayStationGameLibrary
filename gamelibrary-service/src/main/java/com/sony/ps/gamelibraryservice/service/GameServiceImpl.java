package com.sony.ps.gamelibraryservice.service;

import com.sony.ps.gamelibraryservice.model.Game;
import com.sony.ps.gamelibraryservice.repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GameServiceImpl implements GameService {

    @Autowired
    GameRepository gameRepo;

    @Override
    public Game addGame(Game game) {
        return gameRepo.save(game);
    }

    @Override
    public List<Game> getGames() {
        return gameRepo.findAll();
    }

    @Override
    public Game getGameByName(String name) {
        return gameRepo.findByName(name);
    }

    @Override
    public void deleteGame(String name) {
        gameRepo.deleteByName(name);
    }

    @Override
    public Boolean gameExists(String name) {
        return gameRepo.existsByNameIgnoreCase(name);
    }
}
