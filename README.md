
# Grand Restaurant

A modern and responsive restaurant landing page built with HTML, CSS, Bootstrap, and JavaScript. The site provides an immersive browsing experience with video backgrounds, smooth scrolling, and dynamic content.

## Features

- Full-screen background video on the homepage
- Fixed navigation bar with scroll-based color change
- Interactive menu section with:
  - Real-time search input
  - Category filter dropdown
  - Dynamic content loaded from Forkify API
  - Star-based rating visualization
- Story and visit sections with flexible grid image layouts
- Contact form with name, email, and message inputs
- Embedded Google Map with restaurant location
- Responsive design for all screen sizes
- Footer with social links, newsletter subscription, and contact info

## Technologies Used

- HTML5
- CSS3
- Bootstrap 5
- Font Awesome 7
- JavaScript (ES6)
- Fetch API
- Google Maps Embed
- Forkify API (https://forkify-api.herokuapp.com)

## Folder Structure

```

Grand-Restaurant/
│
├── assets/
│   ├── images/                # Contains all image assets
│   └── kitchen.mp4            # Homepage background video
│
├── CSS/
│   └── style.css              # Main stylesheet
│
├── JS/
│   └── index.js               # JavaScript for API handling and DOM manipulation
│
├── WebFonts/                  # Custom font files (Kristi and Lato)
│
└── index.html                 # Main HTML file

```

## How It Works

- On load, dishes related to "pizza" are fetched from the Forkify API and displayed.
- Users can search for other dishes using the input field or select from a dropdown.
- Dish results include title, image, and star ratings calculated from `social_rank`.
- Navbar changes style when the user scrolls.
- Sections are styled using a combination of Bootstrap classes and custom CSS grid layouts.

## Getting Started

1. Clone the repository or download the ZIP.
2. Run `npm install` to install Bootstrap if using the local `node_modules` path.
3. Open `index.html` in a browser.

## Notes

- The `bootstrap.min.css` and `bootstrap.bundle.min.js` are included via local `node_modules`. You may use CDN instead for deployment.
- Font Awesome is loaded via CDN.
- Custom fonts (`Kristi` and `Lato`) must be placed correctly inside `WebFonts/`.

## Author

Developed by shahd . This template was built for educational and demonstrative purposes.
