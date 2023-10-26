import { FirebaseOptions, initializeApp } from 'firebase/app';
import {
  AnalyticsCallOptions,
  Item,
  getAnalytics,
  logEvent,
} from 'firebase/analytics';

const firebaseConfig: FirebaseOptions = {
  apiKey: 'AIzaSyCKRyk9Hj57hJVwE51IMxq4R4ztHaYkrXQ',
  authDomain: 'leopassos.firebaseapp.com',
  projectId: 'leopassos',
  storageBucket: 'leopassos.appspot.com',
  messagingSenderId: '155827268850',
  appId: '1:155827268850:web:4c4890ba71833d3b75b46b',
  measurementId: 'G-SJ78HM3KDQ',
};

initializeApp(firebaseConfig);

const analytics = getAnalytics();

type AnalyticsEventParams = {
  [key: string]: any;
  coupon?: string;
  currency?: string;
  items?: Item[];
  payment_type?: string;
  value?: number;
};

export function logEventAnalytics(
  eventName: string,
  eventParams?: AnalyticsEventParams,
  options?: AnalyticsCallOptions,
) {
  return logEvent(analytics, eventName, eventParams, options);
}
