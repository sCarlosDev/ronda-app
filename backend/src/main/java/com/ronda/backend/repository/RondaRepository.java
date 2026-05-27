package com.ronda.backend.repository;

import com.ronda.backend.entity.Ronda;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RondaRepository extends JpaRepository<Ronda, Long> {
    List<Ronda> findByActivaTrue();
}
