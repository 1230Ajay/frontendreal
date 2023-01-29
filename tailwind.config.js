module.exports = {

  purge: [],

  

  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
      colors:{
        pri:'#073245',
        sec:'#feffff',
        thi:'#dde8f0',
        
      },
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }