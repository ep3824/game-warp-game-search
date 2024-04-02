package com.example.demo;

import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@RestController
@CrossOrigin(origins = "http://192.168.70.11:3000")
public class SimpleApiController {

    @Value("${RAWG_API_KEY}")
    private String apiKey;

    private final WebClient webClient = WebClient.create("https://api.rawg.io/api");

    @GetMapping("/api/{endpoint}")
    public Mono<String> fetchFromRawgApi(@PathVariable String endpoint) {
        return webClient.get()
                .uri("/{endpoint}?key={apiKey}", Map.of("endpoint", endpoint, "apiKey", apiKey))                .retrieve()
                .bodyToMono(String.class)
                .onErrorResume(e -> Mono.just("Failed to fetch data: " + e.getMessage()));
    }
}
