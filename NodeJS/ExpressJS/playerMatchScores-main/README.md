<<<<<<< HEAD
# Player Match Scores

Given two files `app.js` and a database file `cricketMatchDetails.db` consisting of three tables `player_details`, `match_details` and `player_match_score`.

Write APIs to perform operations on the tables `player_details`, `match_details` and `player_match_score` containing the following columns,

**Player Details Table**

| Column    | Type    |
| ---------- | ------- |
| player_id   | INTEGER |
| player_name | TEXT    |

**Match Details Table**

| Column    | Type    |
| ---------- | ------- |
| match_id   | INTEGER |
| match | TEXT    |
|year|INTEGER|

**Player Match Score Table**

| Column    | Type    |
| ---------- | ------- |
| player_match_id   | INTEGER |
| player_id | INTEGER    |
|match_id|INTEGER|
|score|INTEGER|
|fours | INTEGER |
|sixes | INTEGER |

### API 1

#### Path: `/players/`

#### Method: `GET`

#### Description:

Returns a list of all the players in the player table

#### Response

```
[
  { 
    playerId: 1,
    playerName: "Ram"
  },

  ...
]
```

### API 2

#### Path: `/players/:playerId/`

#### Method: `GET`

#### Description:

Returns a specific player based on the player ID

#### Response

```
{ 
  playerId: 2,
  playerName: "Joseph"
}
```

### API 3

#### Path: `/players/:playerId/`

#### Method: `PUT`

#### Description:

Updates the details of a specific player based on the player ID

#### Request

```
{
  "playerName": "Raju"
}
```

#### Response

```
Player Details Updated
```



### API 4

#### Path: `/matches/:matchId/`

#### Method: `GET`

#### Description:

Returns the match details of a specific match

#### Response

```
{ 
  matchId: 18,
  match: "RR vs SRH",
  year: 2011
}
```

### API 5

#### Path: `/players/:playerId/matches`

#### Method: `GET`

#### Description:

Returns a list of all the matches of a player

#### Response

```
[
  { 
    matchId: 1,
    match: "SRH vs MI",
    year: 2016
  },

  ...
]
```


### API 6

#### Path: `/matches/:matchId/players`

#### Method: `GET`

#### Description:

Returns a list of players of a specific match

#### Response

```
[
  { 
    playerId: 2,
    playerName: "Joseph"
  },
  ...
]
```



### API 7

#### Path: `/players/:playerId/playerScores`

#### Method: `GET`

#### Description:

Returns the statistics of the total score, fours, sixes of a specific player based on the player ID

#### Response

```
{
  playerId: 1,
  playerName: "Ram"
  totalScore: 3453,
  totalFours: 342,
  totalSixes: 98
}

```

<br/>

Use `npm install` to install the packages.

**Export the express instance using the default export syntax.**

**Use Common JS module syntax.**
=======
# ✨ My Coding Journey

Welcome to my **Coding Journey Repository** 👨‍💻  
This repo is a collection of my **learning path, projects, and experiments** as I work towards becoming a **skilled Full Stack Developer** and achieving my career goals.

---

## 📌 About
This repository tracks:
- 🚀 My learning roadmap (JavaScript → SQL → MERN → Python)
- 📂 Hands-on projects (Frontend, Backend, Full Stack, Python, SQL)
- 🧠 Daily practice in **DSA & problem-solving**
- 🎯 My growth and progress toward landing a **20+ LPA developer role**

---

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript, React.js, Bootstrap, Flexbox, Media Queries  
- **Backend**: Node.js, Express.js  
- **Database**: MySQL, MongoDB  
- **Programming**: Python, Java (for DSA)  
- **Other**: Git, GitHub, Responsive Web Design  

---

## 🚀 Current Roadmap

1. ✅ Complete **Responsive Web Design projects**  
2. ✅ JavaScript fundamentals + projects  
3. ⏳ SQL projects (Student/Health Management Systems)  
4. 🔜 MERN full-stack projects (Expense Tracker, Blog App, Auth System)  
5. 🔜 Python projects (Chatbot, Word Cloud, Personal Assistant)  
6. 🔜 DSA practice (150+ problems in Java/Python)  

---

## 📸 Projects Highlight

- 📝 **To-Do List App** (HTML, CSS, JS)  
- 🔖 **Bookmark Maker** (HTML, CSS, JS)  
- ⏱️ **Speed Typing Test** (HTML, CSS, JS)  
- 📚 **Library Management System** (SQL + JS)  
- 🌤️ **Weather App** (API + JS)  
- 💸 **Expense Tracker** (MERN Full Stack – in progress)  

---

## 📈 Goals

- 🏆 Master JavaScript, SQL, MERN, and Python  
- 📚 Solve **150+ DSA problems**  
- 💼 Land a **10–20 LPA Developer Role** before March 2026  
- ✨ Build a strong **portfolio & GitHub presence**  

---






>>>>>>> 7bd00f2a339f04a06804ff431773dd8f63e0f85a
