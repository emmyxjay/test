# Daily Mentor Quote App

A beautiful web application that delivers daily motivational quotes powered by AI. Each morning, receive a fresh, mentor-style quote focused on business, career, success, and personal growth.

## Features

- **AI-Powered Quotes**: Generates unique, mentor-style motivational quotes using Claude AI
- **Daily Themes**: Rotates through 7 key themes:
  - Business and entrepreneurship
  - Career growth and skill building
  - Focus, discipline, and consistency
  - Success, strategy, and execution
  - Personal growth and resilience
  - Leadership, impact, and decision making
  - Mindset, confidence, and self belief
- **Clean UI**: Modern, responsive design that works on all devices
- **Actionable Advice**: Each quote includes a "Today" section with practical next steps
- **Simple Setup**: Easy to deploy and customize

## Screenshots

The app features a clean, gradient background with a centered card displaying:
- The daily quote (30-40 words max)
- The theme for the day
- A simple action item for today

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Anthropic API key ([get one here](https://console.anthropic.com/))

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd daily-quote-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add your Anthropic API key:
   ```
   ANTHROPIC_API_KEY=your_actual_api_key_here
   PORT=3000
   ```

4. **Start the server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## Usage

### Manual Mode
- Click "Get New Quote" to generate a fresh quote anytime
- Press spacebar for quick quote generation

### Scheduled Daily Quotes (Optional)

To receive quotes automatically every morning, you can:

#### Option 1: Using Node-Cron (Built-in)
Add this to `server.js` after the app setup:

```javascript
const cron = require('node-cron');

// Schedule quote generation every day at 7 AM
cron.schedule('0 7 * * *', async () => {
  console.log('Generating daily quote...');
  const quote = await generateQuote();
  console.log('Daily Quote:', quote);
  // You can also send this via email, Slack, etc.
});
```

#### Option 2: Using System Cron (Linux/Mac)
```bash
# Open crontab
crontab -e

# Add this line to run at 7 AM daily
0 7 * * * curl http://localhost:3000/api/quote
```

#### Option 3: Deploy with Scheduled Tasks
Deploy to platforms that support scheduled tasks:
- **Vercel**: Use Vercel Cron
- **Railway**: Use Railway Cron
- **Heroku**: Use Heroku Scheduler
- **AWS**: Use CloudWatch Events + Lambda

## Deployment

### Deploy to Railway

1. Create account at [railway.app](https://railway.app)
2. Install Railway CLI: `npm install -g @railway/cli`
3. Login: `railway login`
4. Initialize: `railway init`
5. Add your API key: `railway variables set ANTHROPIC_API_KEY=your_key`
6. Deploy: `railway up`

### Deploy to Vercel

1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel`
3. Add environment variables in the Vercel dashboard
4. Deploy: `vercel --prod`

### Deploy to Heroku

1. Install Heroku CLI
2. Login: `heroku login`
3. Create app: `heroku create your-app-name`
4. Set API key: `heroku config:set ANTHROPIC_API_KEY=your_key`
5. Deploy: `git push heroku main`

## API Endpoints

### `GET /api/quote`
Generates a new motivational quote.

**Response:**
```json
{
  "quote": "The quote text here",
  "theme": "Business and entrepreneurship",
  "today": "Action item for today"
}
```

## Customization

### Modify Quote Style
Edit the `MENTOR_PROMPT` in `server.js` to adjust:
- Tone and voice
- Quote length
- Target themes
- Output format

### Change Styling
Edit `public/styles.css` to customize:
- Colors (see CSS variables in `:root`)
- Fonts
- Layout
- Animations

### Add Features
Some ideas:
- Email delivery
- Slack integration
- Quote history/favorites
- Share on social media
- Multiple languages

## Project Structure

```
daily-quote-app/
├── public/
│   ├── index.html      # Main HTML file
│   ├── styles.css      # Styling
│   └── app.js          # Frontend JavaScript
├── server.js           # Express server & quote generation
├── package.json        # Dependencies
├── .env.example        # Environment template
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## Technologies Used

- **Backend**: Node.js, Express.js
- **AI**: Anthropic Claude API (Sonnet 4.5)
- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Styling**: CSS Grid, Flexbox, CSS Variables
- **Scheduling**: node-cron (optional)

## Troubleshooting

### Issue: "Failed to generate quote"
- Check that your `ANTHROPIC_API_KEY` is set correctly in `.env`
- Verify your API key is valid at [console.anthropic.com](https://console.anthropic.com/)
- Check your API usage limits

### Issue: Port already in use
- Change the `PORT` in `.env` to a different number (e.g., 3001)
- Or kill the process using port 3000: `lsof -ti:3000 | xargs kill`

### Issue: Quotes seem generic
- The app includes fallback quotes when the API is unavailable
- Ensure your API key is configured to use AI-generated quotes

## License

MIT License - feel free to use this for personal or commercial projects.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues or questions, please open an issue on GitHub.

---

**Built with ❤️ for ambitious people who value growth and discipline.**
