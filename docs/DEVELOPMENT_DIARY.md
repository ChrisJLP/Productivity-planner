This is a diary of the development of this app, to keep track of any challenges, and what I learned.

I ran across some difficulty in formatting the minutes and seconds on the timer, before doing a bit of research and finding the padStart method.

I had to decide how I wanted to structure the components for the planner and timer. I decided on two components, Timer and Planner, as this is quite a simple web app. I may later split the planner and timer components into separate functions to improve maintainability in the future.

I decided the best course of action would be to get the basic functionality of the app working first, then worry about styling it and positioning the elements. But, I have kept in mind some accessibility concerns by using labels in the structure of the planner.

I took some time to think about how I wanted to display the timer. I looked at the various html elements available, but decided that it would be best for now to display it in a simple paragraph element, using state in react to update the timer, so that it is easier to style later.

I need to decide how the information from the form is going to affect the timer section of the page. I think the time worked today part of the form should affect the time left in real time. When the timer counts down by a second, the total time worked should go up by a second, and the time left today should go down by a second. So, the work amount today question is linked to time left, the timer is connected to time left and total time worked, and the default timer length just changed what the default timer is.

I came across a problem with the additional two timers for total time worked and total time left, where they would continue for 1 more second than the main timer when it stopped. I realised this was to do with state variables in react not updating until the next render. I added a regular variable inside the useEffect method and checked whether it was true or not inside the other two timers.

I added functionality to pause the timer when the user wants to, and restart it when it finishes (goes back to the default time).

Now the logic is finished, I need to style and position the elements on the page. I'm going to start with design for mobile first, then make it look good on a desktop too.

I'm struggling getting the experience on the phone as I would like it. There seems to be a bit of a difference between what I see on the dev version and what I see when it is published with netlify.
