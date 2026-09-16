'use client'

import { create } from 'zustand'
import type { Meeting, Participant, ChatMessage, MediaSettings } from '@/types'

interface MeetingState {
  // Room Info
  meeting: Meeting | null
  participants: Participant[]
  localParticipant: Participant | null

  // Media
  isMicMuted: boolean
  isCameraOff: boolean
  isSharingScreen: boolean
  isHandRaised: boolean
  mediaSettings: MediaSettings

  // UI State
  isChatOpen: boolean
  isParticipantsOpen: boolean
  activeView: 'gallery' | 'speaker' | 'spotlight'
  pinnedParticipantId: string | null

  // Chat
  messages: ChatMessage[]
  unreadCount: number

  // Recording
  isRecording: boolean
  isWaitingRoom: boolean

  // Actions
  setMeeting: (meeting: Meeting) => void
  setParticipants: (participants: Participant[]) => void
  addParticipant: (participant: Participant) => void
  removeParticipant: (participantId: string) => void
  updateParticipant: (participantId: string, updates: Partial<Participant>) => void
  setLocalParticipant: (participant: Participant) => void
  toggleMic: () => void
  toggleCamera: () => void
  toggleScreenShare: () => void
  toggleHandRaise: () => void
  toggleChat: () => void
  toggleParticipants: () => void
  setActiveView: (view: 'gallery' | 'speaker' | 'spotlight') => void
  pinParticipant: (participantId: string | null) => void
  addMessage: (message: ChatMessage) => void
  markMessagesRead: () => void
  setMediaSettings: (settings: Partial<MediaSettings>) => void
  setIsRecording: (val: boolean) => void
  resetMeeting: () => void
}

const defaultMediaSettings: MediaSettings = {
  selectedCamera: null,
  selectedMicrophone: null,
  selectedSpeaker: null,
  isNoiseSuppressionOn: true,
  isBackgroundBlurOn: false,
  videoQuality: '720p',
}

export const useMeetingStore = create<MeetingState>()(set => ({
  meeting: null,
  participants: [],
  localParticipant: null,
  isMicMuted: false,
  isCameraOff: false,
  isSharingScreen: false,
  isHandRaised: false,
  mediaSettings: defaultMediaSettings,
  isChatOpen: false,
  isParticipantsOpen: false,
  activeView: 'gallery',
  pinnedParticipantId: null,
  messages: [],
  unreadCount: 0,
  isRecording: false,
  isWaitingRoom: false,

  setMeeting: meeting => set({ meeting }),

  setParticipants: participants => set({ participants }),

  addParticipant: participant =>
    set(state => ({ participants: [...state.participants, participant] })),

  removeParticipant: participantId =>
    set(state => ({
      participants: state.participants.filter(p => p.id !== participantId),
    })),

  updateParticipant: (participantId, updates) =>
    set(state => ({
      participants: state.participants.map(p =>
        p.id === participantId ? { ...p, ...updates } : p
      ),
    })),

  setLocalParticipant: participant => set({ localParticipant: participant }),

  toggleMic: () =>
    set(state => {
      const isMicMuted = !state.isMicMuted
      if (state.localParticipant) {
        return {
          isMicMuted,
          localParticipant: { ...state.localParticipant, isAudioMuted: isMicMuted },
        }
      }
      return { isMicMuted }
    }),

  toggleCamera: () =>
    set(state => {
      const isCameraOff = !state.isCameraOff
      if (state.localParticipant) {
        return {
          isCameraOff,
          localParticipant: { ...state.localParticipant, isVideoMuted: isCameraOff },
        }
      }
      return { isCameraOff }
    }),

  toggleScreenShare: () => set(state => ({ isSharingScreen: !state.isSharingScreen })),

  toggleHandRaise: () =>
    set(state => {
      const isHandRaised = !state.isHandRaised
      if (state.localParticipant) {
        return {
          isHandRaised,
          localParticipant: { ...state.localParticipant, isHandRaised },
        }
      }
      return { isHandRaised }
    }),

  toggleChat: () =>
    set(state => ({
      isChatOpen: !state.isChatOpen,
      isParticipantsOpen: false,
      unreadCount: !state.isChatOpen ? 0 : state.unreadCount,
    })),

  toggleParticipants: () =>
    set(state => ({
      isParticipantsOpen: !state.isParticipantsOpen,
      isChatOpen: false,
    })),

  setActiveView: activeView => set({ activeView }),

  pinParticipant: pinnedParticipantId => set({ pinnedParticipantId }),

  addMessage: message =>
    set(state => ({
      messages: [...state.messages, message],
      unreadCount: state.isChatOpen ? 0 : state.unreadCount + 1,
    })),

  markMessagesRead: () => set({ unreadCount: 0 }),

  setMediaSettings: settings =>
    set(state => ({ mediaSettings: { ...state.mediaSettings, ...settings } })),

  setIsRecording: isRecording => set({ isRecording }),

  resetMeeting: () =>
    set({
      meeting: null,
      participants: [],
      localParticipant: null,
      isMicMuted: false,
      isCameraOff: false,
      isSharingScreen: false,
      isHandRaised: false,
      isChatOpen: false,
      isParticipantsOpen: false,
      activeView: 'gallery',
      pinnedParticipantId: null,
      messages: [],
      unreadCount: 0,
      isRecording: false,
      isWaitingRoom: false,
    }),
}))
