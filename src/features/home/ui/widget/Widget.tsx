import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'
import { FC } from 'react'
import * as S from './Widget.css'

interface IHomeWidget {
    title: string
    description: string
    img: string
    alt: string
}

export const Widget: FC<IHomeWidget> = ({ title, description, img, alt }) => {
    return (
        <Box
            className={S.container}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
        >
            <Box display="flex" flexDirection="column" style={{ gap: '12px' }}>
                <Text fontSize="title2" fontWeight="medium">
                    {title}
                </Text>
                <Box
                    as={'span'}
                    fontSize="subHeadline"
                    color="neutral-300"
                    dangerouslySetInnerHTML={{ __html: description }}
                ></Box>
            </Box>

            <Box display="flex" justifyContent="flex-end">
                <Box as="img" src={img} alt={alt} className={S.img} />
            </Box>
        </Box>
    )
}
