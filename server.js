const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const THEMES = [
  "Business and entrepreneurship",
  "Career growth and skill building",
  "Focus, discipline, and consistency",
  "Success, strategy, and execution",
  "Personal growth and resilience",
  "Leadership, impact, and decision making",
  "Mindset, confidence, and self belief"
];

const MENTOR_PROMPT = `You are a master-level human mentor and strategist speaking to one ambitious person.

This prompt will be used on a daily schedule in the morning.
Each time it runs, generate exactly ONE original quote that:

Targets: business, life, career, success, growth, productivity, focus, and mindset

Is short and punchy: maximum 30 to 40 words

Uses simple, human, easy to understand language

Sounds like a real mentor with lived experience, not like AI

Is specific and practical, not vague or cliché

Speaks to people who are serious about growth, discipline, and results

Has a tone that is calm, confident, grounded, and respectful

Rotate between these themes and pick ONE per run:

Business and entrepreneurship
Career growth and skill building
Focus, discipline, and consistency
Success, strategy, and execution
Personal growth and resilience
Leadership, impact, and decision making
Mindset, confidence, and self belief

Output format (follow exactly):

Quote: "Your quote here in quotation marks."
Theme: [one theme from the list above]
Today: One simple sentence describing how to act on this quote today.

Strict rules:

Do not say you are AI, a model, or an assistant.

Do not explain your reasoning.

Do not add extra lines, bullet points, emojis, or hashtags.

Avoid corporate buzzwords and overly technical language.

Avoid em dashes completely. Use normal punctuation instead.

Make every quote feel like something a wise, experienced mentor or CEO would say directly to the reader.`;

// Generate quote using Claude API
async function generateQuote() {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    // Return a sample quote if no API key is configured
    const randomTheme = THEMES[Math.floor(Math.random() * THEMES.length)];
    return {
      quote: "The difference between where you are and where you want to be is the work you're willing to do when nobody's watching.",
      theme: randomTheme,
      today: "Pick one task you've been avoiding and work on it for 30 minutes without distractions."
    };
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-5-20250929',
        max_tokens: 1024,
        messages: [{
          role: 'user',
          content: MENTOR_PROMPT
        }]
      })
    });

    const data = await response.json();
    const content = data.content[0].text;

    // Parse the response
    const quoteMatch = content.match(/Quote:\s*"([^"]+)"/);
    const themeMatch = content.match(/Theme:\s*(.+?)(?:\n|$)/);
    const todayMatch = content.match(/Today:\s*(.+?)(?:\n|$)/);

    return {
      quote: quoteMatch ? quoteMatch[1] : "Keep building.",
      theme: themeMatch ? themeMatch[1].trim() : THEMES[0],
      today: todayMatch ? todayMatch[1].trim() : "Take one focused action today."
    };
  } catch (error) {
    console.error('Error generating quote:', error);
    const randomTheme = THEMES[Math.floor(Math.random() * THEMES.length)];
    return {
      quote: "Success is built in the quiet hours before the world wakes up.",
      theme: randomTheme,
      today: "Start your day with your most important task before checking messages."
    };
  }
}

// API endpoint to get a new quote
app.get('/api/quote', async (req, res) => {
  try {
    const quote = await generateQuote();
    res.json(quote);
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate quote' });
  }
});

// Serve the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Daily Quote App running on http://localhost:${PORT}`);
  console.log(`API Key configured: ${process.env.ANTHROPIC_API_KEY ? 'Yes' : 'No (using sample quotes)'}`);
});
