import {IonContent, IonButtons, IonButton, IonPage, IonTitle, IonToolbar, IonSelect, IonSelectOption} from '@ionic/react';

export default function AddLook({url}: { url: string }) {
  const href = window.location.href.split("data=")[1]
  console.log(href)
  return (
    <IonContent class='addLookContent'>
      <h1>Вы прекрасны!</h1>
      <img
        className='addLookImg'
        src={url}
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
          <IonSelectOption value="orange">Кэжуал  </IonSelectOption>
          <IonSelectOption value="orange">Бельевой  </IonSelectOption>
          <IonSelectOption value="orange">Романтический   </IonSelectOption>
          <IonSelectOption value="orange">Богемный  </IonSelectOption>
        </IonSelect>
        <IonSelect placeholder="Выберите">
          <div slot="label">
            Погода
          </div>
          <IonSelectOption value="apple">Дождь</IonSelectOption>
          <IonSelectOption value="banana">Сухо</IonSelectOption>
          <IonSelectOption value="orange">Снег</IonSelectOption>
        </IonSelect>
        <IonSelect placeholder="Выберите">
          <div slot="label">
            Время года
          </div>
          <IonSelectOption value="apple">Лето</IonSelectOption>
          <IonSelectOption value="banana">Зима</IonSelectOption>
          <IonSelectOption value="orange">Осень / Весна</IonSelectOption>
        </IonSelect>
      </div>
    </IonContent>
  )
}