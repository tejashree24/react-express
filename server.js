const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers);
});

app.get('/api/users', (req, res)=>{
	const users =[
		{id: 1, username: 'teju'},
		{id: 2, username: "payal"}
	];

	res.json(users);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);