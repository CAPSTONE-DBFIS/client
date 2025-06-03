export interface IFileItem {
    id: number
    name: string
    type: 'FILE' | 'FOLDER'
    size?: number
    uploaderId: string
}

export interface IStorage {
    limitMegaBytes: number
    usedMegaBytes: number
    remainingMegaBytes: number
}
