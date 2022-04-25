# expectations-vs-reality
Expectation VS Reality

HOLA MIGUEL


| Method | URL | description | view |
| ----- | ------------- | ------------- | --------- |
| `GET`  | `/`  | Index page  | index |
| | |
| **AUTH** |*done* | **folder: auth**|
| `GET`  | `/register`  | Register form  | register-form |
| `POST`  | `/register`  | Register succees/error  | index |
| `GET`  | `/login`  | Login form  | login-form |
| `POST`  | `/login`  | Login succees/error  | index |
| `POST`  | `/logout`  | Logout of current user  | index |
| | ||
| **VALORATION BUTTONS** |*maomeno done* | **folder: ValorationButtons** |
| `POST`  | `/:postId/like`  | Add +1 to the post likes (only for logged in users) | next() |
| `POST`  | `/:shortId/like`  | Add +1 to the short likes (only for logged in users) | next() |
| `POST`  | `/:shortId/masterpiece`  | Mark a film as a *f------ masterpiece* (only for Creators or Admins) | next() |
| `POST`  | `/:shortId/bullshit`  | Mark a film as a *bullshit* (only for Creators or Admins)  | next() |
| `POST`  | `/:shortId/masterpieceOut`  | Unmark a film as a *f------ masterpiece* (only for Creators or Admins) | next() |
| `POST`  | `/:shortId/bullshitOut`  | Unmark a film as a *bullshit* (only for Creators or Admins)  | next() |
| | ||
| **MOVIES**  | *done* | **folder: movies**   |
| `POST`  | `/movies/search`  | Retrieve all movies that fit the searching  | movie-details |
| `POST`  | `/movies/:movieId/save`  | Save the film in the user's list  | movie-details |
| `POST`  | `/movies/:movieId/unsave`  | Delete the film from the user's list  | movie-details |
| **MOVIES** *curated lists*  |  |   |
| `GET`  | `/movies/masterpieces`  | Retrieve all movies marked as *f------ masterpiece* | masterpieces |
| `GET`  | `/movies/bullshits`  | Retrieve all movies marked as *bullshit* | bullshits |
||||
| **SHORTS**  | *done* | **folder: shorts**  |
| `GET`  | `/shorts`  | Retrieve all shorts  | shorts-list |
| `GET`  | `/shorts/:shortId`  | Retrieve a short details  | short-details |
| `GET`  | `/shorts/new-short`  | Uploading form | new-short-form |
| `POST`  | `/shorts/new-short`  | Upload a new short  | short-details |
| `GET`  | `/shorts/:shortId/edit`  | Editing form for a short, only if Creator, Admin, or CurrentUser  | edit-form |
| `POST`  | `/shorts/:shortId/edit`  | Edit a short, only if Creator, Admin, or CurrentUser  | short-details |
| `POST`  | `/movies/:shortId/delete`  | Delete a short, only if Admin, or CurrentUser  | shorts-list |
| `POST`  | `/movies/:shortId/save`  | Save the short in the user's list  | next()
| `POST`  | `/movies/:shortId/unsave`  | Delete the short from the user's list  | next()
| | | |
| **POSTS**  | *done*  | **folder: posts**  |
| `POST`  | `/posts/:movieOrShortId/new-post`  | Create a new post (comment, spoiler, summary)  | movie-details |
| `GET`  | `/posts/:postId/edit`  | Form to edit a post (comment, spoiler, summary), only if Creator, Admin, or CurrentUser  | comment-edit-form |
| `POST`  | `/posts/:postId/edit`  | Edit a post (comment, spoiler, summary), only if Creator, Admin, or CurrentUser  |  movie-details |
| `POST`  | `/posts/:postId/delete`  | Delete a post (comment, spoiler, summary), only if Admin, or CurrentUser  | movie-details |
||||
| **PROFILE**  |  |  **folder: profile** |
| `GET`  | `/users`  | Show all profiles  | profiles-list |
| `GET`  | `/:userId`  | Show an user public profile  | user-details |
| `GET`  | `/:userId/edit`  | Edit the user profile (only the user's own profile) | edit-form |
| `POST`  | `/:userId/edit`  | Edit the user profile (only the user's own profile) | user-details |
| `GET`  | `/:userId/shorts`  | Retrieve user's all uploaded shorts | user-shorts |
| `GET`  | `/:userId/saved-shorts`  | Retrieve user's all saved shorts | saved-shorts |
| `GET`  | `/:userId/saved-films`  | Retrieve user's all saved films | saved-films|
| **PROFILE** *messages*  |  |   |
| `GET`  | `/:userId/messages`  | Retrieve user's received messages | messages |
| `POST`  | `/:userId/new-message`  | Send a new message | 
| `POST`  | `/:messageId/delete`  | Delete a message |








