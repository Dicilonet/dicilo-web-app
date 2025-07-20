# Dicilo.net Company Directory - Vite & React App

This is a modern web application built with Vite, React, and TypeScript, designed to be run locally and deployed on platforms like Vercel or Netlify.

## Project Setup

**Prerequisites:** You must have [Node.js](https://nodejs.org/) (which includes npm) installed on your computer.

### 1. Install Dependencies
Open your terminal in the project's root directory and run the following command to install all the necessary packages:
```bash
npm install
```

### 2. Set Up Environment Variables (Crucial Step!)

You need to provide your Gemini API key for the application to work.

1.  Create a new file in the root of the project named `.env.local`.
2.  Open the `.env.local` file and add your API key like this:

    ```
    VITE_GEMINI_API_KEY="YOUR_GEMINI_API_KEY_HERE"
    ```

3.  Replace `"YOUR_GEMINI_API_KEY_HERE"` with the actual key you obtained from Google AI Studio.

### ⚠️ **IMPORTANT SECURITY WARNING** ⚠️

The current configuration exposes your Gemini API key on the client-side (in the user's browser). **This is highly insecure for a public application.** Anyone with access to your website can find and use your API key, which could lead to unexpected charges on your Google account.

For a real-world, production application, you **MUST** protect this key by creating a backend proxy or a serverless function. Your frontend application should call your own backend, and your backend should then securely call the Gemini API using the key stored safely on the server.

Platforms like Vercel and Netlify offer easy ways to create serverless functions for this purpose.

### 3. Run the Development Server

To run the app locally and see your changes live, use this command:
```bash
npm run dev
```
This will start a development server, usually at `http://localhost:5173`. Open this URL in your web browser.

## Available Scripts

-   `npm run dev`: Starts the development server with hot-reloading.
-   `npm run build`: Compiles and bundles the application for production into the `dist/` folder.
-   `npm run preview`: Starts a local server to preview the production build from the `dist/` folder.

## Deployment

To deploy this application, you can use any static site hosting service. Here are the recommended steps for Vercel or Netlify:

1.  **Push to a Git Repository:** Push your project code to a GitHub, GitLab, or Bitbucket repository.
2.  **Import Project:** On your Vercel or Netlify dashboard, import the project from your Git repository.
3.  **Configure Build Settings:** The platform should automatically detect that it's a Vite project. The default settings are usually correct:
    *   **Build Command:** `npm run build` or `vite build`
    *   **Output Directory:** `dist`
4.  **Add Environment Variables:** In your hosting provider's project settings, add the `VITE_GEMINI_API_KEY` with your secret API key. **Do not expose it publicly.**
5.  **Deploy!** The platform will build and deploy your site.
