# Fibre
- ReactDOM- implementation of react on web -->it's a tree structure.
React's createRoot method runs it's own dom called virtual dom  and makes a tree and then compares it with main dom tree and difference is observed and updated on the main dom.

- this virtual dom or updation algorithm is called reconciliation.
- Fibre is a rewrite of reconciler a high-level algorithm.
- - https://github.com/acdlite/react-fiber-architecture -->imp for interview.

# key points
- In a UI, it's not necessary for every update to be applied immediately; in fact, doing so can be wasteful, causing frames to drop and degrading the user experience.
- Different types of updates have different priorities — an animation update needs to complete more quickly than, say, an update from a data store.

- there was a problem in previous reconsilition approach that if changes are applied and user again changes that then previous changes were applied and then the next changes and have to render like that but fiber is very optimized it observes and does the final change only i.e. aborting the work that is not needed.

# primary goal of Fiber
We've established that a primary goal of Fiber is to enable React to take advantage of scheduling. Specifically, we need to be able to

pause work and come back to it later.
assign priority to different types of work.
reuse previously completed work.
abort work if it's no longer needed.

# interview question
setcounter(counter+1)
setcounter(counter+1)
setcounter(counter+1)
setcounter(counter+1)--> useState sends the updates in batches so all of then will be passed and all are updating same variable so taken once only.

- instead we should store the previous state at each step to do like this
- use setcounter(counter=counter+1) or setcounter(counter=>counter+1)