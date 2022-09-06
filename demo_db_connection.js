var mysql = require('mysql');

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "password",
  database:"mydb"
});

/**========================== db connection =============================*/

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

/**========================= create db ================================ */

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected With DB !");
//     con.query("CREATE DATABASE mydb", function (err, result) {
//       if (err) throw err;
//       console.log("Database created successfully");
//     });
//   });


  /**=========================== create db table =============================*/

//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table created");
//     });
//   });

  /**============================= Mysql Insert =====================================*/

//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("1 record inserted");
//     });
//   });



/**============================== Mysql Multiple data insert ==========================================*/

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO customers (name, address) VALUES ?";
    var values = [
      ['John', 'Highway 71'],
      ['Peter', 'Lowstreet 4'],
      ['Amy', 'Apple st 652'],
      ['Hannah', 'Mountain 21'],
      ['Michael', 'Valley 345'],
      ['Sandy', 'Ocean blvd 2'],
      ['Betty', 'Green Grass 1'],
      ['Richard', 'Sky st 331'],
      ['Susan', 'One way 98'],
      ['Vicky', 'Yellow Garden 2'],
      ['Ben', 'Park Lane 38'],
      ['William', 'Central st 954'],
      ['Chuck', 'Main Road 989'],
      ['Viola', 'Sideway 1633']
    ];
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });
  });