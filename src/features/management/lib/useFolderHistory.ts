import { useState } from 'react'

export function useFolderHistory(initialFolderId: number | null = null) {
    const [currentFolderId, setCurrentFolderId] = useState<number | null>(
        initialFolderId
    )
    const [history, setHistory] = useState<number[]>([])

    const goToFolder = (newFolderId: number) => {
        if (currentFolderId !== null) {
            setHistory((prev) => [...prev, currentFolderId])
        }
        setCurrentFolderId(newFolderId)
    }
    const goBack = () => {
        if (history.length > 0) {
            const prev = history[history.length - 1]
            setHistory((prev) => prev.slice(0, prev.length - 1))
            setCurrentFolderId(prev)
        } else {
            setCurrentFolderId(0)
            setHistory([])
        }
    }

    const reset = () => {
        setHistory([])
        setCurrentFolderId(null)
    }

    return {
        currentFolderId,
        goToFolder,
        goBack,
        reset,
    }
}
