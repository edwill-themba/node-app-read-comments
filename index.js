// make the express framework to the app
const express = require('express');
// creates app an instance of express
const app = express();
// include connection files
const connection = require('./mysql_connection/conn');
// include view files
app.set('view engine', 'ejs');
//app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res) {
        const sql_query = 'SELECT * FROM comments order by comment_time DESC';
        connection.query(sql_query, function(error, data) {
            if (error) {
                console.log(error);
            } else {
                res.render((__dirname + '/views/index.ejs'), {
                    title: 'View Users Comments',
                    action: 'list',
                    data: data
                });
            }
        })
    })
    //listening to dynamic ports
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Port ${port} is listening...`));