import { create } from 'zustand'
import {
    ITrackingList,
    ITrackingProject,
    ITrackingTeam,
} from '../type/tracking.type'

interface TrackingState {
    selectedProject: ITrackingProject | null
    setSelectedProject: (project: ITrackingProject | null) => void

    selectedTeam: ITrackingTeam | null
    setSelectedTeam: (team: ITrackingTeam | null) => void

    selectedTask: ITrackingList | null
    setSelectedTask: (task: ITrackingList | null) => void
}

export const useTrackingState = create<TrackingState>((set) => ({
    selectedProject: null,
    setSelectedProject: (project) => set({ selectedProject: project }),

    selectedTeam: null,
    setSelectedTeam: (team) => set({ selectedTeam: team }),

    selectedTask: null,
    setSelectedTask: (task) => set({ selectedTask: task }),
}))

interface UploadListState {
    uploadList: number
    increaseUploadList: () => void
    resetUploadList: () => void
}

export const useUploadListStore = create<UploadListState>((set) => ({
    uploadList: 0,
    increaseUploadList: () =>
        set((state) => ({ uploadList: state.uploadList + 1 })),
    resetUploadList: () => set({ uploadList: 0 }),
}))
