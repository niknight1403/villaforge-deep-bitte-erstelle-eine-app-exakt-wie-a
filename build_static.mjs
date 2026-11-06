import fs from 'fs';
import path from 'path';

// Simple build script to generate a static index.html for the prototype
const htmlContent = `<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MyBabes AI Prototype</title>
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
                <div>
                    <h1 class="font-bold">AI Companion</h1>
                    <span class="text-xs text-green-500">● Online</span>
                </div>
            </div>
        </header>
        <main class="flex-1 p-4 overflow-y-auto">
            <div class="chat-card p-3 rounded-lg max-w-[80%]">Hallo! Wie geht es dir heute?</div>
        </main>
        <footer class="p-4 border-t border-gray-800">
            <input type="text" placeholder="Nachricht schreiben..." class="w-full bg-[#1A1A22] p-3 rounded-full outline-none border border-gray-700">
        </footer>
    </div>
</body>
</html>`;

if (!fs.existsSync('dist')) fs.mkdirSync('dist');
fs.writeFileSync('dist/index.html', htmlContent);
console.log('Build successful: dist/index.html created.');