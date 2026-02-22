# Mobile-First UX Redesign: "The Google Maps Approach"

This document outlines a complete overhaul of the mobile user experience for MedAcc Maps, moving away from a "sidebar-first" desktop layout to a "map-first" mobile interface inspired by Google Maps and Apple Maps.

## 1. The Core Problems (Current State)

- **Congestion**: The filter sidebar takes up 50% of the screen, leaving very little room for the map.
- **Popup Spilling**: Leaflet's default popups are not responsive. On small screens, they often open off-screen or cover the entire interactive area.
- **Clutter**: Too many buttons and overlays are visible at once.

## 2. The Google Maps Inspired Solution

### A. Full-Screen Map (100% Visibility)

- On mobile, the map will occupy **100% of the viewport**.
- Header and Sidebar are removed from the main flow.

### B. Floating Search & Filter Bar

- Instead of a fixed sidebar, a **floating search bar** will sit at the top.
- Horizontal scrollable **"Quick Filter Chips"** (e.g., "MD Only", "High Salary", "Top QoL") will sit below the search bar.
- A "Filters" icon in the search bar opens a **Modal Drawer** for advanced filtering.

### C. Responsive Map Popups (Optimized Detail View)

- We will use Leaflet's native `Popup` component, but with **responsive constraints**.

- **Mobile Width**: Popups on mobile will automatically adjust to 90% of the screen width (`max-w-[calc(100vw-80px)]`) to ensure they never "spill" off the edge.
- **Scrollable Content**: Long reports within the popup will be scrollable, keeping the overall popup height manageable on small screens.

- **Why?**: This maintains the "Native Map" feel while ensuring all data is perfectly readable without the need for a separate bottom sheet.

### D. Desktop Viewport Optimization

To prevent the "Apply Filters" button from spilling out of the browser window on smaller laptops:

- **Responsive Scaling**: Replaced the fixed `800px` height with `calc(100vh - 120px)`.
- **Locked Scroll**: The sidebar is constrained to the viewport height, ensuring the "Apply Filters" sticky footer is always visible without scrolling the entire page.

### D. Component Changes

| Feature | Desktop Implementation | Mobile Implementation |
| :--- | :--- | :--- |
| **Filters** | Persistent Left Sidebar | Floating "Filters" FAB / Drawer |
| **Details** | Marker Popup (Large) | Marker Popup (Responsive/Compact) |
| **Map Height** | Dynamic Viewport (`100vh - 120px`) | Full Viewport (`100dvh`) |
| **Search** | Top of Sidebar | Floating Header |

## 3. Implementation Roadmap

### Step 1: Layout Modernization

Use `lg:flex-row flex-col-reverse` logic but with absolute positioning for mobile overlays.

### Step 2: Drawer Integration

Use a library like `vaul` (if available) or a simplified Framer Motion / Shcnadcn Drawer for the mobile filter menu.

### Step 3: Global State for Markers

Instead of letting Leaflet handle popups, clicks on markers will set a `selectedHospital` state, which triggers the visibility of the custom Bottom Sheet component.

---

## 4. Visual Mockup (Concept)

1. **Top Overlay**: Search input + "All Degrees" dropdown (simplified).
2. **Main Area**: Map with clustered pins.
3. **Bottom Overlay**: "Found 49 hospitals. Tap a pin to see details." (Small indicator).
4. **Interaction**: Click pin -> Marker turns highlight color -> Bottom Sheet pops up with Hospital Name and Salary.
