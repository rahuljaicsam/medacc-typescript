# Required Firebase Indexes for DoctorMap

To ensure the DoctorMap filtering works efficiently and without errors, you need to create the following **Composite Indexes** in your Firebase Console.

Go to **Firestore Database** -> **Indexes** -> **Composite** -> **Add Index**.

## 1. Collection Group Indexes
These are the most critical indexes. They allow querying across all collections with the same name (e.g., querying *all* "General Surgery" collections at once).

**Scope:** `Collection Group`

| Collection ID | Fields Indexed | Query Scope |
| :--- | :--- | :--- |
| **metrics** | `country` (Ascending) + `state` (Ascending) | Collection |
| **metrics** | `country` (Ascending) + `district` (Ascending) | Collection |
| **metrics** | `state` (Ascending) + `district` (Ascending) | Collection |
| **metrics** | `state` (Ascending) + `workplace` (Ascending) | Collection |

### Degree & Specialty Collections
Create these indexes for **EACH** of the following Collection IDs:
*   `MBBS`, `MD`, `MS`, `DM`, `MCh`
*   `General Surgery`, `Internal Medicine`, `Pediatrics`, `Ophthalmology`, `Dermatology`, `Orthopedics`, `Otorhinolaryngology`
*   `Anesthesiology`, `Community Medicine`, `Emergency Medicine`, `Microbiology`, `Pathology`, `Radiology`
*   `Cardiology`, `Neurology`, `Gastroenterology`, `Nephrology`, `Urology`, `Neurosurgery`
*   `GP or Freelance`

| Collection ID | Fields Indexed | Query Scope |
| :--- | :--- | :--- |
| *[Collection Name]* | `country` (Ascending) + `state` (Ascending) | Collection Group |
| *[Collection Name]* | `country` (Ascending) + `district` (Ascending) | Collection Group |
| *[Collection Name]* | `state` (Ascending) + `district` (Ascending) | Collection Group |
| *[Collection Name]* | `state` (Ascending) + `workplace` (Ascending) | Collection Group |


---

## 2. Single Field Indexes (Exemptions)
Ensure that the following fields are **indexed** (they usually are by default, but check your "Single Field" exemptions to make sure they aren't disabled).

*   `country`
*   `state`
*   `district`
*   `workplace`
*   `degree`
*   `specialty`

## Why are these needed?
*   **`country` + `state`**: Allows filtering by a specific country AND state (e.g., "India" + "Tamil Nadu").
*   **`state` + `district`**: Allows filtering by state AND district (e.g., "Tamil Nadu" + "Vellore").
*   **`degree`**: Essential for the cross-collection search (e.g., finding "MS" records inside the "General Surgery" collection).

## How to create them quickly
When you run the app and a query fails due to a missing index, check the **Console** in your browser's Developer Tools. Firebase often prints a direct link that says:
> *"The query requires an index. You can create it here: https://console.firebase.google.com/..."*

Clicking that link is the fastest way to create exactly the index you need!
