# 💸 Expense Tracker App

A simple, clean **Expense Tracker** built with **Expo + React Native**. It helps you add, view, and manage your expenses — locally. No backend needed, just fast and offline.

---

## 🚀 Features

- Add new expenses with description, amount, and date  
- View recent transactions  
- See your weekly total spending  
- Delete expenses you regret 😅  
- Responsive — works on Android and iOS  

---

## 📚 What I Learned

- 🧠 **Context API** for global state management across screens  
- 🧭 **React Navigation** with stack + bottom tabs  
- 💡 Component-based architecture and reusable UI  
- 🔥 *(Side quest)* Tried Firebase for storing expenses, but for this use case it was kinda overkill — Context handled it better  

---

## 🛠️ Tech Stack

<table>
  <thead>
    <tr>
      <th>Tech</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Expo</td>
      <td>For easy React Native development</td>
    </tr>
    <tr>
      <td>React Native</td>
      <td>Core framework</td>
    </tr>
    <tr>
      <td>Context API</td>
      <td>For local state management</td>
    </tr>
    <tr>
      <td>React Navigation</td>
      <td>Screen navigation</td>
    </tr>
    <tr>
      <td>TypeScript</td>
      <td>Strongly typed components</td>
    </tr>
  </tbody>
</table>

---

## 🖼️ Screenshots

<img width="315" height="560" alt="Expense Tracker Screenshot" src="https://github.com/user-attachments/assets/9bfead4e-7c13-4f7f-aa87-246c53ac7cc3" />
<img width="315" height="560" alt="Expense Tracker Screenshot" src="https://github.com/user-attachments/assets/787ed896-5a96-4a45-8ce4-023ea5fb7d7b" />
<img width="315" height="560" alt="Expense Tracker Screenshot" src="https://github.com/user-attachments/assets/e92482ee-bb5b-4de1-bedc-e3a399e22a35" />
<img width="315" height="560" alt="Expense Tracker Screenshot" src="https://github.com/user-attachments/assets/21dda143-7107-422b-9395-cbdb3406825c" />
<img width="315" height="560" alt="Expense Tracker Screenshot" src="https://github.com/user-attachments/assets/72393f4d-f5d2-41db-9835-71e5d6a74a86" />
<img width="315" height="560" alt="Expense Tracker Screenshot" src="https://github.com/user-attachments/assets/d362db06-f104-452e-83e4-341c28c3a407" />

---

## 🧪 Run It Locally

```
git clone https://github.com/gyawaliaadim/ExpenseTracker-MobileApp.git
cd ExpenseTracker-MobileApp
npm install
npx expo start
```
Make sure you have Expo Go installed on your phone to run it!

## 🧠 Thought Process
Originally planned to use Firebase for persistent data, but realized that for a local-first app like this, Context API was enough. Firebase added complexity without much benefit for now. Might revisit if I ever want cross-device syncing.

## 🤙 Credits
Made with love, logic, and a few bugs I had to Google my way out of.
Built by @gyawaliaadim
