//component
import { Box } from '@/shared/ui/Box'
//icon
import Right from '@/shared/asset/icon/cheveron-right.svg?react'
//css
import * as style from './styles/title.css'
//interface
import { IProject } from '../types/project.type'
import { Text } from '@/shared/ui/Text'
import { colors } from '@/app/token'
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
                    <Text fontSize="title1" fontWeight="semibold">
                        {projectName}
                    </Text>
                </Box>
                <Box>
                    <Box
                        display="flex"
                        justifyContent="flex-start"
                        alignItems="center"
                        className={style.teamWrapper}
                    >
                        <Box
                            display="flex"
                            alignItems="center"
                            className={style.team}
                        >
                            <Right
                                width={17}
                                height={17}
                                fill={colors['neutral-60']}
                            />
                            <Text fontSize="body" color={'neutral-60'}>
                                00팀
                            </Text>
                        </Box>
                        <Box
                            display="flex"
                            alignItems="center"
                            className={style.team}
                        >
                            <Right
                                width={17}
                                height={17}
                                fill={colors['neutral-60']}
                            />
                            <Text fontSize="body" color={'neutral-60'}>
                                00프로젝트
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
