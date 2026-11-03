export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0F13] text-white p-4">
      <header className="flex items-center justify-between pb-4 border-b border-[#1A1A22]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#1A1A22] border border-[#FF3366]" />
          <div>
            <h1 className="font-bold">MyBabes AI</h1>
            <span className="text-xs text-[#A0A0B0]">Online</span>
          </div>
        </div>
      </header>
      <section className="mt-6">
        <p className="text-[#A0A0B0]">Willkommen bei deinem KI-Companion.</p>
      </section>
    </main>
  );
}