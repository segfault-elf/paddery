declare module 'paddery' {
  export default class Paddery {
    pad(direction: 'left' | ' right' | 'lr', charToPad: string, timesToPad: number, stringToAdd: string): string;
    pad_c(config: { left?: { char: string; timesToPad: number }, right?: { char: string; timesToPad: number } }, stringToAdd: string): string;
  }
}