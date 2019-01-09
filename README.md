# ElectronAutoUpdateAPI
> Quick start a MongoDB REST API for your applications. This API can be used to trigger automatic updates and more

 This repository was created along side the following repositories to streamline Electron application updates.
 
 >  [ElectronAutoUpdate](https://github.com/Syncthetic/ElectronAutoUpdate) - Use this NPM module inside your Electron application with this API to fetch application version information, download links, or more.

> [ElectronAutoUpdateClient](https://github.com/Syncthetic/ElectronAutoUpdateCLient) - If you use MongoDB Stitch for your application, you can simply login with this application to manage all of your applications. i.e, change version information which causes applications using ElectronAutoUpdate to fire events if it's outdated.

# Getting Started
Clone the repository

`git clone https://github.com/Syncthetic/ElectronAutoUpdateAPI`

Install dependant packages
`cd ElectronAutoUpdateAPI && npm i`

This packages relies on [RestOnExpress](https://github.com/Syncthetic/RestOnExpress), so ensure that you set the ROE (RestOnexpress) environment variables for the mongo connection, application URI base, and port.

| Environment Variable | Value                                         | Default Value |
|-                     | -                                             | -             |
| `ROE_DB_CONNECTION`  | `<mongodb+srv://<username>:<password>@<host>` |               |
| `ROE_DB_NAME`        | `<name of the datbase>`                       |               |
| `ROE_COLLECTIONS`    | `<collection1:collection2:...>`               |               |
| `ROE_PORT`           | `<application listening port>`                | `3000`        |
| `ROE_API_BASE`       | `<the base reference to the API>`             | `/api`        |


If your environment variables are set, start the API service with `node app.js`
Another option is to enter the environment variables when invoking the application
```
ROE_DB_CONNECTION="mongodb+srv://myusername:secretpass@myhost.com" \
ROE_DB_NAME="orders" \
ROE_COLLECTIONS="products" \
ROE_PORT="80" \
node app.js
```
# Resource Requests
Sending API requests:

`http://<server>:<ROE_PORT>/<ROE_API_BASE>/<desired route path>`

> The application comes with two available resources by default
> Return all applications

`GET /api/applications`

> Return information for a single application

`GET /api/application/app-name`

# Todo
- Create deeper resources for application information

  > `GET /api/application/app-name/version`
  > `GET /api/application/app-name/download`