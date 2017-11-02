# Greeeen Gallery!

## A simple Angular 4 app, showing different images with options for filtering by category, and search by keyword (caption)

![Alt text](src/assets/app_img/appPrintScreen.png?raw=true "App Printscreen")

"Greeeeen Gallery!" is a simple photo gallery app, created in Angular 4. It displays a set of images, where clicking on every image, a full size image with caption
is opened. There is an option to filter images by category, in a moving sidebar. Also, using navigation link "Search", it is possible to search images by keyword
(their caption), and images are displayed as user types in.

The app is responsive.

Main features why I created this app:

- Angular 4
- Routing
- Components
- Search - search by keyword, show results as user types in
- Bootstrap 3

## DEMO

The app is hosted on GH pages: https://muki0082.github.io/photo-gallery/

## Installation

Assuming you have node, npm and git installed:

1. In Git Bash:
    - $ git clone https://github.com/muki0082/photo-gallery.git photo-gallery
    - $ cd photo-gallery
    - $ npm install

2. Navigate to your photo-gallery folder in CMD

3. Start application by typing npm start

4. Open http://localhost:4200/ in your browser.

## TO-DO

1. Alter data source from this set of predefined images, to get data from a remote server. 
Suggestion - get and show images, categories, captions, or even more data, using Flickr API

2. This is an app, intended for practicing Angular4. If under (1.) is done, consider making 
better looking design.