// Introduction
// Collections in Java is a framework that provides architecture to store and manipulate data.

// collection sits on top of the sub interfaces and implementing classes.Seta collection can hoold a group of objects
// The collection is extended by:
// - set
// - list
// - queue

// A set is defined as a grouop of unique objects. What is ocnsidred as unique is defined
// by the equals method of the Object typeof. A sen can NOT hold two equal objects. No duplicates

// A List can contain duplicates. A list keeps its elements in the order they were inputed

// A Queue. Enter from the end and taken out from the top. FIRST IN FIRST OUT

// SET
// - HashSet -  normally the default for set
// - LinkedHashSet - mix of hash and list. No duplicates. returns order in which they were inserted
// - TreeSet - list based on sorted order.
// - interface SortedSet - set is always sorted
// - interface NavigableSet - provides methods to retrieve the next element

// LIST
// - ArrayList - it does allow duplicates and allows to iterate the list in the order of insertion.
//   Fast to iterate and read BUT add or removing will be slow as this will require to rebuild the whole array
// - LinkedList - makes it easy to add or remove elements at any position

// QUEUE
// - LinkedList - default for Queue. makes it easy to add or remove elements at any position
// - PriorityQueue - Keeps its elements automatically ordered. similar to treeSet but it alows duplicates

// MAP interface
// - Hashmap - default for MAP. Does not make any guarantees on how it internally stores its elements
// - LinkedHashMap - allows to oiterate the map in the oorder of inseration
// - SortedMap - sorted map
// - NavigableMap - adds methods to negigate thrugh the map. Allos you to retrieve all entries bigger or smaller for example
// - TreeMap -
