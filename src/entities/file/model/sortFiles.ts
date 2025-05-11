import { IFileItem } from '../type/IFileItem.type'

export type SortType = 'recent' | 'oldest' | 'name' | null

export function sortFiles(
    files: IFileItem[],
    sortOrder: SortType
): IFileItem[] {
    if (!sortOrder) return files

    return [...files].sort((a, b) => {
        if (sortOrder === 'recent') return b.id - a.id
        if (sortOrder === 'oldest') return a.id - b.id
        if (sortOrder === 'name') return a.name.localeCompare(b.name)
        return 0
    })
}
