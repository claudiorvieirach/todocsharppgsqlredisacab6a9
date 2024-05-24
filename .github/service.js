var Service = require('node-windows').Service;

var svc = new Service({
        name: 'SASC',
        script: 'E:\\sasc-master\\app.js'
});
svc.on('install',function(){
    svc.start();
});

svc.install();