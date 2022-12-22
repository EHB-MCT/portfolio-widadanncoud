# Beating Heart
This webapp compares the different heartbeats that you can have in different situations. 


## Requirements 

Use the package manager [npm](https://www.npmjs.com/) to install all the requirements.
-   Packages
    - [dotenv](https://classic.yarnpkg.com/en/package/dotenv)
    - [express](https://classic.yarnpkg.com/en/package/exrpress)
    - [mysql2](https://classic.yarnpkg.com/en/package/mysql2)
    - [nodemon](https://classic.yarnpkg.com/en/package/nodemon)
-   Testing
    -   [jest](https://classic.yarnpkg.com/en/package/jest)

#
## Installation
## Install packages

```
npm i dotenv
npm i express
npm i mysql2
npm i nodemon
npm i jest
```
## Make containers
Run docker containers

```bash
docker-compose up --build
```

## Stop the System
Stopping all the running containers is also simple with a single command:

```bash
docker-compose down
````
If you need to stop and remove all containers, networks, and all images used by any service in docker-compose.yml file, use the command:

```bash
docker-compose down --rmi all
````
#
## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.
#
## License
[MIT](https://choosealicense.com/licenses/mit/)