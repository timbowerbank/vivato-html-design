# Pendigital Theme
This is our growing pendigital-theme, **or a fork of the theme**. The idea is to **fork** the original theme to start new web projects.

## Forking the 'pendigital-theme' theme for new web projects
Here's how to fork your own GitHub repo as using the forking option in Github doesn't work for your own repos. More info here: https://deanmalone.net/post/how-to-fork-your-own-repo-on-github/

1. Create a new repo in GitHub
2. Clone your new repo to your local machine - git clone https://github.com/timbowerbank/my-new-repo.git (when cloning you may be asked for a personal access token)
3. CD into the new local repo and add this theme's repo as an upstream remote - git remote add upstream https://github.com/timbowerbank/pendigital-theme.git
4. Update your new local repo with the theme - git pull upstream master
5. Update your remote repo (the one you just created above) - git push origin master
6. Note: that the default branch in your new repo will be called main rather than master - so there are no references to the slave trade

## Forking the 'pendigital-theme' for new web projects 2022
I had some issues following the above commands. Please see these new commands.
1. Using terminal create new directory - ```mkdir my-new-directory```
2. Invoke ```git init``` in the folder
3. Create a readme file and add it as a first commit
4. Create a new empty repo on GitHub
5. Copy the repo address from Github and add it to your new local repo: ```git remote add origin https://github.com/timbowerbank/my-new-repo.git```
6. Push to it with the -u. ```git push -u origin master```
7. Add the Pendigital theme upstream - ```git remote add upstream https://github.com/timbowerbank/pendigital-theme.git```
8. Fetch it - ```git fetch upstream```
9. Merge it - ```git merge upstream/master master  --allow-unrelated-histories```
10. Sort any merge conflicts
11. Change buffer size to allow bigger files - ```git config --global http.postBuffer 157286400``` 
12. Now push to origin - ```git push origin master```

## Setting up the new forked theme
1. Don't ever update the _factory pages (otherwise you'll end up with merge conflicts), just use them as a source of html to copy from.
2. Always create new pages for the clients site and copy in the components you need
3. Sass - Copy bootstrap_theme/pendigital folder to bootstrap_theme/name-of-client
4. Sass - Amend the imports in custom.scss to the new name-of-client folder... this way you can edit away inside the sass files without affecting any future merges.
5. JS - copy the assets/js folder to assets/name-of-client-js
6. JS - only edit the name-of-client js files, again to avoid conflicts.
7. JS - if you do need an edited js file then remember to repoint the source src at the bottom of the page.
8. Pinegrow - PG didn't recognise all my sass stylesheets after this. I had to go to page > manage stylesheets and then select use SCSS for the bootstrap.min.css option. Select the file using the file picker and then click use. After this the stylesheets should refresh OK.

**Whenever the pendigital-theme is updated remember to run git pull upstream master, or git fetch upstream master - in order to get the latest components through.**

**If you have added a new sass file, remember to copy it to the sass/name-of-client directory and amend the import in custom.scss**

**The custom.scss file won't merge well, you might need to fix conflicts in there to ensure that this file imports the name-of-client.scss files instead of the default pendigital ones.**


You might find these git commands useful for the forked theme, it's important to fetch changes from upstream and then check them out to avoid merge conflicts:
* git fetch upstream
* git checkout upstream/master
* git log upstream/master ^master
* git merge upstream/master master