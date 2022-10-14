[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
<br />

<div align="center">

<h3 align="center">House marketplace</h3>

  <p align="center">
    Find and list homes for sale or for rent.
    <br />
    <br />
    <br />
    <a href="https://house-marketplace-r-szostak.vercel.app">View Demo</a>
    ·
    <a href="https://github.com/r-szostak/house-marketplace/issues">Report Bug</a>
    ·
    <a href="https://github.com/r-szostak/house-marketplace/issues">Request Feature</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]]https://house-marketplace-r-szostak.vercel.app)

An application that allows you to add and find houses and apartments for sale or for rent. Written using React / Firebase, the app allows you to create accounts and log in, including using a google account.

<strong>Mobile-First design</strong>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![React][react.js]][react-url] [![Firebase][firebase]][firebase-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Geolocation

The listings use Google geocoding to get the coords from the address field. You need to either rename .env.example to .env and add your Google Geocode API key OR in the CreateListing.jsx file you can set geolocationEnabled to "false" and it will add a lat/lng field to the form.

### Prerequisites

- npm
  ```sh
  npm install
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/r-szostak/house-marketplace.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter your API key in `.env` file
   ```js
   const REACT_APP_GEOCODE_API_KEY = "ENTER YOUR API"
   ```

### Run

```sh
npm start
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Rafał Szostak - rafal.szostak2@gmail.com
[![LinkedIn][linkedin-shield]][linkedin-url]

Project Link: [https://github.com/r-szostak/house-marketplace](https://github.com/r-szostak/house-marketplace)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[forks-shield]: https://img.shields.io/github/forks/r-szostak/house-marketplace.svg?style=for-the-badge
[forks-url]: https://github.com/r-szostak/house-marketplace/network/members
[stars-shield]: https://img.shields.io/github/stars/r-szostak/house-marketplace.svg?style=for-the-badge
[stars-url]: https://github.com/r-szostak/house-marketplace/stargazers
[issues-shield]: https://img.shields.io/github/issues/r-szostak/house-marketplace.svg?style=for-the-badge
[issues-url]: https://github.com/r-szostak/house-marketplace/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/rsz/
[product-screenshot]: src/assets/jpg/preview.png
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[firebase]: https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=2C384A
[firebase-url]: https://firebase.com
