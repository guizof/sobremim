import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function MoviesList({ navigation }) {
    const movies = [
        { id: 1, title: 'Homem-Aranha Sem volta para Casa', image: require('../img/miranha.webp') },
        { id: 2, title: 'Velozes e Furiosos Desafio em Tóquio', image: require('../img/velozes.jpg') },
        { id: 3, title: 'Bad Boys Até o Fim', image: require('../img/badboys.webp') },
        { id: 4, title: 'Homem-Aranha Atráves do Aranhaverso', image: require('../img/milesmorales.jpg') }
    ];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View>
                <Text style={styles.titulo}>FILMES</Text>
            </View>
            {movies.map((movie) => (
                <TouchableOpacity 
                    key={movie.id} 
                    style={styles.item} 
                    onPress={() => navigation.navigate('MovieDetails', { movieId: movie.id })}
                >
                    <Image style={styles.imagem} source={movie.image}></Image>
                    <Text style={styles.text1}>{movie.title}</Text>
                </TouchableOpacity>
            ))}
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
        fontWeight: 'bold',
    },
    item: {
        marginBottom: 20,
        alignItems: 'center',
    },
    imagem: {
        width: 350,
        height: 500,
        borderRadius: 3,
    },
    text1: {
        fontSize: 18,
        fontWeight: 'bold',
    }
});
