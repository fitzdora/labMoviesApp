# Full Stack Development 2 - Assignment.

__Name:__ [Isadora Fitzgerald]
__Student Id:__[W20099887]
__Video URL:__[https://youtu.be/t5L1mgC0Rz0]


## Features.

[A bullet-point list of the features developed for the React SPA app (only new/modified ones for the Movies app),]

+ TV Card
+ TV List
+ TV List Header
+ Filter TV 
+ TV Details
+ TV Reviews

## Feature Design.

[ For each feature listed above, show a screenshot(s) of its UI layout (use appropriate magnification for accessibility). Include a caption with each image.]

e.g. 

#### Upcoming TV.

> Lists movies from the Upcoming movies endpoint of TMDB.

![][image1]

#### TV Reviews.

> Lists all the reviews for a particular movie (shows text extract only).

![][image2]

> Click the 'Full Review' link of a review extract to see the review's full text. 

![][image3]

.... other features .......

## Storybook.

[Include a screenshot(s) from the Storybook UI and highlight the stories for new components developed.]

e.g.

![Highlighted Storybook][image5]

## Authentication. (if relevant)

#### Protected routes 

[List all the routes in your app and highlight those that are protected/private (require authentication).]

Full list - however none are protected

+ /movies - List of 20 movies from the Discover endpoint,
+ /movies/upcoming - Upcoming movies list,
+ /movies/favourites - List of chosen favourite movies,
+ /movies/:id - Detailed information on a specific movie,
+ /reviews/:id/reviews/form - Form to add a movie review,
+ /movies/:id/reviews/:reviewId - The full text of a movie review,
+ /tv/series  - List of 20 tv shows from the Discover endpoint,
+ /tv/:id - Detailed information on a specific tv series,
+ /tv/:id/reviews/:reviewId - The full text of a tv show review,
+ /tv/upcoming - Upcoming Tv Series List,
+ /tv/favourites - List of chosen favourite tv series,
+ /tv/:id/reviews/form - Form to add a tv review,

#### Protected functionality. (if relevant)

[ Briefly state any app functionality that requires authentication, e.g. only authenticated users can tag a movie as a 'favourite'.]

#### Supabase (if relevant)

[Include a screenshot(s) from your Supabase account that verifies its use for this app. ]

## Deployment (if relevant).

[Specify the URL of your deployed app and include a screenshot(s) from your deployment platform account (e.g. Vercal) that verifies its use for this app. Set up a registered user for your app and specify their credentials.

Username: test1 ; Password: pass1
]

## Persistence (if relevant).

[If you are persisting data to the Supabase backend (e.g. favourite movies, fantasy movie), include screenshots with appropriate captions to verify this aspect. ]

## Additional Information.

[ Briefly explain any other aspects of your app's design or implementation that is non-standard and worthy of mention.]

[image1]: ./images/image1.png
[image2]: ./images/image2.png
[image3]: ./images/image3.png
[image4]: ./images/image4.png
[image5]: ./images/image5.png