//component
import { Box } from '@/shared/ui/Box'
//icons
import Menu from '@/shared/asset/icon/menu.svg?react'
import Right from '@/shared/asset/icon/cheveron-right.svg?react'
import Pencil from '@/shared/asset/icon/pencil.svg?react'
import Trash from '@/shared/asset/icon/trash.svg?react'
//css
import * as style from './styles/title.css'
import { colors } from '@/app/token/index'
//interface
import { IProject } from '../types/project.type'
import { Text } from '@/shared/ui/Text'
/**
 * 프로젝트 헤더 컴포넌트
 * 프로젝트 제목과 경로 표시 & 관련 메뉴(수정,삭제)를 표시하는 컴포넌트입니다.
 * @param {string} projectName - 프로젝트 제목
 * @param {string} projectPath - 프로젝트 경로(개인/프로젝트)
 * @returns {JSX.Element}
 */
export const Title = ({ projectName, projectPath }: IProject) => {
    return (
        <Box display="flex" flexDirection="column" className={style.layout}>
            <Box display="flex" flexDirection="column" style={{ gap: '8px' }}>
                <Box
                    display="flex"
                    alignItems="center"
                    color={'neutral-900'}
                    style={{ gap: '8px', fontWeight: '500' }}
                >
                    <Text fontSize="title1">{projectName}</Text>
                    <Menu width={26} height={26} />
                </Box>
                <Box display="flex" alignItems="center" style={{ gap: '4px' }}>
                    <Right width={16} height={16} fill={colors['neutral-60']} />
                    <Text fontSize="headline" color="neutral-60">
                        {projectPath}
                    </Text>
                </Box>
            </Box>

            <Box display="flex" fontSize="body" style={{ gap: '20px' }}>
                <Box display="flex" alignItems="center" color={'neutral-50'}>
                    <Pencil
                        width={14}
                        height={14}
                        fill={colors['neutral-50']}
                        style={{
                            marginRight: '4px',
                        }}
                    />
                    <Text color="neutral-50">프로젝트 명 수정</Text>
                </Box>
                <Box display="flex" alignItems="center">
                    <Trash
                        width={14}
                        height={14}
                        fill={colors['neutral-50']}
                        style={{
                            marginRight: '4px',
                        }}
                    />
                    <Text color="neutral-50">프로젝트 삭제</Text>
                </Box>
            </Box>
        </Box>
    )
}
