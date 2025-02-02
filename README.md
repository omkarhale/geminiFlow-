# Chatbot using Gemini API with Spring Boot & React

## 📌 Project Overview
This project is a **Chatbot** built using **Google's Gemini API** with **Spring Boot** for the backend and **React** for the frontend. The chatbot processes user input, sends it to Gemini AI, and returns intelligent responses.

## 🛠️ Technologies Used
### **Backend (Spring Boot)**
- Java & Spring Boot
- Spring Web
- Spring Boot Starter JSON
- Google Gemini API

### **Frontend (React.js)**
- React with Vite
- Tailwind CSS
- Fetch API for API calls

## 📂 Project Structure
```
/chatbot-gemini
   ├── backend/         # Spring Boot backend
   │   ├── src/main/java/com/example/chatbot
   │   │   ├── controller/    # Handles API requests
   │   │   ├── service/       # Business logic
   │   │   ├── model/         # Data models
   │   ├── resources/
   │   │   ├── application.properties  # API keys & configurations
   │   ├── pom.xml          # Maven dependencies
   │
   ├── frontend/        # React frontend
   │   ├── src/
   │   │   ├── components/   # React components
   │   │   ├── App.js        # Main React component
   │   ├── package.json      # Dependencies
   │   ├── vite.config.js    # Vite configuration
```

## 🚀 Setup & Installation

### **Backend Setup (Spring Boot)**
1. Clone the repository:
   ```bash
   git clone https://github.com/omkarhale/geminiFlow-.git
   cd chatbot-gemini/backend
   ```
2. Add your **Gemini API Key** in `application.properties`:
   ```properties
   gemini.api.key=YOUR_GEMINI_API_KEY
   ```
3. Build and run the Spring Boot application:
   ```bash
   mvn spring-boot:run
   ```

### **Frontend Setup (React.js)**
1. Navigate to the frontend folder:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm run dev
   ```

## 🔥 How It Works
1. User inputs a question in the React UI.
2. The frontend sends the input to the Spring Boot backend.
3. The backend calls the Gemini API and fetches a response.
4. The response is displayed on the frontend.

## 📌 API Endpoints
| Method | Endpoint          | Description |
|--------|------------------|-------------|
| POST   | `/api/chat`       | Sends user input to Gemini API and returns response |

⭐ *Star this repository if you found it useful!*

