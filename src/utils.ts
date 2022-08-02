import type { IStore } from './types'

export function getStyleValue(state: IStore, element: string, property: string): string {
    return state.styles[element]?.[property] || ''
}
