import { test, expect } from '../fixtures/baseFixture';
import { DataProvider } from '../utils/dataProvider';
import { openApplication } from '../setup/TestHooks';

openApplication();

//Load JSON test data logindata.json

const jsonPath="data/logindata.json";
const jsonTestData=DataProvider.getTestDataFromJson(jsonPath);


for(const data of jsonTestData)
{
   test(`Login Test with JSON Data: ${data.testName} @datadriven`, async({ app })=>{

        const homePage = app.getHomePage();
        await homePage.clickMyAccount();
        await homePage.clickLogin();

        const loginPage = app.getLoginPage();
        await loginPage.login(data.email, data.password);

        if(data.expected.toLowerCase()==='success')
        {
            const myAccountPage = app.getMyAccountPage();
            const isLoggedIn=await myAccountPage.isMyAccountPageExists();
            expect(isLoggedIn).toBeTruthy();

        }
        else{
            const errorMessage=await loginPage.getloginErrorMessage();
            //expect(errorMessage).toBe('Warning: No match for E-Mail Address and/or Password.');
            expect(errorMessage).toContain('Warning: No match');
        }
    })

}



//Load CSV test data logindata.json

const csvPath = "data/logindata.csv";
const csvTestData = DataProvider.getTestDataFromCsv(csvPath);


for(const data of csvTestData)
{
   test(`Login Test with CSV Data: ${data.testName} @datadriven`, async({ app })=>{

        const homePage = app.getHomePage();
        await homePage.clickMyAccount();
        await homePage.clickLogin();

        const loginPage = app.getLoginPage();
        await loginPage.login(data.email, data.password);

        if(data.expected.toLowerCase()==='success')
        {
            const myAccountPage = app.getMyAccountPage();
            const isLoggedIn=await myAccountPage.isMyAccountPageExists();
            expect(isLoggedIn).toBeTruthy();

        }
        else{
            const errorMessage=await loginPage.getloginErrorMessage();
            //expect(errorMessage).toBe('Warning: No match for E-Mail Address and/or Password.');
            expect(errorMessage).toContain('Warning: No match');    
        }
    })

}
