// Introduction
// Collections in Java is a framework that provides architecture to store and manipulate data.

// collection sits on top of the sub interfaces and implementing classes.Seta collection can hoold a group of objects

// Order of interface::
// - Iterable
  // - collection;
    // - set
    // - list
    // - queue

// A set is defined as a grouop of unique objects. What is considered as unique is defined
// by the equals method of the Object typeof. A sen can NOT hold two equal objects. No duplicates

// A List can contain duplicates. A list keeps its elements in the order they were inputed

// A Queue. Enter from the end and taken out from the top. FIRST IN FIRST OUT

// https://www.geeksforgeeks.org/how-to-learn-java-collections-a-complete-guide/

// SET
// - A collection of OBJECTS and no duplicate objects are allowed. The Set allows at most one null element.
// - HashSet - it takes constant time for basic operations like insert, deletes, and search.
      // the order of the elements may not be the same as the order of insertion. normally the default for set
// - LinkedHashSet - mix of hash and list. No duplicates. returns order in which they were inserted
// - TreeSet - list based on sorted order. The ordering is either natural ordering or ordering by the Comparator specified at the time construction.
// - SortedSet - set is always sorted
// - NavigableSet - has navigation methods that give closest matches such as floor, ceiling, lower and higher.

// LIST
// - Fast to iterate and read BUT add or removing will be slow as this will require to rebuild the whole array
// - ArrayList - dynamic. it does allow duplicates and allows to iterate the list in the order of insertion. Non-synchronized.
// - Vector - The difference between a Vector an ArrayList is that Vectors are synchronized.
// - LinkedList - makes it easy to add or remove elements at any position
    // data structure, where every element has a pointer to the next element forming a link. Since each
      // element has an address of the next element, the linked list elements, referred to as nodes, can be
      // stored at non-contiguous locations in memory.
    // Can store duplicated element
    // Maintains insertion order
    // Non-synchronized
    // Can be used as list,
// - STACK (LIFO)
      // You can visualize it as a stack of books on a table the book that is kept first has to e retrieved last,
      // and the book that is kept on the stack last has to be retrieved first. The basic methods
      // of the stack class are push, pop, peek, empty, and search

// QUEUE - (FIFO)
// - LinkedList - default for Queue. makes it easy to add or remove elements at any position
// - PriorityQueue - Keeps its elements automatically ordered. similar to treeSet but it alows duplicates

// MAP interface - maps a key to every value. No duplicates
// Has three different views,
      // a Set view of the keys,
      // a Set view of key-value mappings
      // a Collection view of the value
// - LinkedHashMap - is a hash map linked list implementation of a map. Every entry in the LinkedHashMap has a doubly-linked
    // list running through it. This linked list defines the iteration order that is the order of the keys inserted into the
    // LinkedHashMap. Like all implementations of Map, the elements of the LinkedHashMap are key-value pairs.
// - SortedMap - sorted map
// - NavigableMap - adds methods to negigate thrugh the map. Allos you to retrieve all entries bigger or smaller for example
// - TreeMap - The TreeMap class uses a red-black tree structure for storage and a map for ordering the elements. Every element
    // is a key-value pair. This implementation gives a guaranteed log(n) time cost for basic operations.
// - Hashmap - For every entry in a HashMap, a hashCode is computed and this entry is inserted into the bucket with the
        // hashCode value as its index. Every entry is a key-value pair. A bucket in a HashMap may contain more than one entry.
        // A good HashMap algorithm will try to uniformly distribute the elements in the HashMap. HashMap has constant time
        // performance for basic retrieval, insertion, deletion, and manipulation operations. The two most important factors
        // that affect the performance of a HashMap are initial capacity and load factor. The number of buckets is the capacity
        // and the measure of when to increase this capacity is load factor. The HashMap is faster compared to a HashTable




///////// notes from dif resrouces: /////////
// https://medium.com/@dakota.lillie/javas-collections-framework-an-overview-86de12f4f622


// https://www.janbasktraining.com/blog/java-collections-framework/

// Set- a Set collection of your framework does not contain duplicate values,
// List- List collection can contain the duplicate values which are stored in it sequentially.
// Queue- Queue collection contains an ordered list of objects with its usage specifically limited to inserting of the elements at the end of the list

// Interfaces− Interfaces are abstract type data that usually represents the collections. Interfaces agree to the collections
    // to be maneuvered autonomously of the particulars of their demonstration. In languages like Java or we can say object-oriented languages,
    // interfaces usually form a hierarchy.
// Implementations or Classes− These are the tangible implementations of the Java collection interfaces. In real meaning,
    // they are data structures which are reusable.
// Algorithms− Algorithms are the methods that carry out useful data processing, such as probing and categorization,
    // on various objects that put into practice the Java collection interfaces. The algorithms are known to be polymorphic
    // meaning thereby that the identical method can be easily used for many different implementations of the proper collection interface.
