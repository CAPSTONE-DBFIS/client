//component
import { Box } from '@/shared/ui/Box'
//icons
import Menu from '@/shared/asset/icon/menu.svg?react'
//css
import * as style from './styles/title.css'
//interface
import { IProject } from '../types/project.type'
import { Text } from '@/shared/ui/Text'
/**
 * 프로젝트 헤더 컴포넌트
 * 프로젝트 제목과 경로 표시 & 관련 메뉴(수정,삭제)를 표시하는 컴포넌트입니다.
 * @param {string} projectName - 프로젝트 제목
 * @returns {JSX.Element}
 */
export const Title = ({ projectName }: IProject) => {
    return (
        <Box display="flex" flexDirection="column" className={style.layout}>
            <Box display="flex" flexDirection="column">
                <Box
                    display="flex"
                    alignItems="center"
                    color={'neutral-900'}
                    style={{ gap: '8px', fontWeight: '500' }}
                >
                    <Menu width={26} height={26} />

                    <Text fontSize="title1">{projectName}</Text>
                </Box>
            </Box>
        </Box>
    )
}
