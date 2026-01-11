export default function Background({ children }) {
  return (
    <div className="relative overflow-hidden bg-[#0B1020]">
      
      {/* Main radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 20%, rgba(109,94,243,0.35), transparent 70%)",
        }}
      />

      {/* Secondary soft glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(40% 40% at 80% 10%, rgba(139,92,246,0.25), transparent 70%)",
        }}
      />

      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 80% at 50% 50%, transparent 60%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
