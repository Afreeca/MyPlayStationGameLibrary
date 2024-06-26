package com.sony.ps.gamelibraryservice.controller;

import com.sony.ps.gamelibraryservice.exception.NotFoundException;
import com.sony.ps.gamelibraryservice.model.Game;
import com.sony.ps.gamelibraryservice.service.GameService;
import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
@Api(value = "Game resource")
@CrossOrigin(origins = "http://localhost:3000")
public class GameController {

    @Autowired
    GameService gameService;

    @ApiOperation(value = "Get all games")
    @GetMapping(value = "/games")
    @ApiResponses(value = {
        @ApiResponse(code = 400, message = "Something went wrong"),
        @ApiResponse(code = 403, message = "Access denied"),
        @ApiResponse(code = 500, message = "Server Error")})
    public ResponseEntity<List<Game>> getAll(){
        return new ResponseEntity<>( gameService.getGames(), HttpStatus.OK);
    }

    @ApiOperation(value = "Get a game")
    @ApiResponses(value = {
        @ApiResponse(code = 400, message = "Something went wrong"),
        @ApiResponse(code = 403, message = "Access denied"),
        @ApiResponse(code = 404, message = "The game doesn't exist"),
        @ApiResponse(code = 500, message = "Server Error")})
    @GetMapping(value = "/game/{name}")
    public ResponseEntity<Game> getGame(@ApiParam("name") @PathVariable("name") String name){
        return new ResponseEntity<>( gameService.getGameByName(name), HttpStatus.OK);
    }

    @ApiOperation(value = "Add a new game")
    @ApiResponses(value = {
        @ApiResponse(code = 400, message = "Something went wrong"),
        @ApiResponse(code = 403, message = "Access denied"),
        @ApiResponse(code = 500, message = "Server Error")})
    @PostMapping(value = "/game")
    public ResponseEntity<Game> addGame(@Valid @RequestBody Game game){
        return new ResponseEntity<>(gameService.addGame(game), HttpStatus.OK);
    }

    @ApiOperation(value = "Delete a specific game")
    @ApiResponses(value = {
        @ApiResponse(code = 400, message = "Something went wrong"),
        @ApiResponse(code = 403, message = "Access denied"),
        @ApiResponse(code = 404, message = "The game doesn't exist"),
        @ApiResponse(code = 500, message = "Server Error")})
    @DeleteMapping(value = "/game/{name}")
    public ResponseEntity<Game> deleteGame(@ApiParam("name") @PathVariable("name") String name){
        if(!gameService.gameExists(name))
            throw new NotFoundException(String.format("game with name=%s not found", name));
        gameService.deleteGame(name);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
