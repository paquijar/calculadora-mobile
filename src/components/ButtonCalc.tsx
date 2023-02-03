import clsx from 'clsx';
import React from 'react';
import {Dimensions, Pressable, Text} from 'react-native';

interface Props {
  text: string;
  type?: 'primary' | 'secondary' | 'orange';
  double?: boolean;
  action: (number: string) => void;
  active?: boolean;
}

const BTN_MARGIN = 5;

const screen = Dimensions.get('window');
const buttonWidth = (screen.width - 24) / 4 - BTN_MARGIN * 2;

export const ButtonCalc = ({
  text,
  type = 'primary',
  double,
  action,
  active,
  ...rest
}: Props) => {
  return (
    <Pressable
      onPress={() => action(text)}
      className={clsx(
        type === 'primary' &&
          'bg-button-primary-500 active:bg-button-primary-300',
        type === 'secondary' && 'bg-button-secondary active:bg-white',
        type === 'orange' && 'bg-button-orange active:bg-button-orange-light',
        active && 'bg-white',
        'bg-button-main justify-center items-center rounded-full transition-all',
      )}
      style={{
        width: double ? buttonWidth * 2 + BTN_MARGIN * 2 : buttonWidth,
        height: buttonWidth,
        margin: BTN_MARGIN,
      }}
      {...rest}>
      <Text
        className={clsx(
          (type === 'primary' || type === 'orange') && 'text-white',
          type === 'secondary' && 'text-black',
          active && 'text-button-orange',
          'text-4xl ',
        )}>
        {text}
      </Text>
    </Pressable>
  );
};
