# Pendigital Theme
This is our growing pendigital-theme, **or a fork of the theme**. The idea is to **fork** the original theme to start new web projects.

## Forking the 'pendigital-theme' theme for new web projects
Here's how to fork your own GitHub repo as using the forking option in Github doesn't work for your own repos. More info here: https://deanmalone.net/post/how-to-fork-your-own-repo-on-github/

1. Create a new repo in GitHub
2. Clone your new repo to your local machine - git clone https://github.com/timbowerbank/my-new-repo.git (when cloning you may be asked for a personal access token)
3. CD into the new local repo and add this theme's repo as an upstream remote - git remote add upstream https://github.com/timbowerbank/pendigital-theme.git
4. Update your new local repo with the theme - git pull upstream master
5. Update your remote repo (the one you just created above) - git push origin master


## Setting up the new forked theme
1. Don't ever update the _factory pages (otherwise you'll end up with merge conflicts), just use them as a source of html to copy from.
2. Always create new pages for the clients site and copy in the components you need
3. Sass - Copy bootstrap_theme/pendigital folder to bootstrap_theme/name-of-client
4. Sass - Amend the imports in custom.scss to the new name-of-client folder... this way you can edit away inside the sass files without affecting any future merges.
5. JS - copy the assets/js folder to assets/name-of-client-js
6. JS - only edit the name-of-client js files, again to avoid conflicts.
7. JS - if you do need an edited js file then remember to repoint the source src at the bottom of the page.


**Whenever the pendigital-theme is updated remember to run git pull upstream master, or git fetch upstream master - in order to get the latest components through.**

**The custom.scss file won't merge well, you might need to fix conflicts in there to ensure that this file imports the name-of-client.scss files instead of the default pendigital ones.**