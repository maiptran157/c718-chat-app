import fb from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import config from '../config';

fb.initializeApp(config.firebase);

export const db = fb.database();

export const auth = fb.auth();
