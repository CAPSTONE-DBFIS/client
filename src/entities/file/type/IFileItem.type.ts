export interface IFileItem {
  id: number
  name: string
  type: 'FILE' | 'FOLDER'
  size?: number
  uploaderId: string
}
