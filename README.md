# Feed Reader Testing

## Project Overview

* Students are given a web-based application that reads RSS feeds
* Required project assets can be cloned or downloaded [here](https://github.com/udacity/frontend-nanodegree-feedreader)
* Read more about the [Project Rubric](https://review.udacity.com/#!/rubrics/18/view)

## Learning Objective

* Learn about **Jasmine** - a behavior-driven development framework for testing JavaScript code
* Use [Jasmine](https://jasmine.github.io/) to write a number of tests against a pre-existing application
* Test the underlying business logic of the application
* Test the event handling and DOM manipulation

## Required Suites and Tests

* Write a test that loops through each feed in the `allFeeds` object and ensures it has a **URL** defined and that the URL is not empty.
* Write a test that loops through each feed in the `allFeeds` object and ensures it has a **name** defined and that the name is not empty.
* Write a new test suite named `"The menu"`.
* Write a test that ensures the **menu element** is hidden by default.
* Write a test that ensures the **menu changes visibility** when the menu icon is clicked.
* Write a test suite named `"Initial Entries"`.
* Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
* Write a test suite named `"New Feed Selection"`.
* Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
* When complete - all of your tests should pass.

## Result

![Screenshot](https://github.com/888Red/Jasmine-FRT/blob/master/Capture.JPG)
