export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
        background: 'var(--color-bg)',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h1 className="gradient-text" style={{ fontSize: 'var(--text-4xl)', marginBottom: '12px' }}>
          🎥 ZoomClone
        </h1>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-lg)' }}>
          Project scaffold complete. Phase 1 in progress.
        </p>
        <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)', marginTop: '8px' }}>
          ✅ Next.js 16 · TypeScript · Zustand · React Query · Socket.io · Framer Motion
        </p>
      </div>
    </main>
  )
}
