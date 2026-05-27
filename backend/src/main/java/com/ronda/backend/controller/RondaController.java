package com.ronda.backend.controller;

import com.ronda.backend.entity.Pedido;
import com.ronda.backend.entity.Ronda;
import com.ronda.backend.service.RondaService;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/rondas")
@CrossOrigin(origins = {"http://localhost:4200", "http://127.0.0.1:4200"})
public class RondaController {

    private final RondaService rondaService;

    public RondaController(RondaService rondaService) {
        this.rondaService = rondaService;
    }

    @GetMapping
    public List<Ronda> getRondas() {
        return rondaService.findAll();
    }

    @PostMapping
    public ResponseEntity<Ronda> createRonda(@RequestBody Ronda ronda) {
        return ResponseEntity.status(HttpStatus.CREATED).body(rondaService.create(ronda));
    }

    @PostMapping("/{id}/pedidos")
    public ResponseEntity<Ronda> addPedido(@PathVariable Long id, @RequestBody Pedido pedido) {
        return ResponseEntity.ok(rondaService.addPedido(id, pedido));
    }

    @PutMapping("/{id}/cerrar")
    public ResponseEntity<Ronda> closeRonda(@PathVariable Long id) {
        return ResponseEntity.ok(rondaService.closeRonda(id));
    }
}
