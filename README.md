# Simple PC Builder Website using Next.js

## Live Link:

[Live Demo](https://your-live-link-here)

## Github Repo Link:

[Github Repository](https://github.com/arfatbegum/pc-builder-nextjs-app)

## Description:

The Simple PC Builder Website is a web application built using Next.js, providing users with the ability to build their own PC by selecting various PC components and parts. The web app features a clean and straightforward user interface, making it easy for users to navigate and select components for their custom PC.

## Features:

### Navbar:

The Navbar includes a "PC Builder" button that redirects users to the PC Builder page to start building their PC. Additionally, there is a "Categories" dropdown with various PC component categories, each having its corresponding route.

### Home Page:

The Home Page displays a selection of 6 random PC components as "Featured Products." Each Featured product card shows essential details, including an image, product name, category, price, stock status, rating, and a clickable link to the product detail page. There are also 6 Featured Categories under the Featured Product section, allowing users to browse specific component categories.

### Featured Category Sections:

Clicking on any Featured Category redirects the user to a page where at least 3 products of that category are displayed. Each product card on this page shows similar details as the Home Page, and clicking on any product leads to its detailed information.

### Product Detail Page:

The Product Detail Page provides comprehensive information about each PC component, including an image, product name, category, stock status, price, description, key features, individual rating, average rating, and user reviews.

### PC Builder Page:

The PC Builder Page features category sections such as CPU, Motherboard, RAM, Power Supply Unit, Storage Device, and Monitor. Each category has a "Choose/Select" button, leading users to another page displaying at least 3 components of that specific category. Users can add components to their PC build by clicking the "Add To Builder" button on each component card. The state of the selected components is managed using Redux / Context API to create a central store for efficient tracking.

### Complete Build Button:

After adding at least 5 - 6 components to their build, users can click on the "Complete Build" button. This button will only be enabled when the user has added the required number of components. Clicking on the "Complete Build" button shows a success alert, indicating that the build is ready.

## Bonus Parts:

### User Authentication:

The PC Builder Page is a protected/private route, requiring users to log in before they can access it. NextAuth is used, with at least one social login provider (Google/Github), to enable user authentication.

### Hero Section and Footer:

The Home Page includes a hero section/banner section and a footer, providing an attractive and informative landing page.

### Responsive Design:
