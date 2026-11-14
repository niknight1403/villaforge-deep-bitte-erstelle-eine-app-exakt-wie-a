export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0F13] text-white p-6">
      <header className="flex justify-between items-center border-b border-[#1A1A22] pb-4">
        <h1 className="text-2xl font-bold text-[#FF3366]">Aurora Companion</h1>
        <div className="w-10 h-10 rounded-full bg-[#1A1A22] border border-[#FF3366]" />
      </header>
      <section className="mt-8">
        <p>Willkommen im Aurora Companion Studio. Dein Interface für virtuelle Begegnungen.</p>
      </section>
    </main>
  );
}