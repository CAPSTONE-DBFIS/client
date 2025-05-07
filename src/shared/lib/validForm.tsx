import { IJoin, JoinKey } from '@/entities/user/join.type'

export const validForm = (formData: IJoin, checkArr: JoinKey[]): boolean => {
    return checkArr.every((key) => {
        const value = formData[key]
        return value !== undefined && value !== null && value !== ''
    })
}
