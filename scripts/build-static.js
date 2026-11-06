const fs = require('fs');
const path = require('path');

// Simple build script to simulate static generation for the PWA prototype
const distDir = path.join(__dirname, '../dist');
if (!fs.existsSync(distDir)) fs.mkdirSync(distDir);

const htmlContent = `<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MyBabes AI - Companion</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body { background-color: #0F0F13; color: #FFFFFF; font-family: 'Inter', sans-serif; }
        .chat-card { background-color: #1A1A22; }
        .accent { color: #FF3366; }
    </style>
</head>
<body class="h-screen flex flex-col">
    <header class="p-4 border-b border-gray-800 flex items-center justify-between">
        <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gray-700"></div>
            <div>
                <h1 class="font-bold">AI Companion</h1>
                <span class="text-xs text-green-500">● Online</span>
            </div>
        </div>
    </header>
    <main class="flex-1 p-4 overflow-y-auto">
        <div class="chat-card p-4 rounded-xl mb-4">Hallo! Wie kann ich dir heute helfen?</div>
    </main>
    <footer class="p-4 border-t border-gray-800">
        <input type="text" placeholder="Nachricht schreiben..." class="w-full p-3 rounded-lg bg-gray-800 text-white">
    </footer>
</body>
</html>`;

fs.writeFileSync(path.join(distDir, 'index.html'), htmlContent);
console.log('Static build created at dist/index.html');