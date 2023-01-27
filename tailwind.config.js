module.exports = {

  purge: [],

  

  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
      colors:{
        pri:"#ffffff",
        sec:'#287780',
        thi:'#c2edce',
        
      },
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }