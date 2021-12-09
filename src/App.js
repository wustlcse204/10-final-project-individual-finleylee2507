import { Route, Switch } from 'react-router-dom' //parse different paths, switch tells the browser only one route should be active 
import FavoritesPage from './pages/Favorites';
import MainNavigation from './components/layout/MainNavigation';
import Layout from './components/layout/Layout';
import NewSetPage from './pages/NewSet';
import ViewSet from './components/StudySets/ViewSet';
import AllStudySetsPage from './pages/AllStudySets';
import EditSetPage from './pages/EditSet';
import FlashcardMode from './pages/FlashcardMode';
function App() {
  return (
    <Layout>

      <Switch>
        {/* if we don't add the exact keyword the browser would stop at the first route every time */}
        <Route exact path='/'>
          <AllStudySetsPage></AllStudySetsPage>

        </Route>
        <Route path='/new-set'>
          <NewSetPage></NewSetPage>
        </Route>

        <Route path='/favorites'>
          <FavoritesPage></FavoritesPage>
        </Route>

        <Route path='/viewset'>
          <ViewSet></ViewSet>
        </Route>

        <Route path='/editset'>
          <EditSetPage></EditSetPage>
        </Route>

        <Route path='/flashcardMode'>
          <FlashcardMode></FlashcardMode>
        </Route>

      </Switch>

    </Layout>




  );
}

export default App;
