import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'

import * as S from './Article.css'
import { ArticleSlider } from '@/features/home/ui/article/ArticleSlider'

import news1 from '@/shared/asset/image/news/news1.png'
import news2 from '@/shared/asset/image/news/news2.png'
import news3 from '@/shared/asset/image/news/news3.png'
import news4 from '@/shared/asset/image/news/news4.png'
import news5 from '@/shared/asset/image/news/news5.png'
import news6 from '@/shared/asset/image/news/news6.png'
import news7 from '@/shared/asset/image/news/news7.png'
import news8 from '@/shared/asset/image/news/news8.png'
import news9 from '@/shared/asset/image/news/news9.png'
import news10 from '@/shared/asset/image/news/news10.png'
import news11 from '@/shared/asset/image/news/news11.png'
import news12 from '@/shared/asset/image/news/news12.png'

export const Article = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            style={{ width: '100%' }}
        >
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                className={S.header}
            >
                <Text fontSize="title1" fontWeight="medium">
                    TREND BASE
                </Text>
                <Text color="neutral-80" fontWeight="medium">
                    국내, 해외 등 다양한 뉴스 기사를 바탕으로 우리만의
                    데이터베이스를 구축해요
                </Text>
            </Box>
            <ArticleSlider
                type="left"
                imgs={[news1, news2, news3, news4, news5, news6]}
            />
            <ArticleSlider
                type="right"
                imgs={[news7, news8, news9, news10, news11, news12]}
            />
        </Box>
    )
}
