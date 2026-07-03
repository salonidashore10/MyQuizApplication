const quizData = {
  C: {
    basicQues: [
      {
        question: "Which symbol is used to end a statement in C?",
        options: [":", ";", ",", "."],
        answer: ";",
      },
      {
        question: "Which function is used to print output in C?",
        options: ["scanf()", "input()", "printf()", "display()"],
        answer: "printf()",
      },
      {
        question: "Which header file is required for printf()?",
        options: ["math.h", "stdio.h", "string.h", "conio.h"],
        answer: "stdio.h",
      },
      {
        question: "Which keyword is used to declare an integer variable?",
        options: ["float", "char", "int", "double"],
        answer: "int",
      },
      {
        question: "Which operator is used for assignment?",
        options: ["==", "=", "!=", ">="],
        answer: "=",
      },
      {
        question: "What is the size of char in C?",
        options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
        answer: "1 byte",
      },
      {
        question: "Which loop executes at least once?",
        options: ["for", "while", "do-while", "None"],
        answer: "do-while",
      },
      {
        question: "Which symbol is used for single-line comments?",
        options: ["##", "//", "/*", "**"],
        answer: "//",
      },
      {
        question: "Which data type stores decimal numbers?",
        options: ["int", "char", "float", "void"],
        answer: "float",
      },
      {
        question: "Which function is used to take input from the user?",
        options: ["scanf()", "printf()", "gets()", "puts()"],
        answer: "scanf()",
      },
    ],

    mediumQues: [
      {
        question: "Which operator is used for comparison?",
        options: ["=", "==", "+=", "%"],
        answer: "==",
      },
      {
        question: "Which keyword is used to define a constant?",
        options: ["static", "const", "final", "fixed"],
        answer: "const",
      },
      {
        question: "Which loop is best when the number of iterations is known?",
        options: ["while", "do-while", "for", "switch"],
        answer: "for",
      },
      {
        question: "Which function returns the length of a string?",
        options: ["size()", "count()", "strlen()", "length()"],
        answer: "strlen()",
      },
      {
        question: "Which operator gives the remainder after division?",
        options: ["/", "%", "*", "//"],
        answer: "%",
      },
      {
        question: "Arrays in C start with which index?",
        options: ["0", "1", "-1", "Depends on compiler"],
        answer: "0",
      },
      {
        question: "Which statement is used to exit a loop?",
        options: ["continue", "stop", "break", "return"],
        answer: "break",
      },
      {
        question: "Which function compares two strings?",
        options: ["strcmp()", "strcpy()", "strcat()", "strlen()"],
        answer: "strcmp()",
      },
      {
        question:
          "Which keyword is used to define a function that returns no value?",
        options: ["int", "null", "void", "empty"],
        answer: "void",
      },
      {
        question: "Which operator is called the logical AND operator?",
        options: ["&", "&&", "||", "!"],
        answer: "&&",
      },
    ],

    advanceQues: [
      {
        question:
          "Which symbol is used to access the value stored at a pointer?",
        options: ["&", "*", "->", "%"],
        answer: "*",
      },
      {
        question: "Which operator returns the address of a variable?",
        options: ["*", "&", "%", "@"],
        answer: "&",
      },
      {
        question: "Which function is used to dynamically allocate memory?",
        options: ["malloc()", "alloc()", "new", "callocMem()"],
        answer: "malloc()",
      },
      {
        question:
          "Which storage class keeps a variable's value between function calls?",
        options: ["auto", "register", "static", "extern"],
        answer: "static",
      },
      {
        question:
          "Which keyword allows access to a global variable declared in another file?",
        options: ["static", "register", "extern", "auto"],
        answer: "extern",
      },
      {
        question: "Which function releases dynamically allocated memory?",
        options: ["delete()", "release()", "free()", "remove()"],
        answer: "free()",
      },
      {
        question:
          "Which operator is used to access structure members through a pointer?",
        options: [".", "::", "->", "*"],
        answer: "->",
      },
      {
        question: "Which function is used to open a file in C?",
        options: ["fileopen()", "fopen()", "openfile()", "createfile()"],
        answer: "fopen()",
      },
      {
        question:
          "Which function moves the file pointer to a specified position?",
        options: ["rewind()", "fseek()", "ftell()", "fclose()"],
        answer: "fseek()",
      },
      {
        question:
          "Which preprocessor directive is used to include a header file?",
        options: ["#define", "#include", "#ifdef", "#pragma"],
        answer: "#include",
      },
    ],
  },

  Cpp: {
    basicQues: [
      {
        question:
          "Which of the following is the correct header file for input and output in C++?",
        options: ["<stdio.h>", "<iostream>", "<stdlib.h>", "<string.h>"],
        answer: "<iostream>",
      },
      {
        question: "Which keyword is used to declare a class in C++?",
        options: ["object", "class", "struct", "define"],
        answer: "class",
      },
      {
        question: "Which operator is used to access members of an object?",
        options: ["->", "::", ".", "*"],
        answer: ".",
      },
      {
        question: "Which function is the entry point of every C++ program?",
        options: ["start()", "run()", "main()", "execute()"],
        answer: "main()",
      },
      {
        question: "Which statement is used to display output in C++?",
        options: ["printf", "print", "cout", "display"],
        answer: "cout",
      },
      {
        question: "Which namespace is commonly used with cout and cin?",
        options: ["std", "system", "global", "cpp"],
        answer: "std",
      },
      {
        question: "Which operator is used to take input in C++?",
        options: [">>", "<<", "==", "="],
        answer: ">>",
      },
      {
        question: "Which data type stores decimal values?",
        options: ["int", "char", "float", "bool"],
        answer: "float",
      },
      {
        question: "Which symbol is used to end a statement in C++?",
        options: [":", ";", ",", "."],
        answer: ";",
      },
      {
        question: "Which keyword is used to create an object?",
        options: ["new", "class", "No keyword is required", "object"],
        answer: "No keyword is required",
      },
    ],

    mediumQues: [
      {
        question:
          "Which concept allows one class to inherit properties from another?",
        options: [
          "Polymorphism",
          "Encapsulation",
          "Inheritance",
          "Abstraction",
        ],
        answer: "Inheritance",
      },
      {
        question: "Which keyword is used to inherit a class?",
        options: ["extends", "inherit", ":", "super"],
        answer: ":",
      },
      {
        question: "Which loop executes at least once?",
        options: ["for", "while", "do-while", "foreach"],
        answer: "do-while",
      },
      {
        question: "Which keyword is used to define a constant variable?",
        options: ["constant", "final", "const", "static"],
        answer: "const",
      },
      {
        question:
          "Which function is used to find the length of a string object?",
        options: ["size()", "length()", "Both A and B", "strlen()"],
        answer: "Both A and B",
      },
      {
        question: "Which operator compares two values?",
        options: ["=", "==", "+=", ":="],
        answer: "==",
      },
      {
        question: "Which keyword is used to stop a loop?",
        options: ["exit", "continue", "break", "stop"],
        answer: "break",
      },
      {
        question: "Which keyword is used for dynamic memory allocation?",
        options: ["malloc", "alloc", "new", "create"],
        answer: "new",
      },
      {
        question: "Which keyword is used to free dynamically allocated memory?",
        options: ["delete", "free", "remove", "destroy"],
        answer: "delete",
      },
      {
        question:
          "Which feature allows multiple functions with the same name but different parameters?",
        options: ["Overriding", "Overloading", "Encapsulation", "Inheritance"],
        answer: "Overloading",
      },
    ],

    advanceQues: [
      {
        question: "Which OOP concept hides implementation details?",
        options: ["Inheritance", "Abstraction", "Polymorphism", "Overloading"],
        answer: "Abstraction",
      },
      {
        question:
          "Which type of polymorphism is achieved using virtual functions?",
        options: ["Compile-time", "Run-time", "Static", "Operator"],
        answer: "Run-time",
      },
      {
        question: "Which keyword is used to declare a virtual function?",
        options: ["friend", "virtual", "override", "static"],
        answer: "virtual",
      },
      {
        question:
          "Which function is automatically called when an object is created?",
        options: ["Destructor", "Constructor", "Main", "Friend"],
        answer: "Constructor",
      },
      {
        question:
          "Which function is automatically called when an object is destroyed?",
        options: ["Constructor", "Main", "Destructor", "Delete"],
        answer: "Destructor",
      },
      {
        question: "Which operator is used to access members through a pointer?",
        options: [".", "::", "->", "&"],
        answer: "->",
      },
      {
        question: "Which keyword prevents a class from being inherited?",
        options: ["static", "final", "private", "const"],
        answer: "final",
      },
      {
        question: "Which STL container stores unique elements in sorted order?",
        options: ["vector", "list", "set", "queue"],
        answer: "set",
      },
      {
        question: "Which STL container follows the LIFO principle?",
        options: ["queue", "stack", "vector", "map"],
        answer: "stack",
      },
      {
        question: "Which keyword is used to handle exceptions?",
        options: ["catch", "throw", "try", "All of the above"],
        answer: "All of the above",
      },
    ],
  },

  Java: {
    basicQues: [
      {
        question: "Who developed Java?",
        options: [
          "Dennis Ritchie",
          "James Gosling",
          "Guido van Rossum",
          "Bjarne Stroustrup",
        ],
        answer: "James Gosling",
      },
      {
        question: "Which keyword is used to define a class in Java?",
        options: ["object", "class", "define", "struct"],
        answer: "class",
      },
      {
        question: "Which method is the entry point of a Java program?",
        options: ["run()", "start()", "main()", "execute()"],
        answer: "main()",
      },
      {
        question:
          "Which package is automatically imported in every Java program?",
        options: ["java.io", "java.util", "java.lang", "java.net"],
        answer: "java.lang",
      },
      {
        question: "Which keyword is used to create an object?",
        options: ["object", "create", "new", "class"],
        answer: "new",
      },
      {
        question: "Which data type stores whole numbers?",
        options: ["float", "char", "int", "double"],
        answer: "int",
      },
      {
        question: "Which statement is used to print output?",
        options: [
          "print()",
          "System.out.print()",
          "System.out.println()",
          "Both B and C",
        ],
        answer: "Both B and C",
      },
      {
        question: "Which keyword is used to declare a constant variable?",
        options: ["const", "final", "static", "fixed"],
        answer: "final",
      },
      {
        question: "Which operator is used to compare two values?",
        options: ["=", "==", "===", ":="],
        answer: "==",
      },
      {
        question: "Which loop executes at least once?",
        options: ["for", "while", "do-while", "foreach"],
        answer: "do-while",
      },
    ],

    mediumQues: [
      {
        question:
          "Which OOP concept allows one class to acquire properties of another?",
        options: [
          "Encapsulation",
          "Inheritance",
          "Abstraction",
          "Polymorphism",
        ],
        answer: "Inheritance",
      },
      {
        question: "Which keyword is used to inherit a class?",
        options: ["inherits", "extends", "implements", "super"],
        answer: "extends",
      },
      {
        question: "Which keyword is used to inherit an interface?",
        options: ["extends", "implements", "interface", "abstract"],
        answer: "implements",
      },
      {
        question: "Which collection stores unique elements?",
        options: ["ArrayList", "LinkedList", "HashSet", "Vector"],
        answer: "HashSet",
      },
      {
        question: "Which method adds an element to an ArrayList?",
        options: ["insert()", "push()", "add()", "append()"],
        answer: "add()",
      },
      {
        question: "Which keyword exits a loop?",
        options: ["continue", "stop", "break", "return"],
        answer: "break",
      },
      {
        question: "Which keyword skips the current loop iteration?",
        options: ["break", "continue", "pass", "skip"],
        answer: "continue",
      },
      {
        question: "Which keyword is used to handle exceptions?",
        options: ["catch", "try", "throw", "All of the above"],
        answer: "All of the above",
      },
      {
        question:
          "Which access modifier allows access only within the same class?",
        options: ["public", "protected", "private", "default"],
        answer: "private",
      },
      {
        question: "Which keyword refers to the current object?",
        options: ["self", "current", "this", "object"],
        answer: "this",
      },
    ],

    advanceQues: [
      {
        question: "Which keyword prevents a method from being overridden?",
        options: ["static", "final", "const", "abstract"],
        answer: "final",
      },
      {
        question: "Which keyword is used to create an abstract class?",
        options: ["interface", "abstract", "virtual", "extends"],
        answer: "abstract",
      },
      {
        question: "Which keyword is used to create an interface?",
        options: ["interface", "class", "implements", "extends"],
        answer: "interface",
      },
      {
        question: "Which class is the parent of all Java classes?",
        options: ["Main", "Object", "Class", "System"],
        answer: "Object",
      },
      {
        question: "Which keyword is used to call the parent class constructor?",
        options: ["parent", "this", "super", "base"],
        answer: "super",
      },
      {
        question: "Which package contains the Scanner class?",
        options: ["java.io", "java.lang", "java.util", "java.net"],
        answer: "java.util",
      },
      {
        question: "Which keyword is used for multithreading?",
        options: ["thread", "Runnable", "synchronized", "Both B and C"],
        answer: "Both B and C",
      },
      {
        question: "Which exception occurs when dividing an integer by zero?",
        options: [
          "IOException",
          "ArithmeticException",
          "NullPointerException",
          "NumberFormatException",
        ],
        answer: "ArithmeticException",
      },
      {
        question: "Which collection stores key-value pairs?",
        options: ["ArrayList", "HashMap", "HashSet", "LinkedList"],
        answer: "HashMap",
      },
      {
        question:
          "Which principle of OOP allows multiple methods with the same name but different parameters?",
        options: [
          "Encapsulation",
          "Inheritance",
          "Method Overloading",
          "Method Overriding",
        ],
        answer: "Method Overloading",
      },
    ],
  },

  Python: {
    basicQues: [
      {
        question: "Who developed Python?",
        options: [
          "Dennis Ritchie",
          "Guido van Rossum",
          "James Gosling",
          "Bjarne Stroustrup",
        ],
        answer: "Guido van Rossum",
      },
      {
        question: "Which keyword is used to define a function in Python?",
        options: ["function", "def", "define", "func"],
        answer: "def",
      },
      {
        question: "Which function is used to display output?",
        options: ["display()", "echo()", "print()", "output()"],
        answer: "print()",
      },
      {
        question: "Which function is used to take input from the user?",
        options: ["input()", "scanf()", "cin()", "gets()"],
        answer: "input()",
      },
      {
        question: "Which data type is used to store text?",
        options: ["int", "str", "float", "bool"],
        answer: "str",
      },
      {
        question: "Which symbol is used for single-line comments?",
        options: ["//", "#", "/*", "**"],
        answer: "#",
      },
      {
        question: "Which data type stores decimal numbers?",
        options: ["int", "float", "str", "bool"],
        answer: "float",
      },
      {
        question: "Which keyword is used for conditional statements?",
        options: ["when", "if", "check", "case"],
        answer: "if",
      },
      {
        question: "Which keyword is used to create a loop?",
        options: ["loop", "repeat", "for", "iterate"],
        answer: "for",
      },
      {
        question: "Which value represents Boolean true?",
        options: ["true", "TRUE", "True", "T"],
        answer: "True",
      },
    ],

    mediumQues: [
      {
        question: "Which data type is immutable?",
        options: ["list", "dictionary", "set", "tuple"],
        answer: "tuple",
      },
      {
        question: "Which method adds an element to the end of a list?",
        options: ["insert()", "append()", "add()", "extend()"],
        answer: "append()",
      },
      {
        question: "Which method removes the last element from a list?",
        options: ["remove()", "delete()", "pop()", "clear()"],
        answer: "pop()",
      },
      {
        question: "Which operator is used for exponentiation?",
        options: ["^", "**", "//", "%"],
        answer: "**",
      },
      {
        question: "Which keyword is used to import a module?",
        options: ["include", "import", "using", "require"],
        answer: "import",
      },
      {
        question: "Which function returns the length of a list or string?",
        options: ["count()", "size()", "len()", "length()"],
        answer: "len()",
      },
      {
        question: "Which keyword exits a loop immediately?",
        options: ["continue", "break", "pass", "return"],
        answer: "break",
      },
      {
        question: "Which keyword skips the current iteration of a loop?",
        options: ["break", "continue", "pass", "stop"],
        answer: "continue",
      },
      {
        question: "Which data type stores key-value pairs?",
        options: ["tuple", "list", "dictionary", "set"],
        answer: "dictionary",
      },
      {
        question: "Which operator checks equality?",
        options: ["=", "==", "===", "!="],
        answer: "==",
      },
    ],

    advanceQues: [
      {
        question: "Which keyword is used to handle exceptions?",
        options: ["catch", "try", "error", "throw"],
        answer: "try",
      },
      {
        question: "Which keyword is used to define a class?",
        options: ["object", "class", "struct", "define"],
        answer: "class",
      },
      {
        question: "Which keyword refers to the current object inside a class?",
        options: ["this", "self", "current", "object"],
        answer: "self",
      },
      {
        question: "Which keyword is used to create an anonymous function?",
        options: ["lambda", "anonymous", "func", "def"],
        answer: "lambda",
      },
      {
        question: "Which module is commonly used to work with JSON data?",
        options: ["json", "csv", "os", "math"],
        answer: "json",
      },
      {
        question: "Which function opens a file in Python?",
        options: ["file()", "open()", "fopen()", "read()"],
        answer: "open()",
      },
      {
        question: "Which method reads the entire contents of a file?",
        options: ["read()", "readline()", "readlines()", "load()"],
        answer: "read()",
      },
      {
        question: "Which keyword is used to create a generator?",
        options: ["return", "yield", "generate", "next"],
        answer: "yield",
      },
      {
        question: "Which operator is used for floor division?",
        options: ["/", "//", "%", "**"],
        answer: "//",
      },
      {
        question: "Which built-in function returns the type of an object?",
        options: ["typeof()", "type()", "class()", "object()"],
        answer: "type()",
      },
    ],
  },

  HTML: {
    basicQues: [
      {
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "High Text Machine Language",
          "Hyper Transfer Markup Language",
          "Hyperlink Text Markup Language",
        ],
        answer: "Hyper Text Markup Language",
      },
      {
        question: "Which tag is used to create a heading?",
        options: ["<head>", "<h1>", "<title>", "<p>"],
        answer: "<h1>",
      },
      {
        question: "Which tag is used to create a paragraph?",
        options: ["<para>", "<p>", "<text>", "<h1>"],
        answer: "<p>",
      },
      {
        question: "Which tag is used to insert an image?",
        options: ["<image>", "<img>", "<pic>", "<src>"],
        answer: "<img>",
      },
      {
        question: "Which attribute specifies the image source?",
        options: ["href", "src", "alt", "link"],
        answer: "src",
      },
      {
        question: "Which tag is used to create a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        answer: "<a>",
      },
      {
        question: "Which HTML tag creates a line break?",
        options: ["<br>", "<break>", "<lb>", "<hr>"],
        answer: "<br>",
      },
      {
        question: "Which tag is used for the largest heading?",
        options: ["<h1>", "<h6>", "<heading>", "<head>"],
        answer: "<h1>",
      },
      {
        question: "Which tag is used to create an unordered list?",
        options: ["<ol>", "<ul>", "<li>", "<list>"],
        answer: "<ul>",
      },
      {
        question: "Which tag is used to create a list item?",
        options: ["<ul>", "<ol>", "<li>", "<item>"],
        answer: "<li>",
      },
    ],
    mediumQues: [
      {
        question: "Which tag is used to create a table?",
        options: ["<table>", "<tr>", "<td>", "<tab>"],
        answer: "<table>",
      },
      {
        question: "Which tag defines a table row?",
        options: ["<td>", "<th>", "<tr>", "<row>"],
        answer: "<tr>",
      },
      {
        question: "Which tag defines a table cell?",
        options: ["<td>", "<cell>", "<tr>", "<th>"],
        answer: "<td>",
      },
      {
        question: "Which tag is used to create a form?",
        options: ["<input>", "<form>", "<fieldset>", "<label>"],
        answer: "<form>",
      },
      {
        question: "Which input type hides the entered characters?",
        options: ["text", "email", "password", "hidden"],
        answer: "password",
      },
      {
        question: "Which attribute makes an input field mandatory?",
        options: ["validate", "required", "must", "compulsory"],
        answer: "required",
      },
      {
        question: "Which tag is used to create a drop-down list?",
        options: ["<list>", "<select>", "<option>", "<dropdown>"],
        answer: "<select>",
      },
      {
        question: "Which tag is used to define an option inside a drop-down?",
        options: ["<item>", "<choice>", "<option>", "<value>"],
        answer: "<option>",
      },
      {
        question: "Which tag is used to create a button?",
        options: ["<btn>", "<button>", "<click>", "<inputbutton>"],
        answer: "<button>",
      },
      {
        question: "Which tag is used to insert a horizontal line?",
        options: ["<line>", "<hr>", "<br>", "<border>"],
        answer: "<hr>",
      },
    ],
    advanceQues: [
      {
        question: "Which HTML5 tag is used for the main content of a webpage?",
        options: ["<content>", "<main>", "<body>", "<section>"],
        answer: "<main>",
      },
      {
        question: "Which semantic tag represents navigation links?",
        options: ["<menu>", "<nav>", "<section>", "<aside>"],
        answer: "<nav>",
      },
      {
        question:
          "Which HTML5 tag is used for independent content like blog posts?",
        options: ["<article>", "<section>", "<main>", "<div>"],
        answer: "<article>",
      },
      {
        question: "Which tag is used to embed audio?",
        options: ["<music>", "<audio>", "<sound>", "<media>"],
        answer: "<audio>",
      },
      {
        question: "Which tag is used to embed video?",
        options: ["<movie>", "<media>", "<video>", "<play>"],
        answer: "<video>",
      },
      {
        question: "Which attribute provides alternative text for an image?",
        options: ["title", "src", "alt", "name"],
        answer: "alt",
      },
      {
        question: "Which tag is used to define the footer of a webpage?",
        options: ["<bottom>", "<footer>", "<end>", "<foot>"],
        answer: "<footer>",
      },
      {
        question: "Which tag is used to define the header of a webpage?",
        options: ["<header>", "<head>", "<top>", "<heading>"],
        answer: "<header>",
      },
      {
        question: "Which tag is commonly used as a generic container?",
        options: ["<span>", "<div>", "<container>", "<section>"],
        answer: "<div>",
      },
      {
        question:
          "Which HTML version introduced semantic elements like <article> and <section>?",
        options: ["HTML 3.2", "HTML 4.01", "XHTML", "HTML5"],
        answer: "HTML5",
      },
    ],
  },

  CSS: {
    basicQues: [
      // index 0
      {
        question: "What does CSS stand for?",
        options: [
          "Computer Style Sheets",
          "Cascading Style Sheets",
          "Creative Style System",
          "Colorful Style Sheets",
        ],
        answer: "Cascading Style Sheets",
      },
      // index 1
      {
        question: "Which property is used to change the text color?",
        options: ["font-color", "text-color", "color", "background-color"],
        answer: "color",
      },
      // index 2
      {
        question: "Which property is used to change the background color?",
        options: ["bg-color", "background-color", "color", "background"],
        answer: "background-color",
      },
      // index 3
      {
        question: " Which property is used to change the font size?",
        options: ["font-style", "font-size", "text-size", "size"],
        answer: "font-size",
      },
      // index 4
      {
        question: "Which symbol is used to select an ID?",
        options: [".", "#", "*", "@"],
        answer: "#",
      },
      // index 5
      {
        question: "Which symbol is used to select a class?",
        options: ["#", ".", "*", "&"],
        answer: ".",
      },
      // index 6
      {
        question: "Which property is used to make text bold?",
        options: ["font-weight", "font-style", "text-weight", "bold"],
        answer: "font-weight",
      },
      // index 7
      {
        question: "Which property is used to align text?",
        options: ["text-align", "align", "font-align", "justify"],
        answer: "text-align",
      },
      // index 8
      {
        question: "Which property is used to add space inside an element?",
        options: ["margin", "padding", "spacing", "border"],
        answer: "padding",
      },
      // index 9
      {
        question: "Which property is used to add space outside an element?",
        options: ["padding", "border", "margin", "spacing"],
        answer: "margin",
      },
    ],

    mediumQues: [
      {
        question: "Which property is used to add a border?",
        options: ["border", "outline", "frame", "line"],
        answer: "border",
      },
      {
        question: "Which property changes the font family?",
        options: ["font-name", "font-family", "text-font", "family"],
        answer: "font-family",
      },
      {
        question: "Which property is used to make text italic?",
        options: ["font-weight", "text-style", "font-style", "italic"],
        answer: "font-style",
      },
      {
        question: "Which property is used to underline text?",
        options: [
          "text-decoration",
          "underline",
          "font-decoration",
          "text-style",
        ],
        answer: "text-decoration",
      },
      {
        question: "Which property controls the transparency of an element?",
        options: ["visibility", "opacity", "display", "transparent"],
        answer: "Opacity",
      },
      {
        question: "Which value hides an element but keeps its space?",
        options: [
          "display: none;",
          "visibility: hidden;",
          "opacity: 0;",
          "position: hidden;",
        ],
        answer: "visibility: hidden;",
      },
      {
        question: "Which property is used to round the corners of an element?",
        options: ["border-radius", "corner-radius", "radius", "border-style"],
        answer: "border-radius",
      },
      {
        question: "Which property adds a shadow to text?",
        options: ["box-shadow", "shadow", "text-shadow", "font-shadow"],
        answer: "text-shadow",
      },
      {
        question: "Which property is used to set the width of an element?",
        options: ["size", "width", "length", "element-width"],
        answer: "width",
      },
      {
        question: "Which property changes the mouse cursor style?",
        options: ["mouse", "pointer", "cursor", "hover"],
        answer: "cursor",
      },
    ],

    advanceQues: [
      {
        question: "Which CSS property is used to create flexible layouts?",
        options: ["grid", "flex", "flexbox", "display:flex;"],
        answer: "display:flex;",
      },
      {
        question: "Which property is used to create grid layouts?",
        options: [
          "display: grid;",
          "grid-layout",
          "layout-grid",
          "display: table;",
        ],
        answer: "display: grid;",
      },
      {
        question: "Which property controls the stacking order of elements?",
        options: ["position", "z-index", "order", "layer"],
        answer: "z-index",
      },
      {
        question:
          "Which position value places an element relative to the browser window?",
        options: ["static", "relative", "absolute", "fixed"],
        answer: "fixed",
      },
      {
        question:
          "Which pseudo-class is applied when the mouse hovers over an element?",
        options: [":active", ":hover", ":focus", ":visited"],
        answer: ":hover",
      },
      {
        question: "Which property is used to animate CSS properties?",
        options: ["transition", "transform", "animation", "motion"],
        answer: "animation",
      },
      {
        question: "Which CSS function rotates an element?",
        options: [
          "rotate()",
          " transform()",
          " transform: rotate()",
          "animation()",
        ],
        answer: " transform: rotate()",
      },
      {
        question: "Which media rule is used to create responsive designs?",
        options: ["@style", "@responsive", "@media", "@screen"],
        answer: "@media",
      },
      {
        question: "Which property specifies how long a transition should take?",
        options: [
          "transition-time",
          "duration",
          "transition-duration",
          "animation-time",
        ],
        answer: "animation-time",
      },
      {
        question: "Which selector selects all elements on a webpage?",
        options: ["#", ".", "*", "all"],
        answer: "*",
      },
    ],
  },

  JS: {
    basicQues: [
      // index 0
      {
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "High Text Machine Language",
          "Hyper Transfer Machine Language",
          "Home Tool Markup Language",
        ],
        answer: "Hyper Text Markup Language",
      },
      // index 1
      {
        question: "Which tag is used for the largest heading?",
        options: ["<p>", "<h1>", "<div>", "<span>"],
        answer: "<h1>",
      },
      // index 2
      {
        question: "Which language is used for styling web pages?",
        options: ["HTML", "CSS", "JAVA", "PYTHON"],
        answer: "CSS",
      },
      // index 3
      {
        question: "Which method is used to select an element by ID?",
        options: ["getElementById()", "getById()", "queryId()", "selectId()"],
        answer: "getElementById()",
      },
      // index 4
      {
        question: "Which keyword declares a block-scoped variable?",
        options: ["var", "let", "define", "value"],
        answer: "let",
      },
      // index 5
      {
        question: 'What is the output of:\nconsole.log(typeof "Hello");',
        options: ["string", "number", "object", "boolean"],
        answer: "string",
      },
      // index 6
      {
        question: "Which array method adds an element at the end?",
        options: ["shift()", "unshift()", "push()", "pop()"],
        answer: "push()",
      },
      // index 7
      {
        question: "Which event occurs when a button is clicked?",
        options: ["submit", "change", "click", "load"],
        answer: "click",
      },
      // index 8
      {
        question: 'What is the output?\nconsole.log(2 + "2");',
        options: ["4", "22", "Error", "undefined"],
        answer: "22",
      },
      // index 9
      {
        question: "Which operator checks value and datatype?",
        options: ["==", "=", "===", "!="],
        answer: "===",
      },
    ],

    mediumQues: [
      {
        question: "What is the output?",
        options: [
          "JSON.parse()",
          "JSON.stringify()",
          "parseJSON()",
          "objectJSON()",
        ],
        answer: "JSON.parse()",
      },
      {
        question: "What is a Promise in JavaScript?",
        options: [
          "A loop",
          "An object representing an asynchronous operation",
          "An array",
          "A function",
        ],
        answer: "An object representing an asynchronous operation",
      },
      {
        question: "Which company developed JavaScript?",
        options: ["Apple", "Google", "Netscape", "Microsoft"],
        answer: "Netscape",
      },
      {
        question: "What is the output? \n console.log(true + 1);",
        options: ["1", "2", "true", "Error"],
        answer: "2",
      },
      {
        question: "What is a Promise?",
        options: [
          "Loop",
          "Array",
          "Object for asynchronous operations",
          "Event",
        ],
        answer: "Object for asynchronous operations",
      },
      {
        question: "Which keyword is used for asynchronous functions?",
        options: ["async", "await", "promise", "defer"],
        answer: "async",
      },
      {
        question: `What is the output? \n console.log([] == false);`,
        options: ["true", "false", "undefined", "Error"],
        answer: "true",
      },
      {
        question: `What is the output? \n console.log(typeof null);`,
        options: ["null", "object", "undefined", "string"],
        answer: "object",
      },
      {
        question:
          "Which method creates a new array without modifying the original?",
        options: ["splice()", "push()", "slice()", "pop()"],
        answer: "slice()",
      },
      {
        question: "What is closure in JavaScript?",
        options: [
          "CSS feature",
          "Function with access to outer scope",
          "Loop",
          "Object",
        ],
        answer: "Function with access to outer scope",
      },
      {
        question: "Which operator is called the spread operator?",
        options: [". . .", "...", "=>", ",,,"],
        answer: "...",
      },
    ],

    advanceQues: [
      {
        question: `What is the output? \n let a = {}; \n let b = a; \n b.name = "JS"; \n console.log(a.name);`,
        options: ["undefined", "JS", "Error", "null"],
        answer: "JS",
      },
      {
        question: `What is the output? \n console.log([] + []);`,
        options: ["[]", "0", `""`, "undefined"],
        answer: `""`,
      },
      {
        question: `What is the output? \n for(var i=0;i<3;i++){ \n setTimeout(()=>{ \n console.log(i); \n },0); \n }`,
        options: ["012", "123", "333", "Error"],
        answer: "333",
      },
      {
        question: `What is the output? \n console.log(1 + "2" + 3);`,
        options: ["6", "123", "15", "Error"],
        answer: "123",
      },
      {
        question: `Which method creates a deep copy of a simple object? \n const copy = JSON.parse(JSON.stringify(obj));`,
        options: ["Shallow Copy", "Deep Copy", "Spread Copy", "Reference Copy"],
        answer: "Deep Copy",
      },
      {
        question: `What is the output? \n Promise.resolve() \n .then(()=>console.log("A")); \n console.log("B");`,
        options: ["AB", "BA", "A", "B"],
        answer: "BA",
      },
      {
        question: `What is the output? \n const arr = [1,2,3]; \n const result = arr.map(num => { \n if(num > 1) return num * 2; \n }); \n console.log(result);`,
        options: ["[246]", "[undefined,4,6]", "[4,6]", "Error"],
        answer: "[undefined,4,6]",
      },
      {
        question: `What is the output? \n const obj = { \n name: "JS", \n getName() { \n return this.name; \n } \n }; \n const fn = obj.getName; \n console.log(fn());`,
        options: ["JS", "undefined", "null", "Error"],
        answer: "undefined",
      },
      {
        question: `What is the output? \n console.log(NaN === NaN);`,
        options: ["true", "false", "undefined", "Error"],
        answer: "false",
      },
      {
        question: `const arr = [1, 2, 3, 4]; \n const result = arr.filter(num => num % 2 === 0) \n .map(num => num * 2); \n console.log(result);`,
        options: ["[2,4]", "[4,8]", "[1,2,3,4]", "Error"],
        answer: "[4,8]",
      },
    ],
  },
};
