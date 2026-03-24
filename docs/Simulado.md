Salesforce Certified Hyperautomation Specialist - Exam Questions
Question 1
Northern Trail Outfitters needs to update multiple systems outside of Salesforce based on record updates within Salesforce. A hyperautomation practitioner needs to configure Salesforce to call several APIs created by the MuleSoft development team from within a Salesforce flow. What specifications must be imported into Salesforce to make external services available to a Salesforce flow that enables external invokable actions? 

A. Open API specifications 

B. External API specifications 

C. RAML API specifications 

D. Anypoint API specifications 


Answer: A 

Explanation: To enable Salesforce to call external services within a flow, the appropriate specifications must be imported to make these external services available as invokable actions. The correct specification is Open API specifications. OpenAPI Specification (formerly known as Swagger) is a standard for defining APIs which can be easily imported into Salesforce to facilitate the integration and invocation of external services. Salesforce allows the import of OpenAPI specifications, which define the available endpoints and operations of an API, making them accessible as invocable actions in a Salesforce flow. 

Question 2
For a MuleSoft Composer flow, errors can be noted in its Flow Details page. What other way can MuleSoft Composer send notifications when errors occur? 

A. It posts to a configured Chatter profile. 

B. It generates a notification in the flow. 

C. It sends a message to a configured Slack channel. 

D. It sends a notification to the configured email address. 


Answer: D 

Explanation: MuleSoft Composer provides a way to handle errors and notify users when something goes wrong in a flow. Aside from viewing errors on the Flow Details page, MuleSoft Composer can also send notifications to alert users about the errors. MuleSoft Composer can be configured to send notifications to a specified email address. This allows users to be promptly informed of any issues without having to constantly monitor the Flow Details page. 

Question 3
Northern Trail Outfitters wants to run a bidirectional sync of data between two Salesforce orgs. They want to perform real-time updates between both systems so that if either system is updated, the other one is automatically updated with the new data. What is the minimum number of MuleSoft Composer flows needed to meet this requirement? 

A. 3 

B. 1 

C. 2 

D. 4 


Answer: C 

Explanation: To achieve a bidirectional sync between two Salesforce orgs using MuleSoft Composer, you would need a minimum of two flows.

Flow 1 (Sync from Org A to Org B): This flow monitors changes in Org A and updates Org B with the new data whenever a change occurs.

Flow 2 (Sync from Org B to Org A): Similarly, this flow monitors changes in Org B and updates Org A with the new data whenever a change occurs. This setup ensures that any change in either Salesforce org is reflected in the other. 

Question 4
Northern Trail Outfitters (NTO) is building a hyperautomation solution using Salesforce and MuleSoft. Their Salesforce admin needs to automate a comprehensive, multi-step process that a single user will execute after a case record is created. How should the Salesforce Flow solution be structured to meet this requirement? 

A. An autolaunched flow that will process user inputs and conditional logic to automate the process in Salesforce 

B. A single flow Orchestration that uses Stages and Steps to organize automated actions and process user inputs 

C. A screen flow to process user inputs and an autolaunched flow to process backend steps automatically 

D. A parent flow with subflows to help organize automated actions and generate reusable components 


Answer: B 

Explanation: To address the comprehensive, multi-step process automation requirement, a single flow orchestration that uses Stages and Steps is the best solution. Flow Orchestration allows Salesforce admins to build sophisticated automations by structuring the flow into Stages and Steps. By leveraging Stages and Steps, Salesforce Flow Orchestration can handle both user inputs and backend automated steps seamlessly. Given that a single user will execute the process, Flow Orchestration is ideal as it can manage the end-to-end process in a structured manner. 

Question 5
AnyAirlines is attempting to automate a process that triggers when a case is created in Salesforce but requires data to be extracted from a website without an API. It plans to automate the process using MuleSoft Composer and MuleSoft RPA. During the design phase, it uses RPA Recorder to gather the steps required to interact with the website. What will automatically be gathered by RPA Recorder when recording a manual activity? 

A. Variable information used by the user during the process 

B. Conditional decisions made by the user during the process 

C. Comments on the purpose of the different steps carried out by the user 

D. Documentation on the elements used by the user during the process 


Answer: D 

Explanation: When using MuleSoft RPA Recorder to gather steps required for interacting with a website, it automatically collects documentation on the elements used by the user during the process. The RPA Recorder captures all the elements (e.g., buttons, fields, and other UI components) that the user interacts with during the manual process recording. It collects metadata such as element IDs, types, and positions. 

Question 6
Any Airlines is developing a new integration and wants built-in automated testing. Which tool must be used to satisfy this requirement? 

A. MuleSoft RPA 

B. MuleSoft Composer 

C. Flow Orchestration 

D. Anypoint Platform 


Answer: D 

Explanation: To implement built-in automated testing for new integrations, the Anypoint Platform is the appropriate tool. Anypoint Platform includes various tools such as MUnit for automated testing of Mule applications. MUnit allows developers to create, design, and run tests natively within Anypoint Studio. It supports comprehensive testing features including unit tests and integration tests. 

Question 7
Northern Trail Outfitters developed an integration between its two Salesforce orgs using MuleSoft Composer. Which two actions should be taken before testing the Composer flow? (Choose two.) 

A. Ensure the flow trigger is connected to a sandbox instance of Salesforce. 

B. Ensure action steps are connected to a sandbox instance of Salesforce. 

C. Ensure the credentials to the target production org are still valid. 

D. Ensure MuleSoft Composer is installed on both the source and target orgs. 


Answer: A, B 

Explanation:

Flow Trigger Connection: Before testing any Composer flow, it is crucial to connect the flow trigger to a sandbox instance of Salesforce. This ensures that testing does not impact the production environment. 

Action Steps Connection: Similar to the flow trigger, action steps within the Composer flow should also be connected to a sandbox instance. This allows comprehensive testing of the flow's functionality without affecting production data. 

Question 8
A MuleSoft developer at AnyAirlines is tasked with creating a new API for an integration. According to best practices, what is the first step they need to perform? 

A. Create a new project in Anypoint Studio. 

B. Install a standalone Mule runtime on their local machine. 

C. Create a case in Salesforce. 

D. Create a RAML definition in Design Center. 


Answer: D 

Explanation: The first step in creating a new API as per MuleSoft best practices is to create a RAML (RESTful API Modeling Language) definition in the Design Center. This step is critical as it outlines the API's structure, endpoints, methods, and data types, providing a clear blueprint for subsequent development. 

Question 9
AnyAirlines uses an Einstein bot for their customer support. They want it to display a message when a user provides an incorrect answer to a particular question. Which dialog option should be selected? 

A. Message 

B. Action 

C. Question 

D. Rules 


Answer: A 

Explanation: When configuring an Einstein bot to respond to incorrect answers, the 'Message' dialog option should be selected. This allows the bot to display a predefined message to the user, guiding them appropriately or informing them of the incorrect input. 

Question 10
AnyAirlines has an RPA process that is failing in Production. According to best practices, how should they debug the failure? 

A. Download the analysis package from RPA Manager, open it in a text editor, then determine the root cause. 

B. Download the analysis package from RPA Manager. revert the RPA process to the Test phase, then import the analysis package to RPA Builder and debug. 

C. Download the analysis package from RPA Manager. revert the RPA process to the Build phase, then import the analysis package to RPA Builder and debug. 

D. Deactivate the RPA process, enter the inputs manually, the monitor the execution to determine the root cause. 


Answer: C 

Explanation: The first step is to download the analysis package from the RPA Manager. Reverting the RPA process to the Build phase allows developers to make changes and debug the process. Import the analysis package into RPA Builder, which is the tool used to develop and debug RPA processes. This allows for a detailed investigation using logs and execution data within RPA Builder to step through the process. 

Question 11
AnyAirlines wants to create a new marketing campaign that sends customers special offers every month based on their accrued loyalty points. There is an existing integration for customer data using MuleSoft's API-led three-tier strategy. Loyalty information exists in an external system that can be accessed via an HTTP endpoint provided by the system, but has no current integration. The external ID used will be email address. The desired output is a CSV file containing customers that includes only the top 10 percent of loyalty point holders. What is the most efficient way to meet this requirement? 

A. 1. Have the MuleSoft team develop a new integration that includes a System API to the Loyalty system and uses the existing Customer System API. 2. Create a Process API to output the final results. 3. Create an Experience API for the business consumers to initiate the integration. 

B. 1. Create a MuleSoft Composer flow that utilizes the current Customer integration to select all customers. 2. Create an additional MuleSoft Composer flow that retrieves all the Loyalty information. 3. Create a MuleSoft Composer flow that combines the two previous results and outputs the top 10 percent to a CSV file. 

C. 1. Have the MuleSoft team develop a new integration that includes a new System API to both the Customer and Loyally systems. 2. Create a Process API to output the final results. 3. Create an Experience API for the business consumers to initiate the integration. 

D. 1. Create a Salesforce Flow that retrieves the Contact data. 2. Create a Salesforce Flow that retrieves the Loyalty data. 3. Create a Flow Orchestration that uses the two flows and outputs the result to a CSV file. 


Answer: A 

Explanation: The first step is to develop a new System API that integrates with the Loyalty system. Use the existing System API for customer data to retrieve necessary customer information (reuse). Create a Process API that combines data from both the Customer and Loyalty System APIs to process data and apply business logic. Create an Experience API to serve the business consumers, providing a user-friendly interface for initiating the integration. 

Question 12
AnyAirlines selected AWS Cloud services as their infrastructure platform. They need to implement Anypoint Platform as the integration solution along with existing cloud capabilities like vertical/horizontal scalability and zero downtime redeployments. Which type of deployment strategy is needed? 

A. Cloudhub 

B. Runtime Fabric 

C. Hybrid 

D. Private Cloud Edition 


Answer: B 

Explanation: Anypoint Runtime Fabric (RTF) is designed for deploying Mule applications on any cloud infrastructure, including AWS. It supports vertical and horizontal scalability and enables zero-downtime deployments, which aligns with AnyAirlines' requirements. RTF allows scaling applications both vertically and horizontally and supports zero-downtime deployments by utilizing rolling updates. 

Question 13
Northern Trail Outfitters is developing an API that connects to a vendor's database. Which two strategies should their Ops team use to monitor the overall health of the API and database using API Functional Monitoring? (Choose two.) 

A. Monitor the CloudHub worker logs for JDBC database connection exceptions. 

B. Make a call to a health-check endpoint, and then verify that the endpoint is still running. 

C. Monitor the Mule worker logs for "ERROR" statements and verify that the results match expected errors. 

D. Make a GET call to an existing API endpoint, and then verify that the results match expected data. 


Answer: B, D 

Explanation: Creating and regularly calling a health-check endpoint is a common strategy to ensure that the API and its underlying systems are operational. Additionally, making a GET call to an existing API endpoint and verifying that the results match expected data helps ensure that the API is not only running but also functioning correctly. 

Question 14
A Salesforce administrator asks for advice on how to build their Salesforce flow. They need to complete several DML actions as part of their Salesforce flow and are running into DML governor limits during testing. Which two pieces of advice should be given to the Salesforce administrator to improve their flow? (Choose two.) 

A. Avoid putting DML statements inside of For Loop occurrences. 

B. Use the upsert action to reduce the amount of DML statements required during the flow runtime. 

C. Loop through a collection variable to save more records with a single DML statement. 

D. Use DML statements at the end of the flow wherever possible. 


Answer: A, C 

Explanation: Placing DML operations inside a loop can quickly exceed Salesforce governor limits, as each iteration performs a separate DML operation. It's best to collect records in a list and perform DML operations outside the loop. By looping through a collection variable and adding records to it, you can perform bulk DML operations, which are more efficient. 

Question 15
AnyAirlines has MuleSoft Composer installed on their production Salesforce environment. To test flows with data in multiple non-production environments, what does the hyperautomation specialist need to do? 

A. Create a connection to each of the non-production environments within the Composer UI. 

B. Install MuleSoft Composer in each of the non-production Salesforce environments. 

C. Install MuleSoft Composer in only one non-production Salesforce environment and create a proxy to all other non-production environments. 

D. Use mocked data because non-production data is not available to MuleSoft Composer. 


Answer: A 

Explanation: To test flows with data in multiple non-production environments, creating connections to each environment within the MuleSoft Composer UI is necessary. This allows the Composer to access and manipulate data across different environments, ensuring comprehensive testing. 

Question 16
Northern Trail Outfitters is concerned about security in their Salesforce org regarding their newly created hyperautomation flow that calls a MuleSoft API. A mechanism needs to be implemented that restricts which users can invoke the flow. Which setting is available to a hyperautomation practitioner that meets this security requirement? 

A. Configure OAuth 2.0 in the connected app. 

B. Assign an appropriate profile or permission set to users in the external service. 

C. Assign an appropriate profile or permission set to users in the connected app. 

D. Configure OAuth 2.0 in the external service. 


Answer: C 

Explanation: Assigning the appropriate profile or permission set to users in the connected app restricts access to the MuleSoft API. This method ensures that only authorized users can invoke the hyperautomation flow. Properly securing the connected app by configuring user profiles and permission sets ensures compliance with security policies. 

Question 17
An RPA developer is building the implementation of an RPA process based on the BPMN created by a colleague. In the BPMN, they see the symbol below (a diamond with an "X" inside). What does the symbol represent? 

A. An activity that is performed if an error occurs during processing 

B. A point in the process where different activities are performed under different circumstances 

C. One possible endpoint for the process 

D. A cleanup activity that is performed at the end of the process to ensure all running applications are closed 


Answer: B 

Explanation: The symbol shown is a diamond with an "X" inside, which represents an exclusive gateway in BPMN. This gateway is used to control the flow of the process based on certain conditions or circumstances. When an exclusive gateway is encountered, the process evaluates the conditions on each outgoing sequence flow and chooses the path that meets the conditions. 

Question 18
A Salesforce admin for AnyAirlines constructs a MuleSoft Composer flow that retrieves a record based on a unique ID using the Get Records action from a Salesforce connector. They will use the result to send a Slack message. How can they achieve this task? 

A. 1. Add a Slack action step after the Salesforce action step. 2. Use the first record from the collection of Salesforce records to construct the message. 

B. 1. Add a For Each loop after the Salesforce action step iterating over the collection of Salesforce records. 2. Use a Slack action step to construct the messages from the record being processed. 

C. 1. Add an If/Else Block after the Salesforce action step, which contains a branch checking if the Salesforce action step returned exactly one record. 2. In the branch, add a Slack action step and use the record to construct the message. 

D. 1. Add a Slack action step after the Salesforce action step. 2. Use the record to construct the message. 


Answer: D 

Explanation: Start by adding a Salesforce action step that uses the Get Records action to retrieve the record based on a unique ID. After retrieving the record, add a Slack action step. Use the retrieved record directly to construct the message in the Slack action step. Since the Get Records action retrieves a single record based on a unique ID, there is no need to handle collections or iterate through records. 

Question 19
Northern Trail Outfitters needs to develop an application network that follows a MuleSoft-recommended, API-led connectivity approach and meets the following requirements: provides data to mobile and web interfaces, aggregates and transforms data, and retrieves data from databases. In which API tier should the data aggregation and transformation take place? 

A. Experience 

B. Process 

C. Business 

D. System 


Answer: B 

Explanation: Process APIs are responsible for orchestrating and executing business logic. They aggregate, transform, and process data from multiple sources before passing it to Experience APIs or other downstream systems. Given the requirements to aggregate and transform data, the Process tier is the appropriate place. 

Question 20
A Salesforce flow needs to connect to external APIs provided by Northern Trail Outfitters (NTO) and AnyAirlines to retrieve data. Which three steps should be taken to connect to the external APIs? (Choose three.) 

A. Use an Action element to call and consume the appropriate API in the Salesforce flow. 

B. Create External Services in Salesforce for NTO and AnyAirlines. 

C. Create Named Credentials in Anypoint for NTO and AnyAirlines. 

D. Use a Virtual service to call and consume the appropriate API in the Salesforce flow. 

E. Create Named Credentials in Salesforce for NTO and AnyAirlines. 


Answer: A, B, E 

Explanation: To connect a Salesforce flow to external APIs, you should: 1) Create Named Credentials in Salesforce to store the URL and authentication details. 2) Create External Services in Salesforce to register the external APIs (using OpenAPI/Swagger or RAML). 3) Use an Action element within the Salesforce Flow to call the registered external services. 

Question 21
AnyAirlines wants to share the Flight Path API through their public Anypoint Exchange Portal. What should be configured before the API can be shared? 

A. The visibility level of API instances should be set to public. 

B. The users that need access to the API should be added to the appropriate role in Anypoint Platform. 

C. The API should be secured using one of the supported authentication/authorization mechanisms. 

D. The API should be functional and accessible for users to interact with. 


Answer: A 

Explanation: Before sharing an API on the public Anypoint Exchange Portal, the API's visibility level must be configured as public within the Anypoint Platform so that it can be shared and accessed by external users. 

Question 22
Northern Trail Outfitters recently purchased another company. Both companies have separate Salesforce orgs. One business user wants to automate a workflow which requires data transfer between both orgs and automates a distinct multi-user workflow within one of the orgs. According to best practices, which two hyperautomation tools should these workflows use? (Choose two.) 

A. Flow Orchestration 

B. Anypoint Platform 

C. MuleSoft RPA 

D. MuleSoft Composer 


Answer: A, D 

Explanation: MuleSoft Composer is recommended for easy and quick integration between multiple systems, including different Salesforce orgs (data transfer). Flow Orchestration is ideal for automating complex, multi-step business processes involving multiple users within a single org (distinct multi-user workflow). 

Question 23
A non-technical employee from AnyAirlines creates a hyperautomation solution. The solution needs to meet the following criteria: The process needs to begin when a record is created in Salesforce. Then, it needs to pass data to a pre-existing RPA process which includes a User Task for data integrity purposes. The output of the RPA process needs to be used to create a record in NetSuite. According to best practices, how should this automated process be structured? 

A. 1. A MuleSoft Composer flow triggers on the creation of the record and calls the RPA process. 2. Then, the same flow uses the response to create a record in NetSuite. 

B. 1. A Salesforce flow triggers on the creation of the record and calls too RPA process. 2. Then, the same flow uses the response to create a record in NetSuite. 

C. 1. A MuleSoft Composer flow triggers on the creation of the record and calls the RPA process. 2. Then, a second MuleSoft Composer flow triggers when the RPA process is completed and creates a record in NetSuite. 

D. 1. A Salesforce flow triggers on the creation of the record and makes an outbound request to a MuleSoft Composer flow. 2. Then, the same MuleSoft Composer flow calls the RPA process and uses the result to create a record in NetSuite. 


Answer: A 

Explanation: Use MuleSoft Composer to create a flow that is triggered when a new record is created in Salesforce. Once the flow is triggered, it should call the pre-existing RPA process. After the RPA process completes, the MuleSoft Composer flow can capture the output from the RPA process and use it to create a record in NetSuite. 

Question 24
Northern Trail Outfitters set up a MuleSoft Composer integration between Salesforce and NetSuite that updates the Order object in Salesforce with data from NetSuite. When an order in Salesforce is updated as complete, the Last Order Date custom field on the related account should automatically update with the date the order was marked complete. What is the best practice to achieve this outcome? 

A. Update the MuleSoft Composer integration to also update the related account when the order is marked complete. 

B. Replace the MuleSoft Composer integration with a three-tier API integration between Salesforce and NetSuite using Anypoint Platform. 

C. Create a record-triggered flow on the Order object that updates the related account when the order is marked complete. 

D. Create a MuleSoft RPA bot that updates the related account when the order is marked complete. 


Answer: C 

Explanation: To update the Last Order Date custom field on the related account when an order is marked complete in Salesforce, the best practice is to use a record-triggered flow on the Order object. Set the flow to trigger when the order status is updated to complete. Use an Update Records element to update the related Account. This ensures that the data remains within Salesforce and is updated immediately. 

Question 25
An AnyAirlines employee regularly performs a manual process to extract customer and flight information from multiple legacy systems. AnyAirlines recently purchased MuleSoft automation and wants to automate this process using MuleSoft RPA. During an evaluation of the candidate RPA process, which two key qualifiers should be considered? (Choose two.) 

A. Is the process rule-based? 

B. Is the process risky? 

C. Is the process data-driven? 

D. Is the process speed-sensitive? 


Answer: A, C 

Explanation: When evaluating a candidate process for RPA automation, consider if the process is rule-based and data-driven. RPA is well-suited for processes that follow clear, predefined rules. Data-driven processes involve manipulating, transferring, and extracting data, making them ideal for RPA automation. 

Question 26
Which type of integration project should be implemented with MuleSoft Composer? 

A. Automating UI interactions using image recognition 

B. Data transformation from a source system to a target system by a non-technical user 

C. Batch processing of larger-than-memory files with conditional logic within the batch steps 

D. Long running workflows that require manual steps and approvals by users 


Answer: B 

Explanation: MuleSoft Composer is designed for business users to create integrations without deep technical knowledge. It is ideal for scenarios that involve data transformation and integration where non-technical users can easily connect different systems, automate data transfers, and transform data from one system to another using a no-code interface. 

Question 27
Northern Trail Outfitters (NTO) has a new business channel that requires exposing their existing non-MuleSoft APIs to the public. They do not have an Anypoint Flex Gateway. The NTO digital channel team wants to leverage Anypoint Platform as its API management tool. What is the most time-efficient mechanism of securing their backend systems? 

A. Rewrite the existing APIs using MuleSoft. 

B. Create a proxy in front of each existing API. 

C. Expose each endpoint as a basic endpoint. 

D. Use a basic endpoint with a configured consumer endpoint. 


Answer: B 

Explanation: To expose existing non-MuleSoft APIs and secure them efficiently using Anypoint Platform, you can create API proxies. This approach involves setting up an intermediary that forwards requests to the existing backend APIs, allowing you to leverage Anypoint Platform's API management capabilities without rewriting the existing APIs. 

Question 28
Northern Trail Outfitters is building a hyperautomation solution using Salesforce and MuleSoft. They need to use Salesforce Flow to automate a multi-departmental process in an external system and capture the outcome in Salesforce. How should the Salesforce Flow solution be structured to meet this requirement? 

A. An autolaunched flow invoked by REST API to update Salesforce after the process is completed 

B. A Flow Orchestration to automate the multi-departmental process and update Salesforce records 

C. Parent and subflows invoked by REST API to capture user inputs and update Salesforce records 

D. An evaluation flow which evaluates when the process is completed and updates Salesforce records 


Answer: B 

Explanation: Salesforce Flow Orchestration is designed to manage complex, multi-step business processes that span multiple departments and systems. It allows you to break down the process into stages and define the sequence of actions and approvals required. After completing the external process, Flow Orchestration can be configured to update Salesforce records with the outcome. 

Question 29
AnyAirlines releases a new REST API that exposes access to an RPA process. The RPA process can only handle a limited number of interactions per second before the API begins returning errors. Which policy should AnyAirlines apply to prevent the API from being overloaded? 

A. JSON threat protection 

B. Rate Limiting - SLA 

C. Spike Control 

D. Client ID Enforcement 


Answer: C 

Explanation: To prevent an API from being overloaded, the Spike Control policy is suitable. It helps manage sudden bursts of traffic by limiting the rate at which requests are processed. Spike Control smooths out bursts of incoming requests by enforcing a rate limit over a short period, protecting backend systems from being overwhelmed. 

Question 30
The customer support team at Northern Trail Outfitters manages and maintains customer service cases using Service Cloud. The team collaborates with other stakeholders such as the sales, product, and technical support teams to resolve cases using Slack. The team needs to use a MuleSoft Composer flow to automatically trigger when a case is created or modified in Service Cloud with notifications in Slack. Based on these specific case requirements, the team routes the cases to the sales, product, or the technical support team. What flow component must the customer support team use to route the cases? 

A. For Each 

B. If/Else 

C. Switch/Case 

D. Swimlane 


Answer: C 

Explanation: To route cases based on specific criteria to different teams (sales, product, or technical support) using MuleSoft Composer, the Switch/Case component is the most appropriate choice. This component allows you to define multiple conditions and route the flow based on these conditions (e.g., case type, priority). 

Question 31
AnyAirlines is creating a hyperautomation solution that will run any time a record is created in NetSuite and will update a record in Salesforce. Many records present in Salesforce need to be related to the updated record. AnyAirlines wants to automatically update each of these dependent records. When combined, which two hyperautomation solutions should be used to automate this process without involving IT? (Choose two.) 

A. Anypoint Platform 

B. Salesforce Flow 

C. MuleSoft RPA 

D. MuleSoft Composer 


Answer: B, D 

Explanation: Combine MuleSoft Composer for integration and Salesforce Flow for in-Salesforce automation. Use MuleSoft Composer to create a flow that triggers when a new record is created in NetSuite and updates the corresponding record in Salesforce. Use Salesforce Flow to create a record-triggered flow that updates all dependent records whenever the primary Salesforce record is updated. 

Question 32
AnyAirlines implements a credit card program that requires customer applications to go through a review process before approval. They want to develop a series of hyperautomation solutions that will integrate to process the applications and enter the customer's information into a legacy system once approved. They want to complete the following components: An Einstein bot, A Salesforce flow, An RPA process, A simple MuleSoft Composer flow. Which component will likely require the most effort to complete? 

A. A simple MuleSoft Composer flow that triggers if a credit card application is approved and then invokes an RPA process 

B. A Salesforce flow that marks the credit card application as approved in Salesforce 

C. An RPA process that interacts with multiple applications and websites 

D. An Einstein bot that will initiate the credit card application and create a record of an existing Salesforce Custom Object 


Answer: C 

Explanation: Developing an RPA process that interacts with multiple applications and websites typically requires the most effort due to the complexity of interaction (navigating web pages, filling forms), integration challenges with different systems, and the need for maintenance and updates as applications change. 

Question 33
Northern Trail Outfitters (NTO) has outgrown its custom Extract-Transform-Load (ETL) solution and needs to migrate its ETL jobs to a new tool. One of the requirements is a single interface to view and manage the ETL jobs. Some of these ETL jobs interact with systems that are hosted on-premises. According to Salesforce's hyperautomation best practices, how should Salesforce's various hyperautomation solutions be combined to meet NTO's requirements? 

A. Migrate all integrations to MuleSoft Compose. Use the Salesforce UI to view all MuleSoft Composer integrations. Leverage MuleSoft RPA for on-premises systems. 

B. Implement a three-tier API-led strategy to migrate its ETL jobs to a new tool. Use Anypoint API Manager to view and manage all API integrations. 

C. Migrate integrations with simple transformations to MuleSoft Composer and complex integrations to Anypoint Platform. Use Anypoint Exchange to view and manage all API integrations. 

D. Use External Services in Salesforce to connect with Anypoint Platform. Use Orchestrator to coordinate the different ETL jobs in a single UI. Leverage MuleSoft RPA for on-premises systems. 


Answer: C 

Explanation: Migrate simple integrations to MuleSoft Composer and complex integrations (involving intricate logic or large data volumes) to Anypoint Platform. Use Anypoint Exchange as a centralized repository to view and manage all API integrations, providing a single interface. 

Question 34
Northern Trail Outfitters wants to create an automation which runs on a fixed schedule to enter sales data into NetSuite running as a process in the background. The business product owner chose MuleSoft Composer as the tool for this task. The Salesforce admin wants to advise the product owner about how the MuleSoft Composer scheduling functionality works. Which two options are available for use as the time mechanism within MuleSoft Composer? (Choose two.) 

A. Schedule based on a formula 

B. Every 30 minutes 

C. Every 30 days 

D. Every 5 minutes 


Answer: B, D 

Explanation: MuleSoft Composer provides scheduling functionality that allows you to set up automated flows to run at specified intervals. The available options for scheduling within MuleSoft Composer include "Every 30 minutes" and "Every 5 minutes". 

Question 35
Which API policy can be applied to limit the number of requests an individual client can make to an API? 

A. Client ID Enforcement 

B. Spike Control 

C. Rate limiting - SLA-Based 

D. OAuth 2.0 access token enforcement 


Answer: C 

Explanation: The Rate Limiting - SLA-Based policy in Anypoint Platform is designed to control the number of requests an individual client can make to an API. This policy helps protect APIs from being overwhelmed by too many requests by enforcing a limit on the number of requests a client can make within a specified time frame. 

Question 36
Northern Trail Outfitters evaluates multiple standards for the exit criteria of a stage in their Flow Orchestration. Based on their criteria, they want the flow to go down one of three paths. How should this be built in Flow Orchestration to meet this requirement? 

A. Use the evaluation flow to determine the exit criteria for the current stage. Then, use a separate evaluation flow to determine the entry criteria for each of the three paths. 

B. Have the evaluation flow return a number variable, and use a decision element to determine which path to execute. 

C. Create two evaluation flows, and execute the second evaluation flow if the first evaluation flow returns false. 

D. Evaluate the criteria for the first two paths in an evaluation flow. Then, use the default path functionality of the decision element for the third path. 


Answer: B 

Explanation: To implement branching logic based on multiple criteria in Flow Orchestration, create an evaluation flow that assesses the exit criteria and returns a number variable indicating which path to take. Then, use a decision element in Flow Orchestration to evaluate the number variable and determine which path to execute next. 

Question 37
AnyAirlines is developing an RPA process and is implementing testing best practices. They want to take the RPA process through rigorous testing. During these tests, where do RPA process test plans execute? 

A. On a configured RPA Bot 

B. In RPA Manager 

C. In RPA Builder 

D. In an RPA process runtime 


Answer: A 

Explanation: During testing of an RPA process, test plans are executed on a configured RPA Bot. This allows you to simulate real-world scenarios and verify the functionality and performance of the RPA process in an environment that closely mirrors production. 

Question 38
AnyAirlines needs to select a tool for developing an integration between Salesforce and an ERP system in the cloud. The requirements state that the systems must communicate bidirectionally and as close to real time as possible. The ERP system can be accessed via a SOAP-based web service. Which tool meets the requirements of this integration? 

A. Anypoint Studio 

B. MuleSoft Composer 

C. Orchestrator 

D. MuleSoft RPA 


Answer: A 

Explanation: Anypoint Studio is the most suitable tool for this integration. It supports SOAP-based web services, which is essential for the ERP system. It allows for complex integrations with bidirectional communication and can design integrations that process data in near real-time. 

Question 39
The current date and time is September 28, 2022, at 9:00 a.m. A process running in a single Secured Session is scheduled to start September 28, 2022, at 10:00 a.m., and run every 45 minutes. If the process takes one hour to complete when it runs for the first time, when will it run for the second time? 

A. September 28, 2022, at 11:30 a.m. 

B. September 28, 2022, at 10:45 a.m. 

C. After the first execution is complete 

D. September 28, 2022, at 10:30 a.m. 


Answer: C 

Explanation: The process is running in a single Secured Session. Since the first run takes 1 hour (finishing at 11:00 a.m.), the next execution can only start after the first one completes. The subsequent run will then start 45 minutes after the completion of the first run (11:00 a.m. + 45 minutes = 11:45 a.m.). Therefore, it waits until after the first execution is complete. 

Question 40
What is the difference between Run and Debug modes in Flow Builder? 

A. Debug mode displays details for debugging the flow. 

B. Debug mode uses AI to fix any bugs in the flow. 

C. Run mode uses the latest version of the flow. 

D. Run mode is only available for active flows. 


Answer: A 

Explanation: Debug mode provides detailed information for each step of the flow, including input and output data, and any errors encountered. It is specifically designed to aid in diagnosing and fixing issues by providing a granular view of the flow's execution. Run mode executes the flow as it is, typically to verify it works under normal conditions. 

Question 41
Northern Trail Outfitters (NTO) wants to automate a multi-step process that spans several departments. How do Interactive Steps in Flow Orchestration help NTO involve users at key steps of the process? 

A. They allow the user to interact directly with external systems through the Salesforce UI. 

B. They allow the user to interact with the process in between automated backend steps. 

C. They enable users to collaborate on specific work items. 

D. They leverage AI processing to automatically interact with the customer and collect customer data. 


Answer: B 

Explanation: Interactive Steps in Flow Orchestration enable users to engage with the process during key stages. These steps are inserted between automated tasks to require human input or decision-making. Once the user completes the required interaction, the process can automatically proceed to the next step. 

Question 42
An RPA process is invoked by a MuleSoft Composer flow. The RPA process has a User Task that can take up to 24 hours to complete. Using best practices, how should the results be consumed by MuleSoft Composer? 

A. (Note: Option A text missing in source, implied context suggests alternative method or wait)

B. Wait for the RPA process to complete and invoke a second MuleSoft Composer flow via REST API. 

C. Create a second MuleSoft Composer flow that starts when the RPA process is complete. 

D. Wait for the RPA process to complete and use the results in the same MuleSoft Composer flow. 

E. Create a second MuleSoft Composer flow that runs on a schedule and checks if the RPA process is complete. 


Answer: C 

Explanation: When an RPA process involves a User Task that can take a significant amount of time, it is best to create a second MuleSoft Composer flow that is triggered when the RPA process completes. This ensures that the first flow is not held up while waiting. The second flow can start based on an event, such as the completion status of the RPA process. 

Question 43
AnyAirlines has a MuleSoft Composer flow between NetSuite and Salesforce. One of the data elements coming from NetSuite is a string that needs to be put into a Boolean field in a Salesforce object. Which Composer function should be used to change the datatype of the value? 

A. today() 

B. from BooleanToString() 

C. fromStringToBoolean() 

D. substitute() 


Answer: C 

Explanation: To convert a string from NetSuite into a Boolean field in a Salesforce object within MuleSoft Composer, you should use the fromStringToBoolean() function. This function interprets common Boolean strings like "true", "false", "yes", "no" and converts them into their corresponding Boolean values. 

Question 44
Northern Trail Outfitters develops an API to look up manufacturer rebates. This API will be consumed internally by the website's backend and the RPA boots used by its customer service representatives. How should this API be shared within the organization? 

A. The API's RAML specification should be stored in a SharePoint repository. 

B. The API asset should be published to the private Exchange portal. 

C. Example assets should be published to the private Exchange. 

D. The API asset should be published to the public Exchange portal. 


Answer: B 

Explanation: To effectively share an API internally within an organization, publishing the API asset to the private Exchange portal is the best approach. The private Exchange portal is designed for sharing APIs and assets within an organization, allowing you to control access so that only authorized internal users can consume it. 

Question 45
Northern Trail Outfitters (NTO) has a complicated process that involves several departments. How should stages be used in Flow Orchestration to organize this process? 

A. Organizing individual steps to be run in parallel to one another throughout the process. 

B. Assigning individual steps to specific users or groups that interact with the process. 

C. Grouping steps based on the systems and tools that will be used to implement the process. 

D. Grouping steps of the process based on hand-offs or key branches of the process. 


Answer: D 

Explanation: In Flow Orchestration, stages should be used to organize a complicated process by grouping steps based on hand-offs or key branches of the process. Each stage can represent a major phase in the process involving a transition of responsibility or a significant decision point. 

Question 46
AnyAirlines is developing an RPA process to extract information from a legacy system. To capture the manual workflow, they leverage RPA Recorder. Which two best practices should they be aware of when working with the autogenerated workflow code? (Choose two.) 

A. All autocaptured information is for documentation purposes only. 

B. Some autogenerated code must be replaced with more robust or specialized action steps. 

C. The autogenerated workflows may contain sensitive information that must be removed. 

D. All keystrokes and mouse clicks in the autogenerated code must be disabled before deploying to production. 


Answer: B, C 

Explanation: When working with autogenerated workflow code from RPA Recorder:


Replace Autogenerated Code: Some code may not be optimized for robustness, so it is necessary to review and replace parts with more robust or specialized action steps. 


Remove Sensitive Information: Autogenerated workflows might capture sensitive information (usernames, passwords), which must be removed or masked before deploying to production. 

Question 47
A MuleSoft developer at AnyAirlines wants to retrieve customer data from an external system. Before designing a new integration, what should they use to determine if the integration exists and can be reused? 

A. Design Center 

B. Anypoint Studio 

C. Anypoint Exchange 

D. MuleSoft Composer 


Answer: C 

Explanation: Anypoint Exchange is a repository where developers can publish, share, and discover reusable assets such as APIs, connectors, and templates. By searching Anypoint Exchange, the developer can find existing integrations or assets, avoiding the need to develop a new integration from scratch. 

Question 48
Which component of Anypoint Platform is responsible for enforcing API policies? 

A. API Analytics 

B. API Runtime 

C. API Gateway 

D. API Manager 


Answer: C 

Explanation: The API Gateway is the runtime component responsible for enforcing API policies. It acts as an intermediary that manages API traffic, security, and performance by applying the policies configured in API Manager (such as rate limiting and security). 

Question 49
Northern Trail Outfitters publishes REST APIs to Anypoint Exchange. They write the REST APIs using RAML and share these APIs with internal and external users. In which language or languages can a user download these APIs? 

A. RAML and OAS only 

B. RAML, OAS, and Apiary 

C. RAML only 

D. RAML and Apiary only 


Answer: A 

Explanation: Users can download REST APIs published to Anypoint Exchange in RAML (RESTful API Modeling Language) and OAS (OpenAPI Specification). MuleSoft supports both formats, allowing users to choose between these two widely-used standards. 

Question 50
The MuleSoft development team at Northern Trail Outfitters creates a Mule application that interacts with several APIs and RPA processes. The team needs to share this application with other teams to help them create similar applications. How should the Mule application be published in Anypoint Exchange to meet this requirement? 

A. Template asset 

B. Custom asset 

C. Connector asset 

D. API asset 


Answer: A 

Explanation: To share a Mule application as a starting point for similar applications, it should be published as a Template asset. A Template includes predefined integration logic and configurations that can be used as a starting point for new projects, allowing other teams to leverage the pre-built solution and ensure consistency. 

Question 51
Northern Trail Outfitters must create a near real-time inventory API that can be used within its retail POS systems, across its mobile and online stores, and by its strategic B2B e-commerce partners. The API must provide accurate and up-to-date product inventory levels. The data currently resides in both SAP and NetSuite. According to best practices, which hyperautomation tool should be used to build this solution? 

A. Salesforce Flow 

B. MuleSoft Composer 

C. MuleSoft RPA 

D. Anypoint Platform 


Answer: D 

Explanation: The Anypoint Platform provides comprehensive integration capabilities, including real-time data processing, API management, and connectivity to systems like SAP and NetSuite. It supports building robust, scalable APIs that can handle near real-time data synchronization. 

Question 52
Which MuleSoft deployment strategy consists of the control plane and runtime plan hosted by the client? 

A. Private Cloud Edition 

B. CloudHub 

C. Runtime Fabric 

D. Hybrid 


Answer: D 

Explanation: A hybrid deployment strategy involves hosting the control plane (Anypoint Platform management) in the cloud, while the runtime plane (where Mule applications run) is hosted by the client, either on-premises or in their own private cloud. (Note: The question asks for the strategy where runtime is hosted by the client; Private Cloud Edition hosts both control and runtime on client premises, but the context of the answer points to Hybrid as the intended distinction in many MuleSoft contexts, or the question phrasing implies a mix where client hosting is the key differentiator for the runtime part. However, based strictly on the provided text's explanation for answer D: "Runtime plane is hosted by the client... Control plane is managed by MuleSoft"). 

Question 53
An employee at AnyAirlines uses RPA Recorder to capture actions performed when carrying out a business process automation. How does this help expedite RPA process development? 

A. BPMN is autogenerated, including documentation in the form of images and a fully functional RPA process with workflows and conditional branching. 

B. BPMN is autogenerated, which includes documentation in the form of images and a complete recording of keyboard actions and wait times. 

C. BPMN is autogenerated with complete test plans and run configurations that can be executed in the test and production phases. 

D. BPMN is autogenerated with documentation and workflows containing the recorded actions that are automatically created during the build phase. 


Answer: B 

Explanation: The RPA Recorder captures the business process and autogenerates a BPMN diagram. Along with the BPMN, it generates detailed documentation that includes images of the steps performed, as well as a complete recording of keyboard actions and wait times. This significantly reduces the time required to document and design the process. 

Question 54
The MuleSoft team at Northern Trail Outfitters wants to create a project skeleton that developers can use as a starting point when creating API implementations with Anypoint Studio. This will help drive consistent use of best practices within the team. Which type of Anypoint Exchange artifact should be added to Exchange to publish the project skeleton? 

A. RAML trail definitions to be reused across API implementations 

B. A custom asset with the default API implementation 

C. A MuleSoft application template with key components 

D. An example of an API implementation following best practices 


Answer: C 

Explanation: A MuleSoft application template includes key components and configurations that follow best practices. It provides a consistent starting point for new projects. Publishing this template to Anypoint Exchange allows developers to kickstart their API projects while adhering to uniform standards. 

Question 55
Northern Trail Outfitters (NTO) uses Flow Orchestration to automate quote development. The "Review Quote" work item is performed by their team of technical writers but can be fulfilled by any technical writer on the team. How can NTO ensure the "Review Quote" work item is assigned to the correct Salesforce user? 

A. Use backend steps to automate work item assignment to the next available technical writer. 

B. Create a Group for the team of Salesforce Users and assign the work item to the group. 

C. Use MuleSoft RPAto review the document and submit it for approval if no issues are found. 

D. Create a user collection variable and assign the work item to the user collection. 


Answer: B 

Explanation: Create a Group in Salesforce that includes all the technical writers. When the "Review Quote" work item is created, assign it to the group rather than an individual user. This allows any available technical writer within the group to pick up and complete the task, providing flexibility. 

Question 56
AnyAirlines needs to automatically sync Salesforce accounts with NetSuite customers using a MuleSoft Composer flow. The Address field in the Salesforce Account object is a compound field consisting of the simple fields: Street, City, State, Zip, and Country. However, the Address field in the NetSuite Customer entity is a list consisting of the simple fields: Street, City, State, Zip, and Country. Which task must be performed to map fields of the Salesforce Address compound field to the corresponding fields of the NetSuite Address list in the flow? 

A. Combine the Salesforce address-related fields into a list using a custom formula field in Salesforce. 

B. Combine the Salesforce address-related fields into a list using a custom expression in Composer. 

C. Combine the Salesforce address-related fields into a list using the Get records action in Composer. 

D. Break up the NetSuite Address list into fields that match Salesforce address-related fields using a custom formula field in NetSuite. 


Answer: B 

Explanation: Use a custom expression in MuleSoft Composer to combine the individual address-related fields from Salesforce (Street, City, State, etc.) into a format that matches the NetSuite Address list. This custom expression will concatenate the individual simple fields into a structured format that can be mapped directly to the NetSuite Address list. 

Question 57
The Ops team at AnyAirlines needs to periodically check the status of an API to see it the connected database is down for maintenance. Where should the Ops team set up a scheduled API call and view the status history? 

A. API Manager Analytics 

B. API Functional Monitoring 

C. API Manager Alerts 

D. API Monitoring Dashboard 


Answer: B 

Explanation: API Functional Monitoring allows you to set up scheduled tests and monitor the functional performance of your APIs. It can be configured to periodically make API calls to check for specific conditions and provides a dashboard where you can view the history of these tests, including results and failures. 

Question 58
An AnyAirlines employee determines that an RPA process is a strong candidate for automation. When approving the process, the employee needs to specify a group of potential users to manage the RPA process throughout its lifecycle. According to best practices, which group should the employee choose? 

A. Scrum team 

B. Center for Enablement 

C. Center of Excellence 

D. Multiple project managers 


Answer: C 

Explanation: The best practice is to choose the Center of Excellence (COE). The CoE is a team of experts responsible for overseeing the implementation, governance, and management of RPA processes. They ensure best practices are followed and manage the RPA process from development through deployment and maintenance. 

Question 59
Which Connected App scope should be used to connect RPA Manager with an Anypoint Platform account? 

A. Application Creator 

B. API Catalog Contributor 

C. RPA Integrator 

D. Exchange Administrator 


Answer: C 

Explanation: The appropriate Connected App scope is RPA Integrator. This scope is designed to provide the necessary permissions for integrating RPA Manager with Anypoint Platform, allowing the connected app to interact with the RPA Manager and manage RPA processes. 

Question 60
Northern Trail Outfitters has deployed a MuleSoft RPA process to automate the extraction of sales data from CSV files. To integrate this RPA process with Sales Cloud, an action step is created that calls this RPA process in a MuleSoft Composer flow. Which next step must be added to the flow to make use of the RPA process results? 

A. Create Record action in Sales Cloud 

B. If/Else block 

C. Create or Update Record action in Sales Cloud 

D. For Each loop 


Answer: C 

Explanation: After the RPA process completes and returns the extracted data, the next step in the flow should be to update Sales Cloud. Use the Create or Update Record action to insert the new sales data into Sales Cloud. This action ensures that existing records are updated if they already exist, or new records are created if they don't.