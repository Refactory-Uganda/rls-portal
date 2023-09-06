/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}"
  ],
  theme: {
    colors:{
      'purple':'#693769',
      'fadepurple':'#614C71',
      'bluegreen':'#58C5C8',
      'black':'#100202',
      'white':'#FFFFFF',
      'grey':'#D9D9D9',
      'menuwhite':'#F4F0F0',
      'darkpurple':'#180027',
      'lastbottom':'#5E1A69'
    },
    screens:{
        'sm':'320px',
        'sm2':'500px',
        'md':'650px',
        'md2':'768px',
        'lg':'1024px',
        'xl':'1280px',
        '2xl': '1536px'
    },
    borderRadius:{
        '0.5sm':'5px',
        '1sm':'10px',
        '2sm':'20px',
        '5sm':'50%'
    },
    
   
    container: {
      center: true,
    },
    extend: {
      spacing: {
        '137.25': '137.25px',
        '1sm':'-40px',
        '2sm':'20px',
        '3sm':'30px',
        '4sm':'40px',
        '5sm':'50px',
        '100sm':'100ps'
           },
      margin:{
        '100sm':'100px',
        '20sm':'20px'

      }
    },
  },
  plugins: [

  ],
}

