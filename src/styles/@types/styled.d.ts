import 'styled-components'

declare module 'styled-components' {
  export interface IDeafultTheme {
    fonts: {
      primary: string
    }
    colors: {
      greenLight: string
      green: string
      greenDark: string

      red: string
      redDark: string

      gray7: string
      gray6: string
      gray5: string
      gray4: string
      gray3: string
      gray2: string
      gray1: string

      white: string
    }
  }
}
