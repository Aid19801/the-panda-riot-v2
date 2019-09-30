## HOCs vs getInitialProps

example: HOCs/with-auth.js

1. Hoist the static method from passed-in <PageComponent />
   `hoistNonReactStatic(innerHOCclass, PlatformSpecificComponent)`

2. Check if theres a getInitialProps method, if there is, fire it off:
   ```
   if (withAuthenticationClass.getInitialProps) {
       withAuthenticationClass.getInitialProps()
   }
   ```
3. `hoist...` and `if(..` go _before_ the innerHOCclass is returned:-

```
    hoistNonReactStatic(innerHOCclass, PlatformSpecificComponent)

    if (withAuthenticationClass.getInitialProps) {
        withAuthenticationClass.getInitialProps()
    }

    // returning the innerHOCclass:
    return compose(
        withFirebase,
        connect(
        null,
        mapDispatchToProps
        )
    )(withAuthenticationClass);
    };

```
4. Now when with-auth is used, the HOC will fire getInitialProps which is basically the Page.getInitialProps method.

# Explanation from Stack Overflow:

`getInitialProps` will be invoked on *any* component exported from the `/pages` directory. The HomePage component in `pages/` is NOT exported directly. It is wrapped with `withAuthentication()` so it's actually the `PlatformSpecificComponent` that is exported. Therefore, the server will call `getInitialProps` on the PlatformSpecificComponent, which then passes all {...this.props} to the wrapped component, HomePage.


## Gigs (the data map)

nextJS SSR requests gigs from gist

serves them to mapBox via redux/props

when you click on a gig => redux hears SELECTED_GIG, that conditionally renders the 2x info panes.

NOTE: the MapBox instance takes a `center={` prop. That is assigned to local state. To hack the map to get it to re-center on the selectedGig, I had to pop a setTimeout in ComponentDidUpdate. So once the props.selectedGig.lat & lng come down, they update in state half a second later. Not ideal UX, but it at least centers on the gig that the user selected.


## Home (news and gigs)

nextJS `getInitialProps` SSR requests gigs

## Chat

SocketIO and GraphQL (Apollo / GraphCOOL) instances replaced with Pusher.

This was in response to issues with websockets, apollo-ws versus Server Side Rendering. Could _not_ get it to ****ing work.

Check it out here [https://codeburst.io/build-a-chat-app-with-sentiment-analysis-using-next-js-c43ebf3ea643]
