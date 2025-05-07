import axiosInstance from '@/shared/api/axios'
import { IJoin } from '../join.type'

/**
 * 회원가입 API
 * @param {IJoin} data 회원가입 데이터
 * @returns {Promise<IJoin>} 회원가입 데이터
 */
export const join = async (data: IJoin) => {
    const response = await axiosInstance.post('/api/signup', data)
    return response
}

export const verifyCode = async (
    memberId: string,
    verificationCode: string
) => {
    const response = await axiosInstance.post('/api/verify-signup', {
        memberId,
        verificationCode,
    })
    return response
}
