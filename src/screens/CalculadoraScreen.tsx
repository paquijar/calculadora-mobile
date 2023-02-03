import React from 'react';
import {View, Text} from 'react-native';
import {ButtonCalc} from '../components/ButtonCalc';
import {Operadores, useCalculadora} from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {
  const {
    armarNumero,
    btnDelete,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
    limpiar,
    numero,
    numeroAnterior,
    positivoNegativo,
    operacion,
  } = useCalculadora();

  return (
    <View className=" flex-1 justify-end py-8 px-3">
      {numeroAnterior !== '0' && (
        <Text
          numberOfLines={1}
          adjustsFontSizeToFit
          className="mb-3 text-3xl text-right text-white opacity-50 px-5">
          {numeroAnterior}
        </Text>
      )}
      <Text
        numberOfLines={1}
        adjustsFontSizeToFit
        className="mb-6 text-6xl text-right px-5 text-white">
        {numero}
      </Text>

      <View className="flex-row ">
        <ButtonCalc text="C" type="secondary" action={limpiar} />
        <ButtonCalc text="+/-" type="secondary" action={positivoNegativo} />
        <ButtonCalc text="del" type="secondary" action={btnDelete} />
        <ButtonCalc
          text="/"
          type="orange"
          action={btnDividir}
          active={operacion === Operadores.dividir}
        />
      </View>
      <View className="flex-row ">
        <ButtonCalc text="7" action={armarNumero} />
        <ButtonCalc text="8" action={armarNumero} />
        <ButtonCalc text="9" action={armarNumero} />
        <ButtonCalc
          text="x"
          type="orange"
          action={btnMultiplicar}
          active={operacion === Operadores.multiplicar}
        />
      </View>
      <View className="flex-row ">
        <ButtonCalc text="4" action={armarNumero} />
        <ButtonCalc text="5" action={armarNumero} />
        <ButtonCalc text="6" action={armarNumero} />
        <ButtonCalc
          text="-"
          type="orange"
          action={btnRestar}
          active={operacion === Operadores.restar}
        />
      </View>
      <View className="flex-row ">
        <ButtonCalc text="1" action={armarNumero} />
        <ButtonCalc text="2" action={armarNumero} />
        <ButtonCalc text="3" action={armarNumero} />
        <ButtonCalc
          text="+"
          type="orange"
          action={btnSumar}
          active={operacion === Operadores.sumar}
        />
      </View>
      <View className="flex-row ">
        <ButtonCalc double text="0" action={armarNumero} />
        <ButtonCalc text="," action={armarNumero} />
        <ButtonCalc text="=" type="orange" action={calcular} />
      </View>
    </View>
  );
};
