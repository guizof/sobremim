import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Page() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View>
                <Text style={styles.titulo}>VIAGENS</Text>
            </View>
            <View style={styles.item}>
                <Image style={styles.imagem} source={require('../img/salvadorba.jpeg')}></Image>
                <Text style={styles.text1}>Salvador-BA</Text>
            </View>
            <View style={styles.item}>
                <Image style={styles.imagem} source={require('../img/aracatubasp.jpeg')}></Image>
                <Text style={styles.text1}>Araçatuba-SP</Text>
            </View>
            <View style={styles.item}>
                <Image style={styles.imagem} source={require('../img/gramadors.jpeg')}></Image>
                <Text style={styles.text1}>Gramado-RS</Text>
            </View>
            <View style={styles.item}>
                <Image style={styles.imagem} source={require('../img/goianiago.jpeg')}></Image>
                <Text style={styles.text1}>Goiânia-GO</Text>
            </View>
            <View style={styles.item}>
                <Image style={styles.imagem} source={require('../img/fozpr.jpeg')}></Image>
                <Text style={styles.text1}>Foz do Iguaçu-PR</Text>
            </View>
            <View style={styles.item}>
                <Image style={styles.imagem} source={require('../img/floripasc.jpeg')}></Image>
                <Text style={styles.text1}>Florianópolis-SC</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingVertical: 10,
    },
    titulo: {
        fontSize: 50,
        padding: 5,
        fontWeight: 'bold'
    },
    item: {
        marginBottom: 20,
        alignItems: 'center',
    },
    imagem: {
        width: 400,
        height: 300,
        borderRadius: 3,
    },
    text1: {
        fontSize: 18,
        fontWeight: 'bold',
    }
})