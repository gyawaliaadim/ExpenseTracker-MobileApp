import Colors from '@/constants/Colors';
import { GestureResponderEvent, Pressable, StyleSheet, Text, View } from 'react-native';
function Button({ children, onPress, mode, style }: { children: React.ReactNode, onPress:(event: GestureResponderEvent) => void, mode?: 'flat', style?: object }) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed ? styles.pressed : ""}
      >
        <View style={[styles.button, mode === 'flat' ? styles.flat: ""]}>
          <Text style={[styles.buttonText, mode === 'flat'? styles.flatText: ""]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: Colors.secondary500,
  },
  flat: {
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
  },
  flatText: {
    color: Colors.gray50,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: Colors.gray700,
    borderRadius: 4,
  },
});
