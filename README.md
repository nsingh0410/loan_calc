# setup and install

git clone the repository
> git clone https://github.com/nsingh0410/loan_calc

Then install dependencies:

> $cd loan_calc
>
> $npm install


# start web server
On MacOS or Linux, run the app with this command:
> $ DEBUG=myapp:* npm start

On Windows Command Prompt, use this command:
> set DEBUG=myapp:* & npm start

On Windows PowerShell, use this command:
> PS> $env:DEBUG='myapp:*'; npm start

Then load http://localhost:3000/api/loans in your browser to access the app.

# how long did you spend creating the application

Took me about 1 - 1.5 hours of total work.

20 minutes setup web server.
5 minutes to install external library.
5 minutes for comments.
10 minutes to create own route and and api endpoint.
10 minutes to get the request vars and format them.
10 minutes to test based on spreadsheet.
20 minutes to write the README.md.
20 minutes for the formula.

I wasnt sure where to get the formula to calculate it, it was in the spreadsheet.

# assumptions
I assumed that it was as simple as just adding the intrest rates to the pmt.

# what part of the application are you most proud of (if any)
Express JS generated the api very easily and cleanly, also loved the seperate package for the PMT.

# example usage
Just need to add the parameters to the end of the request. 
> http://localhost:3000/api/loan?intrest_pa=0.06&loan_term_months=60&total_loan_amount=10000&monthly_fee=50&broker_fee=0.0175

![image](https://user-images.githubusercontent.com/30139083/162867738-b6c107bc-0010-484d-8249-8d8298537ed2.png)
