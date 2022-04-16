# Sales Forecasting application
Developing a web application that helps predict future sales for fashion retailers.<br/>
This project consists of :


   * Application UI : the user interface that allows interaction with the forecasting application, generated with [Angular CLI](https://github.com/angular/angular-cli). <br/>
   * Security Microservice : ensure the authentication and the authorization, generated with [NodeJs/ExpressJs](https://nodejs.org/en/). <br/>
   * Forecasting Microservice : implements sales prediction (a simple display without using an AI model) , generated with [NodeJs/ExpressJs](https://nodejs.org/en/) . <br/>
   * Api Gateway : is the single entry point for all clients, it handles requests that are simply routed to the appropriate service, generated with [NodeJs/ExpressJs](https://nodejs.org/en/) . <br/>


## Architecture choice
Microservice architecture.
<br/><br/>
![alt text](images/architecture.jpg)<br/><br/>


## Use cases implemented 
 <ol>
 <li><b>Register to the platform  : </b> <br/><br/>

 ![alt text](images/register.png)<br/><br/>

 </li>
 <li><b>Sign in : </b><br/><br/>

![alt text](images/login.png)<br/><br/>
  </li>
 <li><b>Consult product dashboard : </b><br/><br/>

![alt text](images/dashboard.png)<br/><br/>
  </li>
 <li><b>Forecasting sales for a specific product and store : </b><br/><br/>

![alt text](images/forecast.png)<br/><br/>

Result :<br/><br/>
![alt text](images/sales%20forecasting.png)<br/><br/>
  </li>
  </ol>
