const https = require('https');
https.get('https://api.github.com/users', function(users) {
/* Display all users */
    console.log(users);
    https.get('https://api.github.com/repos/javascript/contributors?q=contributions&order=desc', function(contributors) {
/* Display all top contributors */
        console.log(contributors);
        https.get('https://api.github.com/users/Jhon', function(userData) {
    /* Display user with username 'Jhon' */
            console.log(userData);
        });
    });
});
