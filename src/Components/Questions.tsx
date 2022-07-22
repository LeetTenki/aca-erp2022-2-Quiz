const question = [
    {
      questionText: "1. Which of these Git client commands creates a copy of the repository and a working directory in the client’s workspace.",
      answerOptions: [
        {answerText: "A) update", isCorrect: false},  
        {answerText: "B) checkout", isCorrect: false},
        {answerText: "C) clone", isCorrect: true},
        {answerText: "D) import", isCorrect: false},  
      ],
    },
    {
      questionText: "2. True or False? In Git, if you want to make your local repository reflect changes that have been made in a remote (tracked) repository, you should run the pull command.",
      answerOptions: [
        {answerText: "A) True", isCorrect: true},
        {answerText: "B) False", isCorrect: false},      
      ],
    },
    {
      questionText: "3. In Git, which error would you get if you try to push master-branch changes to a remote repository, and someone else pushed changes to that same branch while you were making your changes?",
      answerOptions: [
        {answerText: "A) Rejected", isCorrect: true},
        {answerText: "B) 404", isCorrect: false},
        {answerText: "C) 500", isCorrect: false},
        {answerText: "D) Access denied", isCorrect: false},
      ],
    },
    {
      questionText: "4. If you want to make radical changes to your team’s project and don’t want to impact the rest of the team, you should implement your changes in …",
      answerOptions: [
        {answerText: "A) … a tag.", isCorrect: false},
        {answerText: "B) … the trunk.", isCorrect: false},
        {answerText: "C) … the root.", isCorrect: false},
        {answerText: "D) … a branch.", isCorrect: true},
      ],
    },
    {
      questionText: "5. Imagine that you just joined a development team that uses Git for version control and collaboration. To start contributing to the project, what Git operation would you most likely invoke first?",
      answerOptions: [
        {answerText: "A) checkout", isCorrect: false},
        {answerText: "B) clone", isCorrect: true},
        {answerText: "C) export", isCorrect: false},
        {answerText: "D) revert", isCorrect: false},
      ],
    },
    {
      questionText: "6. Now, imagine that you have a local repository, but other team members have pushed changes into the remote repository. What Git operation would you use to download those changes into your working copy?",
      answerOptions: [
        {answerText: "A) checkout", isCorrect: false},
        {answerText: "B) commit", isCorrect: false},
        {answerText: "C) export", isCorrect: false},
        {answerText: "D) pull", isCorrect: true},    
      ],
    },
    {
      questionText: "7. Which Git command changes where the HEAD pointer points and modifies the contents of the working directory?",
      answerOptions: [
        {answerText: "A) checkout", isCorrect: true},
        {answerText: "B) merge", isCorrect: false},
        {answerText: "C) mv", isCorrect: false},
        {answerText: "D) pull", isCorrect: false},     
      ],
    },
    {
      questionText: "8. Which one of the following is not part of the data structure of a Git repository?",
      answerOptions: [
        {answerText: "A) Body element", isCorrect: true},
        {answerText: "B) Branch pointer", isCorrect: false},
        {answerText: "C) Commit object", isCorrect: false},
        {answerText: "D) HEAD pointer", isCorrect: false},     
      ],
    },
    {
      questionText: "9. How do I add a message to a commit?",
      answerOptions: [
        {answerText: "A) $ git message 'Fix error in xxxx'", isCorrect: false},
        {answerText: "B) $ git add 'Fix error in xxxx'", isCorrect: false},
        {answerText: "C) $ git commit 'Fix error in xxxx'", isCorrect: false},
        {answerText: "D) $ git commit -m 'Fix error in xxxx'", isCorrect: true},
      
      ],
    },
    {
      questionText: "10. What is the correct syntax for committing all changes with a message?",
      answerOptions: [
        {answerText: "A) $ git message -am 'Fix error in xxxx'", isCorrect: false},
        {answerText: "B) $ git add -a 'Fix error in xxxx'", isCorrect: false},
        {answerText: "C) $ git commit -a 'Fix error in xxxx'", isCorrect: false},
        {answerText: "D) $ git commit -am 'Fix error in xxxx'", isCorrect: true},
      
      ],
    },
    {
      questionText: "11. Which comes first _____?",
      answerOptions: [
        {answerText: "A) $ git add", isCorrect: true},
        {answerText: "B) $ git commit", isCorrect: false},    
      ],
    },
    {
      questionText: "12. You can type 'git status' at any time in a directory controlled by git to check the status of your files.",
      answerOptions: [
        {answerText: "A) True", isCorrect: true},
        {answerText: "B) False", isCorrect: false},
      ],
    },
    {
      questionText: "13. We have just created a new file called 'home.html'. Which of the following will add this file so that we can commit it in git?",
      answerOptions: [
        {answerText: "A) $ git add home.html", isCorrect: true},
        {answerText: "B) $ git add new", isCorrect: false},
        {answerText: "C) $ git add -a home.html", isCorrect: false},
        {answerText: "D) $ git git commit home.html", isCorrect: false},     
      ],
    },
    {
      questionText: "14. Which of the following commands used to show all parameters in git?",
      answerOptions: [
        {answerText: "A) $ git config --list", isCorrect: true},
        {answerText: "B) $ git config -a", isCorrect: false},
        {answerText: "C) $ git config --all", isCorrect: false},
        {answerText: "D) $ git config --parameters --list", isCorrect: false},     
      ],
    },
    {
      questionText: "15. Which of the following commands used to return to the master branch?",
      answerOptions: [
        {answerText: "A) $ git checkout origin", isCorrect: false},
        {answerText: "B) $ git checkout -b master", isCorrect: false},
        {answerText: "C) $ git checkout master", isCorrect: true},
        {answerText: "D) $ git checkout branche", isCorrect: false},     
      ],
    },
    {
      questionText: "16. Which of the following commands used to undo a commit?",
      answerOptions: [
        {answerText: "A) $ git reset <commit>", isCorrect: false},
        {answerText: "B) $ git revert <commit>", isCorrect: true},
        {answerText: "C) $ git reset --hard origin/master", isCorrect: false},
        {answerText: "D) $ git init", isCorrect: false},
      ],
    },
    {
      questionText: "17. Which of the following command will show version of Node?",
      answerOptions: [
        {answerText: "A) $ npm --version", isCorrect: false},
        {answerText: "B) $ npm getVersion", isCorrect: false},
        {answerText: "C) $ node getVersion", isCorrect: false},
        {answerText: "D) $ node --version", isCorrect: true},
      ],
    },
    {
      questionText: "18. Which of the following commands used to permanently cancel a commit?",
      answerOptions: [
        {answerText: "A) $ git reset <commit>", isCorrect: true},
        {answerText: "B) $ git revert <commit>", isCorrect: false},
        {answerText: "C) $ git reset --hard origin/master", isCorrect: false},
        {answerText: "D) $ git init", isCorrect: false},
      ],
    },
    {
      questionText: "19. How to create a new branch and switch to it directly?",
      answerOptions: [
        {answerText: "A) $ git checkout <branch-name>", isCorrect: false},
        {answerText: "B) $ git branch <branch-name>", isCorrect: false},
        {answerText: "C) $ git checkout -b <branch-name>", isCorrect: true},
        {answerText: "D) $ git branch -new <branch-name>)", isCorrect: false},
      ],
    },
    {
      questionText: "20. What is the git command that downloads your repository from GitHub to your computer?",
      answerOptions: [
        {answerText: "A) $ git push", isCorrect: false},
        {answerText: "B) $ git commit", isCorrect: false},
        {answerText: "C) $ git fork", isCorrect: false},
        {answerText: "D) $ git clone", isCorrect: true},
      ],
    },
    {
      questionText: "21. What command is used to upload your code and changes to GitHub?",
      answerOptions: [
        {answerText: "A) $ git add", isCorrect: false},
        {answerText: "B) $ git upload", isCorrect: false},
        {answerText: "C) $ git push", isCorrect: true},
        {answerText: "D) $ git status", isCorrect: false},
      ],
    },
    {
      questionText: "22. Which command is used Install create-react-app?",
      answerOptions: [
        {answerText: "A) npm install -g create-react-app", isCorrect: true},
        {answerText: "B) npm install create-react-app", isCorrect: false},
        {answerText: "C) npm install -f create-react-app", isCorrect: false},
        {answerText: "D) install -g create-react-app", isCorrect: false},
      ],
    },
    {
      questionText: "23. How to initialize the local repository with git?",
      answerOptions: [
        {answerText: "A) $ git start", isCorrect: false},
        {answerText: "B) $ git init", isCorrect: true},
        {answerText: "C) $ git pull", isCorrect: false},
        {answerText: "D) $ git clean", isCorrect: false},
      ],
    },
    {
      questionText: "24. How do I get code from another repository on GitHub?",
      answerOptions: [
        {answerText: "A) Forking through the GitHub interface.", isCorrect: true},
        {answerText: "B) $ git pull-request", isCorrect: false},
        {answerText: "C) $ git fork", isCorrect: false},
        {answerText: "D) $ git clone", isCorrect: false},
      ],
    },
    {
      questionText: "25. How to check the status of your local repository since your last commit?",
      answerOptions: [
        {answerText: "A) $ git check", isCorrect: false},
        {answerText: "B) $ git commit", isCorrect: false},
        {answerText: "C) $ git diff", isCorrect: false},
        {answerText: "D) $ git status", isCorrect: true},
      ],
    },
    {
      questionText: "26. How do I add files to a commit?",
      answerOptions: [
        {answerText: "A) $ git stage", isCorrect: false},
        {answerText: "B) $ git commit", isCorrect: false},
        {answerText: "C) $ git add", isCorrect: true},
        {answerText: "D) $ git reset", isCorrect: false},
      ],
    },
    {
      questionText: "27. How to save the current state of your code in git?",
      answerOptions: [
        {answerText: "A) By validating the modifications staged with $ git commit", isCorrect: true},
        {answerText: "B) By adding all the changes and staging them with $ git stage", isCorrect: false},
        {answerText: "C) By adding all the changes and organizing them with $ git add", isCorrect: false},
        {answerText: "D) By creating a new commit with $ git initAnswer", isCorrect: false},
      ],
    },
    {
      questionText: "28. What shortcut to stage all the changes you have?",
      answerOptions: [
        {answerText: "A) $ git push -am 'Message'", isCorrect: false},
        {answerText: "B) $ git commit add .", isCorrect: false},
        {answerText: "C) $ git commit .", isCorrect: true},
        {answerText: "D) $ git add .", isCorrect: false},
      ],
    },
    {
      questionText: "29. Which command you use to check the history of your repository?",
      answerOptions: [
        {answerText: "A) $ git checkout", isCorrect: false},
        {answerText: "B) $ git fetch", isCorrect: false},
        {answerText: "C) $ git log", isCorrect: true},
        {answerText: "D) $ git diff", isCorrect: false},
      ],
    },
    {
      questionText: "30. Which command will let you know who modified a file?",
      answerOptions: [
        {answerText: "A) $ git blame", isCorrect: true},
        {answerText: "B) $ git diff", isCorrect: false},
        {answerText: "C) $ git log", isCorrect: false},
        {answerText: "D) $ git log –source", isCorrect: false},
      ],
    },
    {
      questionText: "31. Which Command is used to show limited number of commits?",
      answerOptions: [
        {answerText: "A) git fetch", isCorrect: false},
        {answerText: "B) git log -n", isCorrect: true},
        {answerText: "C) git config", isCorrect: false},
        {answerText: "D) git status", isCorrect: false},
      ],
    },
    {
      questionText: "32. Which command defines the author email to be used for all commits by the current user.",
      answerOptions: [
        {answerText: "A) git clean -f", isCorrect: false},
        {answerText: "B) git config --global user.email", isCorrect: true},
        {answerText: "C) git merge --no-ff", isCorrect: false},
        {answerText: "D) git email--amend", isCorrect: false},
      ],
    },
    {
      questionText: "33.  ____________ command is useful for getting a high-level overview of the project history.",
      answerOptions: [
        {answerText: "A) git log --oneline", isCorrect: true},
        {answerText: "B) git reset --hard", isCorrect: false},
        {answerText: "C) git log --author=''", isCorrect: false},
        {answerText: "D) git rebase", isCorrect: false},
      ],
    },
    {
      questionText: "34. __ removes untracked files from your working directory.",
      answerOptions: [
        {answerText: "A) git commit", isCorrect: false},
        {answerText: "B) git clean -f", isCorrect: false},
        {answerText: "C) git clean", isCorrect: true},
        {answerText: "D) git reset", isCorrect: false},
      ],
    },
    {
      questionText: "35. Which command creates an empty Git repository in the specified directory?",
      answerOptions: [
        {answerText: "A) git reset", isCorrect: false},
        {answerText: "B) git log ..", isCorrect: false},
        {answerText: "C) git init", isCorrect: true},
        {answerText: "D) git init --bare", isCorrect: false},
      ],
    },
    {
      questionText: "36. Command to download all the objects and references from a specified repository",
      answerOptions: [
        {answerText: "A) git config --list", isCorrect: false},
        {answerText: "B) git help", isCorrect: false},
        {answerText: "C) git fetch", isCorrect: true},
        {answerText: "D) git log -n", isCorrect: false},
      ],
    },
    {
      questionText: "37. Git command to compare two specified branches",
      answerOptions: [
        {answerText: "A) git diff ...", isCorrect: true},
        {answerText: "B) git merge", isCorrect: false},
        {answerText: "C) git blame -L", isCorrect: false},
        {answerText: "D) git push --tags", isCorrect: false},
      ],
    },
    {
      questionText: "38. _________ command renames the current branch to <branch>",
      answerOptions: [
        {answerText: "A) git remote rm", isCorrect: false},
        {answerText: "B) git branch -m", isCorrect: true},
        {answerText: "C) git branch -D (CAPS)", isCorrect: false},
        {answerText: "D) git rebase", isCorrect: false},
      ],
    },
    {
      questionText: "39. Which Git command displays the patch representing each commit.",
      answerOptions: [
        {answerText: "A) git branch", isCorrect: false},
        {answerText: "B) git remote -v", isCorrect: false},
        {answerText: "C) git log -p", isCorrect: true},
        {answerText: "D)  git log", isCorrect: false},
      ],
    },
    {
      questionText: "40. Which of the following command line environment is used for interacting with Git ?",
      answerOptions: [
        {answerText: "A) Git Bash", isCorrect: true},
        {answerText: "B) GitHub", isCorrect: false},
        {answerText: "C) Git Boot", isCorrect: false},
        {answerText: "D) Git Lab", isCorrect: true},
      ],
    },
    {
      questionText: "41. In Git, if you want to make your local repository reflect changes that have been made in a remote (tracked) repository, you should run the pull command",
      answerOptions: [
        {answerText: "A) True", isCorrect: true},
        {answerText: "B) False", isCorrect: false},
      ],
    },
    {
      questionText: "42. If you want to make radical changes to your team’s project and don’t want to impact the rest of the team, you should implement your changes in -",
      answerOptions: [
        {answerText: "A) the root", isCorrect: false},
        {answerText: "B) a tag", isCorrect: false},
        {answerText: "C) the trunk", isCorrect: false},
        {answerText: "D) None of the above", isCorrect: true},
      ],
    },
    {
      questionText: "43. The Git clone command does which of the following?",
      answerOptions: [
        {answerText: "A) Makes a local copy of the repository", isCorrect: false},
        {answerText: "B) Creates a working directory", isCorrect: false},
        {answerText: "C) Commits a new branch", isCorrect: false},
        {answerText: "D) Both 1 & 2", isCorrect: true},
      ],
    },
    {
      questionText: "44. Which one of the following is not part of the data structure of a Git repository?",
      answerOptions: [
        {answerText: "A) Branch pointer", isCorrect: false},
        {answerText: "B) Body element", isCorrect: true},
        {answerText: "C) Commit object", isCorrect: false},
        {answerText: "D) Head pointer", isCorrect: false},
      ],
    },
    {
      questionText: "45. Which of these Git client commands creates a copy of the repository and a working directory in the client’s workspace.",
      answerOptions: [
        {answerText: "A) checkout", isCorrect: false},
        {answerText: "B) clone", isCorrect: true},
        {answerText: "C) import", isCorrect: false},
        {answerText: "D) update", isCorrect: false},
      ],
    },
    {
      questionText: "46. Git is a....... Version Control tool.",
      answerOptions: [
        {answerText: "A) Decentralized", isCorrect: true},
        {answerText: "B) Centralized", isCorrect: false},
      ],
    },
    {
      questionText: "47. GIT belongs to the......... generation of Version Control tools",
      answerOptions: [
        {answerText: "A) 2nd", isCorrect: false},
        {answerText: "B) 3rd", isCorrect: true},
        {answerText: "C) 4th", isCorrect: false},
        {answerText: "D) 5th", isCorrect: false},
      
      ],
    },
    {
      questionText: "48. The main objectives of Git are -",
      answerOptions: [
        {answerText: "A) speed", isCorrect: false},
        {answerText: "B) data integrity", isCorrect: false},
        {answerText: "C) support for distributed non-linear workflows", isCorrect: false},
        {answerText: "D) All of the above", isCorrect: true},
      ],
    },
    {
      questionText: "49. What language is used in Git?",
      answerOptions: [
        {answerText: "A) C", isCorrect: false},
        {answerText: "B) HTML", isCorrect: false},
        {answerText: "C) PHP", isCorrect: true},
        {answerText: "D) C++", isCorrect: false},
      ],
    },
    {
      questionText: "50. Git command........... used to give tags to the specified commit.",
      answerOptions: [
        {answerText: "A) git checkout [branch name]", isCorrect: false},
        {answerText: "B) git show [commit]", isCorrect: false},
        {answerText: "C) git tag [commitID]", isCorrect: true},
        {answerText: "D) git rm [file]", isCorrect: false},
      ],
    },
    {
      questionText: "51. What is Git?",
      answerOptions: [
        {answerText: "A) A remote repository platform.", isCorrect: false},
        {answerText: "B) A version control system.", isCorrect: true},
        {answerText: "C) A programming language.", isCorrect: true},
        {answerText: "D) A nickname for GitHub.", isCorrect: false},
      ],
    },
    {
      questionText: "52. Git is the same as GitHub.",
      answerOptions: [
        {answerText: "A) True", isCorrect: false},
        {answerText: "B) False", isCorrect: true},
      ],
    },
    {
      questionText: "53. What is the command to get the installed version of Git?",
      answerOptions: [
        {answerText: "A) getGitVersion", isCorrect: false},
        {answerText: "B) git help version", isCorrect: false},
        {answerText: "C) gitVersion", isCorrect: false},
        {answerText: "D) git --version", isCorrect: true},
      ],
    },
    {
      questionText: "54. Which option should you use to set the default user name for every repository on your computer?",
      answerOptions: [
        {answerText: "A) --A", isCorrect: false},
        {answerText: "B) No need to specify that is the default.", isCorrect: false},
        {answerText: "C) --global", isCorrect: true},
        {answerText: "D) --all", isCorrect: false},
      ],
    },
    {
      questionText: "55. What is the command to set the user email for the current repository?",
      answerOptions: [
        {answerText: "A) git config email", isCorrect: false},
        {answerText: "B) git email.user", isCorrect: false},
        {answerText: "C) git config user.email", isCorrect: true},
      ],
    },
    {
      questionText: "56. What is the command to add all files and changes of the current folder to the staging environment of the Git repository?",
      answerOptions: [
        {answerText: "A) git add --files", isCorrect: false},
        {answerText: "B) git add", isCorrect: false},
        {answerText: "C) git add --all", isCorrect: true},
      ],
    },
    {
      questionText: "57. What is the command to get the current status of the Git repository?",
      answerOptions: [
        {answerText: "A) git getStatus", isCorrect: false},
        {answerText: "B) git status", isCorrect: true},
        {answerText: "C) git config --status", isCorrect: false},
        {answerText: "D) --status", isCorrect: false},
      ],
    },
    {
      questionText: "58. What is the command to initialize Git on the current repository?",
      answerOptions: [
        {answerText: "A) start git", isCorrect: false},
        {answerText: "B) git start", isCorrect: false},
        {answerText: "C) initialize git", isCorrect: false},
        {answerText: "D) git init", isCorrect: true},
      ],
    },
    {
      questionText: "59. Git automatically adds new files to the repository and starts tracking them.",
      answerOptions: [
        {answerText: "A) True", isCorrect: false},
        {answerText: "B) False", isCorrect: true},
      ],
    },
    {
      questionText: "60. Git commit history is automatically deleted:",
      answerOptions: [
        {answerText: "A) Every 2 weeks.", isCorrect: false},
        {answerText: "B) Every year.", isCorrect: false},
        {answerText: "C) Every month.", isCorrect: false},
        {answerText: "D) Commit history is never automatically deleted.", isCorrect: true},
      ],
    },
  ];
  export default question;