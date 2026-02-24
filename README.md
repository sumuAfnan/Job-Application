1.Ans-
the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll is -

getElementById() → Gets 1 element with a specific id.

getElementsByClassName() → Gets multiple elements with a specific class (HTMLCollection, live).

querySelector() → Gets the first matching element with a CSS selector.

querySelectorAll() → Gets all matching elements with a CSS selector (NodeList, static).

2.Ans -
The way i create and insert a new element into the DOM in bellow-

1. First i create the element

const div = document.createElement("div");

2️.Then i put some text or content inside it

div.textContent = "Hello sumu";

3️.Finally i add it to the DOM

document.body.append(div);


3.Ans-

 Event Bubbling: Event Bubbling is a phenomenon where when an event occurs on a small element (such as a button), that event doesn't just stop at that element — it also moves up to its parents.

Simply put, the event "bubbles" from the bottom up.

it works -

Suppose a button is inside a div.

If i click on the button, then:

First the button's click event will fire

Then the event will go to the div

Then it will go to the body

Then it can reach the document

That is, the event first happens on the child element, then it reaches the parents one by one.

This upward process is called Event Bubbling.


4.Ans -
Event Delegation :Event Delegation is a method where instead of providing separate event listeners to many child elements, a listener is placed on their parent element.

Due to event bubbling, when an event occurs in a child, it reaches the parent, and then i handle it from the parent.

it useful bcz-

i don't have to repeatedly set a listener for the same task

The code is less and cleaner

Performance is better

i don't have to provide a separate listener even if i add a new element later

Simply put, Event Delegation is a method of controlling the work of many elements from one place.


5.Ans-
The difference between preventDefault() and stopPropagation() methods is -
preventDefault() → stops the default behavior of an event.

Example: page reloading on link click.

stopPropagation() → stops event bubbling or capturing, does not go to parent.

Example: click handler of parent div not running on button click.
