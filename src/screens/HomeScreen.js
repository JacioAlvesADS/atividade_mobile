import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Switch } from 'react-native';

const NEWS = [
    { id: '1', title: 'Clima', content: 'Previsão de chuva para a tarde. Não esqueça o guarda-chuva!' },
    { id: '2', title: 'Manutenção', content: 'Elevador social em manutenção amanhã das 10h às 12h.' },
    { id: '3', title: 'Avisos', content: 'Reunião de condomínio hoje às 19h no salão de festas.' },
    { id: '4', title: 'Dica do dia', content: 'Economize água: verifique torneiras pingando.' },
    { id: '5', title: 'Esportes', content: 'O time local venceu o campeonato regional ontem à noite.' },
    { id: '6', title: 'Tecnologia', content: 'Nova atualização do app do condomínio já está disponível.' },
    { id: '7', title: 'Cultura', content: 'Exposição de arte na praça central neste final de semana.' },
];

export default function HomeScreen() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleSwitch = () => setIsDarkMode(previousState => !previousState);

    const currentThemeStyles = isDarkMode ? darkTheme : lightTheme;

    return (
        <View style={[styles.container, { backgroundColor: currentThemeStyles.background }]}>
            <View style={styles.header}>
                <Text style={[styles.title, { color: currentThemeStyles.text }]}>Notícias do Elevador</Text>
                <Switch
                    trackColor={{ false: '#D1D1D6', true: '#34C759' }}
                    thumbColor="#FFFFFF"
                    ios_backgroundColor="#D1D1D6"
                    onValueChange={toggleSwitch}
                    value={isDarkMode}
                />
            </View>
            <ScrollView style={styles.scrollView}>
                {NEWS.map(news => (
                    <View key={news.id} style={[styles.card, { backgroundColor: currentThemeStyles.cardBg }]}>
                        <Text style={[styles.cardTitle, { color: currentThemeStyles.text }]}>{news.title}</Text>
                        <Text style={[styles.cardContent, { color: currentThemeStyles.text }]}>{news.content}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const lightTheme = {
    background: '#F2F2F7',
    text: '#000000',
    cardBg: '#FFFFFF',
};

const darkTheme = {
    background: '#000000',
    text: '#FFFFFF',
    cardBg: '#1C1C1E',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    scrollView: {
        flex: 1,
    },
    card: {
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    cardContent: {
        fontSize: 16,
    },
});
