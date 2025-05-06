import { Box } from '@/shared/ui/Box'
import { Sidebar } from '@/widgets/Sidebar'
import * as S from './Management.css'
import { Header } from '@/widgets/management/ui/Header'
import Suggestions from '@/widgets/management/ui/Suggestions'
import FileList from '@/widgets/management/ui/FileList'
import ManagementSideBar from '@/widgets/management/ui/ManagementSideBar'
export const Management = () => {
    return (
        <Box display="flex" justifyContent="center">
            <Box className={S.layout}>
                <Sidebar headerText="관리">
                    <ManagementSideBar />
                </Sidebar>
                <Box className={S.main}>
                    <Header />
                    <Suggestions />
                    <FileList />
                </Box>
            </Box>
        </Box>
    )
}
