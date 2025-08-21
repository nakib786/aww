# Aurora N&N Business Solutions Inc. Website

An Awwwards-level, animation-rich website built with Next.js 15, featuring dual-service theming, WebGL aurora effects, and comprehensive business tools for taxation services and web design.

## 🌟 Features

- **Dual-Service Theme System**: Seamlessly switch between Taxation and Web Design service themes
- **WebGL Aurora Canvas**: Interactive aurora borealis shader with react-three-fiber
- **Smooth Page Transitions**: Framer Motion powered animations with progress indicators
- **Interactive Calculators**: GST/PST and personal tax estimation tools
- **Contact Form**: Validated forms with Resend email integration
- **SEO Optimized**: Dynamic OG image generation and structured data
- **Accessibility**: WCAG 2.2 AA compliant with keyboard navigation
- **Performance**: Optimized for Core Web Vitals (LCP < 2.5s)
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router, TypeScript)
- **Styling**: Tailwind CSS + CSS Variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui
- **Animation**: Framer Motion + react-three-fiber + drei
- **Forms**: React Hook Form + Zod validation
- **Email**: Resend for contact form submissions
- **Analytics**: Vercel Analytics + Speed Insights
- **State Management**: Zustand for theme switching
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/aurora-website.git
cd aurora-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp env.example .env.local
```

Edit `.env.local` with your configuration:
- `RESEND_API_KEY`: Get from [Resend](https://resend.com/)
- Other optional variables as needed

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
aurora-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── api/               # API routes
│   │   ├── calculators/       # Calculator tools
│   │   ├── contact/          # Contact page
│   │   └── globals.css       # Global styles
│   ├── components/           # React components
│   │   ├── ui/              # Reusable UI components
│   │   ├── AuroraCanvas.tsx # WebGL aurora effect
│   │   ├── Header.tsx       # Navigation header
│   │   └── ServiceSwitch.tsx # Theme switcher
│   └── lib/                 # Utility functions
│       ├── formulas/        # Tax calculation logic
│       ├── store.ts         # Zustand state management
│       └── utils.ts         # Helper functions
├── public/                  # Static assets
└── package.json
```

## 🎨 Design System

### Color Palette

The website uses a dual-theme system with Aurora Borealis inspired colors:

**Base Colors:**
- Deep Space: `#0B1020`
- Ink Black: `#070A12`
- White: `#FFFFFF`

**Taxation Theme:**
- Primary: Aurora Cyan `#3BF0E5`
- Secondary: Lime Green `#A6FF9A`

**Web Design Theme:**
- Primary: Magenta `#FF5CA8`
- Secondary: Ice Purple `#B19CFF`

### Typography

- **Headlines**: Space Grotesk (display font)
- **Body/UI**: Inter (readable font)

### Motion Design

- **Easing**: `cubic-bezier(0.22, 1, 0.36, 1)` (easeOutExpo-like)
- **Durations**: 180-400ms for interactions, 600-900ms for reveals
- **Respect**: `prefers-reduced-motion` for accessibility

## 🧮 Calculators

### GST/PST Calculator
- Multi-province support
- Business type considerations
- Registration requirement detection
- Annual projections and filing dates

### Personal Tax Estimator
- Federal and provincial tax brackets
- RRSP optimization suggestions
- Tax credit calculations
- Personalized recommendations

## 📧 Contact Form

The contact form includes:
- Zod schema validation
- Service-specific routing
- Budget and timeline capture
- Automated email responses via Resend
- Form submission tracking

## 🔍 SEO & Performance

- Dynamic OG image generation
- Structured data (JSON-LD)
- Sitemap and robots.txt
- Core Web Vitals optimization
- Image optimization with `next/image`
- Font optimization with `next/font`

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run E2E tests
npm run test:e2e

# Run accessibility tests
npm run test:a11y
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy automatically on push to main branch

### Environment Variables for Production

Required:
- `RESEND_API_KEY`: For contact form emails

Optional:
- `NEXT_PUBLIC_POSTHOG_KEY`: Analytics
- `DATABASE_URL`: For lead storage
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Google Analytics

## 📊 Analytics

The website includes:
- Vercel Analytics for performance monitoring
- Vercel Speed Insights for Core Web Vitals
- PostHog for user behavior tracking (optional)
- Contact form conversion tracking

## ♿ Accessibility

- WCAG 2.2 AA compliant
- Keyboard navigation support
- Screen reader optimized
- Focus management in modals/transitions
- High contrast color ratios
- Reduced motion support

## 🔧 Customization

### Adding New Services

1. Update the `ServiceType` in `src/lib/store.ts`
2. Add theme colors in `src/app/globals.css`
3. Update `ServiceSwitch` component
4. Add service-specific content with `ServiceContent`

### Modifying Calculators

1. Update formulas in `src/lib/formulas/`
2. Modify form schemas and validation
3. Update result display components
4. Add new calculator routes in `src/app/calculators/`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and test thoroughly
4. Commit with descriptive messages
5. Push to your fork and submit a pull request

## 📄 License

This project is proprietary software owned by Aurora N&N Business Solutions Inc.

## 📞 Support

For technical support or questions:
- Email: n@aurorabusiness.ca
- Website: https://aurorabusiness.ca
- Phone: +1 (604) 555-0123

---

Built with ❤️ in Vancouver, BC by Aurora N&N Business Solutions Inc.