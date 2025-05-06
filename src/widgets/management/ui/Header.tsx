import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'
import StorageIcon from '@/shared/asset/icon/archive.svg?react'
import GroupIcon from '@/shared/asset/icon/user-group.svg?react'
import SearchIcon from '@/shared/asset/icon/search.svg?react'
import DownloadIcon from '@/shared/asset/icon/cloud-download.svg?react'
import UploadIcon from '@/shared/asset/icon/cloud-upload.svg?react'
import FolderIcon from '@/shared/asset/icon/folder-add.svg?react'
import TrashIcon from '@/shared/asset/icon/folder-remove.svg?react'

import { TextInput } from '@/shared/ui/Input/TextInput'
import { Button } from '@/shared/ui/Button'

export const Header = () => {
    return (
        <Box display="flex" flexDirection="column" style={{ gap: '20px' }}>
            <Box display="flex" alignItems="center" style={{ gap: '20px' }}>
                <Text color="neutral-900" fontSize="title2" fontWeight="medium">
                    A팀
                </Text>
                <Box display="flex" alignItems="center" style={{ gap: '4px' }}>
                    <StorageIcon width={16} height={16} fill="#7A8699" />
                    <Text fontSize="headline" color="neutral-100">
                        팀 스토리지
                    </Text>
                </Box>
            </Box>
            <Box display="flex" alignItems="flex-end" style={{ gap: '4px' }}>
                <GroupIcon width={16} height={16} fill="#5D6B82" />
                <Text
                    fontSize="headline"
                    color="neutral-300"
                    fontWeight="semibold"
                >
                    김세현
                </Text>
                <Text
                    fontSize="headline"
                    color="neutral-300"
                    fontWeight="semibold"
                >
                    김세현
                </Text>
                <Text
                    fontSize="headline"
                    color="neutral-300"
                    fontWeight="semibold"
                >
                    김세현
                </Text>
                <Text
                    fontSize="headline"
                    color="neutral-300"
                    fontWeight="semibold"
                >
                    김세현
                </Text>
                <Text
                    fontSize="headline"
                    color="neutral-300"
                    fontWeight="semibold"
                >
                    김세현
                </Text>
            </Box>
            <Box>
                <TextInput
                    placeholder="검색"
                    leftIcon={<SearchIcon />}
                    width="240px"
                />
            </Box>
            <Box>
                <Box display="flex" style={{ gap: '4px' }}>
                    <Button size="medium" type="primary" width="140px">
                        <DownloadIcon fill="#fff" />
                        다운로드
                    </Button>
                    <Button size="medium" type="tertiary" width="140px">
                        <UploadIcon fill="#005665" />
                        업로드
                    </Button>
                    <Button size="medium" type="tertiary" width="140px">
                        <FolderIcon fill="#005665" />
                        폴더 생성
                    </Button>
                    <Button size="medium" type="tertiary" width="140px">
                        <TrashIcon fill="#005665" />
                        삭제
                    </Button>
                </Box>
                <Text fontSize="subHeadline" color="neutral-50">
                    *특정 파일(pdf, word, hwp, excel)만 수집가능해요!
                </Text>
            </Box>
        </Box>
    )
}
