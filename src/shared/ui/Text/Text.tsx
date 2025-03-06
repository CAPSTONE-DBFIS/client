import { colors, fontSizes, fontWeights } from '@/app/token'
import { Box } from '../Box'

type ValidElements = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface TextProps {
    as?: ValidElements
    children?: React.ReactNode
    fontSize?: keyof typeof fontSizes
    fontWeight?: keyof typeof fontWeights
    color?: keyof typeof colors
    className?: string
    style?: unknown
}

export const Text = ({
    as = 'span',
    children,
    fontSize = 'body',
    fontWeight = 'regular',
    color = 'neutral-900',
    className,
    style,
}: TextProps) => {
    return (
        <Box
            as={as}
            fontSize={fontSize}
            fontWeight={fontWeight}
            color={color}
            className={`${className} ${style}`}
        >
            {children}
        </Box>
    )
}
