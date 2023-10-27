import {IonContent, IonButtons, IonButton, IonPage, IonTitle, IonToolbar} from '@ionic/react';

export default function AddLook({url}: { url: string }) {
  const href = window.location.href.split("data=")[1]
  console.log(href)
  return (
    <IonContent>
      <img
        src={url}
        alt=""/>
    </IonContent>
  )
}