Here's your complete `README.md` with your name and sample API response examples included:

---

````markdown
# ⚽ Premier League Match Center

A dark-themed, responsive football web app that shows **upcoming Premier League matches** using the [`balldontlie`](https://balldontlie.io/) API (EPL endpoint). Built by **Aaditya Sandeep Ardhapurkar** using **React**, **Node.js**, **Express**, and **Bootstrap**.

---

## ✨ Features

- 📅 Displays upcoming EPL games
- ⚽ Team names, kickoff time, and scores
- 🎨 Dark, modern theme with animated hover effects
- 📱 Fully responsive design
- 🔐 API integration using `.env` for security

---

## 🔧 Tech Stack

| Frontend   | Backend   | API             |
|------------|-----------|------------------|
| React      | Node.js   | balldontlie.io   |
| Bootstrap  | Express.js| `@balldontlie/sdk` |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/epl-match-center.git
cd epl-match-center
````

### 2. Install Dependencies

**Backend (inside `/server` folder):**

```bash
cd server
npm install
```

**Frontend (root folder):**

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file inside the `server` folder:

```env
BALLDONTLIE_API_KEY=your_api_key_here
```

### 4. Start the Servers

**Backend:**

```bash
node server.js
```

**Frontend (React):**

```bash
npm start
```

---

## 📦 Example API Response

**GET `/api/epl-matches`**

```json
[
  {
    "id": 30214,
    "date": "2024-08-17T14:00:00Z",
    "home_team": {
      "id": 14,
      "abbreviation": "ARS",
      "full_name": "Arsenal FC"
    },
    "visitor_team": {
      "id": 25,
      "abbreviation": "MCI",
      "full_name": "Manchester City"
    },
    "status": "Scheduled",
    "season": 2024
  },
  ...
]
```

**GET `/api/teams`**

```json
[
  {
    "id": 14,
    "full_name": "Arsenal FC",
    "abbreviation": "ARS",
    "city": "London"
  },
  ...
]
```

---

## 🖼️ Screenshots (Optional)

| Match List                              | Responsive View                    |
| --------------------------------------- | ---------------------------------- |
| ![Match UI](![image](https://github.com/user-attachments/assets/5a361e30-be14-49c3-8adb-02f8ebc9b87c)
) | ![Responsive](![image](https://github.com/user-attachments/assets/ca6cf99b-ed42-4491-bfc6-48bb5c20052c)
) |

---

## 📄 License

MIT © [Aaditya Sandeep Ardhapurkar](https://github.com/Add2207)

---

## 📬 Contact

Feel free to reach out or contribute!

* GitHub: [@your-username](https://github.com/Add2207)

```

