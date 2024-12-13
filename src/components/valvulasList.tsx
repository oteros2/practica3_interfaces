import React from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import ValvulaItem from './valvulaItem';
import { useGetValvulaRiegoQuery } from '../http/httpRQ';

const ValvulasList = () => {
    const { data: valvulas, isLoading, error } = useGetValvulaRiegoQuery();

    if (isLoading) {
        return (
            <View style={styles.centeredContainer}>
                <Text style={styles.errorText}>Loading...</Text>
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
                    {item.values.map((value, index) => {
                        return (
                           <ValvulaItem
                                key={index}
                                name={value.name}
                                valueName={value.name}
                                initialState={value.state}
                            />
                        );
                    })}
                </View>
            )}
        />
    </View>
    );
};

const styles = StyleSheet.create({
    outerContainer: {
        width: '100%',
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 16,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
        borderWidth: 0.5,
        borderColor: '#ddd',
        width: '90%',
        alignSelf: 'center',
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
    stateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default ValvulasList;