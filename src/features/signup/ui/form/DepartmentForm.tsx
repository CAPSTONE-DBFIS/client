// components
import { Box } from '@/shared/ui/Box'
import { TextInput } from '@/shared/ui/Input/TextInput'
import { Button } from '@/shared/ui/Button'
import { Text } from '@/shared/ui/Text'
//svg
import Department from '@/shared/asset/icon/office-building.svg?react'
// const
import { DEPARTMENT_LIST } from '@/features/signup/const/department'
import { colors } from '@/app/token'
import { IStepComponent } from '@/features/signup/type/funnel.type'

/**
 * 부서 설정 컴포넌트
 * @returns {jsxElement}
 */
export const DepartmentForm = ({ onNext, onBack }: IStepComponent) => {
    return (
        <Box
            as={'form'}
            display="flex"
            flexDirection="column"
            style={{ gap: '32px' }}
        >
            <Box display="flex" flexDirection="column" style={{ gap: '16px' }}>
                <Box display="flex" flexDirection="column">
                    <Text fontSize="title3">부서 설정</Text>
                    <Text fontSize="caption" color="neutral-90">
                        맞춤형 트렌드 설계 및 데이터 분석을 위한 부서를
                        입력해주세요.{' '}
                    </Text>
                </Box>
                <TextInput
                    placeholder="부서명"
                    readonly={true}
                    leftIcon={
                        <Department
                            width={20}
                            height={20}
                            fill={colors['teal-500']}
                        />
                    }
                    width="200px"
                />
            </Box>

            <Box display="flex" flexDirection="column" style={{ gap: '16px' }}>
                {DEPARTMENT_LIST.map((item) => {
                    return (
                        <Box
                            display="flex"
                            flexDirection="column"
                            style={{ gap: '8px' }}
                            key={item.id}
                        >
                            <Text
                                fontSize="title2"
                                fontWeight="medium"
                                color="green-500"
                            >
                                {item.companyName}
                            </Text>
                            <Box>
                                {item.departments.map((department) => {
                                    return (
                                        <Box
                                            display="flex"
                                            style={{ gap: '8px' }}
                                            alignItems="center"
                                            key={
                                                item.id +
                                                ':' +
                                                department.department
                                            }
                                        >
                                            <Text
                                                fontSize="title3"
                                                color="green-100"
                                            >
                                                {department.department}
                                            </Text>
                                            <Box
                                                display="flex"
                                                style={{ gap: '12px' }}
                                            >
                                                {department.children.map(
                                                    (child) => {
                                                        return (
                                                            <Text
                                                                color="neutral-90"
                                                                key={
                                                                    item.id +
                                                                    ':' +
                                                                    department.department +
                                                                    ':' +
                                                                    child.department
                                                                }
                                                            >
                                                                {
                                                                    child.department
                                                                }
                                                            </Text>
                                                        )
                                                    }
                                                )}
                                            </Box>
                                        </Box>
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
                    계속하기
                </Button>
            </Box>
        </Box>
    )
}
