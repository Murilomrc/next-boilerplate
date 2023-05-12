const color = {
    warning: {
        x050: '#FFFBEA',
        x100: '#FFF3C4',
        x200: '#FCE588',
        x300: '#FADB5F',
        x400: '#F7C948',
        x500: '#F0B429',
        x600: '#DE911D',
        x700: '#CB6E17',
        x800: '#B44D12',
        x900: '#8D2B0B',
    },
    negative: {
        x050: '#FFE3E3',
        x100: '#FFBDBD',
        x200: '#FF9B9B',
        x300: '#F86A6A',
        x400: '#EF4E4E',
        x500: '#E12D39',
        x600: '#CF1124',
        x700: '#AB091E',
        x800: '#8A041A',
        x900: '#610316',
    },
    positive: {
        x050: '#E3F9E5',
        x100: '#C1F2C7',
        x200: '#91E697',
        x300: '#51CA58',
        x400: '#31B237',
        x500: '#18981D',
        x600: '#0F8613',
        x700: '#0E7817',
        x800: '#07600E',
        x900: '#014807',
    },
    neutral: {
        x000: '#FFFFFF',
        x050: '#F7F7F7',
        x100: '#E1E1E1',
        x200: '#CFCFCF',
        x300: '#B1B1B1',
        x400: '#9E9E9E',
        x500: '#7E7E7E',
        x600: '#626262',
        x700: '#515151',
        x800: '#3B3B3B',
        x900: '#222222',
        x999: '#111111',
    },
    accent: {
        x050: '#FFE3EC',
        x100: '#FFB8D2',
        x200: '#FF8CBA',
        x300: '#F364A2',
        x400: '#E8368F',
        x500: '#DA127D',
        x600: '#BC0A6F',
        x700: '#A30664',
        x800: '#870557',
        x900: '#620042',
    },
    primary: {
        x050: '#FFE8D9',
        x100: '#FFD0B5',
        x200: '#FFB088',
        x300: '#FF9466',
        x400: '#F9703E',
        x500: '#F35627',
        x600: '#DE3A11',
        x700: '#C52707',
        x800: '#AD1D07',
        x900: '#841003',
    },
}

export type ColorValues = keyof typeof color
export default color
