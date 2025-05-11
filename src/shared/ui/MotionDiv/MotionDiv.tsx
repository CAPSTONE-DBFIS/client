import { motion, MotionProps } from 'framer-motion'

type MotionDivProps = {
    children?: React.ReactNode
} & React.ComponentPropsWithoutRef<'div'> &
    MotionProps

export function MotionDiv({ children, ...props }: MotionDivProps) {
    return <motion.div {...props}>{children}</motion.div>
}
