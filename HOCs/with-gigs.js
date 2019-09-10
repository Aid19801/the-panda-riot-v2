// import fetch from 'isomorphic-unfetch';

// const withGigs = PlatformSpecificComponent => {
//   class AuthComponent extends React.Component {
//     static async getInitialProps(ctx) {
//       const response = await fetch(`https://api.github.com/gists/${process.env.REACT_APP_GIG_GIST}`);
//       const json = await response.json();
//       console.log("@withGigs resp", response);
//       console.log("@withGigs json", json);

//       if (!response) {
//         redirect(ctx, "/");
//         return {
//           gigs: null
//         };
//       }

//       // Get component’s props
//       let componentProps = {}
//       if (PlatformSpecificComponent.getInitialProps) {
//         componentProps = await PlatformSpecificComponent.getInitialProps(ctx);
//       }

//       return {
//         gigs: json,
//         ...componentProps
//       };
//     }

//     render() {
//       return <PlatformSpecificComponent {...this.props} />;
//     }
//   }

//   return AuthComponent;
// };

// export default withGigs;