import { Widget } from '@/features/home/ui/widget/Widget'
import { Box } from '@/shared/ui/Box'

import News from '@/shared/asset/image/newspaper.png'
import Cloud from '@/shared/asset/image/cloud.png'
import Gpt from '@/shared/asset/image/gpt.png'
import Insight from '@/shared/asset/image/insight.png'

import * as S from './Widget.css'

export const HomeWidget = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            style={{ gap: '16px' }}
            className={S.homeWidget}
        >
            <Widget
                title="뉴스 스크래핑"
                description="뉴스(SNS)에서<br/> 다양한 유형의 정보를 스크래핑"
                img={News}
                alt="news-img"
            />
            <Widget
                title="지식베이스 구축"
                description="스크래핑한 데이터를 바탕으로<br/> 지식베이스를 구축하여 이를 통해<br/> 구축 베이스 기반 데이터 제공"
                img={Cloud}
                alt="cloud-img"
            />
            <Widget
                title="생성형 AI"
                description="GPT 활용을 통해 페르소나 기능과<br/> 데이터 기반 여부 맞춤형 기능을 통해 필터링"
                img={Gpt}
                alt="gpt-img"
            />
            <Widget
                title="데이터 제공"
                description="이 과정을 거쳐 원하는 데이터의<br/> 향후 트렌드 정보를 제공"
                img={Insight}
                alt="insight-img"
            />
        </Box>
    )
}
