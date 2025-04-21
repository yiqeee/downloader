document.addEventListener('DOMContentLoaded', () => {
    const urlInput = document.getElementById('url-input');
    const platformSelect = document.getElementById('platform-select');
    const downloadBtn = document.getElementById('download-btn');
    const resultContainer = document.getElementById('result-container');
    const contentInfo = document.getElementById('content-info');
    const downloadOptions = document.getElementById('download-options');
    
    downloadBtn.addEventListener('click', () => {
        const url = urlInput.value.trim();
        const platform = platformSelect.value;
        
        if (!url) {
            alert('Bitte geben Sie eine URL ein');
            return;
        }
        
        // Dienste für verschiedene Plattformen
        const services = {
            youtube: {
                name: 'YouTube',
                service: 'https://yt1s.com/de/youtube-to-mp3',
                altService: 'https://9convert.com/de',
                videoExample: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                icon: 'https://www.youtube.com/favicon.ico'
            },
            spotify: {
                name: 'Spotify',
                service: 'https://spotifydown.com/',
                altService: 'https://spotifymate.com/',
                videoExample: 'https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT',
                icon: 'https://open.spotify.com/favicon.ico'
            },
            soundcloud: {
                name: 'SoundCloud',
                service: 'https://sclouddownloader.net/',
                altService: 'https://soundcloudmp3.org/',
                videoExample: 'https://soundcloud.com/user-648099534/example',
                icon: 'https://soundcloud.com/favicon.ico'
            },
            tiktok: {
                name: 'TikTok',
                service: 'https://snaptik.app/de',
                altService: 'https://tikmate.app/',
                videoExample: 'https://www.tiktok.com/@username/video/1234567890123456789',
                icon: 'https://www.tiktok.com/favicon.ico'
            }
        };
        
        // Anzeigen der Informationen
        const service = services[platform];
        
        contentInfo.innerHTML = `
            <div class="info-text">
                <h2>${service.name}-Download</h2>
                <p>Sie möchten Inhalte von ${service.name} mit der URL:</p>
                <p><code>${url}</code></p>
                <p>herunterladen.</p>
                <p>Da direkte Downloads aus rechtlichen Gründen nicht möglich sind, leiten wir Sie zu einem sicheren Service weiter.</p>
            </div>
            <img class="thumbnail" src="${service.icon}" alt="${service.name} Icon">
        `;
        
        downloadOptions.innerHTML = `
            <p>Klicken Sie auf eine der folgenden Optionen:</p>
            <a href="${service.service}" target="_blank" class="download-option">Option 1: ${service.service.split('//')[1].split('/')[0]}</a>
            <a href="${service.altService}" target="_blank" class="download-option">Option 2: ${service.altService.split('//')[1].split('/')[0]}</a>
            <p>Fügen Sie dann Ihre URL auf der Website ein und folgen Sie den Anweisungen.</p>
        `;
        
        resultContainer.classList.remove('hidden');
    });
});