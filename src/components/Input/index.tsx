import React, { LegacyRef, forwardRef, Fragment } from "react";
import {
  TextInput,
  View,
  Text,
  TextInputProps,
  StyleProp,
  TextStyle,
  TouchableOpacity,
} from "react-native";

import { MaterialIcons, FontAwesome, Octicons } from "@expo/vector-icons";

type IconComponent =
  | React.ComponentType<React.ComponentProps<typeof MaterialIcons>>
  | React.ComponentType<React.ComponentProps<typeof FontAwesome>>
  | React.ComponentType<React.ComponentProps<typeof Octicons>>;

type Props = TextInputProps & {
  IconLeft?: IconComponent;
  IconRight?: IconComponent;
  iconLeftName?: string;
  iconRightName?: string;
  title?: string;
  onIconLeftPress?: () => void;
  onIconRightPress?: () => void;
  height?: number;
  labelStyle?: StyleProp<TextStyle>;
  multiline?: boolean;
};

export const Input = forwardRef(
  (
    { title, height, multiline, ...rest }: Props,
    ref: LegacyRef<TextInput> | null
  ) => {
    return (
      <Fragment>
        {title && <Text className="text-lg font-bold mb-2">{title}</Text>}
        <View className="bg-gray-200 rounded-xl px-3 py-2">
          <TextInput
            ref={ref}
            className="text-base"
            style={{ height: height || 50 }}
            multiline={multiline}
            {...rest}
          />
        </View>
      </Fragment>
    );
  }
);
