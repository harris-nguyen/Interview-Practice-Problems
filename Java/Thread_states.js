// https://medium.com/javarevisited/java-concurrency-thread-life-cycle-4869432474b

//!!! Threads are there to help run code async !!!

// We can create threads extending the Thread class or implement the Runnable interface.
// Both use the method run() to execute asynchronous work. A thread must be started
// by its start() method, otherwise the work is not forked in a different thread.


// !! no multiple-inheritance in Java !!

// A constructor in Java is a special method that is used to initialize objects.

// Thread states
// The java.lang.Thread class contains a static State enum — which defines its potential states. The thread can only be in one of these states at a time:

// NEW — a newly created thread that has not yet started the execution
// RUNNABLE (Another way to create a thread) — either running or ready for execution but it’s waiting for resource allocation
// WAITING - In this state, the thread is inactive, waiting for a resource.
// BLOCKED — waiting to acquire a lock to enter or re-enter a synchronized block/method
// TIMED_WAITING — waiting for some other thread to perform a specific action for a specified period
// TERMINATED — When a thread finishes the execution of its run() method, it is in the terminated state.
              // The garbage collector will free the resources used by this thread.
// Suspended -  A thread is in this state when it calls a method with a timeout parameter,
             // which will suspend momentarily. After that, it can resume its execution at the point where it had stopped.

///////  Moreover, the JVM (Java Virtual Machine) assigns to each thread its own method-call stack, which allows these threads to track local variables,
///////  parameters the JVM passes to a method, and the method’s return value


// CRITICAL SECTION -  the Object class provides a lock that allows the programmer to manage exclusive access to the critical section.
                    // Locks admit two operations: open and close. When a lock is closed, any other attempt to close it will be suspended
                    // until it is opened by the thread that had closed it. Managing these operations is by using the synchronized construct

// Synchronizing Threads:
  // since start()/run() runs async with no guaranteed outcome, JOIN() is needed to run async while having a guaranteed outcome
  // The first method is join(). This method is called by a thread using another thread’s reference
    // when it wants to wait for that thread to terminate. This method throws an InterruptedException
    // when the thread that it is waiting for is interrupted by the interrupted() method
  // Second method is wait()
    // executes the wait method to a waiting list associated with the object that makes the call
    // Then, the lock associated with the object is opened and it will be closed when returning from the call.
  // Third is notify(). When called, it will activate a thread that is waiting on the waiting list.
    // The thread that will be started is not determined, but it must wait until it can close the lock again.
    // A similar method is notifyAll(), which activates all the threads on the waiting list.
