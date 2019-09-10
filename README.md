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
