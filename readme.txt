Campaign Contract Deployed to: 
0xE74A5e4c4e8cF290E1eA29C97CA0C55bDf76850e

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
