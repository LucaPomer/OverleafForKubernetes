/**let url = 'https://github.com/LucaPomer/workOverleaf.git';
/**require('simple-git')()
    .add('./*')
    .commit("first commit!")
    .addRemote('origin', url)
    .push(['-u', 'origin', 'master'], () => console.log('done'));


simpleGit()
    .listRemote(['--get-url'], (err, data) => {
        if (!err) {
            console.log('Remote url for repository at ' + __dirname + ':');
            console.log(data);
        }
    });
//simpleGit().removeRemote('origin');

const gitP = require('simple-git/promise');
const git = gitP();

git.checkIsRepo()
    .then(isRepo => !isRepo && initialiseRepo(git))
    .then(() => git.fetch());

    simpleGit().pull('origin','master', {'--allow-unrelated-histories': true})
    .tags((err, tags) => console.log("Latest available tag: %s", tags.latest));
//push(['-u', 'origin', 'master'], () => console.log('done'));
    simpleGit().commit('second commit').push('origin','master');
    simpleGit().

function initialiseRepo (git) {
    return git.init()
        .then(() => git.addRemote('origin', 'https://github.com/LucaPomer/workOverleaf.git'))
}

simpleGit()
    .init()
    .add('./*')
    .commit("first commit!")
    .addRemote('origin', 'https://github.com/LucaPomer/workOverleaf.git')
    .push('origin', 'master');
 **/

// Simple-git without promise
const simpleGit = require('simple-git')();
// Shelljs package for running shell tasks optional
const shellJs = require('shelljs');
// Simple Git with Promise for handling success and failure
const simpleGitPromise = require('simple-git/promise')();


// change current directory to repo directory in local
shellJs.cd('/Users/luca/Documents/work/gitOverleafTest/repo-git');
// Repo name
const repo = 'https://github.com/LucaPomer/workOverleaf.git';  //Repo name

/**
// User name and password of your GitHub
const userName = 'username';
const password = 'password';
// Set up GitHub url like this so no manual entry of user pass needed
const gitHubUrl = `https://${userName}:${password}@github.com/${userName}/${repo}`;
// add local git config like username and email
simpleGit.addConfig('user.email','balvinder294@gmail.com');
simpleGit.addConfig('user.name','Balvinder Singh');
// Add remore repo url as origin to repo
simpleGitPromise.addRemote('origin',gitHubUrl);
 **/
// Add all files for commit
simpleGitPromise.add('.')
    .then(
        (addSuccess) => {
            console.log(addSuccess);
        }, (failedAdd) => {
            console.log('adding files failed');
        });
// Commit files as Initial Commit
simpleGitPromise.commit('Intial commit by simplegit')
    .then(
        (successCommit) => {
            console.log(successCommit);
        }, (failed) => {
            console.log('failed commmit');
        });
// Finally push to online repository
simpleGitPromise.push('origin','master')
    .then((success) => {
        console.log('repo successfully pushed');
    },(failed)=> {
        console.log('repo push failed');
    });
