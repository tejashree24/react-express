const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();

const port = 5000;

const SELECT_ALL_CUSTOMERS_QUERY = "SELECT * FROM customers";

const connection = mysql.createConnection({
	host:'localhost',
	user: 'root',
	password: 'password',
	database: 'test'
});

connection.connect( err =>{
	if(err){
		return err;
	}

});

// console.log(connection);
app.use(cors());

app.get('/',(req,res)=>{
	res.send('go to /customers to see customers')
	// res.json(customers);
});

//SELECT QUERY
app.get('/customers',(req,res)=>{
	connection.query(SELECT_ALL_CUSTOMERS_QUERY,(err,results)=>{
		if(err){
			return res.send(err)
		}
		else
		{
			return res.json({
				data:results
			})
		}
	});
	// res.send('in customers')
});

//INSERT QUERY
app.get('/customers/add',(req,res)=>{
	const {id,firstName} = req.query;

	const INSERT_CUSTOMERS_QUERY = `INSERT INTO customers(id,firstName) VALUES (${id},'${firstName}')`;
	connection.query(INSERT_CUSTOMERS_QUERY,(err,results)=>{
		if(err){
			return res.send(err)
		}
		else
		{
			return res.send('successfully added record!');
		}
	})

})

app.listen(port, ()=>{
	console.log(`Server running on port ${port}`);
});


// app.get('/api/customers', (req, res) => {
//   const customers = [
//     {id: 1, firstName: 'John', lastName: 'Doe'},
//     {id: 2, firstName: 'Brad', lastName: 'Traversy'},
//     {id: 3, firstName: 'Mary', lastName: 'Swanson'},
//   ];

//   res.json(customers);
// });

// app.get('/api/users', (req, res)=>{
// 	const users =[
// 		{id: 1, username: 'teju'},
// 		{id: 2, username: "payal"}
// 	];

// 	res.json(users);
// });

// const port = 5000;

// app.listen(port, () => `Server running on port ${port}`);