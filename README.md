# KitchenPro - Premium Kitchen Tools Web App

## Project Description
KitchenPro is a modern, responsive web application for showcasing and selling premium kitchen tools. It’s built with **Next.js (App Router)**, **React**, and **Tailwind CSS**, featuring a mock authentication system, product management, and multiple interactive homepage sections.

---

## Setup & Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/kitchenpro.git
cd kitchenpro
Install dependencies

bash
Copy code
npm install
# or
yarn install
Run the development server

bash
Copy code
npm run dev
# or
yarn dev
Open your browser at:

arduino
Copy code
http://localhost:3000
Routes Summary
Route	Description	Access
/	Homepage with hero, featured items, how it works, testimonials, why choose us, FAQ	Public
/items	All products with search and pagination	Public
/items/[id]	Individual product details page	Public
/add-item	Add new product (protected)	Protected
/login	Login page for mock authentication	Public
/about	About page	Public

Features & Sections
1. Homepage Sections
Hero Slider

Full-width animated background images with overlay text.

CTA button directs to items page.

Built using Swiper.js.

Screenshot:
![Hero Slider](./screenshots/hero.png)

Featured Items

Grid of 8 latest items.

Each card displays image, title, description, price, rating, and a "View Details" button.

Screenshot:
![Featured Items](./screenshots/featured-items.png)

How It Works

4-step illustrated workflow with icons.

Screenshot:
![How It Works](./screenshots/how-it-works.png)

Testimonials

Carousel of user reviews with avatar, rating, and text.

Built with Swiper.js.

Screenshot:
![Testimonials](./screenshots/testimonials.png)

Why Choose Us

Grid of 6 visually appealing cards highlighting benefits.

Screenshot:
![Why Choose Us](./screenshots/why-choose-us.png)

FAQ

Accordion-style FAQ section.

Screenshot:
![FAQ](./screenshots/faq.png)

2. Items Page
Displays all products from items.json.

Pagination (8 items per page) and search by title.

Cards similar to homepage featured items.

Screenshot:
![Items Page](./screenshots/items-page.png)

3. Item Details Page
Shows product image at the top, with text section at the bottom.

Title, description, price, rating, and action buttons with toast notifications.

Screenshot:
![Item Details](./screenshots/item-details.png)

4. Add Item Page (Protected)
Accessible only to logged-in users.

Form for adding a new item: title, description, price, rating, image URL.

Success toast on submission.

Screenshot:
![Add Item](./screenshots/add-item.png)

5. Authentication (Mock)
Hardcoded credentials:

Email: user@example.com

Password: 123456

Stores login state in a cookie for 1 day.

Navbar updates dynamically: shows Login/Logout buttons.

Logout clears cookie and redirects to homepage.

Screenshot:
![Login Page](./screenshots/login.png)

6. Navbar
Responsive with hamburger menu for mobile.

Shows links and Login/Logout based on authentication status.

Screenshot:
![Navbar](./screenshots/navbar.png)

7. Footer
Includes social icons (real colors), quick links, customer service.

Screenshot:
![Footer](./screenshots/footer.png)

Tech Stack
Next.js 13/16 (App Router)

React

Tailwind CSS

Swiper.js (for carousels)

React Hot Toast (notifications)

js-cookie (for mock authentication)

React Icons (UI icons)

Notes
All interactive components use client-side rendering.

Mock authentication is for demonstration; replace with real auth (NextAuth.js or custom backend) for production.

Cookie expires in 1 day; users must login again after expiry.

Designed for mobile-first, responsive layouts.

