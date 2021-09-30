const express =require('express');
const app =express();
const port = 3000;
//const bodyParser = require('body-parser');
const courses = require('./data');
const { response } = require('express');
//const urlEncodedParser = bodyParser.urlencoded({extended: false});

app.set('views', 'views');
app.set('view engine', 'hbs');
app.set(express.static('public'));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', function (request , response){
    response.render('home');
})

/*app.post('/process-contacts' , urlEncodedParser, function(request, response)
{
    
    response.end('Thankyou '+ request.body.first_name + ' ' + request.body.last_name + request.body.major+' ');
})
*/
app.post('/courses',function(request,response)
{
    
    const found = courses.some((course)=> course.Id === request.body.listGroupRadios);
    console.log(found);
    if (found)
    {
        data = courses.filter((course)=> course.Id === request.body.listGroupRadios);
        console.log(data);
        response.render('courses',{data});
    }
    else
        {
            response.status(400).json({msg: 'Courses Not Found'});
         }
    console.log( courses);
    console.log(request.body.listGroupRadios);
})



app.listen(port);
console.log('Server is listening on port 3000');