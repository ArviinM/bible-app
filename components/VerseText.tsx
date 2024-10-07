import {Text, type TextProps, StyleSheet} from 'react-native';

import {useThemeColor} from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
    lightColor?: string;
    darkColor?: string;
};

export function VerseText({
                              style,
                              lightColor,
                              darkColor,
                              ...rest
                          }: ThemedTextProps) {
    const color = useThemeColor({light: lightColor, dark: darkColor}, 'text');

    return (
        <Text
            style={[
                styles.default,
            ]}
            {...rest}
        />
    );
}

const styles = StyleSheet.create({
    default: {
        fontFamily: 'SatoshiRegular',
        fontSize: 16,
        lineHeight: 24,
    },

});
