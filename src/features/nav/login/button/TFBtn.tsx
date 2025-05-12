// svg
import View from '@/shared/asset/icon/view-grid-add.svg?react'
// component
import { Box } from '@/shared/ui/Box'
// style
import { defaultBtn } from './btn.css'
import { usePopup } from '@/shared/lib/hooks/usePopup'
import { Popup } from '@/shared/ui/Popup'
import { TpePopup } from '@/features/alarm/TpePopup'
import { useRef, useState } from 'react'
import { useClickOutside } from '@/shared/lib/hooks/useOutsideClick'
import Modal from '@/shared/ui/Modal/Modal'
import { TeamModal } from '@/features/alarm/modal/TeamModal'
import { PersonaModal } from '@/features/alarm/modal/PersonarModal'
import { useModal } from '@/shared/lib/hooks/useModal'

/**
 * Team personar 컴포넌트
 * @returns {JsxElement}
 */
export const TPeBtn: React.FC = () => {
    const { config, togglePopup, hidePopup } = usePopup()
    const [activeModal, setActiveModal] = useState<'team' | 'persona' | null>(
        null
    )
    const { modalConfig, showModal } = useModal()

    const ref = useRef<HTMLDivElement>(null) // ref 설정
    useClickOutside(ref, hidePopup) // 팝업 외부 클릭시 팝업 닫기
    const handleOpenModal = (type: 'team' | 'persona') => {
        setActiveModal(type)
        showModal()
        togglePopup()
    }

    return (
        <Box>
            <Box
                as={'button'}
                className={defaultBtn}
                onClick={togglePopup}
                ref={ref}
            >
                <View width={20} height={20} />
                <Popup config={config}>
                    <TpePopup onOpenModal={handleOpenModal} />
                </Popup>
            </Box>
            {activeModal === 'team' && (
                <Modal modalConfig={modalConfig}>
                    <TeamModal />
                </Modal>
            )}
            {activeModal === 'persona' && (
                <Modal modalConfig={modalConfig}>
                    <PersonaModal />
                </Modal>
            )}
        </Box>
    )
}
