
//does not work with document.ready

// $(document).ready(function(){
    //initializes Firebase
    var config = {
       apiKey: "AIzaSyB0X6st9I1JgHTGsZ2bf6cEomOEp7I_COM",
       authDomain: "webtools-f8edf.firebaseapp.com",
        databaseURL: "https://webtools-f8edf.firebaseio.com",
        projectId: "webtools-f8edf",
        storageBucket: "webtools-f8edf.appspot.com",
        messagingSenderId: "541829677685"
    };

    firebase.initializeApp(config);

    var provider = new firebase.auth.GoogleAuthProvider();

    // buttoncallback
    function toggleSignIn() {
        if (!firebase.auth().currentUser) {
            //creates provider
            var provider = new firebase.auth.GoogleAuthProvider();
            provider.addScope('https://www.googleapis.com/auth/plus.login');
            firebase.auth().signInWithPopup(provider).then(function(result) {
                // gives a Google Access Token 
                var token = result.credential.accessToken;
                // signed-in user info.
                var user = result.user;
            }).catch(function(error) {
                  // handles errors
                  var errorCode = error.code;
                  var errorMessage = error.message;
                  // email of the user's account used
                  var email = error.email;
                  // the firebase.auth.AuthCredential type that was used
                  var credential = error.credential;
                  if (errorCode === 'auth/account-exists-with-different-credential') {
                      alert('You have already signed up with a different auth provider for that email.');
                  }   else {
                          console.error(error);
                      }
              });
        }//ends if stmt  
            else {
                firebase.auth().signOut();
            }
        document.getElementById('GoogleSignIn').disabled = true;
    }//ends toggleSignIn
 
    //sets up UI event listeners and registers Firebase auth listeners:
    //firebase.auth().onAuthStateChanged is called when the user is signed in or out
    function initApp() {
        // Listens for auth state changes
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                //user is signed in
                var displayName = user.displayName;
                var email = user.email;
                var emailVerified = user.emailVerified;
                var photoURL = user.photoURL;
                var isAnonymous = user.isAnonymous;
                var uid = user.uid;
                var providerData = user.providerData;
                document.getElementById('GoogleSignInStatus').textContent = 'Signed in';
                document.getElementById('GoogleSignIn').textContent = 'Sign out';
            }   else {
                    // user is signed out
                    document.getElementById('GoogleSignInStatus').textContent = 'Signed out';
                    document.getElementById('GoogleSignIn').textContent = 'Sign in with Google';
                }
            document.getElementById('GoogleSignIn').disabled = false;
        });
        document.getElementById('GoogleSignIn').addEventListener('click', toggleSignIn, false);
    }


    window.onload = function() {
        initApp();
    };

// });//end document.ready