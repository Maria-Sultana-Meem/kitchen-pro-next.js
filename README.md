# 🍳 KitchenPro – Kitchen Items Management App

KitchenPro is a modern kitchen items showcase and management web application built with **Next.js**.  
The project focuses on clean UI, client-side authentication (mock login), protected routes, and a smooth user experience.

---

## 🚀 Live Demo
👉 https://kitchen-pro-nextjs-task.vercel.app/

---

## 📌 Project Description

KitchenPro allows users to:
- Browse premium kitchen items
- View item details
- Add new items (protected route)
- Login using mock authentication
- Experience a responsive, user-friendly interface

The project is built mainly for learning **Next.js App Router, client components, routing, pagination, cookies-based authentication, and UI structuring**.

---

## 🛠️ Technologies Used

- **Next.js (App Router)**
- **React**
- **Tailwind CSS**
- **JavaScript**
- **js-cookie**
- **react-hot-toast**
- **React Icons**

---

## ⚙️ Setup & Installation

Follow these steps to run the project locally:

```bash
# 1. Clone the repository
git clone https://github.com/Maria-Sultana-Meem/kitchen-pro-next.js.git

# 2. Go to project folder
cd kitchenpro

# 3. Install dependencies
npm install

# 4. Run the development server
npm run dev

✨ Implemented Features

✅ Responsive Navbar with Login / Logout

✅ Mock authentication using cookies

✅ Protected Add Item route

✅ Items page with pagination

✅ Item details page

✅ Toast notifications for actions

✅ Clean UI using Tailwind CSS

✅ Mobile-friendly design

✅ About page with team section

🧠 Feature Explanation (Short)

Mock Login:
Hardcoded email & password are matched and stored in cookies.
Login Credentials:

Email: user@example.com
Password: 123456

Protected Route:
Add Item page checks authentication before rendering.

Pagination:
Items page displays items in chunks for better UX.

Navbar State:
Navbar dynamically updates Login / Logout based on cookie state.