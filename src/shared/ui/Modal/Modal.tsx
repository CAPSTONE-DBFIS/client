import { IExtendedModalConfig } from '@/shared/types/modal.types'
import { Box } from '../Box'
import { modalBackdrop, modalContent } from './modal.css'

/**
 *  공용 모달 컴포넌트
 * @param {ReactNode} children 모달 내부에 들어갈 컨텐츠 (optional)
 * @parms modalConfig 모달 설정 - useModal에서 반환된 modalConfig
 * @returns {JsxElement}닫기 버튼이 존재하지 않는 모달
 * @example
 * const { modalConfig, toggleModal } = useModal({ open: true });
 * <Modal modalConfig={modalConfig}>
 *    <p>example</p>
 *    <button onClick={toggleModal}>toggle</button>
 * </Modal>
 */

export default function Modal({
    children,
    modalConfig,
}: Readonly<{
    children?: React.ReactNode
    modalConfig: IExtendedModalConfig
}>) {
    if (modalConfig.open === false) return null
    return (
        <Box
            as={'div'}
            onClick={() =>
                modalConfig.outerTouchClose && modalConfig.handleClose()
            }
            role="presentation"
            className={modalBackdrop}
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Box
                as={'dialog'}
                onClick={(e) => e.stopPropagation()}
                className={modalContent}
                display="flex"
                flexDirection="column"
            >
                {children}
            </Box>
        </Box>
    )
}
