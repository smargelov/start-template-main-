module.exports = function () { 
    
    var smartgrid   = require('smart-grid');
    
        var settings = {
            outputStyle: 'sass',
            columns: 12, 
            offset: '30px',
            mobileFirst: false, 
            container: {
                maxWidth: '1200px', 
                fields: '15px'
            },
        };
        
    smartgrid('./src/static/sass/bin', settings);  

 }


