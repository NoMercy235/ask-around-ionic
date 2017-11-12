## Ask Around

This is the Ionic application of the Ask Around project which will use the [Node x Express API](https://github.com/NoMercy235/ask-around-api).

Task list:
 - [ ] A login system (possibly allow login with google+ as well).
 - [ ] Retrieve the list of questions and display it in an infinite scrolling container.
 - [ ] Allow the user to filter the results and retrieve only what they need.
 - [ ] Create new questions and view own questions.
 - [ ] Reply to the questions of other users.
 - [ ] Up/Down vote questions (possibly replies as well).
 - [ ] Customize the interface to meet the user's needs.
 
Nice to have things:

 - [ ] Caching system.
 - [ ] Push notifications.
 - [ ] Real time chat.

### Deployment steps: 

 - Run locally (assuming ionic is installed globally): 
```bash
$ cd /project/path
$ npm install
$ ionic cordova prepare // If you want to deploy on the phone
$ ionic serve
```
 - To add the Android platform:

```bash
$ ionic cordova platform add android
$ ionic cordova run android
```

Add the `--livereload` flag for live reloading.

 - To generate the resource files run:

```bash
ionic cordova resources android
ionic cordova resources android --splash
```

 - To generate the .apk file run:

```bash
$ ionic cordova build android
```
Add  `--release `  flag for the release version.
