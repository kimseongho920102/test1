package com.example.demo;

import com.example.demo.entity.ExampleEntity;
import com.example.demo.repository.ExampleRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class ExampleRunner implements CommandLineRunner {
    private final ExampleRepository exampleRepository;

    public ExampleRunner(ExampleRepository exampleRepository) {
        this.exampleRepository = exampleRepository;
    }

    @Override
    public void run(String... args) {
        ExampleEntity entity = new ExampleEntity();
        entity.setName("Test Data");
        exampleRepository.save(entity);

        System.out.println("Test data saved!");
    }
}
