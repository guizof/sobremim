import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Page() {
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.imagem} source={require('../img/salvadorba.jpeg')}></Image>
                <Text style={styles.text1}>Salvador-BA</Text>
            </View>
            <View>
                <Image style={styles.imagem} source={require('../img/aracatubasp.jpeg')}></Image>
                <Text style={styles.text1}>Araçatuba-SP</Text>
            </View>
            <View>
                <Image style={styles.imagem} source={require('../img/gramadors.jpeg')}></Image>
                <Text style={styles.text1}>Gramado-RS</Text>
            </View>
            <View style={styles.linha}></View>
            <View>
                <Image style={styles.imagem} source={require('../img/goianiago.jpeg')}></Image>
                <Text style={styles.text1}>Goiânia-GO</Text>
            </View>
            <View>
                <Image style={styles.imagem} source={require('../img/fozpr.jpeg')}></Image>
                <Text style={styles.text1}>Foz do Iguaçu-PR</Text>
            </View>
            <View>
                <Image style={styles.imagem} source={require('../img/floripasc.jpeg')}></Image>
                <Text style={styles.text1}>Florianópolis-SC</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    imagem: {
        width: 300,
        height: 270,
        borderRadius: 3,
    },
    text1: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    linha: {
        width: '100%',
        height: 1,
        backgroundColor: 'black',
        marginVertical: 10,
    },
})