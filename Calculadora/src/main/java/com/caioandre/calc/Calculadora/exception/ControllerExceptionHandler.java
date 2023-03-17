package com.caioandre.calc.Calculadora.exception;


import com.caioandre.calc.Calculadora.exception.exceptions.InvalidNumberException;
import com.caioandre.calc.Calculadora.exception.exceptions.NumberNotFoundException;
import com.caioandre.calc.Calculadora.exception.response.ExceptionResponse;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ControllerExceptionHandler {

    @ExceptionHandler(NumberNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ExceptionResponse notFoundResponse(Exception e){
        return new ExceptionResponse(e.getMessage(), 404);
    }

    @ExceptionHandler(InvalidNumberException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ExceptionResponse badRequestResponse(Exception e){
        return new ExceptionResponse(e.getMessage(), 400);
    }
}
