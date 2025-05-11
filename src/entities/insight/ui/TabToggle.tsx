import { TabContentProps } from '@/pages'
import { useEffect } from 'react'
import { MotionDiv } from '@/shared/ui/MotionDiv/MotionDiv'
import cn from 'classnames'
import * as S from './TabToggle.css'
import { Text } from '@/shared/ui/Text'

const tabVariant = {
    active: {
        width: '35%',
        transition: {
            type: 'tween',
            duration: 0.8,
        },
    },
    inactive: {
        width: '30%',
        transition: {
            type: 'tween',
            duration: 0.8,
        },
    },
}

const tabTextVariant = {
    active: {
        opacity: 1,
        x: 0,
        display: 'block',
        transition: {
            type: 'tween',
            duration: 0.3,
            delay: 0.3,
        },
    },
    inactive: {
        opacity: 0,
        x: -30,
        transition: {
            type: 'tween',
            duration: 0.3,
            delay: 0,
        },
        transitionEnd: { display: 'none' },
    },
}

export default function TabToggle({
    tabs,
    tabIndex = 0,
    setTabIndex,
}: {
    tabs: TabContentProps[]
    tabIndex: number
    setTabIndex: (index: number) => void
}) {
    useEffect(() => {
        document.documentElement.style.setProperty(
            '--active-color',
            tabs[tabIndex].color
        )
    }, [tabIndex, tabs])

    useEffect(() => {
        const tabFromHash = tabs.findIndex(
            (tab) => `#${tab.id}` === window.location.hash
        )

        setTabIndex(tabFromHash !== -1 ? tabFromHash : tabIndex)
    }, [tabs, tabIndex, setTabIndex])

    const onTabClick = (index: number) => {
        setTabIndex(index)
    }

    return (
        <div className={S.tabComponent}>
            <ul className={S.tabLink} role="tablist">
                {tabs.map((tab, index) => (
                    <MotionDiv
                        key={tab.id}
                        className={cn(S.tab, {
                            active: tabIndex === index,
                        })}
                        style={
                            tabIndex === index
                                ? { background: tab.bgColor }
                                : {}
                        }
                        role="presentation"
                        variants={tabVariant}
                        animate={tabIndex === index ? 'active' : 'inactive'}
                    >
                        <a
                            href={`#${tab.id}`}
                            className={S.anchor({ active: tabIndex === index })}
                            onClick={() => onTabClick(index)}
                        >
                            {tab.icon}
                            <MotionDiv variants={tabTextVariant}>
                                <Text
                                    fontSize="title2"
                                    color={
                                        tabIndex === index
                                            ? tab.colorName
                                            : 'neutral-100'
                                    }
                                >
                                    {tab.title}
                                </Text>
                            </MotionDiv>
                        </a>
                    </MotionDiv>
                ))}
            </ul>
        </div>
    )
}
