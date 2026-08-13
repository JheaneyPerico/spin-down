import { createBrowserRouter } from "react-router-dom";

import HomeView from "../views/HomeView";
import LeaderboardView from "../views/LeaderboardView";


const router = createBrowserRouter([

  {
    path: "/",
    element: <HomeView />
  },


  {
    path: "/leaderboards/:slug",
    element: <LeaderboardView />
  }

]);


export default router;