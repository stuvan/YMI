tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        'noto': ['"Noto Sans"', 'sans-serif'],
        'bad-script': ['"Bad Script"', 'cursive'],
        'raleway': ["Raleway", "sans-serif"],
        'font-awesome': ["FontAwesome"]
      },
      keyframes: {
        scroll: {
          '0%': {
            transform: 'translateX(0)'
          },
          '100%': {
            transform: 'translateX(calc(-430px * 7))'
          }
        }
      },
      animation: {
        wiggle: 'scroll 20s linear infinite',
      }
    }
  }
}