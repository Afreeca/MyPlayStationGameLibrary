package com.sony.ps.gamelibraryservice.repository;

import com.sony.ps.gamelibraryservice.model.Game;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface GameRepository extends JpaRepository<Game, Long> {
    Game findByName(String name);
    @Transactional
    void deleteByName(String name);
    boolean existsByNameIgnoreCase(String name);
}