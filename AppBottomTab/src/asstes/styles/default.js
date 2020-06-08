import { StyleSheet } from 'react-native'

var paleta = 1;
export function alterarPaleta(valor, context) {
    debugger
    paleta = valor
    context.setState({paleta})
}
export var Cor_1 = (paleta_selecionada) => { 
    if (paleta_selecionada == 2) {
        return '#f5f'
    }
    return '#57de84'
};
export var Cor_2 = '#fff';
export var Cor_3 = '#9d9d9d';
export var Cor_4 = '#000';
export var Cor_5 = '#57de84';

const stylesDefault = StyleSheet.create({
    ROW: {
        flexDirection: 'row'
    },
    COLUMN: {
        flexDirection: 'column'
    },
    bg_Cor_1: {
        backgroundColor: Cor_1(paleta)
    },
    tx_Cor_1: {
        color: Cor_1(paleta)
    },
    bd_Cor_1: {
        borderColor: Cor_1(paleta)
    },

    bg_Cor_2: {
        backgroundColor: Cor_2
    },
    tx_Cor_2: {
        color: Cor_2
    },
    bd_Cor_2: {
        borderColor: Cor_2
    },

    bg_Cor_3: {
        backgroundColor: Cor_3
    },
    tx_Cor_3: {
        color: Cor_3
    },
    bd_Cor_3: {
        borderColor: Cor_3
    },

    bg_Cor_4: {
        backgroundColor: Cor_4
    },
    tx_Cor_4: {
        color: Cor_4
    },
    bd_Cor_4: {
        borderColor: Cor_4
    },

    bg_Cor_5: {
        backgroundColor: Cor_5
    },
    tx_Cor_5: {
        color: Cor_5
    },
    bd_Cor_5: {
        borderColor: Cor_5
    },

})

export { stylesDefault };