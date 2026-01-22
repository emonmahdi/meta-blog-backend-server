 ### Mete Blog App - [Live Server Link](https://meta-blog-backend-server.vercel.app/)

---

# 📘 Blog Backend Server (Node.js + Express)

A RESTful backend server for a blog application built with **Node.js, Express, and MongoDB**.
This API supports **create, read, update, delete (CRUD)** operations for blogs, including single blog fetch, update, and delete.

---

## 🚀 Features

* ✅ Create a new blog
* ✅ Get all blogs
* ✅ Get single blog by ID
* ✅ Update blog
* ✅ Delete blog
* ✅ MongoDB database integration
* ✅ RESTful API structure
* ✅ Express middleware & error handling
* ✅ Ready for Vercel deployment

---

## 🛠 Tech Stack

* Node.js
* Express.js
* MongoDB + Mongoose
* dotenv
* cors
* nodemon
* Vercel (deployment)

---

## 📂 Project Structure

```
meta-blog-backend-server/
│
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── blog.controller.js
│   ├── models/
│   │   └── blog.model.js
│   ├── routes/
│   │   └── blog.route.js
│   ├── app.js
│   └── server.js
│
├── .env.example
├── vercel.json
├── package.json
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

## 📦 Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/emonmahdi/meta-blog-backend-server.git
cd meta-blog-backend-server
```

---

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Add environment variables

Create `.env` file and add:

```env
MONGO_URI=your_mongodb_uri
PORT=5000
```

---

### 4️⃣ Run server locally

```bash
npm run dev
```

Server will run on:

```
http://localhost:5000
```

---

## 🔗 API Endpoints

### ➕ Create Blog

```http
POST /api/blogs
```

### 📄 Get All Blogs

```http
GET /api/blogs
```

### 🔍 Get Single Blog

```http
GET /api/blogs/:id
```

### ✏️ Update Blog

```http
PUT /api/blogs/:id
```

### ❌ Delete Blog

```http
DELETE /api/blogs/:id
```

---

## 🧪 Example Blog Object

```json
{
  "title": "My First Blog",
  "description": "This is my blog content",
  "image": "https://example.com/image.jpg",
  "author": {
    "name": "Emon Mahdi",
    "image": "https://example.com/author.jpg"
  }
}
```

---

## 🚀 Deployment (Vercel)

### 1️⃣ Install Vercel CLI

```bash
npm i -g vercel
```

### 2️⃣ Deploy

```bash
vercel --prod
```

👉 Or connect GitHub repo and Vercel will auto-deploy on every push.

---

## 🔁 Redeploy / Update

Just push new code:

```bash
git add .
git commit -m "update blog features"
git push origin main
```

Vercel will redeploy automatically 🚀

---

## 👨‍💻 Author

**Md Emon Mahdi**
Frontend & MERN Stack Developer
GitHub: [https://github.com/emonmahdi](https://github.com/emonmahdi)

--- 

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

---
 
