# DevTools

## What is DevTools?

**DevTools is the web developer's all-in-one toolbox!**

Stop us if this scene sounds familiar: you sit down to code a site, and find yourself opening page after page as you research the technologies you'll need. Before you know it, you've got something like 100 different tabs open in your browser window. You find yourself frustratedly clicking through them all, attempting to remember which is which as you navigate back and forth - with so many links open, there's no room to see each page title! On top of that, your computer's running slower. But what if you could potentially save yourself all these hours of annoyance by consolidating the tools you need in one handy location? Enter DevTools. This site serves as a place for developers to query several common online resources used for building webpages, and then save any search results that they deem relevant in a personalized profile linked to their Google account. Development has never been so efficient!

DevTools was a collaborative effort on the part of myself and two other people. I coded the part of the site concerning the YouTube API, as well as designing the site's layout/color scheme/font scheme, designing the logo, writing the "pitch statement" found on the "About DevTools" page, and writing the code that generates and animates the logo with Two.js. Additionally, I coded several bug fixes/"fool proofing" aspects of the site (concerning Firebase/authentication/etc), and put in media queries to make the site responsive to mobile screens.

The most current version of the site is deployed at https://zagara2.github.io/DevTools/ . 

## Technologies Used

* HTML5
* CSS3
* Javascript
* JQuery
* Firebase
* user authentication
* Two.js design and animation library
* AJAX
* APIs
* Bootstrap
* MapBox

## Browser and Screen Compatibility

### Browser Tests

The site has been tested so far in Chrome, Firefox, and the latest version of Internet Explorer.

The site functions fully on Chrome and Internet Explorer.

However, it has some issues in Firefox:
* The sign-in initially times out (error message: "Login Failed. The popup has been closed by the user before finalizing the operation."), but for some reason will work after a couple of tries
* Throws a "ReferenceError: event is not defined" when users try to search for a term on any of the search pages. This does not happen in Firefox on an older version of the site (https://zagara2.github.io/devtools_old/), so I have plans to compare the 2 versions to figure out how to fix the bug.

Plans to test on Safari upcoming.

### Screen Compatibility Tests

When loaded properly (on a device other than a phone, as the button layout has been modified slightly for mobile), the homepage should look like this (note: the margins may appear slightly uneven due to photo cropping):

![Homepage](/assets/images/devtools.JPG)

The "about" page should look like this:

![About Page](/assets/images/aboutpage1.JPG)

A typical search page should look like this (after one has entered a search term):

![Search Page](/assets/images/searchwithresults3.JPG)

The "saved" pages are formatted like this:

![Saved Page](/assets/images/savedpage.JPG)

The site is best viewed on a large desktop (1680x1050 and up), but looks good on essentially any modern device's screen resolution. This includes both a 10" and 12" Netbook, a 13" and 15" notebook, 19"-24" desktops, Kindle Fire, Asus Nexus 7, iPad and iPad Pro, Samsung Galaxy tab, Microsoft Surface Pro, iPhone 3 and up (including iPhone 6-7 plus), Galaxy S2 and up, LG G 3-5, and 480p, 720p and 1080p televisions. 

## The Site in Action
Use of the site is fairly straightforward. Users click the "Google Sign-In" button to sign into the site with their Google accounts. One can still search on the site while signed out, however, articles will not be able to be saved, and access to any of the areas in the "Saved" section will be denied. As a fun perk and a way to track the demographics of our userbase, users can enter their location on the homepage's map, and a pin (visible to all future users) will show up on the map at that location. The orange buttons at the top represent different categories of resources users can search through (e.g. News, Network, etc), and clicking each one reveals a list of sites in that category that the user can query (e.g. Reddit, Github, etc). The user has the option to save or view each search result. The "Saved" tab allows users to view every search result they have saved to their account, and gives them the option to delete the article from their account, view it, or mark it as "read". Within the "Saved" section, users have the option to view all saved articles, view only read articles, or view only unread articles. 

## Future Plans for Improvement
* At the time this site was made, my teammates and I did not know much about backend development, which seriously limited the number of APIs we were able to use due to oAuth issues. However, now that I am a full-stack developer, I plan to go back and use Node.js to go back and integrate many APIs that I previously could not (such as Stack Exchange, Twitter, Slashdot) - hence why you see "placeholder" in the drop-down menus.

* Currently, the logo will only animate on larger screen sizes, due to the fact that I have not yet had time to go back and redo the coordinates of the design in Two.js to work with smaller screens. For now, the logo you see on smaller screens is merely a picture of the code generated by Two.js on larger screen sizes. I aim to make several versions of the logo (to be displayed at the appropriate screen sizes) that are still able to animate. 

## Current Bugs

Besides the Firefox-specific bugs discussed above, the site's background appears more zoomed in on some pages than others, but it is not highly noticeable.

