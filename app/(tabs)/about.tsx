import Colors from '@/constants/Colors';
import React from 'react';
import { Linking, ScrollView, StyleSheet, Text, View } from 'react-native';

const About = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>About This App</Text>

            <View style={styles.section}>
                <Text style={styles.heading}>Developer</Text>
                <Text style={styles.text}>Name: Aadim Gyawali</Text>
                <Text style={styles.text}>Location: Kathmandu, Nepal</Text>
                <Text style={styles.text}>Role: Software Developer</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.heading}>Links</Text>
                <Text style={styles.text}>
                    GitHub UserID: <Text
                        style={styles.link}
                        onPress={() => Linking.openURL('http://github.com/gyawaliaadim/')}
                    >
                        gyawaliaadim
                    </Text>
                </Text>
                <Text style={styles.text}>
                    LinkedIn UserID: <Text
                        style={styles.link}
                        onPress={() => Linking.openURL('https://www.linkedin.com/in/aadimgyawali/')}
                    >
                        aadimgyawali
                    </Text>
                </Text>
            </View>


            <View style={styles.section}>
                <Text style={styles.heading}>Tech Stack</Text>
                <Text style={styles.text}>
                    - React Native{'\n'}
                    - TypeScript{'\n'}
                    - Expo{'\n'}
                    - Context API
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.heading}>Features</Text>
                <Text style={styles.text}>
                    - Add, edit, and delete expenses{'\n'}
                    - View recent and all expenses{'\n'}
                    - Persistent storage with AsyncStorage
                </Text>
            </View>
        </ScrollView>
    );
};

export default About;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: Colors.gray700,
        padding: 24,
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 24,
        color: Colors.secondary700,
        textAlign: 'center',
    },
    section: {
        marginBottom: 24,
    },
    heading: {
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 8,
        color: Colors.secondary500,
    },
    text: {
        fontSize: 18,
        color: Colors.secondary300,
        marginBottom: 6,
    },
    link: {
        fontSize: 18,
        color: Colors.secondary300,
        textDecorationLine: 'underline',
        marginBottom: 6,
    },
});
