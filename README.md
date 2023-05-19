# E-commerce using MySQL and Sequelize

## Description

This is an e-commerce applications that allows users to see the products in the store by connecting to a database using sequelize. The user can see all categories, all products, and all tags. They can also create, update, and delete a new category, product, or tag.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

This application does not need isntalation, can be used from the command terminal.


## Usage

Once the command terminal is open, use the following command to start the database.

````
mysql -u root -p
````
After this, press Enter and type the SQL password.

Then, SOURCE the database by using the next command:

````
SOURCE ./db/schema.sql;
````
After this, exit MySQL by typing exit or quit. Then, use the following command to seed the database:
````
npm run seed
````
All the steps above need to be done only once, after that, every new use does not neeed that process any longer.

After that, the following command will start the server.

````
npm start
````


This is a [video](https://youtu.be/O4da3I3iEVM) example of use.



## Credits

This project was made with help of the class materials and tutors.

## License

MIT License

Copyright (c) [2023] [TenshiAngelina]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.