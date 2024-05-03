<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->


<h3 align="center">React-Portfolio</h3>

  <p align="center">
    This is a project used to combining all my knowledge learned till date for developing web apps.
    <br />
    This project is a ReactJS with multiple REST API's integrations with Cascaded Style Sheets(.css) for Styling.
    <br />
    It is used to track portfolio performance in comparision to set goals beyond the requirements of the assignment, so I can easier track it.
    <br />
    <br />
    <a href="https://github.com/dineshrj98/react-portfolio/issues">Report Bug</a>
    ·
    <a href="https://github.com/dineshrj98/react-portfolio/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
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
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This project started as a project for the unit[IFN666 - Mobile and Web Application Developemnt](https://www.qut.edu.au/study/unit?unitCode=IFN666) but since it is a project I build for personal use I continue to develop it.
<br />
**So let it be clear that this is a slow work in progress and I will work on it still although slowly.**

<br />
This portfolio tracker is consistent of three individual parts.
 
 * Client Side Routing
 * API Integration ([GitHubAPI](https://docs.github.com/en/rest/using-the-rest-api/getting-started-with-the-rest-api) , [KanyeAPI](https://kanye.rest/), [DummyjsonAPI](https://dummyjson.com/))
 * CSS Styling
 * Error Handling
 
This was a concious choice so in the future I can come back, improve or re-build any of these three parts without affecting the other two.
The *Client Side Routing * is done by a .jsx script that makes use of *react-router-dom* package which is then integrated to all development files to make the page performance efficient for SPA's(Single Page Applications) .
The API's are populated around the page as the middleware and is build with help of the *FetchAPI* and external package called *axios* which offers asychronous capabilities while fetching data to populated and load pages with the obtained data.
The .CSS frontend  adds some nice visuals.
The Error Handling  
<br />
The project allows you to view your repositories from GitHub in the Web App itself. All the public repositoris are available in  page view for you to navigate within the application. Further, as i love to cook, I have added a recipe Search Bar which beutifully populated the recipe which you search for from a DummyAPI. The same code can be reused to fetch products, quotes, tec which are a part of the API offering. 


<p align="right">(<a href="#top">back to top</a>)</p>





### Built With

* [VScode](https://code.visualstudio.com/)
* [ReactJS](https://react.dev/)
* [Git](https://git-scm.com/downloads)
* [Google Chrome](https://www.google.com/chrome/)



<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how can get the whole thing up and running on your *local* machine.
To get a local copy up and running follow these simple example steps.

### Prerequisites
 * [Node.JS](https://nodejs.org/en)
 * [NPM Packages](https://www.npmjs.com/)

### Installation
1. Clone the repo of the branch you want.
   ```sh
   git clone https://github.com/dineshrj98/react-portfolio.git
   ```

2. Open a vscode and navigate to the folder where you cloned the repo and make a virtual environment.
   ```sh
      cd ./react-portfolio
   ```
   Activate and install all requirements which will automatically install from package-lock.json
   
   ```sh
      npm install 
   ```
   Now you should have all requirements installed that are needed for the project.

6. Now you just have to start the application.
   ```sh
      npm start  
   ```

   Now you should be able to see a browser window popping up with localhost:3000 (for the frontend)


<p align="right">(<a href="#top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [x] Initialize Repo
- [x] Working Application 
- [ ] Publish Project
    - [x] Use .JSX for sturcture
    - [x] Use React fucntional compoents
    - [x] Use Client Side Routing
    - [x] Integrate REST API's and Fetch Operations
    - [x] Styling using .CSS
    - [x] Integrate maps
    - [x] Error Handling and Custom Error Pages
    - [x] Use Custom Hooks
- [x] Tested Enviroment
- [ ] Improve User Interface
- [ ] Implement Blog viewing Features



    
See the [open issues](https://github.com/dineshrj98/react-portfolio/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT Open Source License. See `LICENSE.md` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Dinesh Ezhil - dino360@duck.com

Project Link: [https://github.com/dineshrj98/react-portfolio](https://github.com/dineshrj98/react-portfolio)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* All my professors and Tutors from QUT
<p align="right">(<a href="#top">back to top</a>)</p>

