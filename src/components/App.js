import React from "react";
import Search from "./Search";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetails from "./videoDetails";

class App extends React.Component {
  state = { video: [], selectedVideo: null };
  onFormSubmit = async (text) => {
    const res = await youtube.get("/search", {
      params: {
        q: text,
      },
    });
    this.setState({ video: res.data.items, selectedVideo: res.data.items[0]});
  };
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  componentDidMount() {
     this.onFormSubmit("software development")
  }
  render() {
    return (
      <div>
        <Search onTextSubmit={this.onFormSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetails video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.video}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;


// import React from 'react';
// import PropTypes from 'prop-types';
// import { NavLink } from 'react-router-dom';
// import styles from './sideNav.module.scss'
// import BodyLight from '../typography/body-light';

// const Link = ({ to, icon,  content }) => {

// return (
// 	<div>
// 		<NavLink
// 			to={to}
// 			className={styles.sideNav}
// 			activeClassName={styles.sideNavActive}
// 		>
// 			<img src={icon} alt='image' className={styles.sideNavImage}/>

// 			<BodyLight color='#99AAB8' fontSize='14px'>
// 				{content}
// 			</BodyLight>
// 		</NavLink>
// 	</div>
// )
// };

// Link.propTypes = {
// 	to: PropTypes.string,
// 	image: PropTypes.string,
// 	content: PropTypes.string,
// 	location: PropTypes.object
// };

// const NavLinks = ({ links = [], children }) => {
// 	return (
// 			<ul>
// 				{links.map(data => (
// 					<Link {...data} key={data.content} />
// 				))}
// 				{children}
// 			</ul>
// 	);
// };

// NavLinks.propTypes = {
// 	links: PropTypes.array,
// 	children: PropTypes.any
// };

// export default NavLinks;


// const selectYearOptions = [
//   {
//     value: "2020",
//     label: "2020",
//   },
//   {
//     value: "2019",
//     label: "2019",
//   },
//   {
//     value: "2018",
//     label: "2018",
//   },
//   {
//     value: "2017",
//     label: "2017",
//   },
//   {
//     value: "2016",
//     label: "2016",
//   },
//   {
//     value: "2015",
//     label: "2015",
//   },
//   {
//     value: "2014",
//     label: "2014",
//   },
//   {
//     value: "2013",
//     label: "2013",
//   },
//   {
//     value: "2012",
//     label: "2012",
//   },
//   {
//     value: "2011",
//     label: "2011",
//   },
//   {
//     value: "2010",
//     label: "2010",
//   },
//   {
//     value: "2009",
//     label: "2009",
//   },
//   {
//     value: "2008",
//     label: "2008",
//   },
// ];

// export default selectYearOptions;


// import { useSelector, useDispatch } from "react-redux";

// const useChangeStatus = () => {
//   const isLoading = useSelector((state) => state.changestatusstore.isLoading);
//   const changeStatus = useSelector((state) => state.changestatusstore.changestatusobject);
//   const error = useSelector((state) => state.changestatusstore.error);

//   const dispatch = useDispatch();

//   return { isLoading, changeStatus, error, dispatch };
// };

// export default useChangeStatus;


// import { useSelector, useDispatch } from "react-redux";

// const useOnlineCustomers = () => {
//   const isFetching = useSelector(
//     (state) => state.onlineCustomerstore.isFetching
//   );
//   const onlineCustomers = useSelector(
//     (state) => state.onlineCustomerstore.onlineCustomerobject
//   );
//   const error = useSelector((state) => state.onlineCustomerstore.error);

//   const dispatch = useDispatch();

//   return { isFetching, onlineCustomers, error, dispatch };
// };

// export default useOnlineCustomers;



// import React, { useState } from "react";

// const usePagination = (currentpage) => {
//   const [pageStart, setPageStart] = useState(0);
//   const onChange = (pageno) => {
//     setPageStart(currentpage);
//   };
//   return;
// };

// export default usePagination;




// This optional code is used to register a service worker.
// register() is not called by default.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.

// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA


// serviceWorker
// const isLocalhost = Boolean(
//   window.location.hostname === 'localhost' ||
//     // [::1] is the IPv6 localhost address.
//     window.location.hostname === '[::1]' ||
//     // 127.0.0.0/8 are considered localhost for IPv4.
//     window.location.hostname.match(
//       /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
//     )
// );

// export function register(config) {
//   if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
//     // The URL constructor is available in all browsers that support SW.
//     const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
//     if (publicUrl.origin !== window.location.origin) {
//       // Our service worker won't work if PUBLIC_URL is on a different origin
//       // from what our page is served on. This might happen if a CDN is used to
//       // serve assets; see https://github.com/facebook/create-react-app/issues/2374
//       return;
//     }

//     window.addEventListener('load', () => {
//       const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

//       if (isLocalhost) {
//         // This is running on localhost. Let's check if a service worker still exists or not.
//         checkValidServiceWorker(swUrl, config);

//         // Add some additional logging to localhost, pointing developers to the
//         // service worker/PWA documentation.
//         navigator.serviceWorker.ready.then(() => {
//           console.log(
//             'This web app is being served cache-first by a service ' +
//               'worker. To learn more, visit https://bit.ly/CRA-PWA'
//           );
//         });
//       } else {
//         // Is not localhost. Just register service worker
//         registerValidSW(swUrl, config);
//       }
//     });
//   }
// }

// function registerValidSW(swUrl, config) {
//   navigator.serviceWorker
//     .register(swUrl)
//     .then(registration => {
//       registration.onupdatefound = () => {
//         const installingWorker = registration.installing;
//         if (installingWorker == null) {
//           return;
//         }
//         installingWorker.onstatechange = () => {
//           if (installingWorker.state === 'installed') {
//             if (navigator.serviceWorker.controller) {
//               // At this point, the updated precached content has been fetched,
//               // but the previous service worker will still serve the older
//               // content until all client tabs are closed.
//               console.log(
//                 'New content is available and will be used when all ' +
//                   'tabs for this page are closed. See https://bit.ly/CRA-PWA.'
//               );

//               // Execute callback
//               if (config && config.onUpdate) {
//                 config.onUpdate(registration);
//               }
//             } else {
//               // At this point, everything has been precached.
//               // It's the perfect time to display a
//               // "Content is cached for offline use." message.
//               console.log('Content is cached for offline use.');

//               // Execute callback
//               if (config && config.onSuccess) {
//                 config.onSuccess(registration);
//               }
//             }
//           }
//         };
//       };
//     })
//     .catch(error => {
//       console.error('Error during service worker registration:', error);
//     });
// }

// function checkValidServiceWorker(swUrl, config) {
//   // Check if the service worker can be found. If it can't reload the page.
//   fetch(swUrl, {
//     headers: { 'Service-Worker': 'script' },
//   })
//     .then(response => {
//       // Ensure service worker exists, and that we really are getting a JS file.
//       const contentType = response.headers.get('content-type');
//       if (
//         response.status === 404 ||
//         (contentType != null && contentType.indexOf('javascript') === -1)
//       ) {
//         // No service worker found. Probably a different app. Reload the page.
//         navigator.serviceWorker.ready.then(registration => {
//           registration.unregister().then(() => {
//             window.location.reload();
//           });
//         });
//       } else {
//         // Service worker found. Proceed as normal.
//         registerValidSW(swUrl, config);
//       }
//     })
//     .catch(() => {
//       console.log(
//         'No internet connection found. App is running in offline mode.'
//       );
//     });
// }

// export function unregister() {
//   if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.ready
//       .then(registration => {
//         registration.unregister();
//       })
//       .catch(error => {
//         console.error(error.message);
//       });
//   }
// }

