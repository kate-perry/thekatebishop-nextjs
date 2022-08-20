export type Portfolio = {
    id: string,
    title: string,
    role: string,
    date: any,
    problem: string,
    prompt: string,
    data: any
}

export const transitionTimeout = 1000
export const paletteArray = ['primary', 'secondary', 'tertiary', 'quaternary', 'quinary', 'senary']
export const palette = {
    primary: '#1C0A27',
    secondary: '#4A5101',
    tertiary: '#F16023',
    quaternary: '#D8B93D',
    quinary: '#EDE3D6',
    senary: '#E0D9C3'
}
export const breakpoint = {
    small: 480,
    medium: 768,
    large: 1024,
}
export enum WindowSize {
    SMALL,
    MEDIUM,
    LARGE,
    XLARGE,
} 