# Product/Engineering --Omnipresent Joel Fickson Ngozo

---

### Persistence Layer, Authentication & Deployment?

1. Since this project would require a database, I would suggest database that has no schema because we are dealing with
   countries that have different requirements and a NoSQL database would ideal in this scenario. Making sure it is on
   auto-scale mode as well since we have to make sure it can grow and also in multi-regions.
2. Security is another aspect I would recommend highly. On the lower level I would prefer JWT Tokens to be signed by the
   server and sent to the user on the front-end. These tokens could be saved in a persistent storage for tracking the
   people who are signed in and the device they are logged in
3. I would set up CI/CD for this backend with extensive tests that could greatly automate this process. I love GitHub
   Actions as they can automate the process.

### Why should we solve it?

1. Solving persistence and auto-scaling would make our application faster and accessible in multiple regions across the
   world
2. To avoid unwanted access to our application, we need to solve security and auth
3. Having a workflow that works would be ideal in terms of not having to worry if things break or not

### How do you propose to solve it?

1. Database - MongoDB Atlas hosted on either GCP or AWS as this will auto-scale and be available in multiple regions
2. Security - JWT Tokens
3. Deployment: On an EC2 Instance or App Engine automated by either Travis CI or GitHub Actions

### What other approaches did you consider?

1. Database - PostGreSQL
2. OAUTH

### What could go wrong?

1. Without a proper database system, we would lose thousands of records and at the same time have huge latency in
   application access
2. Hackers could gain access to sensitive data
3. To reduce the risk, having a micro-service architecture where if one service gets attacked or is an accessible, our
   other services should be accessible.

---

