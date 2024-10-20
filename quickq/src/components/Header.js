import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import { colors, parameters } from '../global/styles';
import { Icon } from 'react-native-elements';

export default function Header({title}) {
    return(
        <View style={styles.header}>
            <View style={{marginLeft:20}}>
                <Icon
                    type="material-community"
                    name="arrow-left"
                    color={colors.textColor}
                    size={28}
                    onPress={()=>{}}
                />
            </View>
            <View>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        backgroundColor: colors.buttons,
        height: parameters.headerHeight
    },

    headerText: {
        color: colors.textColor,
        fontSize: 22,
        fontWeight: "bold",
        marginLeft: 30
    }
});