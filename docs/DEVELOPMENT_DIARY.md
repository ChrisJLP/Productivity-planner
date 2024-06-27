This is a diary of the development of this app, to keep track of any challenges, and what I learned.

I ran across some difficulty in formatting the minutes and seconds on the timer, before doing a bit of research and finding the padStart method.

I had to decide how I wanted to structure the components for the planner and timer. I decided on two components, Timer and Planner, as this is quite a simple web app. I may later split the planner and timer components into separate functions to improve maintainability in the future.

I decided the best course of action would be to get the basic functionality of the app working first, then worry about styling it and positioning the elements. But, I have kept in mind some accessibility concerns by using labels in the structure of the planner.

I took some time to think about how I wanted to display the timer. I looked at the various html elements available, but decided that it would be best for now to display it in a simple paragraph element, using state in react to update the timer, so that it is easier to style later.

I need to decide how the information from the form is going to affect the timer section of the page. I think the time worked today part of the form should affect the time left in real time. When the timer counts down by a second, the total time worked should go up by a second, and the time left today should go down by a second. So, the work amount today question is linked to time left, the timer is connected to time left and total time worked, and the default timer length just changed what the default timer is.

I think I need to lift the state up to a common component,
