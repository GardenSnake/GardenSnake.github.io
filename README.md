# GardenSnake.github.io
A collaborative web project.

What should we do?
(Please add ideas for what we could do with this website)

Some Ideas:

1.Chat Website

2.Social Media Type Website


## How to Contribute!
_People might be coming to this being new to GitHub and everything - so it is good to have a step by step definition as to how to help in here!_

### Getting the files in your repo and computer

* Login to your own GitHub account ([or create one if you don't have yet!](https://github.com/))
* Have Git installed on your machine (If you are going with the console git version, be sure to go through a tutorial. They are short and really good. [Here is one, for example](https://try.github.io/))
* Return to this very page
* Click 'Fork' at the top right
	* Select where you want to fork it. Fork is, basically 'to have your own copy of the code in the project'
* Go to your fork
	* Git redirects you automatically
	* Else, you can go to GitHub, go to your Profile, and it will be listed there as a project
	* Starting here, you can do whatever you want with the fork - it is yours, in your repository and does not interfere with the original one.
* There is a green 'Clone or Download' button, click it.
	* You can download the code as a ZIP and extract it in your computer wherever you want
	* If you have a Git desktop GUI (Graphical User Interface - that means not via console, butusing a program), you can click 'Open in Desktop'
	* If you are using the git via console, you can use the links that are available there. If you are just starting, it is preferably that you use HTTPS - but you can also use the SSH version. To download it via this way; you should, in the console, nevigate where you want to have the project (E.g. 'My Documets/github') and then do `git clone {url}` (The URL that you copied from the small modal that appears when clicking 'Clone or Downlaod', which reads 'Clone with {mode}', where mode is either HTTPS or SSH, you can switch between the two; [read more here](https://help.github.com/articles/which-remote-url-should-i-use/))
	* Now you have the files on your local computer!

## Getting latest changes from the repository
 _Git is all about collaboration and synchronization_
Now, you might have a copy of the repository, but so do other people that want to contribute. If everybody were to contribute at the same time, a lot of conflicts would appear - imagine that you and somebody else edited line 25 of the index file - which change should be kept? Yours? Theirs? Both?
 Imagine yoy did fork, but went away on vacations for a month. Changes were made to the repo - and you need to have the latests things to work on so your new additions will not conflict with anybody else's!

  * To have the latest changes available - you need to add the original repo as an *Upstream* to your repo. 
  	* These are the [console steps required to do so](https://help.github.com/articles/configuring-a-remote-for-a-fork/) 
  	* In short, you need to add a way to grab the latest changes and bring them to your copy
  	* By doing so, you will be able to have it updated and avoid a few conflicts before they appear
  * Once you do update your repo in your computer, be sure to push the changes to your origin version of the branch


## Adding content and creating a pull request
 _Now that you have the files, contribute!_

* Open the files in your favorite editor
* Do a few changes - add html, some css, whatever you want to!
* In git, add and commit the files (this will depend on what git are you using, visual or console - read the docs or google around to refresh or if you didn't do the tutorial eariler)
	* Be sure to add the correct files
	* Be sure that the commit is a meaningful one - not a 'Added thing' or 'Bla bla bla' one.
* Push them to your repository
	* If you access now to your fork in GitHub, you should see your changes. But not in the original one - because this is YOUR fork!
* To publish your changes and make them available to be added to the original repo, you need to create a PULL REQUEST
	* A pull requests takes all your changes, compares them to the repor you want to add them, and creates a request to put them there
	* If there are conflicts (Like, if you edited a line that was also edited in the original project) you can still create the pull request, but it cannot be merged until the conflicts are resolved
	* In the *Pull Request* page, you need to select _where_ you want to add the changes, _from where_ you uploaded them. It could be in between your own work if you have different branches, but this time you need to compare between *forks*
	* Once you have done this, click 'create Pull Request'. You will now able to see it in the original repository, inside 'Pull Request', and by clicking 'Pull Requests' in GitHub's header while you are logged in.
* Once the Pull Request is done, the owned of the repo will get notified, and will check it. Owner can Approve, Delete, even suggest changes to the PR
* With all this, you are all set to have your changes merged in the repository - and wait for it to be merged back to the master branch!


_TODO: Add a few recommended lectures about git workflows?_

_TODO: Explain how to make the `master` branch appear in `https://{username}.github.io/`_



[More Information](https://www.reddit.com/r/learnprogramming/comments/6z8rxh/lets_work_on_a_web_development_project_together/)
