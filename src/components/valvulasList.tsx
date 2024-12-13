import React from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import useRiego from '../hooks/useRiego';

const ValvulasList = () => {
    const { valvulas, error, isLoading } = useRiego();

    if (isLoading) {
        return (
            <View style={styles.centeredContainer}>
                <ActivityIndicator size="large" color="#007AFF" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.centeredContainer}>
                <Text style={styles.errorText}>An error occurred. Please try again later.</Text>
            </View>
        );
    }

    return (
        <View style={styles.outerContainer}>
            <FlatList
                contentContainerStyle={styles.centeredContainer}
                style={styles.list}
                data={valvulas}
                keyExtractor={(item) => item.values[0].name}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>{item.name}</Text>
                        {item.values.map((value, index) => (
                            <View key={index} style={styles.cardContent}>
                                <Text style={styles.cardText}>{value.name}</Text>
                                <Text style={styles.cardText}>{value.state.toString()}</Text>
                            </View>
                        ))}
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    centeredContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    errorText: {
        color: '#FF3B30',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
    list: {
        width: '100%',
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 16,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
        elevation: 3,
        borderWidth: 0.5,
        borderColor: '#ddd',
        width: '100%',
    },
    cardTitle: {
        fontSize: 30,
        fontWeight: '700',
        color: '#333',
        marginBottom: 8,
    },
    cardContent: {
        marginBottom: 8,
    },
    cardText: {
        fontSize: 25,
        color: '#555',
    },
});

export default ValvulasList;