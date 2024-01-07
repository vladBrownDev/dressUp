import {IonContent, IonButtons, IonButton, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import {FilePicker} from '@capawesome/capacitor-file-picker';
import {useEffect, useRef, useState} from "react";
import {usePhotoGallery} from "../hooks/usePhotoGallery";
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.scss';
import womanImg from '../media/woman.png'
import AddLook from "./AddLook";
import {Preferences} from "@capacitor/preferences";

const Tab1: React.FC = () => {
  const photoGallery = usePhotoGallery()

  const time = new Date();
  let welcomestr;
  if (22 < time.getHours() && time.getHours() <= 4) welcomestr = 'Доброй ночи!'
  if (4 < time.getHours() && time.getHours() <= 11) welcomestr = 'Доброе утро!'
  if (11 < time.getHours() && time.getHours() <= 16) welcomestr = 'Добрый день!'
  if (16 < time.getHours() && time.getHours() <= 22) welcomestr = 'Добрый вечер!'

  async function pickFile() {
    const result = await FilePicker.pickImages({
      multiple: false,
      readData: true,
    }).then((res) => {
      Preferences.set({
        key: 'selectedImage',
        value: 'data:image/png;base64,' + res.files[0].data
      });
    }).then(() => {
      window.location.href += 'addLook'
    });

  }

  async function takePhoto() {
    await photoGallery.takePhoto()
  }

  return (

    <IonPage>
      <IonContent fullscreen>
        <div className='welcomeWrapper'>
          <h1 className={'welcomeTitle'}> {welcomestr} </h1>
          <h1 className={'welcomeTitle'}> Приветствуем в Dress Up! </h1>
          <img className='welcomeImg' src={womanImg} alt=""/>
          <IonButtons className='btnWrapper'>
            <IonButton className='welcomeButton' onClick={pickFile}>Добавить из галереи</IonButton>
            <IonButton className='welcomeButton' onClick={takePhoto}>Сделать фото</IonButton>
          </IonButtons>
        </div>
      </IonContent>
    </IonPage>


  );
};

export default Tab1;
