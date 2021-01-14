// Java syntax at a basic level

// Solid understanding of object oriented principles (important)  //

// Value vs reference in Java //

//    - When you pass a primitive value (int, byte, short, long, float, double, boolean, and char) into a function as an argument,
//      you make a copy of it and the original variable is unaffected when you pass an object
//    - When you pass an object into the function, you're passing just a reference and if you change that object
//      in that function, it is also changed as well

// Hashtables and other collections, use and understanding //

// Basic thread concepts, basic thread concurrency, locking, etc //

  // Concurrency: In simple words, concurrency is the ability to run several programs or several parts of a program
  //    in parallel. A Java application runs by default in one process. ...
  //    Within a Java application you can work with many threads to achieve parallel processing or concurrency.
//  - Java thread is like a virtual CPU that can execute inside your java app
    // -A thread is actually a lightweight process. Unlike many other computer languages,
    // Java provides built-in support for multithreaded programming. A multithreaded program
    // contains two or more parts that can run concurrently. Each part of such a
    // program is called thread and each thread defines a separate path of execution.

//!! There are FOUR ways to specify how code should run:
    // 1) Create a class which extends the thread class then override the run method
    // 2) Create a class where runnable interface then pass an instance of the runnable to the constructor. Then when it is started,
        // it would run the method of that runnable implementation
    // 3) Create an anonymous implementation of the runnable interface which is similar to creating a class
        // that implements the runnable interface
    // 4) Create a java LAMP expression which also implements the runnable interface

// Web security concepts and gotchas //

// REST API concepts //

// Basic of SQL libraries in Java and basic use //
//   https://www.marcobehler.com/guides/java-databases
//   it connects your Java application to a database
//   example... to connect to your database and generate Java classes that model your database tables and columns.
//   JDBC, Hibernate, JPA, jOOQ, Spring Data and more.
//       jOOQ - generates Java code from your database and lets you build type safe SQL queries through its fluent API.

// T-SQL queries (selects, joins, etc) //
    // - Transact-SQL is Microsoft's and Sybase's proprietary extension to the SQL used to interact with relational databases

// Basic front-end programming concepts (HTML, JS, etc) //
