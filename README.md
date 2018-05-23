# React-Video-Player
This is a video player app where the user can search for a video topic and get the relevant results they would like to watch. It was coded with HTML, CSS, and ES6 JavaScript, as well as using technologies and frameworks like Node, React, Youtube API, and Bootstrap. Some of the Node packages I've used in this app are express, lodash, react, react-dom, and youtube-api-search. 

---

- Update: I added the bootstrap jumbotron header to the app with React, YouTube, and Node logos (the technologies used to create this app) for better front end formatting and design.
![UPDATE](/read_me/5-update.png)

- The first thing the user will see upon the app loading is a simple interface with some video data already loaded. For this project I saw it fit to have the homepage loaded with videos on React. Below the main video is the video title, the name of the channel that published the video, and a brief description of the video.
![HOME SCREEN](/read_me/1-home.png)

- Whenever the user searches a video topic in the top search bar the app will use the YouTube API to find the top 5 most relevant videos for that search. The app automatically fetches the results of the user search every time they change the search term.
![SEARCH ONE](/read_me/2-search-one.png)

- This is the completed user search from the previous screenshot above. This is used to demonstrate how the user can view instant results of their search query as they are typing it out.
![SEARCH TWO](/read_me/3-search-two.png)

- On the right side of the page is a list of the five most relevant results to the search the user entered. The user can view any one of these videos by hovering over the video list item and clicking it.
![VIDEO LIST](/read_me/4-video-list.png)
