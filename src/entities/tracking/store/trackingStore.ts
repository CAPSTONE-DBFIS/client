import { create } from 'zustand'
import { ITrackingProject, ITrackingTeam } from '../type/tracking.type'

interface TrackingState {
    selectedProject: ITrackingProject | null
    setSelectedProject: (project: ITrackingProject | null) => void

    selectedTeam: ITrackingTeam | null
    setSelectedTeam: (team: ITrackingTeam | null) => void
}

export const useTrackingState = create<TrackingState>((set) => ({
    selectedProject: null,
    setSelectedProject: (project) => set({ selectedProject: project }),

    selectedTeam: null,
    setSelectedTeam: (team) => set({ selectedTeam: team }),
}))
