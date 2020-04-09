# Estructuras
---
### Table of Contents
- [Git Workflow](#git-workflow)
- [Create branch](#create-branch)
- [Other commands]("#other-commands)
---
##  Git Workflow
### Step 1 : Working Directory
- Hey Git, I'm going to use this documents with you, ok?
 ```javascript
    git init
```
### Step 3 : Staging  Area
- Send file to staging Area
 ```javascript
    git add <file>
```
- Send all files : there is two ways, both does the same thing

 ```javascript
    //One option
    git add .
    //Two option
    git add -A
```
### Step 3 : Local Repository
- Send files to local repository. Inside of "short description", put a short description about the new changes that you've make.
 ```javascript
    git commit -m "short description"
```
### Step 3 : Remote Repository (GitHub)
Send files to remote  repository. 
- New Repository: 
 ```javascript
   git remote add origin { link reposoritoy}
   git push -u origin master
```
- Existing Repository:
 ```javascript
   git push -u origin master
```
---
## Create Branch
Note : Ignore keys {}.
- Step 1 : Clone repository
 ```javascript
    git clone https://github.com/DeividT01/estructuras.git
```
- Step 2 : Go to GitBash and move to clone repository
 ```javascript
    cd estructuras
```
- Step 3 : Create a new branch. 
 ```javascript
    git checkout -b {nameBranch}
``` 
- Step 4 : Add new changes.
 ```javascript
    git add -A
``` 
- Step 5 : Create commit
 ```javascript
    git commit -m "commit description"
``` 
- Step 6 : Send to GitHub
 ```javascript
    git push origin {nameBranch}
```       
---
## Other useful commands:
 ```javascript
    git status //See on which status are files
    git pull // Bring files from Github to local
    git diff <file> //See diffrences between files
    git branch // See existing branchs
    git config -- global user.email "email"//Configurate email user
     git config -- global user.name "nombre" //Configurate email name

```   