var Hapi = require('hapi');
var HapiReactViews = require('hapi-react-views');


var server = new Hapi.Server();
server.connection({ port: 9090 });
server.views({
    engines: {
        jsx: HapiReactViews
    },
    path: './'
});


server.render('view', {}, function (err, output) {

    console.log(output);
});


server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {

        reply.view('view');
    }
});


server.start();
