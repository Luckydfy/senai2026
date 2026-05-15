import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
    return (
        <View style={estilos.container}>
            <Text style={estilos.titulo}>Meu App</Text>
            <Text style={estilos.subtitulo}>Organize seus estudos</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        backgroundColor: '#68c8ff',
        paddingVertical: 20,
        paddingHorizontal: 16,
        alignItems: 'center'
    },

    titulo: {
        fontSize: 25,
        fontWeight: '700',
        color: '#fff'
    },

    subtitulo: {
        fontSize: 16,
        color: '#000000',
        marginTop: 4
    }
})