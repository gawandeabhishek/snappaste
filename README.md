# SnapPaste

**Gesture-Controlled Copy‑Paste, Right from the Browser.**

SnapPaste is a browser-based platform that brings futuristic copy‑paste to life using hand gestures. Built with **Next.js**, **TensorFlow.js**, and **real-time hand pose detection**, it enables users to copy and paste content simply by waving their hand—no extensions, no installations.

---

## 🧠 How It Works

- Uses the **Handpose model** from TensorFlow.js to detect 21 key points on the hand from the webcam feed.
- Distinguishes between **“grab”** and **“open”** gestures by calculating distances between the palm and fingertips.
- Runs detection continuously via `requestAnimationFrame` for smooth, real-time gesture feedback.
- Everything is handled **client-side**, ensuring privacy and zero setup—just open the site and wave.

---

## ⚙️ Tech Stack

- **Framework:** Next.js (App Router)
- **AI:** TensorFlow.js, Handpose model
- **UI:** Tailwind CSS, ShadCN/UI, Framer Motion
- **Icons:** React Icons
- **Webcam Input:** Native browser webcam API

---

## 🚀 Getting Started

Clone and run locally:

```bash
git clone https://github.com/your-username/snappaste.git
cd snappaste
yarn install
yarn dev
````

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ✨ Features

* **Real-Time Gesture Detection**
* **No Extensions or Downloads**
* **Client-Side Only for Privacy**
* **Cross-Browser Compatible**
* **Smooth UX with Framer Motion**

---

## 📁 Environment Variables

Create a `.env.local` file in the root of your project and define the following:

| Variable             | Description                                  |
| -------------------- | -------------------------------------------- |
| `DATABASE_URL`       | Your database connection string              |
| `AUTH_GOOGLE_ID`     | Google OAuth Client ID (from Google Console) |
| `AUTH_GOOGLE_SECRET` | Google OAuth Client Secret                   |
| `AUTH_SECRET`        | Random string for securing authentication    |

Example `.env.local`:

```env
DATABASE_URL=postgresql://user:password@host:port/dbname
AUTH_GOOGLE_ID=your-google-client-id
AUTH_GOOGLE_SECRET=your-google-client-secret
AUTH_SECRET=your-random-secret
```

---

## 🌐 Live Demo

Try it here: [https://snappaste.vercel.app](https://snappaste.vercel.app)

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repo.
2. Create a new branch: `git checkout -b feature/YourFeature`.
3. Commit and push: `git commit -m "Add your feature"` and `git push origin feature/YourFeature`.
4. Open a pull request.

---

## 🧠 Inspiration

The idea for SnapPaste came during a casual bus ride after seeing a reel showcasing Huawei’s air‑gesture demo. That evening, between 7–10 PM, the first prototype of the feature was built. The following night, from 7–9 PM, it was refined and completed. The result? **SnapPaste**—a gesture‑controlled copy‑paste platform.

---

## 📝 License

This project is licensed under the **Creative Commons Attribution-NonCommercial 4.0 International License**.
See the [LICENSE](./LICENSE) file for details.
