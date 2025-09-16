# 🔮 Fortune Teller

Ask the oracle your question, watch the crystal ball glow, hear mystical music, and receive your fortune.  
A magical web app built with **Next.js 15**, **React 19**, **TypeScript**, **TailwindCSS**, and **Google Gemini API**.  

---

## 🛠 Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Lucide Icons](https://img.shields.io/badge/Lucide%20Icons-8B5CF6?style=for-the-badge&logo=lucide&logoColor=white)
![Google Gemini](https://img.shields.io/badge/Gemini%20API-4285F4?style=for-the-badge&logo=google&logoColor=white)

---

## ✨ Features
- 🔮 Interactive **Crystal Ball** with idle, loading, and answered states  
- 🤖 Fortune generation powered by **Google Gemini API** (`@google/generative-ai`)  
- 🎶 Background **mystical music** toggle (powered by [Free Music Archive](https://freemusicarchive.org/))  
- 🌌 Sparkling animated background for a magical atmosphere  
- ⚡ Smooth animations with **Framer Motion**  
- 🧙 Custom API route (`/api/fortune`) that connects to Gemini and returns cryptic answers  

---

## 🚀 Getting Started

## 1. Clone the repository
git clone https://github.com/SofiaSyntax/Fortuneteller-Oracle.git
cd fortune-teller

## 2. Install dependencies
npm install
or
yarn install

## 3. Set up Gemini API
Create a .env file in the root of your project and add your Gemini API key:
GEMINI_API_KEY=your_api_key_here
You can get an API key from Google AI Studio

## 4. Run the development server 
npm run dev
Then open http://localhost:3000 in your browser.

## 🎵 Music
The mystical background track is sourced from Free Music Archive.
You can replace /public/music/whimsical.mp3 with any other royalty-free track of your choice.
