const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  console.log('🦠 GreenHorse received request');
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>GreenHorse Educational - Black Christmas</title>
        <style>
            body { 
                background: #0a0a0a; 
                color: #00ff00; 
                font-family: Arial; 
                margin: 0; 
                padding: 40px;
                text-align: center;
            }
            .container { 
                max-width: 800px; 
                margin: 0 auto; 
                background: #001a00;
                padding: 40px;
                border-radius: 15px;
                border: 3px solid #008800;
            }
            .product {
                background: #002200;
                margin: 20px;
                padding: 25px;
                border-radius: 10px;
                border: 1px solid #00ff00;
            }
            .btn {
                background: #008800;
                color: white;
                padding: 15px 30px;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                margin: 10px;
                font-size: 1.1em;
            }
            .blink {
                animation: blink 2s infinite;
            }
            @keyframes blink {
                0%, 50% { opacity: 1; }
                51%, 100% { opacity: 0.5; }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>🦠 GreenHorse Educational</h1>
            <h2 class="blink">🎄 BLACK CHRISTMAS EVENT</h2>
            
            <div style="margin: 30px 0;">
                <a href="?lang=en"><button class="btn">English</button></a>
                <a href="?lang=pt"><button class="btn">Português</button></a>
                <a href="?lang=es"><button class="btn">Español</button></a>
            </div>

            <h3>🎁 EXCLUSIVE CHRISTMAS PACKS</h3>
            
            <div class="product">
                <h4>📺 8K Quantum TV Edition</h4>
                <p>Limited Black Christmas - With Educational Certificate</p>
                <p style="color: #ffff00; font-size: 1.4em;">€2,499.00</p>
                <button class="btn">BUY NOW + EXPERIENCE</button>
            </div>

            <div class="product">
                <h4>🛹 Diamond Electric Skateboard</h4>
                <p>Collector Edition + Virus Educational Workshop</p>
                <p style="color: #ffff00; font-size: 1.4em;">€899.00</p>
                <button class="btn">BUY NOW + EXPERIENCE</button>
            </div>

            <div style="margin-top: 40px; padding: 25px; background: #004400; border-radius: 10px;">
                <h3>🔐 ADMIN PORTAL - CSO ACCESS</h3>
                <p>Chief Scientist Officer • Port 452 • Quantum Security</p>
                <a href="/admin"><button class="btn" style="background: #ff6600;">ACCESS PORTAL</button></a>
            </div>

            <div style="margin-top: 20px; color: #888;">
                <p>🔒 Secure Transactions | 🎄 Delivery: Christmas Day | 🤖 AI Cluster Active</p>
                <p>🦠 GreenHorse Educational - Making Learning Viral</p>
            </div>
        </div>
    </body>
    </html>
  `);
});

app.get('/admin', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Admin - GreenHorse</title>
        <style>
            body { background: #1a1a1a; color: #ff6600; font-family: monospace; margin: 40px; }
            .login { background: #331100; padding: 40px; border-radius: 15px; max-width: 500px; margin: 50px auto; border: 3px solid #ff6600; }
            input { width: 100%; padding: 15px; margin: 15px 0; background: #220000; border: 1px solid #ff6600; color: #ff6600; border-radius: 8px; }
            .btn { background: #ff6600; color: white; padding: 15px; border: none; border-radius: 8px; cursor: pointer; width: 100%; font-size: 1.1em; }
        </style>
    </head>
    <body>
        <div style="text-align: center;">
            <h1>🔒 GREENHORSE ADMIN PORTAL</h1>
            <p>Chief Scientist Officer Access - Port 452</p>
        </div>
        
        <div class="login">
            <h3>Quantum Authentication</h3>
            <form>
                <input type="text" placeholder="CSO ID" required>
                <input type="password" placeholder="Quantum Key" required>
                <button type="submit" class="btn">AUTHENTICATE</button>
            </form>
        </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log('🦠 GreenHorse Black Christmas LIVE!');
  console.log('🌐 Server running on port:', PORT);
  console.log('🔒 Quantum Security: ACTIVE');
});
