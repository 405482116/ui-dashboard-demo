# Ui dashboard demo
This is just a demo

> Note: Before run the project,you need run ``` npm install ``` add dependencies.

## Build 

Run  **``` npm run build ```** can build the styles and the javascripts.
- output
```
[21:30:58] Starting 'default'...
[21:30:58] Starting 'clean:dist'...
[21:30:58] Finished 'default' after 15 ms
[21:30:58] Finished 'clean:dist' after 83 ms
[21:30:58] Starting 'copy:assets'...
[21:30:58] Starting 'build:styles'...
[21:30:58] Starting 'build:scripts'...
[21:30:59] Finished 'build:styles' after 1.28 s
[21:31:00] Finished 'copy:assets' after 1.36 s
[21:31:00] Finished 'build:scripts' after 1.56 s
```


Run **```gulp watch ```** watch styles and scripts,when have some change auto build it.

- output
```
[21:31:56] Starting 'watch'...
[21:31:56] Finished 'watch' after 37 ms
```


when build finished you can run **```npm start```**.

- output

```
$ npm start
listening on port 3000!
```
when finshed you can open [local:3000](http://localhost:3000/).


> Note: Better use chrome and firefox ,because time is very short i use fetch call(just use it generate mock data, render dynamic page), some where IE not support fetch fn.