import type { IStylesState } from './types'

export function getStyleValue(stylesState: IStylesState, element: string, property: string): string {
    return stylesState.elementsStyles[element]?.[property] || ''
}
