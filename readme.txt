Steps to redeploy (lesson 201):
node compile.js
node deploy.js => will output the Contract's new home (address)
Insert this into ethereum/factory.js

Campaign Contract Deployed to: 
0x246f670d7443a97b78367DDBFd39DeB5AdD8d0e4

March 16 2022

The goal of the application is to show the contributions to the campaign publicly, in the most transparent way possible. The app will show the requests made to withdraw moeny from the contract, the number of people who have donated to the campaign, the amount of money the campaign has left to spend, and the address of the manager of the contract. 


Key Takeaways:

1. Server Side rendering is accomplished with getServerSideProps(). 
  - Replaces componentDidMount completely
  - Use static modifier on CampaignsIndex to tie it to a TYPE, instead of an instance of that TYPE
2. If deploying to a browser, use window.ethereum. 
   Else, use Web3.providers.HttpProvider(<BLOCKCHAIN_ENDPOINT>)
3. If you are simply querying the blockchain, use the .call() method.
   If you are attempting to send data, use the .send() method. 
4. The way that we interact with the contract is using the compiled CampaignFactory.json file.
   In factory.js, we tie the .json file with the instance of the Contract using the address
   where the Contract lives at.



Issues encountered:

1. Next.js "Hot Reload" not working.
  a. Delete .next/
  b. Run `npm run dev` again to automatically creeate the file.
2. Node running out of memory.   
   Note: If your system is running less than 8 GB RAM, change the value accordingly. 
  a. Increase the amount of memory for Node.js using 
    `
      export NODE_OPTIONS="--max-old-space-size=8192"
    `
    in the Terminal window you are deploying the Next.js application from. 
