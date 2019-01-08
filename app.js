const roe = require('@syncthetic/rest-on-express/app')
roe.set_route_directory(__dirname + '/routes')
roe.start_api()