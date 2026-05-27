package com.ronda.backend.config;

  import com.ronda.backend.entity.Pedido;
  import com.ronda.backend.entity.Ronda;
  import com.ronda.backend.repository.RondaRepository;
  import org.springframework.boot.CommandLineRunner;
  import org.springframework.context.annotation.Bean;
  import org.springframework.context.annotation.Configuration;

  @Configuration
  public class DataLoader {

      @Bean
      CommandLineRunner cargarRondasDePrueba(RondaRepository rondaRepository) {
          return args -> {
              if (rondaRepository.count() > 0) {
                  return;
              }

              Ronda ronda1 = new Ronda(
                      "Prueba",
                      "Cafeteria NTT",
                      "09:30",
                      "600123123",
                      "Ronda de cafe antes de la reunión"
              );
              ronda1.addPedido(new Pedido("Ana", "Cafe con leche", 1.40));
              ronda1.addPedido(new Pedido("Luis", "Tostada", 2.20));

              Ronda ronda2 = new Ronda(
                      "Marta",
                      "Bar de la esquina",
                      "15:00",
                      "611222333",
                      "Ronda para comer despues de clase"
              );
              ronda2.addPedido(new Pedido("Pedro", "Bocadillo tortilla", 4.50));
              ronda2.addPedido(new Pedido("Lucia", "Coca-Cola", 1.80));

              rondaRepository.save(ronda1);
              rondaRepository.save(ronda2);
          };
      }
  }