# expectations-vs-reality
Expectation VS Reality


| Method | URL | description | view |
| ----- | ------------- | ------------- | --------- |
| `GET`  | `/`  | Index page  | index |
| | |
| **AUTH** | | folder: auth|
| `GET`  | `/register`  | Register form  | register-form |
| `POST`  | `/register`  | Register succees/error  | index |
| `GET`  | `/login`  | Login form  | login-form |
| `POST`  | `/login`  | Login succees/error  | index |
| `POST`  | `/logout`  | Logout of current user  | index |
| | ||
| **VALORATION BUTTONS** | | folder: ValorationButtons |
| `POST`  | `/:userId/like`  | Add +1 to the user's likes (only for logged in users) | next() |
| `POST`  | `/:filmId/masterpiece`  | Mark a film as a *f------ masterpiece* (only for Creators or Admins) | next() |
| `POST`  | `/:filmId/bullshit`  | Mark a film as a *bullshit* (only for Creators or Admins)  | next() |
| `POST`  | `/:filmId/masterpieceOut`  | Unmark a film as a *f------ masterpiece* (only for Creators or Admins) | next() |
| `POST`  | `/:filmId/bullshitOut`  | Unmark a film as a *bullshit* (only for Creators or Admins)  | next() |
| | ||
| **MOVIES**  |  | folder: movies   |
| `GET`  | `/movies`  | Retrieve all movies  | movies-list |
| `POST`  | `/movies/search`  | Retrieve all movies that fit the searching  | movies-search-result |
| `GET`  | `/movies/:movieId`  | Retrieve one single movie page  | movieId |
| `POST`  | `/movies/:movieId/save`  | Save the film in the user's list  | movieId |
| `POST`  | `/movies/:movieId/unsave`  | Delete the film from the user's list  | movieId |
| **MOVIES** *posts* |  |   |
| `POST`  | `/movies/:movieId/new-post`  | Create a new post (comment, spoiler, summary)  | movieId |
| `GET`  | `/movies/:movieId/:postId/edit`  | Form to edit a post (comment, spoiler, summary), only if Creator, Admin, or CurrentUser  | comment-edit-form |
| `POST`  | `/movies/:movieId/:postId/edit`  | Edit a post (comment, spoiler, summary), only if Creator, Admin, or CurrentUser  |  movieId |
| `POST`  | `/movies/:movieId/:postId/delete`  | Delete a post (comment, spoiler, summary), only if Admin, or CurrentUser  | movieId |
| **MOVIES** *curated lists*  |  |   |
| `GET`  | `/movies/masterpieces`  | Retrieve all movies marked as *f------ masterpiece* | masterpieces |
| `GET`  | `/movies/bullshits`  | Retrieve all movies marked as *bullshit* | bullshits |
||||
| **SHORTS**  |  | folder: shorts  |
| `GET`  | `/shorts`  | Retrieve all shorts  | shorts-list |
| `POST`  | `/shorts/search`  | Retrieve all shorts that fit the searching  | shorts-search-result |
| `GET`  | `/shorts/new-short`  | Uploading form | new-short-form |
| `POST`  | `/shorts/new-short`  | Upload a new short  | shortId |
| `GET`  | `/shorts/:shortId/edit`  | Editing form for a short, only if Creator, Admin, or CurrentUser  | edit-form |
| `POST`  | `/shorts/:shortId/edit`  | Edit a short, only if Creator, Admin, or CurrentUser  | shortId |
| `POST`  | `/movies/:shortId/delete`  | Delete a short, only if Admin, or CurrentUser  | shorts-list |
| `POST`  | `/movies/:shortId/save`  | Save the short in the user's list  | next()
| `POST`  | `/movies/:movieId/unsave`  | Delete the short from the user's list  | next()
| | | |
| **PROFILE**  |  |  folder: profile |
| `GET`  | `/users`  | Show all profiles  | profiles-list |
| `GET`  | `/:userId`  | Show an user public profile  | userId |
| `GET`  | `/:userId/edit`  | Edit the user profile (only the user's own profile) | edit-form |
| `POST`  | `/:userId/edit`  | Edit the user profile (only the user's own profile) | userId |
| `GET`  | `/:userId/shorts`  | Retrieve user's all uploaded shorts | shorts |
| `GET`  | `/:userId/saved-shorts`  | Retrieve user's all saved shorts | saved-shorts |
| `GET`  | `/:userId/saved-films`  | Retrieve user's all saved films | saved-films|
| **PROFILE** *messages*  |  |   |
| `GET`  | `/:userId/messages`  | Retrieve user's received messages | messages |
| `POST`  | `/:userId/new-message`  | Send a new message | 
| `POST`  | `/:userId/:messageId/delete`  | Delete a message |








