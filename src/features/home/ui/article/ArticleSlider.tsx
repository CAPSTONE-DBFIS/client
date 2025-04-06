import { Box } from '@/shared/ui/Box'
import * as S from './Article.css'
import { FC } from 'react'

interface IArticleSlider {
    type: 'left' | 'right'
    imgs: string[]
}

export const ArticleSlider: FC<IArticleSlider> = ({ imgs, type }) => {
    const duplicateImg = [...imgs, ...imgs]
    return (
        <Box className={S.sliderWrapper}>
            <Box className={S.slideTrackType[type]}>
                {duplicateImg.map((src, index) => {
                    return (
                        <Box className={S.slideItem}>
                            <Box
                                as={'img'}
                                src={src}
                                alt={`article-slide-${index}`}
                                className={S.slideItemImg}
                            />
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}
