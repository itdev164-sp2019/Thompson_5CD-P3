const theme = {
    space:[0,4,8,16,32,64,128,256,512],
    lineHeights:{
        solid: 1,
        title: 1.25,
        copy: 1.5
    },
    letterSpacings:{
        normal: 'normal',
        tracked: '0.1em',
        tight: '-0.05em',
        mega: '0.25em'
    },
    borders:[
        0,
        '1px solid',
        '2px solid',
        '3px solid',
        '4px solid',
        '8px solid',
        '16px solid',
        '32px solid'
    ],
    colors: {
        primary:{
            light: 'hsl(208,13%,35%)',
            main: 'hsl(208,13%,25%)',
            dark: 'hsl(208, 13%,15%)',
            contrastText:'#ffffff'
        },
        text:{
            primary: 'hsl(208,13%,15%)',
            secondary: 'hsl(208, 13%,45%)',
            disabled: 'hsl(208,13%,75%',
            hint: 'hsl(208,13%,75%)'
        }
    }
}

const defaults = {
    link: {
        textDecoration: 'none',
        color:"#D4AF37"
    },
    footer:{
        color:"#D4AF37"
    }
}

const variants = {
    link: {
        primary:{
            ...defaults.link,
            color: theme.colors.primary.main
        }
    }
}

const Green = {...theme,defaults,variants}
export {Green}