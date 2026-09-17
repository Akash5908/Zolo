// ─── User ───────────────────────────────────────────────────────────────────

export interface User {
  id: string
  email: string
  displayName: string
  avatarUrl?: string
  plan: 'free' | 'pro' | 'business' | 'enterprise'
  createdAt: string
}

// ─── Meeting ─────────────────────────────────────────────────────────────────

export interface Meeting {
  id: string
  meetingId: string // 9-digit code
  topic: string
  hostId: string
  hostName: string
  scheduledAt?: string
  startedAt?: string
  endedAt?: string
  durationSeconds?: number
  maxParticipants: number
  isPasswordProtected: boolean
  isWaitingRoomEnabled: boolean
  recordingUrl?: string
  status: 'scheduled' | 'active' | 'ended'
}

export interface Participant {
  id: string
  userId?: string
  displayName: string
  avatarUrl?: string
  role: 'host' | 'co-host' | 'participant' | 'guest'
  isAudioMuted: boolean
  isVideoMuted: boolean
  isSharingScreen: boolean
  isHandRaised: boolean
  networkQuality: 'excellent' | 'good' | 'poor' | 'unknown'
  joinedAt: string
}

// ─── Chat ────────────────────────────────────────────────────────────────────

export interface ChatMessage {
  id: string
  senderId: string
  senderName: string
  content: string
  type: 'text' | 'file' | 'image'
  timestamp: string
  reactions?: Record<string, string[]> // emoji → userIds
}

// ─── Media ───────────────────────────────────────────────────────────────────

export interface MediaDevice {
  deviceId: string
  label: string
  kind: 'audioinput' | 'audiooutput' | 'videoinput'
}

export interface MediaSettings {
  selectedCamera: string | null
  selectedMicrophone: string | null
  selectedSpeaker: string | null
  isNoiseSuppressionOn: boolean
  isBackgroundBlurOn: boolean
  videoQuality: '360p' | '720p' | '1080p'
}

// ─── API ─────────────────────────────────────────────────────────────────────

export interface ApiResponse<T> {
  data: T
  message?: string
  success: boolean
}

export interface ApiError {
  message: string
  code: string
  statusCode: number
}

// ─── Auth ─────────────────────────────────────────────────────────────────────

export interface AuthTokens {
  accessToken: string
  refreshToken: string
  expiresAt: number
}

export interface LoginCredentials {
  email: string
  password: string
  rememberMe?: boolean
}

export interface SignupCredentials {
  displayName: string
  email: string
  password: string
}
