const simpleGit = require('simple-git');
let url = 'https://github.com/LucaPomer/workOverleaf.git';
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
    });**/
simpleGit().removeRemote('origin');

simpleGit()
    .init()
    .add('./*')
    .commit("first commit!")
    .addRemote('origin', 'https://github.com/LucaPomer/workOverleaf.git')
    .push('origin', 'master');