# Backend Challenge
Create a RESTful API for a bookstore.
IMPORTANT:
● Bronze Level must be entirely completed.
Requirements:
Bronze level: Create a service for the bookstore.
1. It should be able to create, read, update and delete resources.
2. Service 1: Inventory.
2.1. Book author (first name and last name).
2.2. Book title.
2.3. Book stock in inventory.
3. Create two unit tests.
4. Create a public repo on github and upload your solution.

Gold level: Create a service for the bookstore orders
· Tasks:
··· Create an order.
··· List all orders.
Upload your solution to github.
 Details: 
···· Order’s structure:
······ Order product (book).
······ Order quantity (number of book copies ordered).
··· If you create an order for n copies of a book, you must delete n copies of this book in the inventory.
··· n > 0.
··· if you try to create an order for a book that EXCEED the number of copies available, then this order CAN'T be created.
··· There are no more restrictions.
Silver level:
· Create a unit test.
· Upload your solution to github.
