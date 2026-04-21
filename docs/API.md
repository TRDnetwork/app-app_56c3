# API Documentation

This project is a **static landing page** with no backend server, database, or API endpoints. All functionality is implemented client-side using HTML, CSS, and JavaScript.

## No Backend Services

- **Email Signup**: The form performs client-side validation and displays a UI success message. No data is transmitted, stored, or processed on any server.
- **Content**: All text and images (if added) are hardcoded into the HTML/CSS files.
- **Social Links**: Point directly to external social media platforms (Instagram, Twitter).

## Future Considerations

If Dawn Brew later decides to collect emails or add dynamic features, the following could be integrated:

1. **Email Collection API**: A simple POST endpoint (e.g., `/api/subscribe`) to store emails in a database.
2. **Contact Form**: Backend processing for customer inquiries.
3. **Menu/Updates API**: Fetch dynamic content like seasonal offerings or opening hours.

For now, the site remains entirely static and self-contained.