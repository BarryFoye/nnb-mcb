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

