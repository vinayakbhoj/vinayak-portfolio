# Modern Developer Portfolio

A beautiful, responsive developer portfolio built with React, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, minimal UI with smooth animations
- **Dark/Light Mode**: Toggle between dark and light themes
- **Responsive**: Fully responsive design for all devices
- **Smooth Animations**: Powered by Framer Motion
- **Contact Form**: EmailJS integration for contact functionality
- **SEO Optimized**: Built with best practices for search engines
- **PWA Ready**: Progressive Web App capabilities

## 🛠️ Tech Stack

- **Frontend**: React.js
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Contact Form**: EmailJS
- **Fonts**: Inter & Poppins (Google Fonts)

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🔧 Configuration

### EmailJS Setup

1. **Sign up at EmailJS**: Go to [EmailJS](https://www.emailjs.com/) and create an account

2. **Create a new service**:
   - Go to Email Services
   - Add a new service (Gmail, Outlook, etc.)
   - Connect your email account
   - Note down your Service ID

3. **Create an email template**:
   - Go to Email Templates
   - Create a new template
   - Use variables: `{{name}}`, `{{email}}`, `{{subject}}`, `{{message}}`
   - Note down your Template ID

4. **Get your Public Key**:
   - Go to Account > API Keys
   - Copy your Public Key

5. **Create environment file**:
   ```bash
   # Create .env file in the root directory
   cp env.example .env
   ```

6. **Update .env file** with your credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

7. **Restart the development server**:
   ```bash
   npm start
   ```

**Note**: The `.env` file should be added to `.gitignore` to keep your credentials secure.

### Customization

1. **Personal Information**: Update your name, email, phone, and location in the components
2. **Social Links**: Update GitHub, LinkedIn, Twitter links
3. **Projects**: Add your own projects in the Projects component
4. **Skills**: Modify the skills and experience in the respective components
5. **Colors**: Customize the color scheme in `tailwind.config.js`

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation with theme toggle
│   ├── Hero.js            # Hero section with animated background
│   ├── About.js           # About section with personal info
│   ├── Skills.js          # Skills with progress bars
│   ├── Experience.js      # Work experience timeline
│   ├── Projects.js        # Projects with filters
│   ├── Contact.js         # Contact form with EmailJS
│   └── Footer.js          # Footer with social links
├── App.js                 # Main app component
├── index.js               # Entry point
└── index.css              # Global styles and Tailwind imports
```

## 🎨 Customization Guide

### Changing Colors

The portfolio uses a blue-purple gradient theme. To change colors:

1. Update gradient classes in components
2. Modify the `tailwind.config.js` file
3. Update the CSS variables in `index.css`

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `App.js`
3. Add navigation link in `Navbar.js`

### Modifying Animations

All animations are powered by Framer Motion. You can:
- Adjust animation durations in component files
- Change animation variants
- Add new motion effects

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Upload the `build` folder to Netlify

### GitHub Pages

1. Add `"homepage": "https://yourusername.github.io/portfolio"` to `package.json`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy scripts to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for animations
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [React Icons](https://react-icons.github.io/react-icons/) for icons
- [EmailJS](https://www.emailjs.com/) for contact form functionality

---

Built with ❤️ using React, Tailwind CSS, and Framer Motion 