# Covid-19-Vaccination-Tracker

***

## Background

Covid-19 Vaccination Tracker is a data visualization application. It utilizes USA vaccination data from the CDC and visualizes it on a map for easier comprehension. The goal is to keep track of the progress being made during the vaccination process and raise more awareness. This application will show data during various periods of time, which is further discussed in the Functionality & MVP and Bonus Features sections.

***

## Functionality & MVP

With the Covid-19 Vaccination Tracker, users will be able to:
* Select a vaccine manufacturer to look at their data
* Look at data by states
* Look at various stages of vaccination (each week)
* Visualize the Covid-19 Vaccination data on a map
* Hover over a state to get number of first/second doses administered

***

## Wireframes
The Covid-19 Vaccination Tracker will have one screen with a modal. The modal will have a `COVID-19 Vaccination Data Visualizer` heading, outlining what the application is, along with the total number of people who have been vaccinated in the US and a button to check out the map. On the main screen, users will have access to the data visualization. On the left side, there will be a filter, which users can utilize to filter by manufacturer(Pfizer, Moderna, Janssen). In the middle of the screen, users will have to ability to interect with the data map. Users will be able to hover over a state, and find out how many 1st/2nd doses have been administered during the week selected. At the botton of the screen, users can change the week, by dragging a slider to the right or left. By default, the total number of administered doses will be selected, and not a specified week.

***

![alt text](https://i.imgur.com/I0QVYAK.png)

***

![alt text](https://i.imgur.com/cZOlT7P.png)

***

## Implementation Timeline

* Day 1
 * Make sure devlopment enviornment has no issues
 * Set up Api calls and receive data from the CDC using Socrata.
 * Write functions to organize data
 * Learn how to implement DataMaps using D3.js

* Day 2
 * Make modal
 * Make the main page layout (navbar, filter, map, scroller)
 * Add nabvar links to the project Github, my LinkedIn, and personal site
 * Add filter by manufacturer
 * Get started on map

* Day 3 
 * Finish creating the map and start incorporating data on the map
 * Add functionality to hover and get information on the map
 * Get started on bottom scorller, to show data by week

* Day 4
   * Finish scroller
 * Make sure everything is working, run additonal tests
  * Fix up styling, responsiveness



