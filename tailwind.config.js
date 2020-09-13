const defaultTheme = require('tailwindcss/defaultTheme');
let alpha = {100: 'FF', 90: 'E6', 80: 'CC', 70: 'B3', 60: '99', 50: '80', 40: '66', 30: '4D', 20: '33', 10: '1A'};

module.exports = {
  purge: {
    mode: 'all',
    content: [
      __dirname + '/templates/default/*.twig',
      __dirname + '/templates/default/**/*.twig',
      __dirname + '/templates/default/**/**/*.twig',
      __dirname + '/src/css/*.scss',
      __dirname + '/src/css/**/*.scss',
      __dirname + '/src/js/app.js',
    ],
    options: {
      whitelistPatterns: [/-(leave|enter|appear)(|-(to|from|active))$/, /^(?!(|.*?:)cursor-move).+-move$/, /^router-link(|-exact)-active$/, /data-v-.*/]
    }
  },
  theme: {
    customForms: theme => ({
      default: {
        checkbox: {
          borderRadius: '0',
          backgroundColor: theme('colors.transparent'),
          borderColor: theme('colors.silver'),
          '&:focus': {
            outline: 'none',
            boxShadow: 'none',
            borderColor: 'none',
          },
          iconColor: theme('colors.black'),
          '&:checked': {
            borderColor: 'transparent',
            backgroundColor: theme('colors.silver'),
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          },
        }
      }
    }),
    screens: {
      ...defaultTheme.screens,
    },
    spacing: {
      px: '1px',
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '7': '1.75rem',
      '8': '2rem',
      '9': '2.25rem',
      '10': '2.5rem',
      '11': '2.75rem',
      '12': '3rem',
      '13': '3.25rem',
      '14': '3.5rem',
      '15': '3.75rem',
      '16': '4rem',
      '17': '4.25rem',
      '18': '4.5rem',
      '19': '4.75rem',
      '20': '5rem',
      '21': '5.25rem',
      '22': '5.50rem',
      '23': '5.75rem',
      '24': '6rem',
      '25': '6.25rem',
      '26': '6.50rem',
      '27': '6.75rem',
      '28': '7rem',
      '29': '7.25rem',
      '30': '7.50rem',
      '31': '7.75rem',
      '32': '8rem',
      '33': '8.25rem',
      '34': '8.50rem',
      '35': '8.75rem',
      '36': '9rem',
      '37': '9.25rem',
      '38': '9.50rem',
      '39': '9.75rem',
      '40': '10rem',
      '41': '10.15rem',
      '42': '10.25rem',
      '43': '10.35rem',
      '44': '10.45rem',
      '45': '10.55rem',
      '46': '10.65rem',
      '47': '11rem',
      '48': '12rem',
      '49': '12.5rem',
      '50': '13rem',
      '51': '13.5rem',
      '52': '14.5rem',
      '53': '15rem',
      '54': '15.5rem',
      '55': '16rem',
      '56': '17rem',
      '57': '18rem',
      '58': '19rem',
      '59': '20rem',
      '60': '21rem',
      '61': '22rem',
      '62': '23rem',
      '63': '24rem',
      '64': '25rem',
    },
    opacity: {
      '0': '0',
      '5': '.05',
      '10': '.1',
      '15': '.15',
      '20': '.2',
      '25': '.25',
      '30': '.3',
      '35': '.35',
      '40': '.4',
      '45': '.45',
      '50': '.5',
      '55': '.55',
      '60': '.6',
      '65': '.65',
      '70': '.7',
      '75': '.75',
      '80': '.8',
      '85': '.85',
      '90': '.9',
      '95': '.95',
      '100': '1',
    },
    extend: {
      // https://javisperez.github.io/tailwindcolorshades
      colors: {
        primary: {
          100: '#F0F2FD',
          200: '#D9DFFA',
          300: '#C2CBF7',
          400: '#94A5F0',
          500: '#667EEA',
          600: '#5C71D3',
          700: '#3D4C8C',
          800: '#2E3969',
          900: '#1F2646'
        },
        secondary: {
          100: '#EBF7F7',
          200: '#CDECEA',
          300: '#AFE0DE',
          400: '#74C9C5',
          500: '#38B2AC',
          600: '#32A09B',
          700: '#226B67',
          800: '#19504D',
          900: '#113534'
        },
        brands: {
          facebook: '#3b5998',
          twitter: '#55acee',
          instagram: '#3f729b',
          linkedin: '#0976b4',
          youtube: '#e52d27',
          vimeo: '#1ab7ea',
          pinterest: '#cc2127'
        }
      },
      fontSize: theme => ({
        'xs': ['0.75rem', theme('lineHeight.normal')],    // 12
        'sm': ['0.875rem', theme('lineHeight.normal')],   // 14
        'base': ['1rem', theme('lineHeight.normal')],     // 16
        'md': ['1.125rem', theme('lineHeight.normal')],   // 18
        'lg': ['1.25rem', theme('lineHeight.normal')],    // 20
        'xl': ['1.5rem', theme('lineHeight.normal')],     // 24
        '2xl': ['1.875rem', theme('lineHeight.normal')],  // 30
        '3xl': ['2.25rem', theme('lineHeight.normal')],   // 36
        '4xl': ['3rem', theme('lineHeight.normal')],      // 48
        '5xl': ['4rem', theme('lineHeight.normal')],      // 64
        '6xl': ['4.5rem', theme('lineHeight.normal')]     // 72
      }),
      fontFamily: {
        'sans-primary': [
          ...defaultTheme.fontFamily.sans
        ],
        'serif-primary': [
          ...defaultTheme.fontFamily.serif
        ],
        'mono-primary': [
          ...defaultTheme.fontFamily.mono
        ],
      },
      boxShadow: theme => ({
        'outline': '0 0 0 3px ' + theme('colors.primary.500') + alpha[20],
        'focus': '0 0 0 3px ' + theme('colors.primary.500') + alpha[20]
      }),
      container: {
        center: true,
        padding: {
          default: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem'
        }
      },
      height: {
        'screen-fix': 'calc(var(--vh, 1vh) * 100);'
      },
      inset: {
        '0': 0,
        '1/2': '50%'
      },
      typography: theme => ({
        default: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: theme('colors.primary.600'),
              }
            }
          }
        }
      }),
      // Plugins
      aspectRatio: {
        'square': [1, 1],
        '16/9': [16, 9],
        '4/3': [4, 3]
      }
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    opacity: ['responsive', 'hover', 'group-hover'],
    translate: ['responsive', 'hover', 'group-hover'],
    scale: ['responsive', 'hover', 'group-hover']
  },
  plugins: [
    require('@tailwindcss/ui'),
    require('tailwindcss-typography')({componentPrefix: ''}),
    require('tailwindcss-aspect-ratio')
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  }
};
