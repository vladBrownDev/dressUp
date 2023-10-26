import { IonContent, IonButtons, IonButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {useEffect, useRef} from "react";
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.scss';

const Tab1: React.FC = () => {
    const firstTitle = useRef(null)
    const secondTitle = useRef(null)

    const time = new Date();
    let welcomestr;
    if(22 < time.getHours() && time.getHours() <= 4) welcomestr = 'Доброй ночи!'
    if(4 < time.getHours() && time.getHours() <= 11) welcomestr = 'Доброе утро!'
    if(11 < time.getHours() && time.getHours() <= 16) welcomestr = 'Добрый день!'
    if(16 < time.getHours() && time.getHours() <= 22) welcomestr = 'Добрый вечер!'


  return (
    <IonPage>
      <IonContent fullscreen>
          <div className='welcomeWrapper'>
              <h1 ref={firstTitle} className={'welcomeTitle'}> {welcomestr} </h1>
              <h1 ref={secondTitle} className={'welcomeTitle'}> Приветствуем в Dress Up! </h1>
              <img className='welcomeImg' src="/src/media/welcome.png" alt=""/>
              <IonButtons className='btnWrapper'>
                  <IonButton className='welcomeButton'>Добавить из галереи</IonButton>
                  <IonButton className='welcomeButton'>Сделать фото</IonButton>
              </IonButtons>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
