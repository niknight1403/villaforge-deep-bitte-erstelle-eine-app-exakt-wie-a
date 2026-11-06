const fs = require('fs');
const path = require('path');

// Simple build script to generate a static index.html for the PWA prototype
const htmlContent = `<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MyBabes Clone</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body { background-color: #0F0F13; color: #FFFFFF; font-family: 'Inter', sans-serif; }
        .chat-card { background-color: #1A1A22; }
        .accent { color: #FF3366; }
    </style>
</head>
<body>
    <div id="app" class="max-w-md mx-auto h-screen flex flex-col">
        <header class="p-4 border-b border-gray-800 flex items-center justify-between">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-gray-700"></div>
                <span class="font-bold">Companion</span>
                <span class="w-2 h-2 rounded-full bg-green-500"></span>
            </div>
        </header>
        <main class="flex-1 p-4 overflow-y-auto">
            <div class="chat-card p-3 rounded-lg mb-4">Hallo! Wie kann ich dir heute helfen?</div>
        </main>
        <footer class="p-4 border-t border-gray-800">
            <input type="text" placeholder="Nachricht schreiben..." class="w-full p-3 rounded-full bg-gray-800 text-white outline-none">
        </footer>
    </div>
</body>
</html>`;

if (!fs.existsSync('dist')) fs.mkdirSync('dist');
fs.writeFileSync('dist/index.html', htmlContent);
console.log('Build erfolgreich: dist/index.html erstellt.');