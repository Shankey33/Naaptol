Naaptol - Full-Stack E-Commerce Application
A fully functional e-commerce web application built with the MERN stack, featuring comprehensive product browsing, user authentication, and shopping cart functionality.

Tech Stack:
Frontend: React 19, React Router DOM, Tailwind CSS, Vite, Axios
Backend: Node.js, Express.js, MongoDB, Mongoose
Authentication: JWT (JSON Web Tokens), bcrypt password hashing
Additional Libraries: React Toastify (notifications), Swiper (carousels), Font Awesome (icons)



Key Features:
User Authentication & Authorisation: Secure registration and login system with JWT-based authentication, password validation (uppercase, lowercase, numeric requirements), and protected routes
RESTful API: Built modular RESTful APIs for user management, product catalogue, banners, and categories with dedicated controllers and routes
Shopping Cart: Persistent cart functionality with real-time updates, product quantity management, and user-specific cart storage
Product Management: Dynamic product listing, detailed product views, search functionality, and category-based filtering
State Management: React Context API for global authentication and shopping cart state
Responsive Design: Mobile-first approach with Tailwind CSS for seamless cross-device experience
Database: MongoDB with Mongoose ODM for efficient data modelling and schema validation
Security: Password encryption, token-based authentication with header validation, and CORS configuration



Architecture Highlights:
MVC pattern implementation with separate Controllers, Models, and Routes
Component-based frontend architecture with reusable UI components
Private route protection for authenticated user accessCentralisedd API calls using Axios with token management
Environment variable configuration for secure credential management
