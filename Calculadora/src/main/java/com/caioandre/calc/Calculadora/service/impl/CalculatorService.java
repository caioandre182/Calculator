package com.caioandre.calc.Calculadora.service.impl;

import com.caioandre.calc.Calculadora.entity.Calculator;
import com.caioandre.calc.Calculadora.exception.exceptions.NumberNotFoundException;
import com.caioandre.calc.Calculadora.service.ICalculatorService;
import org.springframework.stereotype.Service;

@Service
public class CalculatorService implements ICalculatorService {

    public String add(Calculator calculator){
        verifyNullNumber(calculator);

        double result = calculator.getNumber1() + calculator.getNumber2();

        return "O resultado é " + result + ".";
    }

    public String subtract(Calculator calculator){
        verifyNullNumber(calculator);


        double result = calculator.getNumber1() - calculator.getNumber2();

        return "O resultado é " + result + ".";
    }

    private void verifyNullNumber(Calculator calculator){
        if (calculator.getNumber1() == null || calculator.getNumber2() == null) {
            throw new NumberNotFoundException("Os dois valores precisam ser informados");
        }
    }


}
