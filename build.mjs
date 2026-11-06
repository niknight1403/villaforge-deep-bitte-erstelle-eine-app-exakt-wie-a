import fs from 'fs';
import path from 'path';

// Simple build script to simulate static generation
const distDir = path.join(process.cwd(), 'dist');
if (!fs.existsSync(distDir)) fs.mkdirSync(distDir);

const htmlContent = `<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MyBabes Clone</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-[#0F0F13] text-white font-sans">
    <div id="app" class="max-w-md mx-auto h-screen flex flex-col">
        <header class="p-4 border-b border-[#1A1A22] flex items-center justify-between">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-[#FF3366]"></div>
                <span class="font-bold">Companion</span>
            </div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
        </header>
        <main class="flex-1 p-4 overflow-y-auto">
            <div class="bg-[#1A1A22] p-3 rounded-lg max-w-[80%]">Hallo! Wie geht es dir heute?</div>
        </main>
        <footer class="p-4 border-t border-[#1A1A22]">
            <input type="text" placeholder="Nachricht schreiben..." class="w-full bg-[#1A1A22] p-3 rounded-full outline-none">
        </footer>
    </div>
</body>
</html>`;

fs.writeFileSync(path.join(distDir, 'index.html'), htmlContent);
console.log('Build erfolgreich: dist/index.html erstellt.');