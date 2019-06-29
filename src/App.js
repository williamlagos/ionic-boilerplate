import React from "react"
import '@ionic/core/css/core.css'
import '@ionic/core/css/ionic.bundle.css'
import {
  IonApp,
  IonButton,
  IonSplitPane,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonNav,
  IonList,
  IonItem
} from '@ionic/react'

class App extends React.Component {
  render() {
    return (
      <IonApp>
        <IonSplitPane>
          {/*--  our side menu  --*/}
          <IonMenu>
            <IonHeader>
              <IonToolbar>
                <IonTitle>Menu</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent>
              <IonList>
                <IonItem>Aula 1</IonItem>
                <IonItem>Aula 2</IonItem>
                <IonItem>Aula 3</IonItem>
                <IonItem>Aula 4</IonItem>
                <IonItem>Aula 5</IonItem>
              </IonList>
            </IonContent>
          </IonMenu>

          {/*-- the main content --*/}
          <IonNav main>
            <IonHeader>
              <IonToolbar>
                <IonTitle>Conteúdo</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent>
              {/*<img alt="Hero" className="hero-img" src={Background} />*/}
              <h2>Ficou interessado? Então corre e vem saber como!</h2>
              <h3>Faça como esta legião de brasileiros e venha crescer você também!</h3>
              <p>Descrição do conteúdo 1 para ser exibido.</p>
              <IonButton color="primary">Quero crescer!</IonButton>
            </IonContent>
          </IonNav>
        </IonSplitPane>
      </IonApp>
    );
  }
}

export default App;
