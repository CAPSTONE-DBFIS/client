import { Category, CategoryList } from '@/entities/news/type/tab.type'
import * as S from './CategoryTabs.css'
import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'
import { motion } from 'framer-motion'

export default function CategoryTabs({
    categories,
    selectedCategory,
    onSelectCategory,
}: {
    categories: CategoryList[]
    selectedCategory: Category | null
    onSelectCategory: (category: Category | null) => void
}) {
    return (
        <Box className={S.container}>
            {categories.map((category) => (
                <motion.button
                    key={category.name}
                    onClick={() =>
                        onSelectCategory(
                            selectedCategory === category.name
                                ? null
                                : category.name
                        )
                    }
                    style={{
                        backgroundColor:
                            selectedCategory === category.name
                                ? '#006374'
                                : '#ffffff',
                    }}
                    className={S.button}
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.03 }}
                    transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 20,
                    }}
                >
                    <Text
                        color={
                            selectedCategory === category.name
                                ? 'white'
                                : 'neutral-500'
                        }
                    >
                        {category.name + ' (' + category.count + ')'}
                    </Text>
                </motion.button>
            ))}
        </Box>
    )
}
