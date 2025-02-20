import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideIonicAngular } from '@ionic/angular/standalone';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp({
      projectId: "tasks-38972",
      appId: "1:366699235024:web:089194efb8558bd17a80d5",
      storageBucket: "tasks-38972.firebasestorage.app",
      apiKey: "AIzaSyAXcjcOn01aUyhlu9xqNOXdZA7C_oLQK-8",
      authDomain: "tasks-38972.firebaseapp.com",
      messagingSenderId: "366699235024",
      measurementId: "G-3BNTEFXN58" })),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
    ScreenTrackingService,
    UserTrackingService,
    provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()), provideFunctions(() => getFunctions()), provideStorage(() => getStorage()),
    provideIonicAngular({})
  ]
};
const firebaseConfig = {
  apiKey: "AIzaSyAXcjcOn01aUyhlu9xqNOXdZA7C_oLQK-8",
  authDomain: "tasks-38972.firebaseapp.com",
  projectId: "tasks-38972",
  storageBucket: "tasks-38972.firebasestorage.app",
  messagingSenderId: "366699235024",
  appId: "1:366699235024:web:b4afa9926dcf20b77a80d5",
  measurementId: "G-6V2B9SM2NT"
};