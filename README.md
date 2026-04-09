## Noble Finance
A finance website I built to learn how `HTML`, `CSS`,`Bootstrap`, and `JavaScript` work together in the real world.

## The Project
I built this as a 6th-semester student to move away from just theory and actually build something functional. It’s a multi-page site for a finance company called Noble Finance.

## What it does
* `Dynamic Greeting`: Changes the hero text to "Good morning," "Afternoon," or "Evening" based on the user's local time.
* `Live Tax Tool`: A calculator that shows a 20% tax estimate instantly as you type.
* `Office Status`: Checks the time and shows if the office is currently "Open" or "Closed."
* `Booking Modal`: A popup form that lets users book an appointment and shows a success message without the page refreshing.
* `Hover Effects`: Added logic so cards pop out when the mouse moves over them.

## The Code Structure
I used a modular approach to keep the JavaScript from getting messy. Instead of one big file, I split them up:
* `common.js`: Handles things like the footer and greeting that appear on every page.
* `home.js`: Handles the tax calculator and testimonial tabs.
* `booking.js`: Handles the booking form and office hours logic.

## Key Things I Learned
* Using `document.addEventListener("DOMContentLoaded", ...)` to make sure the "JS Brain" doesn't start before the "HTML Body" is ready.
* Using `if` safety checks to prevent the code from crashing when moving between different pages.
* Using `event.preventDefault()` to stop forms from refreshing the whole page.
* How to use `querySelectorAll` and `forEach` loops to apply effects to many cards at once.

## Tech Used
* `HTML5 & CSS3`
* `Bootstrap 5 (Grid, Navbar, and Modals)`
* `Vanilla JavaScript`

## Live Link
https://abdulrehman78-cyber.github.io/noble-finance/
