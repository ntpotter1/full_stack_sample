# Basic Full Stack Application

The very basic building blocks are provided to create the infrastructure for a web application containing:
* NodeJS with Express for the front end application server (including hooks into MongoDB)
* Java with Spring Boot and Maven for backend functionality
* MongoDB for the database - seeded with data on 200 residential homes

These 3 services are pulled together with docker and all start simultaneously with a single command. Feel free to use any, all, or none of the services as your team requires.

A hello world page is provided at http://localhost:3000. The page is served by the NodeJS Express layer and sends down basic HTML, CSS, and JS code. The JS code calls 2 RESTful apis from the browser using Ajax: (1) an endpoint served by NodeJS that pulls one property from MongoDB and (2) and endpoint served by Java that responds with plain text.

# Setup

Install Docker. Done.

# Running

* Start: `docker-compose up`
* Stop: `cmd + c`

# Development

While the application is running:
* NodeJS server is automatically restarted when a code change occurs
* Java server requires running `docker-compose restart java` in a new tab to rebuild

# Accessing the Server

* NodeJS: http://localhost:3000
* Java: http://localhost:8080
* MongoDB: http://localhost:27017 (db: tenx, collection: properties)

# What can you do with this?

* Property search, property detail, Google map mashup, or anything you can imagine.
* These are just a small build blocks to get you started quickly.
* Your Ten-X team guru will hack with you side by side.  Don't be shy ask them questions.

test
