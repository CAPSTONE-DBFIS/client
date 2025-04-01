// shared component
import { Box } from '@/shared/ui/Box'
import { Button } from '@/shared/ui/Button'
import { TextInput } from '@/shared/ui/Input/TextInput'
import { Text } from '@/shared/ui/Text'
// svg
import Pos from '@/shared/asset/icon/briefcase.svg?react'
// const
import { positions } from '@/features/signup/const/position'
import { colors } from '@/app/token'
import { IStepComponent } from '@/features/signup/type/funnel.type'

/**
 * 직무 설정 폼
 * @returns {jsxElement}
 */
export const PositionForm = ({ onNext, onBack }: IStepComponent) => {
    return (
        <Box
            as={'form'}
            display="flex"
            flexDirection="column"
            style={{ gap: '32px' }}
        >
            <Box display="flex" flexDirection="column" style={{ gap: '16px' }}>
                <Box display="flex" flexDirection="column">
                    <Text fontSize="title3">직무 설정(선택)</Text>
                    <Text fontSize="caption" color="neutral-90">
                        맞춤형 트렌드 설계 및 데이터 분석을 위한 직무를
                        입력해주세요.
                    </Text>
                </Box>
                <TextInput
                    placeholder="직무"
                    readonly={true}
                    leftIcon={
                        <Pos width={20} height={20} fill={colors['teal-500']} />
                    }
                    width="200px"
                />
            </Box>
            <Box display="flex" flexDirection="column" style={{ gap: '6px' }}>
                {positions.map((pos) => {
                    return (
                        <Box display="flex" style={{ gap: '8px' }}>
                            <Text fontSize="title3" color="green-100">
                                {pos.type}
                            </Text>
                            <Box display="flex" style={{ gap: '12px' }}>
                                {pos.children.map((item) => {
                                    return (
                                        <Text color="neutral-90">{item}</Text>
                                    )
                                })}
                            </Box>
                        </Box>
                    )
                })}
            </Box>
            <Box display="flex" style={{ gap: '24px' }}>
                <Button
                    size="medium"
                    type="tertiary"
                    width="140px"
                    onClickFunc={onBack}
                >
                    이전으로
                </Button>
                <Button
                    size="medium"
                    type="primary"
                    width="140px"
                    onClickFunc={onNext}
                >
                    가입완료
                </Button>
            </Box>
        </Box>
    )
}
