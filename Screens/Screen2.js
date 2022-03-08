import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Screen2() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>NETFLIX</Text>
            <Image
                source={require('./assets/images/netflix_logo.png')}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',  
    }
});
