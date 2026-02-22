# UI Optimization Plan: Mobile & Accessibility

This document outlines the proposed solutions to fix the "Filter Sroll" and "Map Visibility" issues identified in the mobile view of the MedAcc Maps application.

## 1. Problem: Filter Sidebar Accessibility

**Issue**: Users have to scroll very deep to find the "Apply Filters" button on mobile, and the filters take up the entire screen, pushing the map out of view.

### Solution A: Sticky "Apply Filters" Footer

Instead of placing the "Apply Filters" button at the end of the scrollable content, we will move it into a **fixed/sticky footer** within the sidebar.

- **Benefit**: The button is ALWAYS visible, regardless of how many filters are above it.
- **Implementation**: Wrap the filters in a scrollable `div` and place the button in a separate non-scrollable container at the bottom.

### Solution B: Filters Drawer (Modal) for Mobile

On mobile devices (screens < 1024px), we will hide the sidebar entirely by default.

- **Benefit**: The map becomes the primary focus (100% visibility).
- **Implementation**:
  - Add a floating **"Filter" button** on the map.
  - When clicked, it opens a **Bottom Sheet** or **Full-screen Drawer** containing all the filter options.
  - The drawer will have an "Apply" button that automatically closes the drawer after updating.

---

## 2. Problem: Map Visibility on Mobile

**Issue**: The current `flex-col` layout stack means the Sidebar must be scrolled past to see the Map.

### Solution A: Tabbed Interface (Mobile Only)

On small screens, switch to a "Tab" system:

- **Tab 1: Map** (Full screen map)
- **Tab 2: Filters** (List of settings)
- **Tab 3: Stats** (Detailed statistics)

### Solution B: Floating Statistics Overlay

Instead of showing statistics inside the sidebar on mobile, move them into a **collapsible overlay** or **floating island** on top of the map.

- **Benefit**: Users can see the results immediately on the map while still being able to check the stats.

---

## 3. Implementation Roadmap (Technical Changes)

### CSS/Tailwind Adjustments

1. **Container Height**: Change `h-[800px]` to `h-screen` or `h-[calc(100vh-64px)]` to ensure the app fits the device viewport perfectly.
2. **Sticky Button**:

   ```tsx
   <div className="sticky bottom-0 bg-white pt-4 pb-2 border-t mt-auto">
     <Button className="w-full">Apply Filters</Button>
   </div>
   ```

3. **Responsive Visibility**:
   - Sidebar: `hidden lg:flex`
   - Mobile Filter Trigger: `flex lg:hidden` (Floating Action Button)

### Component Refactoring

- **`DoctorMap.tsx`**: Add state for `isFilterDrawerOpen`.
- **`DetailedStats.tsx`**: Move into a separate mobile-friendly container (e.g., a "Stats" chip that expands).

---

## Proposed Layout Summary

| Viewport | Sidebar Position | Map Position | Apply Button |
| :--- | :--- | :--- | :--- |
| **Desktop (LG+)**| Left (Fixed width) | Right (Flex fill) | Bottom of Sidebar |
| **Mobile (<LG)**| Hidden (Drawer) | **Full Screen** | Sticky in Drawer / Modal |

These changes will ensure that MedAcc Maps feels like a premium, native-app-like experience on both mobile and desktop.
