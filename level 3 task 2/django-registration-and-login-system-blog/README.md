
# Django Registration and Login System with React Blog  
Created by **Zain Ul Abdin Ghani**

This web app is a full-featured **user registration and login system** built using Django and Bootstrap with a custom **cyan theme**. It includes a special **React Blog section** available only to authenticated users. The goal is to learn Django deeply and build a system that can be reused in larger projects.

---

## 🌟 Features

- ✅ **Register** – Create an account with username, email, and password
- 🔐 **Login** – Access your account using secure credentials
- 🌐 **Social Login** – Sign in via **GitHub** or **Google**
- 🧑‍💼 **User Profile** – Edit your profile, avatar, and bio
- 📝 **Update Profile** – Modify email, password, avatar, and personal info
- 🍪 **Remember Me** – Stay logged in with cookie-based session
- 🔁 **Forgot Password** – Recover your account via email reset
- ⚙️ **Admin Panel** – Admins can manage (CRUD) users via dashboard
- 📰 **React Blog Access** – Only visible to **logged-in users**

---

## 📰 React Blog Section

> Available only after login. If you're a guest, you won't see it.

This section explains the basics and strengths of **React JS** and **Redux**, styled with inline cyan-themed blocks.

```html
<!-- React Blog section -->
<div style="margin-top: 40px; background: #e0f7fa; padding: 25px; border-radius: 10px;">
  <h2 style="color: #007c91;">🌟 React JS: Modern Frontend Framework</h2>
  <p>
    React JS is a powerful JavaScript library developed by Facebook to build fast and interactive UIs. 
    Its component-based architecture and virtual DOM make modern web development efficient and scalable.
  </p>
  <p>
    Developers use <strong>Hooks</strong> like <code>useState</code> and <code>useEffect</code> to manage state in functional components. 
    This makes React easier to write and test.
  </p>
</div>

<div style="margin-top: 25px; background: #e0f2f1; padding: 20px; border-radius: 10px;">
  <h3 style="color: #006064;">⚙️ Redux: Managing State Effectively</h3>
  <p>
    Redux is a predictable state container for JavaScript apps. It centralizes state in a single store,
    making data flow more manageable and easier to debug.
  </p>
  <p>
    With middleware like <code>redux-thunk</code> or <code>redux-saga</code>, async logic becomes clean and maintainable.
    Redux pairs perfectly with React for building large, dynamic applications.
  </p>
</div>

<!-- Footer -->
<footer style="margin-top: 40px; padding: 15px; text-align: center; background: #b2ebf2; color: #004d40;">
  &copy; 2025 ZynWeb. All rights reserved.
</footer>
````

---

## 🚀 Quick Start (Run Locally)

Follow these steps to launch the project on your machine:

1. **Clone the project**

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

2. **Set up a virtual environment**

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. **Install dependencies**

```bash
pip install -r requirements.txt
```

4. **Run database migrations**

```bash
python manage.py migrate
```

5. **Create superuser (admin account)**

```bash
python manage.py createsuperuser
```

6. **Start the development server**

```bash
python manage.py runserver
```

7. Visit your app at:
   🌐 [http://localhost:8000/](http://localhost:8000/)

---

## 🎨 Theme & Design

* 🔷 **Cyan-gradient background** with soft shadows and rounded corners
* 🎨 Inline styling for simplicity (no extra CSS files required)
* ✅ Clean forms, buttons, and alert messages
* 🔒 Access control: only logged-in users see blog content

---

## 👤 Author

**Zain Ul Abdin Ghani**
A student of Django and frontend technologies, building reusable mini apps for larger systems.



## 📜 License

This project is open-source and licensed under the [MIT License](https://opensource.org/licenses/MIT).

```

