# firestore-web-app
## Preparation Activity
This section covers <br>
1. Create a Firebase ProjectTable of Contents
2. Create a Firestore
3. Set up the Firestore Database
4. Create an App for Firebase Project
5. Connect Firebase and Firestore to the Frontend
6. To Do Before Preparation Deadline

## In-Class Activity
Given that a group of student has a frontend project from their last week class, the students are expected to connect a Firestore to connect to their existing frontend website. <br>
Students are expected to customize the `CREATE`, `UPDATE` `DELETE` and `GET` codes given in the preparation activity to fit with their project. <br>

## Note after class
The concepts given in one class were **TOO** packed! Since the students had been exposed to JavaScript just a week before the class, some of them could not fully understand the new concepts introduced in the briefing session.<br>
These concepts covered the example codes in the preparation activity. I aimed to make a clearer picture of what the example was doing<br>

1. X as a Service (Firebase)
2. What is adding SDK in script tag (compared to Python)
3. Async/Await and Then
4. Miscellaneous (Arrow Function, Map, Object Declaration)

### What could be improved?
1. Edit the code using only basic JavaScript operations.
    - Instead of using `map`, use `for loop`. 
    - Instead of using `reduced form of object declaration`, use `simple object declaration`.
2. Let the student fill a smaller portion of codes. To illustrate,
    - From
    -     const collection = '{???????????}'
          const items = '{???????????}'
    - To
    -     const collection = await item_refs.????
          const items = collection.map((item) => ({ docId: item.id, ...item.data() }))
3. Brief TAs first😢. I finished my part-time job late a day before class, so I did not brief TAs about what I am going to teach. If I had briefed the TAs first, they would have been able to help students more. I had to go group by group debugging code for the students.
4. (Assumed all the codes are written in for loop) Change outstanding from `hosting the code to Firebase` to being able to implement `map` or other JavaScript concept introduced in briefing class.
5. From `4`, handing out the instructions of how to host the project with Firebase Hosting. This is to give students a guide when they do their final projects.