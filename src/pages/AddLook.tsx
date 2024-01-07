import {
  IonContent,
  IonButtons,
  IonButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSelect,
  IonSelectOption
} from '@ionic/react';
import {useState, useEffect} from "react";
import "./AddLook.scss"
import {Preferences} from "@capacitor/preferences";

export default function AddLook() {
  const href = window.location.href.split("data=")[1]
  const [image, setImage] = useState('')
  useEffect(() => {
    Preferences.get({
      key: 'selectedImage',
    }).then((res) => {
      res.value ? setImage(res.value) : setImage('')
    })
  }, [])
  return (
    <IonContent class='addLookContent'>
      <h1>Вы прекрасны!</h1>
      <img
        className='addLookImg'
        src={image}
        alt=""
      />
      <h3>Добавьте фильтры:</h3>
      <div className='filterWrapper'>
        <IonSelect placeholder="Выберите">
          <div slot="label">
            Время года
          </div>
          <IonSelectOption value="apple">Лето</IonSelectOption>
          <IonSelectOption value="banana">Зима</IonSelectOption>
          <IonSelectOption value="orange">Осень / Весна</IonSelectOption>
        </IonSelect>
        <IonSelect placeholder="Выберите">
          <div slot="label">
            Стиль
          </div>
          <IonSelectOption value="apple">Классический</IonSelectOption>
          <IonSelectOption value="banana">Спортивный </IonSelectOption>
          <IonSelectOption value="orange">Деловой </IonSelectOption>
          <IonSelectOption value="orange">Кэжуал </IonSelectOption>
          <IonSelectOption value="orange">Бельевой </IonSelectOption>
          <IonSelectOption value="orange">Романтический </IonSelectOption>
          <IonSelectOption value="orange">Богемный </IonSelectOption>
        </IonSelect>
        <IonSelect placeholder="Выберите">
          <div slot="label">
            Погода
          </div>
          <IonSelectOption value="apple">Дождь</IonSelectOption>
          <IonSelectOption value="banana">Сухо</IonSelectOption>
          <IonSelectOption value="orange">Снег</IonSelectOption>
        </IonSelect>
        <div className='addLookLabel'>
          Цвет
        </div>
        <div id="colorWrapper">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <IonButton className="addButton" expand="block" shape="round" fill="outline" color="white" size="large">
        Добавить
      </IonButton>
    </IonContent>
  )
}