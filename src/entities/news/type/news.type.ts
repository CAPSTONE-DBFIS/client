export type CardNewsProps = {
    date?: string
    sentiment: 'positive' | 'negative' | 'neutral'
    sentiment_confidence: number
    highlight?: string[]
    image_url?: string
    media_company?: string
    category?: string
    title?: string
    content?: string
    url?: string
}

export interface CardNewsPropsWithColor extends CardNewsProps {
    colorIndex: number
}
