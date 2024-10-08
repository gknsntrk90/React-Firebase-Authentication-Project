## VİDEO;
![Screen Recording 2024-10-08 at 08 41 39 99 PM](https://github.com/user-attachments/assets/8013c0bf-938c-4dfa-9ea9-20c099aefc3e)


# React-Firebase-Authentication-Project



# Bu projde Firebase Firestore

Kullanıcı oluşturma,
Gücelleme,
Giriş ve Çıkış İşlemleri,
Database Oluşturma,
Database Veri Kadetme,Güncelleme ve Silme,
Database güvenlik kuralları oluşturma,
Zaman Formatlama, İşlemlerini Başarılı Bir Şekilden Gerçekleştirdik.


#Kütüphaneler

react-router-dom
firebase
react-hot-toast -npm install -D tailwindcss npx tailwindcss init -tailwindui
@tailwindcss/forms
npm install @reduxjs/toolkit
npm install react-redux
npm install @headlessui/react
npm install @formkit/auto-animate
npm i dayjs


notlar:

eğer kullanıcı girişi yapılmadan bilgilere erişşimi engellmek istiyorsak firbase de rules kısmında rules_version = '2';
service cloud.firestore { match /databases/{database}/documents { match /{document=**} { allow read, write: if request.auth!=null; //bu kısmı ekliyoruz. } } }
