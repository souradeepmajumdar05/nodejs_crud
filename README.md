# noteable

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Prerequisites](#prerequisites)
- [Usage](#usage)



## About <a name = "about"></a>

Introduces to CRUD in nodejs for a note app

## Getting Started <a name = "getting_started"></a>

You can run this app straight from vs code debug or by using the npm commands
```npm run start```

```npm run dev```

### Prerequisites

have docker installed

run:
```
docker pull mongo

docker run -d --name mongodb-container -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=nodeapp -e MONGO_INITDB_ROOT_PASSWORD=FhSnzHfA4I5A4QYp mongo

```

update db.js with your config

```
mongodb://nodeapp:FhSnzHfA4I5A4QYp@localhost:27017/?retryWrites=true&w=majority

```

you can use vs code mongo extension to check the DB

## Usage <a name = "usage"></a>

This a quick go through of nodejs,express, mongodb and CRUD