package com.caioandre.calc.Calculadora.controller;

import com.caioandre.calc.Calculadora.entity.Calculator;
import com.caioandre.calc.Calculadora.service.ICalculatorService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/calc", consumes = "application/json")
@AllArgsConstructor
public class CalculatorController {

    private final ICalculatorService service;

    @PostMapping(value = "/add")
    @CrossOrigin(origins = "http://localhost:3000")
    public String add(@RequestBody Calculator calculator) {

        return service.add(calculator);
    }

    @PostMapping(value = "/sub")
    @CrossOrigin(origins = "http://localhost:3000")
    public String subtract(@RequestBody Calculator calculator) {
        return service.subtract(calculator);
    }
}
