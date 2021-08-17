Now that you have pulled the repository and switched to the first lesson, lets get started.

From the setting_up guide, you should now have Node.js installed. 
NOTE: if not, switch to the setting_up branch using:

```git switch setting_up```

You will notice now that you have four files in the directory including this one. Lets look at each briefly, excluding this one.

### /.gitignore
This file is used to exclude files from git tracking. Essentially any file specified in here will be ignored by git. Open the file and take a look. It's a bit confusing at first because there are a words that aren't familliar. Never mind, this file is actually a template and a lot of entries in this file are more than we need for this lesson, however, this file is really important for managing your code and is a must have. 

- Anatomy

This is a simple file and we can observe two main tpyes of entries, one which start with a **#** and ones that don't. Simply the lines which start with # are comments for humans to read and will be ignored by git when it reads this file and the rest of the lines are read by git. 

We can notice straight away that the lines git reads have some differences. Sometimes they start with alph characters, sometimes with a full stop or dot and sometimes with a * character. [click here](https://git-scm.com/docs/gitignore#_pattern_format) to read more. 

For now we are going to move on to the next file and will return to the .gitignore file in a bit.

### /package.json
This file is used to tell node package manager better known as npm, about the project, how to configure it depending on what a developer is doing and also information about the things the project needs to work properly. A more in-depth description can be found [here](https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/).

- Anatomy

The format of this file is JavaScript Object Notation, aka JSON. We can tell its format immediatly by observing the file extension **.json**. This format is a standard and is specified [here](https://www.json.org/json-en.html). Simply though, it has two main structures, one called objects which are identified with curly or handlebar braces:
```json
{ }
```
and one called lists which are identified by square braces:
```json
[ ]
```
Objects tend to hold key:value pairs:
```json
{ 
    "key":value,
    "string": "bot",
    "number": 123,
    "object": {
        "another_object": "a-server.com"
    },
    "a_list": ["el1", "el2", "eln..."],
    "logical": true,
    "some_null_value": null
}
```
and lists tend to hold ordered lists:
```json
[1,2,3, ... , n]
```
In our file we currently only have objects.

> As a quick exercise, find the "author" key and set its value within the quotes ("\<set the authors name>") to 1337c0d3r.

Your entry should look something like this:
```json
...

"repository": {
    "type": "git",
    "url": "git+https://github.com/BarryFoye/nnb-mcb.git"
  },
  "author": "1337c0d3r",
  "license": "ISC",
  "bugs": {

...
```
More about this file later...

### /README.md
This file is a markdown file, which we can identify by the .md file extension. Readme files are simple text file like this one. The README is usually used to house instructions. At the route level it should give enough information about the project and how to get started, or at least link to a getting started guide. At other levels they may describe the module they're contained in or used to convey informatoin to a developmer so they can understand that part of the project better.

Now we've taken a look at the files, lets look again at the package.json file. In the root object we're looking for the key "dependencies". A useful way to communicate the thing we're looking for in code (if you already know it, which I do!) is to share the line number on which the specific thing of interest is on. In this case the "dependencies" key is  on line number **6**. We can see "mineflayer" is a key within the "dependencies" object. Let's have a quick look at the value:
```json
{
    "mineflayer": "^3.9.0"
}
```
the key in this case is the name of the package or library this project is dependant on and the value specifies the version that is needed. The hat symbol **^** is used to indicate "or higher" and 3.9.0 is the version. so this line actually conveys the message to our npm module that we need version 3.9.0 or higher. That means 3.8.9 is to old a version, but 3.9.1 is acceptable and our project should work, although ideally we need version 3.9.0, because this is the version we are developing with and know it will work under this version.

The rest ofg the file is interesting and we get back to it but for now we will continue on.

We're going to write our first **npm** command. This will allow us to "intstall" our dependency and allow us to now write some code. First in VS Code press ```ctrl and '``` . This should open up a terminal where you can type commands in a shell. If it's already open, skip this step.

The command tells npm to look at the package.json file, look for any dependencies and download them. Enter the following:

```npm install```

Once done, in the console output you should see something like the following:
```
npm notice created a lockfile as package-lock.json. You should commit this file.
added 75 packages from 57 contributors and audited 75 packages in 10.352s

4 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

Great ... *but wait* ... looks like we have a new folder called node_modules and a new file called package-lock.json. These were auto generated during the install and for now we'll forget about them except to say that the node_modules contains our dependency "mineflayer" but also mineflayers dependencies and their dependencies and so on until all are satisfied and the package-lock.json details these dependencies. Have a look but dont alter the folder, its content or the lock file.

Now we should check the status of our project as we've just added some new stuff and git may have an issue with it. Lets type ```git status``` into our shell and press enter. You should see an output like this:
```
On branch lesson_one
Your branch is up to date with 'origin/lesson_one'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        package-lock.json

nothing added to commit but untracked files present (use "git add" to track)
```

So this says a few things, like we're still up to date with teh remote repository, which is good! It also says that the package-lock.json file is "untracked". Thats the file that the install command just created. We don't want to track this file so lets add it to the .gitignore file so git knows not to track it at all. 

Open up the .gitignore file and scroll to the bottom, should be line 104. Lets go to line 106 and add a comment using the # we learned about. Add the following:

```
# Packages
```
Now on line 107 lets add the file name so git will see it in this file and ignore it totally. So add the following:
```
package-lock.json
```
So you should end up with:
```
# Packages
package-lock.json
```

Save the file. All done, nothing left to do, totally complete, we're good... Now let's confirm this assumption with another check of the status of git. type ```git status``` into your shell and hey presto....ooooooh, now we see a new message like this:
```
On branch lesson_one
Your branch is up to date with 'origin/lesson_one'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   .gitignore

no changes added to commit (use "git add" and/or "git commit -a")
```

Oh yeah we modified the .gitignore file and git is tracking that and has noticed the modification. Okiedokie we can sort that. Lets look at the message, so we're still up to date with the remote, *buíochas le Dia*, but we have a message saying we have changes but that they are not "staged" for "commit"? Briefly, git keeps a record of all changes in chronological order and a change can be "staged" with other changes and "commit"ed to this chronological list. To stage a change or changes we type ```git add``` followed by the files names which have changes which you'd like to commit. For simplicity sake we are going to use the dot shortcut to say add "all" changes for the next commit. So type ```git add .``` into your shell. Now check the status again by typing ```git status``` and you should now see:
```
On branch lesson_one
Your branch is up to date with 'origin/lesson_one'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   .gitignore
```

Nice, the branch is still up to date and now we have staged our change...now we need to commit this change to gits change log (remember that chronological list...thats gits change log!). 

When making a commit it is required to add a message to it, like a little memory of why you made a certain change. We can do this a few different ways but for now we'll do it in the shell. the commit command is ```git commit```, but if we do this on its own, git will complain about the commit message being empty. To solve this we use a thing called a command line arguement also known as a flag. In this case the flagis -m meaning message and then in "quotes" we type the message. git will see this a bit like a key:value pair, the flag being the key and the "message in quotes" as the value (-m:"a message" for example). but on the command line in the shell we type it like this:
```bash
git commit -m "added package-lock to ignore file"
```
give it a try and feel free to modiffy the message if you think it could be clearer. Remember these messages are so that you can remember the commit and why. Once you hit enter you'll see something similar to this:
```
[lesson_one 827d19c] added package-lock to ignore file
 1 file changed, 4 insertions(+), 1 deletion(-)
 ```
Now we're done....*wait*...we need to check ```git status``` to make sure. Go ahead and enter ```git status```. Booooooo, whats this new message:
```
On branch lesson_one
Your branch is ahead of 'origin/lesson_one' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
```

Now we're ahead of origin? Whaaaat? Oh wait that's right, we made a change here, locally and we need to push that to our remote repository so that other people using our code has the latest changes!

 Our final step for this is to simply push our change. It can be a bit more complex but we're keeping it simple here. To push our change we use ```git push```! and thats it. Give it a try and see. The output will show progress information like enumerating, counting, compression, writing and completion. If you get any errors :eyes:, you're on your own :running:.