# ⚡ Django Quickstart – Internship Project by Zain Ul Abdin Ghani

This project is a custom Django boilerplate created as part of my internship at **Codeveda (Level 3 Task 1)**. It provides a fully functional base for Django web applications with integrated support for **Tailwind CSS**, **user authentication**, **dashboard routing**, **hot reload**, and optional production-ready features like **PostgreSQL** and **AWS S3**.

---

## 📌 Key Features

- 🔐 User registration, login, logout
- 🏠 Ready-made landing page
- 📊 Authenticated dashboard
- 💨 TailwindCSS support with `django-tailwind`
- 🔁 Live browser reloading using `django-browser-reload`
- 🐘 Optional PostgreSQL configuration for production
- ☁️ AWS S3 integration for serving static files in deployment

---

## 📁 App Structure

- `landing_page/`: Public homepage
- `accounts/`: Handles auth (signup, login, logout)
- `dashboard/`: Secured dashboard after login

---

## 🛠️ Tools & Technologies

- **Backend:** Django 4.x
- **Frontend:** Tailwind CSS
- **Database:** SQLite (default), PostgreSQL (optional)
- **Storage:** Local (default), AWS S3 (optional)
- **Others:** dotenv, browser-reload, django-tailwind

---

## ⚙️ Installation

### 1. Clone the project

```bash
git clone <your-repo-url> .
cd <your-project-folder>
