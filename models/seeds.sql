-- //Users table

<<<<<<< HEAD
insert into expenses.users(Password,createdAt,updatedAt) values ('Manu',Now(),Now());
insert into expenses.users(Password,createdAt,updatedAt) values ('Saryn',Now(),Now());
insert into expenses.users(Password,createdAt,updatedAt) values ('Amanda',Now(),Now());
insert into expenses.users(Password,createdAt,updatedAt) values ('David',Now(),Now());
=======
insert into expenses.users(UserId,Password,createdAt,updatedAt) values ('101', 'Manu',Now(),Now());
insert into expenses.users(UserId,Password,createdAt,updatedAt) values ('102', 'Saryn',Now(),Now());
insert into expenses.users(UserId,Password,createdAt,updatedAt) values ('103', 'Amanda',Now(),Now());
insert into expenses.users(UserId,Password,createdAt,updatedAt) values ('104', 'David',Now(),Now());
>>>>>>> 5d5d64483fab2bbee7c78a3d4df499525e05bda8

-- //Bill table

-- insert into expenses.bills(Bill_Id,Total_BillItems,BillExpense,BillDate,CreatedAt,UpdatedAt,UserUserId) values ('1','12','1000','2019-01-18',Now(),Now(),'100');
-- insert into expenses.bills(Bill_Id,Total_BillItems,BillExpense,BillDate,CreatedAt,UpdatedAt,UserUserId) values ('2','10','500','2019-01-18',Now(),Now(),'103');
-- insert into expenses.bills(Bill_Id,Total_BillItems,BillExpense,BillDate,CreatedAt,UpdatedAt,UserUserId) values ('3','15','300','2019-01-18',Now(),Now(),'102');
-- insert into expenses.bills(Bill_Id,Total_BillItems,BillExpense,BillDate,CreatedAt,UpdatedAt,UserUserId) values ('14','3','10','2019-01-18',Now(),Now(),'100');
-- insert into expenses.bills(Bill_Id,Total_BillItems,BillExpense,BillDate,CreatedAt,UpdatedAt,UserUserId) values ('9','10','90','2019-01-18',Now(),Now(),'101');

-- //items table

-- insert into expenses.items(Store,DOP,Price,Type,Category,createdAt,updatedAt,BillBillId) values ('Walmart','2019-01-18','1000','Need','Groceries',Now(),Now(),'1');
-- insert into expenses.items(Store,DOP,Price,Type,Category,createdAt,updatedAt,BillBillId) values ('BestBuy','2019-01-18','500','Want','Electronics',Now(),Now(),'2');
-- insert into expenses.items(Store,DOP,Price,Type,Category,createdAt,updatedAt,BillBillId) values ('Walmart','2019-01-18','300','Want','Accessories',Now(),Now(),'3');
-- insert into expenses.items(Store,DOP,Price,Type,Category,createdAt,updatedAt,BillBillId) values ('Costco','2019-01-18','10','Want','Gardening',Now(),Now(),'14');
-- insert into expenses.items(Store,DOP,Price,Type,Category,createdAt,updatedAt,BillBillId) values ('Walmart','2019-01-18','90','Need','Groceries',Now(),Now(),'9');