import {useRef, useState} from 'react';

export enum Operadores {
  sumar,
  restar,
  multiplicar,
  dividir,
}

export const useCalculadora = () => {
  const [numeroAnterior, setNumeroAnterior] = useState('');
  const [numero, setNumero] = useState('0');
  const [operacion, setOperacion] = useState<Operadores>();
  const operando = useRef(false);

  const limpiar = () => {
    setNumero('0');
    setNumeroAnterior('');
    setOperacion(undefined);
  };

  const cambiarNumeroPorAnterior = () => {
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, -1));
    } else {
      setNumeroAnterior(numero);
    }
    setNumero('0');
  };

  const armarNumero = (numeroTexto: string) => {
    if (numero === 'Error') {
      limpiar();
      return;
    }
    if (operando.current) {
      if (numeroTexto === '.') {
        return;
      }
      operando.current = false;
      cambiarNumeroPorAnterior();
      setNumero(numeroTexto);
      return;
    }

    if (numero.includes('.') && numeroTexto === '.') {
      return;
    }

    if (numero.startsWith('0') || numero.startsWith('-0')) {
      if (numeroTexto === '.') {
        setNumero(numero + numeroTexto);
      } else if (numeroTexto === '0' && numero.includes('.')) {
        setNumero(numero + numeroTexto);
      } else if (numeroTexto !== '0' && !numero.includes('.')) {
        setNumero(numero.replace('0', numeroTexto));
      } else if (numeroTexto === '0' && !numero.includes('.')) {
        setNumero(numero);
      } else {
        setNumero(numero + numeroTexto);
      }
    } else {
      setNumero(numero + numeroTexto);
    }
  };

  const btnDelete = () => {
    if (numero === 'Error') {
      limpiar();
      return;
    }
    if (numero === '-0') {
      setNumero('0');
      return;
    }
    if (numero.length === 2 && numero.includes('-')) {
      setNumero('-0');
      return;
    }
    if (numero.length === 1) {
      setNumero('0');
    } else {
      setNumero(numero.substring(0, numero.length - 1));
    }
  };

  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };

  const btnDividir = () => {
    operando.current = true;
    setOperacion(Operadores.dividir);
  };

  const btnMultiplicar = () => {
    operando.current = true;
    setOperacion(Operadores.multiplicar);
  };

  const btnRestar = () => {
    operando.current = true;
    setOperacion(Operadores.restar);
  };

  const btnSumar = () => {
    operando.current = true;
    setOperacion(Operadores.sumar);
  };

  const calcular = () => {
    const num1 = Number(numero);
    let num2 = Number(numeroAnterior);
    if (numeroAnterior === '') {
      num2 = num1;
    }

    switch (operacion) {
      case Operadores.sumar:
        setNumero(`${num1 + num2}`);
        break;
      case Operadores.restar:
        setNumero(`${num2 - num1}`);
        break;
      case Operadores.multiplicar:
        setNumero(`${num1 * num2}`);
        break;
      case Operadores.dividir:
        if (num1 === 0) {
          setNumero('Error');
          setOperacion(undefined);
          return;
        }
        setNumero(`${num2 / num1}`);
        break;
    }
    setOperacion(undefined);
    setNumeroAnterior('');
  };

  return {
    numeroAnterior,
    numero,
    limpiar,
    positivoNegativo,
    btnDelete,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
    armarNumero,
    operacion,
  };
};
