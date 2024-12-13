import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import OnOffButton from './onOffButton';
import useStateValvula from '../hooks/useStateValvula';

interface ValvulaItemProps {
    name: string;
    valueName: string;
    initialState: boolean;
}

const ValvulaItem: React.FC<ValvulaItemProps> = ({ name, valueName, initialState }) => {
    const { valvula, toggleState } = useStateValvula({
        name, values: [{ name: valueName, state: initialState }],lastDate: ''
    });

    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{name}</Text>
            <View style={styles.cardContent}>
                <View style={styles.stateContainer}>
                    <Text style={styles.cardText}>{valueName}</Text>
                    <OnOffButton
                        value={valvula.values[0].state}
                        onToggleSwitch={toggleState}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 16,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
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

export default ValvulaItem;