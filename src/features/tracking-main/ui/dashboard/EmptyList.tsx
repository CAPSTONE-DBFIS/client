import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'
import Speak from '@/shared/asset/icon/speakerphone.svg?react'
import Search from '@/shared/asset/icon/search.svg?react'
import Data from '@/shared/asset/icon/trending-up.svg?react'
import Calendar from '@/shared/asset/icon/calendar.svg?react'
import * as style from './styles/emptyList.css'
import Modal from '@/shared/ui/Modal/Modal'
import { AddTask } from '../AddTask'
import { useModal } from '@/shared/lib/hooks/useModal'

export const EmptyList = () => {
    const { modalConfig, toggleModal } = useModal()

    return (
        <>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                className={style.container}
            >
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    className={style.iconContainer}
                >
                    <Speak width={52} height={52} />
                </Box>

                <Box style={{ marginBottom: '12px' }}>
                    <Text
                        fontSize="title1"
                        fontWeight="semibold"
                        color="neutral-900"
                    >
                        키워드 추적을 시작해보세요!
                    </Text>
                </Box>

                <Box style={{ marginBottom: '32px', width: '400px' }}>
                    <Text fontSize="title3" color="neutral-100">
                        첫 번째 키워드를 등록하고 데이터 기반의 인사이트를
                        받아보세요.
                    </Text>
                </Box>

                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    className={style.featureList}
                >
                    <Box
                        display="flex"
                        alignItems="center"
                        style={{ gap: '12px' }}
                    >
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            className={style.featureIcon}
                        >
                            <Search width={16} height={16} />
                        </Box>
                        <Text fontSize="body" color="neutral-100">
                            키워드 실시간 모니터링
                        </Text>
                    </Box>

                    <Box
                        display="flex"
                        alignItems="center"
                        style={{ gap: '12px' }}
                    >
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            className={style.featureIcon}
                        >
                            <Data width={16} height={16} />
                        </Box>
                        <Text fontSize="body" color="neutral-100">
                            데이터 기반 트렌드 분석
                        </Text>
                    </Box>

                    <Box
                        display="flex"
                        alignItems="center"
                        style={{ gap: '12px' }}
                    >
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            className={style.featureIcon}
                        >
                            <Calendar width={16} height={16} />
                        </Box>
                        <Text fontSize="body" color="neutral-100">
                            주기적 인사이트 리포트
                        </Text>
                    </Box>
                </Box>

                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    onClick={toggleModal}
                    className={style.button}
                >
                    <Text fontSize="body" color="white">
                        첫 키워드 추가하기
                    </Text>
                </Box>
            </Box>
            <Box style={{ zIndex: '10' }}>
                <Modal modalConfig={modalConfig}>
                    <AddTask onClose={toggleModal} />
                </Modal>
            </Box>
        </>
    )
}
