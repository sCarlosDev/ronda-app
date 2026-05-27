package com.ronda.backend.service;

import com.ronda.backend.entity.Pedido;
import com.ronda.backend.entity.Ronda;
import com.ronda.backend.repository.RondaRepository;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class RondaService {

    private final RondaRepository rondaRepository;

    public RondaService(RondaRepository rondaRepository) {
        this.rondaRepository = rondaRepository;
    }

    public List<Ronda> findAll() {
        return rondaRepository.findByActivaTrue();
    }

    public Ronda create(Ronda ronda) {
        return rondaRepository.save(ronda);
    }

    public Ronda addPedido(Long rondaId, Pedido pedido) {
        Ronda ronda = rondaRepository.findById(rondaId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Ronda no encontrada"));

        ronda.addPedido(pedido);
        return rondaRepository.save(ronda);
    }

    public Ronda closeRonda(Long rondaId) {
        Ronda ronda = rondaRepository.findById(rondaId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Ronda no encontrada"));

        ronda.setActiva(false);
        return rondaRepository.save(ronda);
    }
}
