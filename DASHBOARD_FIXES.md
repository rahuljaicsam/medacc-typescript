# Dashboard Fixes & Logic Documentation

## Overview

This document details the comprehensive fixes and architectural improvements applied to the User Dashboard (`app/src/pages/Dashboard.tsx`). The primary goal was to resolve discrepancies between the static course data, frontend routing, and backend Firestore data, ensuring accurate progress tracking and seamless navigation for all 29 courses.

## Key Components

### 1. Database Key Mapping (`keyMap`)

**Problem:**
The frontend uses descriptive "slugs" for course IDs (e.g., `general-knowledge-foundations`), but the historical Firestore database uses different, shorter keys (e.g., `general-knowledge`). This mismatch caused the dashboard to look for non-existent documents, resulting in "0% Complete" for valid courses.

**Solution:**
A `keyMap` object was implemented to bridge this gap. It explicitly maps the frontend slug to the correct Firestore document ID.

**Implementation:**
```typescript
const keyMap: { [key: string]: string } = {
  'general-knowledge-foundations': 'general-knowledge',
  'biotech-general-knowledge-mastery': 'biotech-general-knowledge',
  'medical-general-knowledge-essentials': 'medical-general-knowledge',
  'bioethics-society': 'bioethics',
  'regulatory-pathways': 'regulatory',
  'clinical-trial-design': 'clinical-trial',
  'gmp-manufacturing-fundamentals': 'gmp',
  'quality-management-systems-iso-13485': 'iso13485',
  'health-economics-reimbursement': 'health-economics',
  'biomaterials-innovation': 'biomaterials',
  'tech-general-knowledge-for-biotech': 'tech-general-knowledge',
  'ai-in-healthcare': 'ai-healthcare',
  'robotics-in-healthcare': 'robotics-healthcare',
  'app-development-in-healthcare': 'app-development-healthcare',
  'cloud-computing-for-life-sciences': 'cloud-computing',
  'legal-general-knowledge-for-entrepreneurs': 'legal-general-knowledge',
  'grant-writing-for-non-dilutive-funding': 'grant-writing',
  'biotech-supply-chain-management': 'biotech-supply-chain',
  'scientific-leadership-team-building': 'scientific-leadership',
  'exit-strategies-m-a-and-ipos': 'exit-strategies',
  '1-on-1-founder-masterclass': 'founder-masterclass'
};
```

### 2. Navigation Routing (`routeMap`)

**Problem:**
The "Continue" and "Start Course" buttons relied on a generic routing logic that didn't account for the specific URL structures of newer courses. This led to broken links.

**Solution:**
A `routeMap` object was created to define the exact destination URL for every course title. This decouples the display title from the URL structure.

**Implementation:**
```typescript
const routeMap: { [key: string]: string } = {
  'General Knowledge Foundations': '/course/general-knowledge-foundations',
  'Biotech General Knowledge Mastery': '/course/biotech',
  'Medical General Knowledge Essentials': '/course/medical',
  'Bioethics & Society': '/course/bioethics',
  'Regulatory Pathways': '/course/regulatory',
  'Clinical Trial Design': '/course/clinical-trial',
  'GMP Manufacturing Fundamentals': '/course/gmp',
  'Quality Management Systems (ISO 13485)': '/course/iso13485',
  'Health Economics & Reimbursement': '/course/health-economics',
  'Biomaterials Innovation': '/course/biomaterials',
  'Tech General Knowledge for Biotech': '/course/tech-general-knowledge',
  'AI in Healthcare': '/course/ai-healthcare',
  'Robotics in Healthcare': '/course/robotics-healthcare',
  'App Development in Healthcare': '/course/app-development-healthcare',
  'Digital Health Data Privacy': '/course/digital-health-data-privacy',
  'Medtech Prototyping': '/course/medtech-prototyping',
  'Cloud Computing for Life Sciences': '/course/cloud-computing-life-sciences',
  'Market Analysis': '/course/market-analysis',
  'IP & Patent Strategy': '/course/ip-patent-strategy',
  'Legal General Knowledge for Entrepreneurs': '/course/legal-general-knowledge',
  'Startup Fundraising': '/course/startup-fundraising',
  'Strategic Partnerships': '/course/strategic-partnerships',
  'Grant Writing for Non-Dilutive Funding': '/course/grant-writing',
  'Biotech Supply Chain Management': '/course/biotech-supply-chain',
  'Scientific Leadership & Team Building': '/course/scientific-leadership',
  'Exit Strategies: M&A and IPOs': '/course/exit-strategies',
  'Startup Project Accelerator': '/course/startup-project-accelerator',
  'Biotech Innovation Hackathon': '/course/biotech-innovation-hackathon',
  '1-on-1 Founder Masterclass': '/course/founder-masterclass',
  'Investor Pitch Workshop': '/course/investor-pitch-workshop'
};
```

### 3. Dual-Mode Progress Calculation

**Problem:**
The application has evolved over time, resulting in two different data structures for storing course progress in Firestore:
1.  **Legacy:** An array of strings (e.g., `['module-1', 'module-2']`).
2.  **Modern:** An object map with status fields (e.g., `{ 'module-1': { status: 'completed' } }`).

**Solution:**
The progress calculation logic now automatically detects the format and parses it accordingly.

**Logic:**
```typescript
// Fetch course data from Firestore
const firestoreCourse = userData.courses[firestoreKey];

if (Array.isArray(firestoreCourse)) {
  // LEGACY: Array of completed module IDs
  completedModulesCount = firestoreCourse.length;
} else if (firestoreCourse.modules) {
  // MODERN: Object with module keys
  const moduleKeys = Object.keys(firestoreCourse.modules).filter(k => k.startsWith('module-'));
  moduleKeys.forEach(modKey => {
    const mod = firestoreCourse.modules[modKey];
    if (mod.status === 'completed' || mod.completed === true) {
        completedModulesCount++;
    }
  });
}
```

### 4. Default Module Count

**Problem:**
Some course entries in `courseData.tsx` were missing the `totalModules` property. This caused division by zero or undefined results in percentage calculations.

**Solution:**
A default value of **9** (the standard module count for this curriculum) is used whenever `totalModules` is undefined.

```typescript
const totalModules = course.totalModules || 9;
const progress = Math.round((completedModulesCount / totalModules) * 100);
```

## Supported Courses List

The dashboard now fully supports the following 29 courses:

1.  General Knowledge Foundations
2.  Biotech General Knowledge Mastery
3.  Medical General Knowledge Essentials
4.  Bioethics & Society
5.  Regulatory Pathways
6.  Clinical Trial Design
7.  GMP Manufacturing Fundamentals
8.  Quality Management Systems (ISO 13485)
9.  Health Economics & Reimbursement
10. Biomaterials Innovation
11. Tech General Knowledge for Biotech
12. AI in Healthcare
13. Robotics in Healthcare
14. App Development in Healthcare
15. Digital Health Data Privacy
16. Medtech Prototyping
17. Cloud Computing for Life Sciences
18. Market Analysis
19. IP & Patent Strategy
20. Legal General Knowledge for Entrepreneurs
21. Startup Fundraising
22. Strategic Partnerships
23. Grant Writing for Non-Dilutive Funding
24. Biotech Supply Chain Management
25. Scientific Leadership & Team Building
26. Exit Strategies: M&A and IPOs
27. Startup Project Accelerator
28. Biotech Innovation Hackathon
29. 1-on-1 Founder Masterclass
30. Investor Pitch Workshop

## Future Maintenance

### Adding a New Course

To add a new course to the dashboard, ensure you update the following in `app/src/pages/Dashboard.tsx`:

1.  **Update `keyMap`**: If the Firestore key differs from the slug (lowercase, hyphenated title), add a mapping.
    ```typescript
    'new-course-slug': 'new-course-firestore-key'
    ```

2.  **Update `routeMap`**: Add the direct link to the course page.
    ```typescript
    'New Course Title': '/course/new-course-route'
    ```

3.  **Update `courseData.tsx`**: Ensure the course is added to the static list with a correct `id` and `totalModules` count.
