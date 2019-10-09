# Lancer-Project

# Important!

Please before you push your codes to the repository make sure you pull from the repository, so the changes that have been ade can be reflected on your machine
``git
    git pull 
    ```

# Developers guide.
This process here should be able to guide you on how to contribute effectively to this project, follow the steps below. You should not be new to the git workflow process however if you still are, the guide should still be able to help you through the process.

- Fork the repository to generate a copy of your own.
- Clone the repository.
```git
    git clone https://github.com/hngi/Lancer.git
```
- Make the repository (the forked repo) the remote upstream 
```git 
    git add remote upstream https://github.com/hngi/Lancer.git
```
- Create a branch, the branch name should at least be meaningfull e.g if you're working on the footer, your branch name would be;
```git 
    git checkout -b footer
```
- Make your changes, add them and make your commits
```git 
    git commit -m "your message"
```
- Push your codes to the remote upstream repository
```git 
    git push -u origin master
```
- Or you can also push your code to the current branch which you are in.
- Make your Pull request and wait for it to be merged.

# Happy hacking!!


