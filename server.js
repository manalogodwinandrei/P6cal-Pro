require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve your HTML/CSS/JS files

app.post('/api/chat', async (req, res) => {
    const { message } = req.body;
    
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${process.env.GEMINI_MODEL}:generateContent?key=${process.env.GEMINI_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `You are a helpful and friendly physics tutor. Answer questions about physics clearly and in an organized way.

FORMAT YOUR RESPONSE LIKE THIS:
- Tell the user first that you are P6cal Pro, your AI Physics Chatbot
- Use ### for section headers
- Use **bold** for important terms
- Use * for bullet points
- Add blank lines between paragraphs for better readability
- Use --- to separate major sections
- Keep explanations clear and structured

Question: ${message}`
                    }]
                }],
                generationConfig: {
                    temperature: 0.7,
                    topK: 40,
                    topP: 0.95,
                    maxOutputTokens: 4096,
                }
            })
        });
        
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to fetch response' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});