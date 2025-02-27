import React, { LegacyRef, forwardRef, Fragment } from "react";
import {
  TextInput,
  View,
  Text,
  TextInputProps,
  StyleProp,
  TextStyle,
} from "react-native";
import { MaskedTextInput } from "react-native-mask-text";

type Props = TextInputProps & {
  title?: string;
  height?: number;
  multiline?: boolean;
  mask?: string;
  onChangeText?: (text: string) => void;
};

export const Input = forwardRef(
  (
    { title, height, multiline, mask, onChangeText, ...rest }: Props,
    ref: LegacyRef<TextInput> | null
  ) => {
    return (
      <Fragment>
        {title && <Text className="text-lg font-bold mb-2">{title}</Text>}
        <View className="bg-gray-200 rounded-xl px-3 py-2">
          {mask ? (
            <MaskedTextInput
              ref={ref}
              multiline={multiline}
              mask={mask}
              onChangeText={(text, rawText) => onChangeText?.(text)}
              {...rest}
            />
          ) : (
            <TextInput
              ref={ref}
              className="text-base"
              style={{ height: height || 50 }}
              multiline={multiline}
              onChangeText={onChangeText}
              {...rest}
            />
          )}
        </View>
      </Fragment>
    );
  }
);
