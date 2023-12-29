<br/>

<p align=center>
    <img width=125 src='./docs/logo.png'/>
</p>

<h1 align=center>SWeather+</h1>

<p align=center>
    <a href='https://sweather-plus.vercel.app/'>sweather-plus.vercel.app</a>
    <br/><br/>
    <img height=30 src='https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white'>
    &nbsp;
    <img height=30 src='https://img.shields.io/badge/Express-303030?style=for-the-badge&logo=express&logoColor=white)](https://github.com/gabriel-dp?tab=repositories&q=Express'>
    &nbsp;
    <img height=30 src='https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=20232A'>
    &nbsp;
    <img height=30 src='https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white'>
    &nbsp;
    <img height=30 src='https://img.shields.io/badge/PWA-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white%'>
    &nbsp;
    <img height=30 src='https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white'>
</p>

&nbsp;

<p align=center>
    <img width=70% src='./docs/mockup-desktop.png'>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <img width=15% src='./docs/mockup-mobile.png'>
</p>

&nbsp;

## 💡 Motivation

> The name "SWeather" comes from "Styled Weather" and represents the idea of creating an alternative way to show the weather forecast, being special to the user experience.
>
> With smooth transitions and animations that vary according to the weather, the app is very intuitive, making it possible to navigate between time intervals from the past to the future.
>
> Try it yourself!

&nbsp;

This project is a remake of the previous [SWeather](https://github.com/gabriel-dp/SWeather), with the same goal, but with many additional features.

The reason to develop a whole app again is simple, learn more and improve my programming skills.

Using TypeScript with React and Express, the new app is better for the user and the developer, with easier maintenance and bug fixing.

&nbsp;

## ✨ Features

- 🔍 Search weather by name of any city in the world or by user location

- 🎚 Time slider to see the weather for the day [-6h in the past, +6h in the future]

- 🌙 Day/Night animations with moonphases

- 🌧 Precipitation animations (Rain, Freezing Rain, Sleets and Snow)

- 📲 PWA (Progressive Web App) support

&nbsp;

## ⚙️ APIs

This is a non-commercial and non-profit project, all data used is aimed at learning more about APIs usage and Front-end development.

### ⛅ Weather

All weather data comes from **_Tomorrow.io_**, a great Weather API.

> [Access the official website](https://www.tomorrow.io)
>
> [Access the official repository](https://github.com/tomorrow-io-API)

### 📌 Location

The location data is provided by **_OpenWeather_**.

> [Access the official website](https://openweathermap.org/)

&nbsp;

## 🖥️ Running the project

As said before, this app uses two public APIs do get data from local and weather, so you must have the keys and provide them to the server using a `.env` in `server` folder:

```env
PORT=8080
TOMORROWIO_API_KEY="~"
OPENWEATHER_API_KEY="~"
```

The client needs to know the URL to request data. This is also provided using a `.env`, but in `client` folder:

```env
VITE_API_URL="http://localhost:8080"
```
