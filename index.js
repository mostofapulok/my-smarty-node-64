const express = require('express');
var cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const users = [
    {id: 1, name: 'Shaba', email: 'shabana@gmail.com', phone: '01724305060'},
    {id: 2, name: 'Shabana', email: 'shabana@gmail.com', phone: '01724305060'},
    {id: 3, name: 'Shabana', email: 'shabana@gmail.com', phone: '01724305060'},
    {id: 4, name: 'Shabana', email: 'shabana@gmail.com', phone: '01724305060'},
    {id: 5, name: 'Shabana', email: 'shabana@gmail.com', phone: '01724305060'},
    {id: 6, name: 'Shabana', email: 'shabana@gmail.com', phone: '01724305060'},
    {id: 7, name: 'Shabana', email: 'shabana@gmail.com', phone: '01724305060'},
]

app.get('/', (req, res) =>{
    res.send('Hello from my Over Smarty Mostofa kamal Pant!!')
});

app.get('/users', (req, res) =>{
    //console.log('query', req.query);
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(matched);
    }
    else{
        res.send(users)
    }
    
});

app.get('/user/:id', (req, res) =>{
    console.log(req.params);
    const id = req.params.id;
    // const user = users[id];
    const user = users.find(u => u.id ==id);
    res.send(user)
});

app.post('/user', (req, res) => {
    console.log(req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, () =>{
    console.log('Listening to port', port)
})
 