import {test as base, expect} from '@playwright/test'
import { Application } from '../pageManager/Application'

type MyFixture={
    app:Application
}

export const test = base.extend<MyFixture>({

   app: async({page},use)=>{
    await use(new Application(page));
   }
});

export { expect } from '@playwright/test';