import { Redirect, Route } from 'react-router-dom';
import { Preferences } from '@capacitor/preferences';
import { useState, useEffect } from 'react'
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { images, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {

  const [firstEnter, setFirstEnter] = useState('unset')
  async function getPref() {
    const pref = await Preferences.get({
      key: 'firstEnter'
    });
    if(pref.value === null) pref.value = "true"
    setFirstEnter(pref.value)
  }

  useEffect(() => {
    getPref()
    return () => {
      Preferences.set({
        key: 'firstEnter',
        value: 'false'
      });
    }
  },[])

  function getElement() {
    let result;
    switch (firstEnter) {
      case 'unset':
        result = 'Loading...'
        break;
      case 'true':
        result = <Redirect to="/tab1" />
        break;
      case 'false':
        result = <Redirect to="/tab2" />
        break;
    }
    return result
  }

  return (
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path="/tab1">
              <Tab1 />
            </Route>
            <Route exact path="/tab2">
              <Tab2 />
            </Route>
            <Route path="/tab3">
              <Tab3 />
            </Route>
            <Route exact path="/">
              {getElement()}
            </Route>
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
  )
}
;

export default App;
