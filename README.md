Career-Craft Overview

Career-Craft is a full-stack AI platform designed to help students, job seekers, and professionals improve their career profile, resume quality, communication skills, and interview readiness.
It integrates AI resume generation, curated study material, interview prep tools, and user-specific dashboards, making it a complete digital career coach.

This project demonstrates strong skills in:

Full-stack architecture

AI workflow automation

Secure authentication

Database modeling

UI/UX engineering

Real-world SaaS development

✔ Real-world SaaS structure (auth → dashboard → builder → background jobs)
✔ AI-assisted resume generation system
✔ Modern UI using Shadcn + Tailwind
✔ Full backend architecture with Prisma & Neon
✔ Production-ready workflows using Inngest
✔ Shows end-to-end product thinking

🛠️ Tech Stack
Frontend

Next.js (App Router)

React.js

Tailwind CSS

Shadcn UI

Client & Server Components

Backend

Next.js Server Actions

Prisma ORM

Neon PostgreSQL

Inngest (async workflows)

AI Capabilities

Role-based resume templates

AI-generated resume content

ATS-optimized formatting

Authentication

Clerk Authentication

Protected routes

Secure session management

Utilities

Sonner Notifications

Git & GitHub

Vercel Deployment

🖼️ Screenshots (Preview)

Replace with real screenshots when available.


📁 Project Structure
career-craft/
│
├── app/
│   ├── dashboard/              # User dashboard
│   ├── resume-builder/         # AI resume generation flow
│   ├── interview-prep/         # Interview materials
│   ├── study-material/         # Notes & learning resources
│   ├── api/                    # Backend API endpoints
│   └── layout.js               # Root layout
│
├── components/
│   └── ui/                     # Shadcn reusable components
│   └── ResumePreview.js        # Resume preview & templates
│
├── prisma/
│   └── schema.prisma           # Database schema
│
├── inngest/                    # Background job handlers
├── public/                     # Images & assets
├── styles/                     # global.css
├── .env.local
├── package.json
├── next.config.js
└── README.md

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https:https://github.com/arvind-rana/Career-Craft
cd career-craft

2️⃣ Install dependencies
npm install

3️⃣ Environment variables

Create a .env.local file:

DATABASE_URL=""
CLERK_PUBLISHABLE_KEY=""
CLERK_SECRET_KEY=""
INGEST_API_KEY=""

4️⃣ Run Prisma migrations
npx prisma migrate dev

5️⃣ Start development server
npm run dev


App runs on → http://localhost:3000

✨ Features
📝 AI Resume Builder

Auto-generates ATS-optimized resumes

Multiple industry templates

Keyword-rich suggestions

Export options

🎤 Interview Preparation

HR & technical questions

Behavioral interview guidance

Curated practice questions

📚 Study Material

Topic-wise resources

Clean UI for easy learning

Categorized notes

🔐 Authentication

Clerk login/signup

Protected routes

User profiles

⚙️ Background Processing (Inngest)

Resume generation queues

Async workflows

Improved performance

🎨 Modern UI / UX

Tailwind + Shadcn components

Fully responsive layout

Minimalistic & elegant design

🧑‍💻 Author

Arvind Rana
📧 Email: arvindrana8650@gmail.com

🔗 Portfolio (optional): add link here
🔗 LinkedIn (optional): https://www.linkedin.com/in/arvindrana15/

⭐ Support This Project

If Career-Craft helped or inspired you:

⭐ Star this repository
🔁 Share with others
💬 Give feedback or suggestions
