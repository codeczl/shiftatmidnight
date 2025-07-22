# Shift at Midnight

Shift at Midnight is a terrifying survival horror game set in a 90s gas station. This repository contains the official website code where players can find guides, strategies, and community resources.

## Features

- 🌙 Latest Game Updates & Guides
- 👥 Doppelganger Detection Strategies
- 🏪 Gas Station Survival Tips
- 🌍 Multi-language Support (English & Chinese)
- 🔍 Quick Search
- 📚 Comprehensive Game Guides
- 🎮 Co-op Strategy Resources

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Internationalization:** next-intl
- **Analytics:** Google Analytics, Plausible Analytics
- **Deployment:** Vercel

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/shiftatmidnight.com.git
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory with the following variables:
```bash
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your_ga_id
DOMAIN=https://shiftatmidnight.com/
GITHUB_TOKEN=your_github_token
GITHUB_OWNER=your_github_username
GITHUB_REPO=shiftatmidnight.com
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure
```
shiftatmidnight.com/
├── public/ # Static files and images
├── src/
│ ├── app/ # App router and pages
│ ├── components/ # React components
│ │ ├── game/ # Game-specific components
│ │ └── ui/ # Reusable UI components
│ ├── lib/ # Utility functions
│ └── styles/ # Global styles
├── data/ # Game content and articles
│ ├── json/ # Game data
│ └── md/ # Articles and guides
├── messages/ # i18n translations
└── types/ # TypeScript types
```

## Internationalization

The site supports multiple languages:
- English (Default)
- Chinese (简体中文)

Language files are located in the `messages/` directory.

## Content Management

Game guides and articles are written in Markdown format and stored in the `data/md/` directory. The content is automatically synced with the website through GitHub API.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/NewGuide`)
3. Commit your changes (`git commit -m 'Add new survival guide'`)
4. Push to the branch (`git push origin feature/NewGuide`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- Website: [https://shiftatmidnight.com](https://shiftatmidnight.com)
- Email: support@shiftatmidnight.com

## Acknowledgments

- Next.js Team
- Vercel
- All contributors who help maintain the guides and resources
- Our amazing community of night shift survivors

---

Made with 🌙 for the Shift at Midnight community