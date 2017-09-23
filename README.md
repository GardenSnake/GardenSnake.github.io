# [GardenSnake](https://gardensnake.github.io/)  
_A collaborative web project._

It's always hard the first time you do something. Reading articles & watching tutorials can help, but what's better than actually trying to do the stuff? This project helps newcomers get right into programming along with others and make something amazing happen. If you're new to GitHub, follow the steps below. 

## Gatting Started!

**Before you begin:** _Login to your own GitHub account ([or create one if you don't have yet!](https://github.com/)) 
If you're using Windows, have Git installed on your machine (If you are going with the console git version, be sure to go through a tutorial. They are short and really good. [Here is one, for example](https://try.github.io/))_

## Getting the files into your account and computer
*  Click 'Fork' at the top right of this page
	* This will create a copy of this repository in your account. You basically have your own copy now.
* Go to your fork
	* Git redirects you automatically
	* Else, you can go to GitHub, go to your Profile, and it will be listed there as a project
	* Starting here, you can do whatever you want with the fork - it is yours, in your repository and does not interfere with the original one.
* There is a green 'Clone or Download' button, click it.
	* You can download the code as a ZIP and extract it in your computer wherever you want
	* If you have a Git desktop GUI (Graphical User Interface - that means not via console, butusing a program), you can click 'Open in Desktop'
	* If you are using the git via console, you can use the links that are available there. If you are just starting, it is preferably that you use HTTPS - but you can also use the SSH version. To download it via this way; you should, in the console, nevigate where you want to have the project (E.g. 'My Documets/github') and then do `git clone {url}` (The URL that you copied from the small modal that appears when clicking 'Clone or Downlaod', which reads 'Clone with {mode}', where mode is either HTTPS or SSH, you can switch between the two; [read more here](https://help.github.com/articles/which-remote-url-should-i-use/))
	* Now you have the files on your local computer!
	
## Adding content
_Now that you have the files, contribute!_
* Open the files in your favorite editor
* Start with small changes. Begin by adding your name to contributors.html 
	* look at the previous names listed for help.
	* You can also choose to add some style to your box by going into css/signature.css
	* If you want, you can also add a comment in index.html
* (Once you are able to successfully submit your changes, you can move on to working on beginner projects listed below).

## Creating a pull request
_submit your changes to original repository so everyone can see_
 
* In git, add and commit the files (this will depend on what git are you using, visual or console - read the docs or google around to refresh or if you didn't do the tutorial eariler)
	* Make sure to test your changes on your computer to make sure they work.   
	* Make sure to add the correct files when you commit. 
	* Be sure that the comment is a meaningful one - not a 'Added thing' or 'Bla bla bla' one.
* Push them to your repository
	* If you access now to your fork in GitHub, you should see your changes in your GitHub account. But not in the original one - because you pushed them to YOUR fork!
* To publish your changes and make them available to be added to the original repo, you need to create a PULL REQUEST
	* A pull request takes all your changes, compares them to the repo you want to add them, and creates a request to put them there
	* If there are conflicts (Like, if you edited a line that was also edited in the original project) you can still create the pull request, but it cannot be merged until the conflicts are resolved
	* In the *Pull Request* page, you need to select _where_ you want to add the changes, _from where_ you uploaded them. It could be in between your own work if you have different branches, but this time you need to compare between *forks*
	* Once you have done this, click 'create Pull Request'. You will now able to see it in the original repository, inside 'Pull Request', and by clicking 'Pull Requests' in GitHub's header while you are logged in.
* Once the Pull Request is done, the owned of the repo will get notified, and will check it. Owner can Approve, Delete, even suggest changes to the PR
* With all this, you are all set to have your changes merged in the repository - and wait for it to be merged back to the master branch!


## Getting latest changes from the repository
 _Git is all about collaboration and synchronization_
 
Now, you might have a copy of the repository, but so do other people that want to contribute. If everybody were to contribute at the same time, a lot of conflicts would appear - imagine that you and somebody else edited line 25 of the index file - which change should be kept? Yours? Theirs? Both?
 Imagine you did fork, but went away on vacations for a month. Changes were made to the main repository - and you need to have the latests things to work on so your new additions will not conflict with anybody else's! Don't worry, you don't need to fork again, you just need to pull the latest changes to your repository.

  * To have the latest changes available - you need to add the original repo as an *Upstream* to your repo. 
  	* These are the [console steps required to do so](https://help.github.com/articles/configuring-a-remote-for-a-fork/) 
  	* In short, you need to add a way to grab the latest changes and pull them to your copy
  	* By doing so, you will be able to have it updated and avoid a few conflicts before they appear
  * Once you do update your repo in your computer, be sure to push the changes to your origin version of the branch

## Beginner Projects: 
Here's a list of beginner projects and suggestions for how newcomers can improve them.


**1. Photo Gallery:** _displays a series of photos_ 

* add and improve css, decorate the page.
* add a website header, footer, a navigation bar or other elements to improve functionality

**2. HTML Guide:** _visual reference of HTML elements, helps understand the potential of HTML elements_

* Add new HTML elements that you learned that haven't been added to this page yet.

**3. World Map of Contributors:** _displays locations of all contributors_ 

* Add yourself by editing data/contributors.js file
* edit css and improve the outlook of the page
* add or improve functionality of [Google maps api](https://developers.google.com/maps/documentation/javascript/)

**4. Pokemon Card Drawer:** _simulates drawing cards from a pack of cards_

* add and stylize background, header, footer to make the appearence better
* add a reset button.
* add another pack of cards by working on js/pokemoncard.js file.


**5. Text Analyzer:** _performs a function on given string_ 

* Implement a function by adding a method in textanalyzer.js and linking it back to a button in textanalyzer.html
* fix the appearence of the page.


**6. Google Clone:** _imitation of Google_ 

* Add, adjust and align HTML elements to match [Google's homepage](https://www.google.com)
* fix and stylize css to match Google.



## Learning Resources

* [Git Tutorial for Beginners: Command-Line Fundamentals](https://www.youtube.com/watch?v=HVsySz-h9r4)
* [Git Codecademy Course](https://www.codecademy.com/learn/learn-git)
* [Git Basics](https://www.theodinproject.com/courses/web-development-101/lessons/git-basics)

_TODO: Explain how to make the `master` branch appear in `https://{username}.github.io/`_



[More Information](https://www.reddit.com/r/learnprogramming/comments/6z8rxh/lets_work_on_a_web_development_project_together/)
