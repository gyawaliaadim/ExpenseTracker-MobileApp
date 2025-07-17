import Colors from '@/constants/Colors';
import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
interface MainViewProps {
    children: React.ReactNode;
}

const MainView: React.FC<MainViewProps> = ({ children }) => {
    return (

        <>
            <StatusBar
                backgroundColor={Colors.gray700}
            />
            <SafeAreaView style={styles.background} >
                

                <View style={styles.background}>
                    {children}
                </View>
            
            </SafeAreaView>
        </>
    );
}

export default MainView

const styles = StyleSheet.create({

    background: {
        flex: 1,
        backgroundColor: Colors.gray700
    }
})