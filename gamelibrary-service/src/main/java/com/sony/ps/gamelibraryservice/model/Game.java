package com.sony.ps.gamelibraryservice.model;

import io.swagger.annotations.ApiModelProperty;
import javax.persistence.Id;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.time.ZonedDateTime;

@Entity
@Table(name = "game")
public class Game {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false, nullable = false)
    @Id
    private String id;

    @NotBlank
    @Column(name = "name")
    @ApiModelProperty(required = true, value = "game title")
    private String name;

    @NotBlank
    @Column(name = "platform")
    @ApiModelProperty(required = true, value = "platform supported")
    String platform;

    @NotBlank
    @Column(name = "genre")
    @ApiModelProperty(required = true, value = "game genre")
    String genre;

    @NotBlank
    @Column(name = "releaseDate")
    @ApiModelProperty(required = true, value = "game release date")
    ZonedDateTime releaseDate;

    @NotBlank
    @Column(name = "nrPlayers")
    @ApiModelProperty(required = true, value = "number of players supported")
    int nrPlayers;

    @NotBlank
    @Column(name = "publisher")
    @ApiModelProperty(required = true, value = "game publisher")
    String publisher;

    @NotBlank
    @Column(name = "imageUrl")
    @ApiModelProperty(required = true, value = "image of the game")
    String boxArtUrl;

    public Game(){}

    public Game(@NotBlank String name, @NotBlank String platform, @NotBlank String genre, @NotBlank ZonedDateTime releaseDate,
                @NotBlank int nrPlayers, @NotBlank String publisher, @NotBlank String boxArtUrl) {
        this.name = name;
        this.platform = platform;
        this.genre = genre;
        this.releaseDate = releaseDate;
        this.nrPlayers = nrPlayers;
        this.publisher = publisher;
        this.boxArtUrl = boxArtUrl;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPlatform() {
        return platform;
    }

    public void setPlatform(String platform) {
        this.platform = platform;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public ZonedDateTime getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(ZonedDateTime releaseDate) {
        this.releaseDate = releaseDate;
    }

    public int getNrPlayers() {
        return nrPlayers;
    }

    public void setNrPlayers(int nrPlayers) {
        this.nrPlayers = nrPlayers;
    }

    public String getPublisher() {
        return publisher;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }

    public String getBoxArtUrl() {
        return boxArtUrl;
    }

    public void setBoxArtUrl(String boxArtUrl) {
        this.boxArtUrl = boxArtUrl;
    }
}
