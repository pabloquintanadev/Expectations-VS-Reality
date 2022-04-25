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
| **VALORATION BUTTONS** | | |
| `POST`  | `/:userId/like`  | Add +1 to the user's likes (only for logged in users) |
| `POST`  | `/:filmId/masterpiece`  | Mark a film as a *f------ masterpiece* (only for Creators or Admins) |
| `POST`  | `/:filmId/bullshit`  | Mark a film as a *bullshit* (only for Creators or Admins)  |
| `POST`  | `/:filmId/masterpieceOut`  | Unmark a film as a *f------ masterpiece* (only for Creators or Admins) |
| `POST`  | `/:filmId/bullshitOut`  | Unmark a film as a *bullshit* (only for Creators or Admins)  |
| | ||
| **MOVIES**  |  |   |
| `GET`  | `/movies`  | Retrieve all movies  |
| `GET`  | `/movies/search`  | Retrieve all movies that fit the searching  |
| `GET`  | `/movies/:movieId`  | Retrieve one single movie page  |
| `POST`  | `/movies/:movieId/save`  | Save the film in the user's list  |
| `POST`  | `/movies/:movieId/unsave`  | Delete the film from the user's list  |
| **MOVIES** *posts* |  |   |
| `POST`  | `/movies/:movieId/new-post`  | Create a new post (comment, spoiler, summary)  |
| `POST`  | `/movies/:movieId/:postId/edit`  | Edit a post (comment, spoiler, summary), only if Creator, Admin, or CurrentUser  |
| `POST`  | `/movies/:movieId/:postId/delete`  | Delete a post (comment, spoiler, summary), only if Admin, or CurrentUser  |
| **MOVIES** *curated lists*  |  |   |
| `GET`  | `/movies/masterpieces`  | Retrieve all movies marked as *f------ masterpiece* |
| `GET`  | `/movies/bullshits`  | Retrieve all movies marked as *bullshit* |
||||
| **SHORTS**  |  |   |
| `GET`  | `/shorts`  | Retrieve all shorts  |
| `GET`  | `/shorts/search`  | Retrieve all shorts that fit the searching  |
| `POST`  | `/shorts/new-short`  | Upload a new short  |
| `POST`  | `/shorts/:shortId/edit`  | Edit a short, only if Creator, Admin, or CurrentUser  |
| `POST`  | `/movies/:shortId/delete`  | Delete a short, only if Admin, or CurrentUser  |
| `POST`  | `/movies/:shortId/save`  | Save the short in the user's list  |
| `POST`  | `/movies/:movieId/unsave`  | Delete the short from the user's list  |
| | | |
| **PROFILE**  |  |   |
| `GET`  | `/:userId`  | Show an user public profile  |
| `GET`  | `/:userId/edit`  | Edit the user profile (only the user's own profile) |
| `POST`  | `/:userId/edit`  | Edit the user profile (only the user's own profile) |
| `GET`  | `/:userId/shorts`  | Retrieve user's all uploaded shorts |
| `GET`  | `/:userId/saved-shorts`  | Retrieve user's all saved shorts |
| `GET`  | `/:userId/saved-films`  | Retrieve user's all saved films |
| **PROFILE** *messages*  |  |   |
| `GET`  | `/:userId/messages`  | Retrieve user's received messages |
| `POST`  | `/:userId/new-message`  | Send a new message |
| `POST`  | `/:userId/:messageId/delete`  | Delete a message |








