export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0F13] text-white p-4">
      <header className="flex items-center justify-between border-b border-[#1A1A22] pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#FF3366]" />
          <div>
            <h1 className="font-bold">Companion</h1>
            <span className="text-xs text-[#A0A0B0]">Online</span>
          </div>
        </div>
      </header>
      <div className="mt-8 space-y-4">
        <div className="p-4 rounded-xl bg-[#1A1A22] max-w-[80%]">
          <p>Hallo! Wie kann ich dir heute helfen?</p>
        </div>
      </div>
    </main>
  );
}