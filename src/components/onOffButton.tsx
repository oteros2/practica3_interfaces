import * as React from 'react';
import { Switch } from 'react-native-paper';

interface OnOffButtonProps {
    value: boolean;
    onToggleSwitch: () => void;
}

const OnOffButton: React.FC<OnOffButtonProps> = ({ value, onToggleSwitch }) => {
    return <Switch value={value} onValueChange={onToggleSwitch} />;
};

export default OnOffButton;