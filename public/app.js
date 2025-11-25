// DOM Elements
const quoteContainer = document.getElementById('quote-container');
const quoteContent = document.getElementById('quote-content');
const quoteText = document.getElementById('quote-text');
const themeText = document.getElementById('theme-text');
const todayText = document.getElementById('today-text');
const newQuoteBtn = document.getElementById('new-quote-btn');

// State
let isLoading = false;

// Fetch and display quote
async function getQuote() {
    if (isLoading) return;

    isLoading = true;
    newQuoteBtn.disabled = true;
    newQuoteBtn.textContent = 'Loading...';

    // Show loading state
    quoteContent.classList.add('hidden');
    quoteContainer.innerHTML = '<div class="loading">Generating your quote...</div>';

    try {
        const response = await fetch('/api/quote');

        if (!response.ok) {
            throw new Error('Failed to fetch quote');
        }

        const data = await response.json();
        displayQuote(data);
    } catch (error) {
        console.error('Error fetching quote:', error);
        displayError();
    } finally {
        isLoading = false;
        newQuoteBtn.disabled = false;
        newQuoteBtn.textContent = 'Get New Quote';
    }
}

// Display quote with animation
function displayQuote(data) {
    quoteText.textContent = data.quote;
    themeText.textContent = data.theme;
    todayText.textContent = data.today;

    quoteContainer.innerHTML = '';
    quoteContent.classList.remove('hidden');
    quoteContent.style.animation = 'none';

    // Trigger reflow to restart animation
    void quoteContent.offsetWidth;
    quoteContent.style.animation = 'fadeIn 0.5s ease-in';
}

// Display error message
function displayError() {
    quoteContainer.innerHTML = `
        <div class="loading" style="color: #e74c3c;">
            Unable to load quote. Please try again.
        </div>
    `;
}

// Event Listeners
newQuoteBtn.addEventListener('click', getQuote);

// Load initial quote on page load
document.addEventListener('DOMContentLoaded', () => {
    getQuote();
});

// Optional: Add keyboard shortcut (Space or Enter) to get new quote
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && e.target === document.body) {
        e.preventDefault();
        getQuote();
    }
});
