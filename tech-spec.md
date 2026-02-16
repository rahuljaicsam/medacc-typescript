# MED/ACC Website - Technical Specification

---

## Component Inventory

### shadcn/ui Components (Built-in)
- `button` - CTAs, navigation actions
- `card` - Feature cards, blog cards, testimonial cards
- `accordion` - FAQ section
- `input` - Login form fields
- `badge` - Status indicators, category tags
- `separator` - Section dividers
- `sheet` - Mobile navigation drawer
- `dropdown-menu` - Resources dropdown
- `scroll-area` - Horizontal scroll containers

### Third-Party Registry Components
- `@magicui/particles` - Hero background particles effect
- `@aceternity/timeline` - Optional for founder journey

### Custom Components
- `CountdownTimer` - Hackathon countdown
- `AnimatedCard` - Cards with hover lift animation
- `ScrollReveal` - Wrapper for scroll-triggered animations
- `FloatingImage` - Hero images with float animation
- `LogoGrid` - Company/partner logo displays

---

## Animation Implementation Table

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| Page load fade-in | Framer Motion | AnimatePresence + initial/animate states | Low |
| Hero text stagger | Framer Motion | staggerChildren in parent variant | Medium |
| Hero image float | CSS Keyframes | @keyframes float, infinite animation | Low |
| Navbar scroll effect | React Hook | useScroll hook, conditional classes | Low |
| Scroll reveal | Framer Motion | whileInView + viewport settings | Medium |
| Card hover lift | CSS + Framer | hover:translateY + whileHover | Low |
| Button hover scale | Framer Motion | whileHover scale transform | Low |
| Countdown timer | React State | useEffect + setInterval | Medium |
| Accordion expand | shadcn built-in | AnimatePresence for content | Low |
| Logo grid stagger | Framer Motion | staggerChildren variant | Medium |
| Link underline | CSS | ::after pseudo-element animation | Low |
| Mobile menu slide | Framer Motion | AnimatePresence + x transform | Medium |

---

## Animation Library Choices

### Primary: Framer Motion
- React-native integration
- Declarative animation API
- Built-in scroll detection (whileInView)
- AnimatePresence for mount/unmount
- Gesture support (hover, tap)

### Secondary: CSS Animations
- Simple infinite animations (float, pulse)
- Hover transitions
- Performance-critical micro-interactions

### Rationale
Framer Motion provides the best React integration for complex scroll-triggered and stagger animations while maintaining clean component code. CSS handles simple, performance-critical animations.

---

## Project File Structure

```
app/
├── src/
│   ├── sections/
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── Hackathon.tsx
│   │   ├── WhyAcceleration.tsx
│   │   ├── LatestLaunch.tsx
│   │   ├── FounderTestimony.tsx
│   │   ├── TransformResearch.tsx
│   │   ├── Blog.tsx
│   │   ├── TopCompanies.tsx
│   │   ├── LoginPortal.tsx
│   │   ├── FAQ.tsx
│   │   ├── Collaboration.tsx
│   │   ├── AsSeenIn.tsx
│   │   ├── Venues.tsx
│   │   ├── Subsidiaries.tsx
│   │   ├── EbookCTA.tsx
│   │   └── Footer.tsx
│   ├── components/
│   │   ├── ScrollReveal.tsx
│   │   ├── AnimatedCard.tsx
│   │   ├── CountdownTimer.tsx
│   │   ├── FloatingImage.tsx
│   │   └── LogoGrid.tsx
│   ├── hooks/
│   │   └── useScrollPosition.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── components/ui/        # shadcn components
├── public/
│   └── images/          # Generated/downloaded images
├── index.html
├── tailwind.config.js
└── package.json
```

---

## Dependencies

### Core
- react
- react-dom
- typescript
- vite

### UI & Styling
- tailwindcss
- @radix-ui/* (via shadcn)
- class-variance-authority
- clsx
- tailwind-merge
- lucide-react

### Animation
- framer-motion

### Fonts
- @fontsource/inter
- @fontsource/space-grotesk

---

## Installation Commands

```bash
# Initialize project
bash /app/.kimi/skills/webapp-building/scripts/init-webapp.sh "MED/ACC"

# Install shadcn components
cd /mnt/okcomputer/output/app
npx shadcn add button card accordion input badge separator sheet dropdown-menu scroll-area

# Install animation library
npm install framer-motion

# Install fonts
npm install @fontsource/inter @fontsource/space-grotesk
```

---

## Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Mobile | < 640px | Single column, hamburger menu, stacked sections |
| Tablet | 640-1024px | 2-column grids, condensed spacing |
| Desktop | > 1024px | Full layout, all animations enabled |

---

## Performance Considerations

1. **Image Optimization**
   - Use WebP format where possible
   - Lazy load below-fold images
   - Proper width/height attributes

2. **Animation Performance**
   - Use transform/opacity only
   - will-change on animated elements
   - Respect prefers-reduced-motion

3. **Code Splitting**
   - Lazy load heavy sections if needed
   - Dynamic imports for optional components

---

## Accessibility

1. **Keyboard Navigation**
   - All interactive elements focusable
   - Visible focus states
   - Skip to content link

2. **Screen Readers**
   - Semantic HTML structure
   - ARIA labels where needed
   - Alt text for all images

3. **Motion**
   - prefers-reduced-motion support
   - Static fallbacks for animations
