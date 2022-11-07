<br />
<p align="center">
  <h3 align="center">Learning Platform</h3>

  <p align="center">
    A SPA platform for managing training and courses made with Svelte.
    <br />
    <br />
    <a href="https://github.com/xandao-dev/learning-platform"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://github.com/xandao-dev/learning-platform/issue">Report Bug</a>
    ·
    <a href="https://github.com/xandao-dev/learning-platform/issues">Request Feature</a>
  </p>
</p>


<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
	<li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
	<li><a href="#acknowledgements">Acknowledgements</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

<div align="center">
  <a href="https://github.com/xandao-dev/learning-platform">
    <img src="public/website.gif" alt="Um GIF navegando entre as páginas do learning platform">
    <img src="public/mockup.png" alt="Um mockup mostrando todas as páginas do learning platform">
  </a>
</div>

Figma Mockup: [learning-platform](https://www.figma.com/file/YDOwfyVz4tPOQ041BS4mh0/Learning-Platform)

### Features

* Create/Edit/Delete courses
* Create/Edit/Delete modules
* Create/Edit/Delete lessons
* Update user profile

### Built With

* [Svelte](https://svelte.dev/) - A lightweight framework for building interactive UIs
* [Vite](https://vite.dev/) - A static compiler for Svelte
* [Svelte Navigator](https://github.com/mefechoel/svelte-navigator) - A Svelte SPA router plugin
* [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript
* [uuid](https://github.com/uuidjs/uuid) - A library for generating UUIDs


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/xandao-dev/learning-platform.git
   ```
2. Install dependencies
   ```sh
	cd learning-platform
	npm install # or yarn install
	```

<!-- USAGE EXAMPLES -->
## Usage

* Starts the development server
	```sh
  npm run dev # or yarn dev
  ```
* Launch production server
  ```sh
  npm run build # or yarn build
  npm run preview # or yarn preview
  ```

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/xandao-dev/learning-platform/issues) for a list of proposed features (and known issues).


## Acknowledgements

* EC2 is not the best option for a static SPA, we should migrate to S3 + CloudFront
* It's using docker under the hood to run the server on production, it's not that necessary for a static site, but it's done
* The docker images are stored in the [Docker Hub](https://hub.docker.com/r/xandao6/learning-platform)
* Configs and logs are addressed to docker volumes specified in the docker-compose.yml file at production folder
* There are no secrets in the code, but if we need it we should use docker secrets
* The website is not optimized for mobile devices yet

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See [LICENSE](./LICENSE.md) for more information.

Free software =)


<!-- CONTACT -->
## Contact

Alexandre Calil - [Linkedin](https://www.linkedin.com/in/xandao-dev/) - [alexandre@xandao.dev](mailto:alexandre@xandao.dev)

Project Link: [https://github.com/xandao-dev/learning-platform](https://github.com/xandao-dev/learning-platform)
