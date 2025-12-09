import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App} from './app/app';
import { TaskComponent } from './app/task';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
