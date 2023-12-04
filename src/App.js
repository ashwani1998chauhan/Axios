
import React from 'react';

import Images from "./components/Images";


const App = () => {

    // const [isLoggedIn,setIsLoggedIn]=useState(false);

    return (
      

        //     <Router>
        //     <div>
        //         <nav>
        //             <Link to='/'>Home</Link> |  {isLoggedIn &&<Link to="/about/1">About</Link>}
        //         </nav>
        //         <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>
        //             {isLoggedIn?'Logged In':'Logged Out'}
        //         </button>
        //         <Routes>

        //             <Route path='/' element={<HomePage />} />
        //             <Route path='/about/:userId' element={<AbouPage />} />
        //             <Route path='*' element={<PageNotFound />} />
        //         </Routes>
                
        // </div>
        //     </Router>

       <div>
     <Images/>
       </div>
    );
}

export default App;
