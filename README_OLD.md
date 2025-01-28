# Section A
    1.  What are the key security considerations when developing financial applications?
    When developing financial aplications, security is of outmost important. These are some key consideration to ensure data safety
        
        i. Authentication & Access Control
        Strong authentication is required for enhanced account security to ensure whoever is requesting or viewing any data is the correct  person.
        Ensure user/account are limited to only data neccesary to their account thereby eliminating Excesive Data Exposure.

        ii. Data Protection
        Encrypt sesitive data both in transit and in rest.
        Tokenization as well to replace sesnsitive data (e.g user id, card numbers) with tokens to minize exposure

        iii. Input Validation
        Sanitize all user inputs to prevent SQL injections and Cross-site scripting (XSS).
        Define strict input formats for all inputs fields.
        Validate all inputs on client-side and on server-side before any database transation

        iv. Secure Communication
        Ensure all interaction between client and server is secure.
    
    2. Describe the importance of compliance standards such as PCI-DSS and GDPR in financial applications

        PCI-DSS & GDPR are important for financial application due to their role in ensuring Security, Privacy and Customer Trust

        PCI-DSS (Payment Card Industry Data and Security Standard)
        -Key Importance:
            Data Security
            Fraud Prevention (Reducing card fraud and Chargeback)
            Trust Building

        GDPR (Genral Data Protection Regulation)
        -Key Importance:
            User Privacy
            Data Breach Accountability
            Transperancy

        
        For financial applications, PCI-DSS and GDPR are not just regulatory  but fundamental frameworks that ensure the protection of sensitive data, 
        instill trust with customers, and safeguard against legal and financial consequences.

    3. Explain the concept of "idempotency" in financial transactions and why it's crucial

        When dealing with financial applications, "idempotency" means that if a user or a system sends the same request to initiate a transaction (like transferring money, making a payment, or updating an account), 
        the system should only process that transaction once, regardless of how many times the request is received.


# Section B
    1. How would you ensure the UI/UX of a banking web application is both user-friendly and secure

        To ensure the UI/UX of a banking web application is both user-friendly and secure, I will follow these principles:

        i. Simple and Intuitive Design

            Clear Navigation: Make it easy for users to find key functions like checking balances, making transfers, and paying bills. Using familiar icons and labels.
            Minimalist Approach: Keep the design clean and simple. Avoid clutter and make sure users can focus on important tasks.
            Mobile-Friendly: Ensure the design adapts well to different screen sizes, especially for mobile users.

        ii. Easy Authentication

            Multi-Factor Authentication (MFA): Require an additional layer of security, like a code sent to the user's phone, alongside the password.
            Password Guidelines: Encourage strong passwords with a clear message about security requirements (e.g., length, special characters).
            Biometric Authentication: Allow fingerprint or facial recognition for easier, secure login on supported devices.

        iii. Clear Security Alerts

            Notifications: Alert users about suspicious activities, such as logins from new devices or unusual transactions, via email or SMS.
            Visual Indicators: Use icons or messages to show secure areas (e.g., a lock icon for payment screens) to reassure users that their data is safe.
        
    2. Explain the role of form validation and data masking in financial applications

        Form Validation and Data Masking play important roles in keeping financial applications secure and user-friendly:

        Form Validation
            Prevents Errors: Ensures users enter the correct information (e.g., valid account numbers, dates) before submission.
            Enhances Security: Helps block harmful data like SQL injections or malicious inputs by checking and filtering what users enter.
            Improves User Experience: Shows clear error messages so users can correct mistakes easily, reducing frustration.

        Data Masking
            Protects Sensitive Information: Hides part of sensitive data (e.g., credit card numbers, bank account details) by replacing it with asterisks or Xs. For example, showing only the last four digits: **** 1234.
            Reduces Risk: Even if data is exposed, masked information prevents unauthorized access to full details, keeping user data safe.

    3. Discuss strategies for handling real-time data updates (e.g., account balance changes) in a React application

        Handling real-time data updates in a React application can be achieved through several strategies. Here are a few approaches:

            i. WebSockets
                WebSockets provide a two-way communication channel between the client and server, enabling real-time updates. 
                Libraries like ws or socket.io to establish a WebSocket connection.

            ii. Server-Sent Events (SSE)
                SSE allows servers to push updates to clients. 
                You can use the EventSource API to establish an SSE connection.

            iii. React Query
                React Query provides a simple way to manage data fetching and caching. 
                You can use its useQuery hook with the refetchInterval option to poll for updates.

            Other ways to get real time data includes Polling, Which is sending periodic requests to the server to fetch updated data

    
    4. What are Progressive Web Apps (PWAs), and how can they benefit a financial institution? 

        Progressive Web Apps (PWAs) are web applications that use modern web technologies to provide a mobile-app-like experience through a browser. 
        They offer key benefits such as offline capabilities, fast load times, and push notifications, making them highly effective for a variety of use cases, including financial institutions.

        Key Features of PWAs:
            Offline Functionality: 
            PWAs can work without an internet connection by caching essential resources, making them ideal for users in areas with unstable connections.
        
            App-Like Experience: 
            They offer a smooth, app-like user interface (UI), with fast load times, responsive design, and a user-friendly experience.
        
            Push Notifications: 
            PWAs can send real-time updates to users, such as account balance changes, transaction alerts, or security notifications.
            
            Home Screen Installation: 
            Users can install a PWA on their device’s home screen without needing to visit an app store, making it more accessible.
            
            Automatic Updates: 
            PWAs can automatically update themselves in the background, ensuring users always have the latest version without requiring manual updates.


# Practical Test
    1. Build a simple React form for online banking login with

        The app is hosted click [HERE](https://bankitfetest.web.app/) to view the login form

        To simulate a successfull login please use 
        Email : test@test.com
        Pasword : password

        any credential other than the one provided will result in a failed login atempt

    2. Create a secure React component that displays a user's transaction history using dummy JSON data, ensuring proper accessibility and formatting. 
        
        A succesfull Login will redirect you to the Transactions page as it is a protected page that requires authentication
        