---
title: 'Git Stash, save work for winter 🐿'
description: 'Quick tips for using git stash.'
date: '2020-08-30'
tags: ['git', 'short']
path: '/blog/git-stash-tips'
draft: false
---

Pretend you're developing a new feature and have some work in progress. Meanwhile, something comes up and you need to switch branches. The problem is you don't want commit your unfinished work. Fortunately, `git stash` exists to solve exactly this and similar situations.

### Stashing work

The `git stash` command saves changes that are tracked by git and then reverts everything to match what it looked like after the last commit. Poof! Call git stash, uncommited changes are gone, stowed away for later if you need them. This frees you up to switch branches, make changes, or do any other git operations you may need to.

To use the changes again call `git stash apply` which applies all the changes that were saved onto the working directory. There is also a `git stash pop` command that does essentially the same thing except it removes the changes from where they were stored. I usually favor using `apply` in the off chance that I need to do it again or apply them to another branch.

Frequently I will stash, switch to master, pull down the latest changes from the remote, switch back to my feature branch, rebase master, and then re-apply my WIP changes.

```sh
git stash           // save local changes so I can safely switch branches
git checkout master // switch branches
git pull            // fetch and merge the latest changes
git checkout -      // switches back to the most recent branch
git rebase master   // rebase the feature branch on top of the latest changes to master
git stash apply     // or sometimes pop if I don't want to keep the stashed changes
```

The catch here is that commands that save work to the stash (`git stash` and `git stash push`) only store _tracked_ work. In layman's terms, this is usually the files that were previously added to git and does not include new files. To stash untracked files you can either first add them using `git add <whatever>` or call `git stash` or `git stash push` with the flag `-u` or `--included-untracked`.

By default, the saving commands are all or nothing. You can also stash changes to specific files or directories with `git stash push [--] [<pathspec>...]` in the same way you can checkout individual files or directories from other branches. In practice, I use it more like this: `git stash push -m "some message" -- file1.txt src/dirToStash/`.

### Multiple stashed changes - listing, showing, applying

Occasionally, when I get caught up with several issues I end up stashing changes on a few different branches. To see all the different saved stashes I can call `git stash list`.

```sh
$ git stash list
stash@{0}: WIP on foo-branch: 453ab21 Add some foo change
stash@{1}: WIP on bar-branch: 123cd45 Fix some bar issue
// ...etc
```

This follows the format:

`stash@{n}: WIP on <branchName>: <commitSHA> <commit message for that SHA>`.

Calling `git stash` without any arguments is the same as `git stash push`, and the change is listed as "WIP on _branchname_ ...". If you want to make it easier to know what was going on for a given stash or why it was made you can provide a stash message. This is done by calling `git stash push` with `-m <message>` or `--message <message>`.

To see what's in a stash you can call `git stash show n` where `n` is the number of the stash from `git stash list`. By default, this will print out a diffstat between the stashed contents and the commit the stash was based off of when the stash was recorded. This accepts the same arguments as [git diff](https://git-scm.com/docs/git-diff). I most commonly call `git stash show -p n` to see a full line-by-line diff of what changed when that stash was made.

Older stashes can be applyed by calling `git stash apply n`. A pretty common trick I use is to only apply a subset of the changes from a stash. This can be done with `git checkout stash@{n} — <filename>`.

### TL;DR - Cheatsheet

```sh
git stash push -m "whatever stash message" // stash changes with a message
git stash push -- [<pathspec>...]          // stash changes for individual files or directories
git stash list                             // show list of previous stashes
git stash show n                           // see stats of older stash
git stash show -p n                        // see diff of older stash
git stash apply n                          // apply older stash
git checkout stash@{0} — <filename>        // apply a subset of a given stash
```

#### Additional resources

- The [official documentation](https://git-scm.com/docs/git-stash) for git stash is a much more thorough reference than this post if you're looking to fill in any gaps in understanding on how `git stash` works and what commands are available.
- [Atlassian's documentation](https://www.atlassian.com/git/tutorials/saving-changes/git-stash) on git stash has some nice diagrams and a little explanation of the internals of how stashing works.
