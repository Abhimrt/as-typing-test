let txtarea = document.querySelector('textarea');
let showTime = document.getElementById('showTime');
let textBox = document.querySelector('h2')
let starttime,endtime,b=0,marks=0;
let text = [
    "It's urgent, but we don't have time in the next two years to test it, but we must prioritize it. At least we don't need to obfuscate it. You must rethink the whole process. We will give you a slice of pizza if you finish the code until yesterday. Make it pop remember, the entirety is equal or better.  We must build a queue system to ensure it gets the data from our API so this will result in a delay. How does this indicator should look? Also please answer to question from the next mail. Kind reminder. Please inform us where we are on this. After the release, we will need to test it individually. This was the last time when you are allowed to promote something urgent in the production when you was asked for.Dropping the production database is the best coffee in the morning. Also, if you don't have a backup it will work well. We don’t want a backup, it in no way is going down! We must start to do it in this way. Did you develop on production code using the UAT Database?  This is the method that we choose. ",


    "Dropping the production database is the best coffee in the morning. Also, if you don't have a backup it will work well. We don’t want a backup, it in no way is going down! We must start to do it in this way. Did you develop on production code using the UAT Database? This is the method that we choose. I don't believe we talked about the same thing. We must check Jira and you must put everything there, even tasks that you didn't do. We exceed the client's expectancies, but he fired us. Put everything on git. Why this password is encrypted, how I can use it? We will not update any information received from you, so you will be the master of the data. Please create an extra line in the source code file with a comment contends.",


    "The most important part of the workday is lunchtime. I don't see your task in Jira so that means you didn't work in this sprint. Can we attempt some other colors maybe just do what you think? I agree with you, yet desires to be smoother can you are making it appear like this clipart I created nor are we able to have any other option, for making it look like Spotify, or I want you to take it to the next level. I don't believe that you did some unit tests. Send me the password in plain text on email. Hurry up! Let's do the Secret Santa Party in November. The client said that he just want a website to generate data, nothing more, now he told us what he means is a website like Facebook.",


    "We will have another meeting to be sure that you understand what I talked about in the last meeting. And after that, we will do a Knowledge Share to be sure that everyone understands. We appreciate your great effort, but you must follow the rules. I know anyone who can do that for an affordable cost, but I have a remarkable concept for a startup, I want you to construct it for me yet can you transform to make the pizza look more delicious, or needs to be sleeker. Yes, you can store the passwords in a sticky note on your screen, because nobody knows your password. We will update the data that we receive from you. I do not if the API planned does support updates as well. If not, it should be considered.",


    "I think there might be confusion about the guidelines. Please see my answers below. Currently, we set up the logic of the pipeline like this: eat pizza, drink coffee, bathroom, two lines of code, repeat the process. Currently, we sum these permissions. Is it not enough to put the header with the name of the field on the first row? Please don't reply, please. It is crucial that we get the app up and running asap. I modified the application and it’s working now, but you must include a new feature to the app. I do not recommend any hardcoding of special parameters in the database, I suggest to do it the code to be faster. In my understanding this is a special flag for a company, telling us if they provide or not support servic."
]
let no = Math.floor(Math.random()*text.length);
textBox.innerHTML=text[no];
function teststart(){
    marks=0;
    starttime=(new Date()).getTime();
}
txtarea.addEventListener("keypress",(event) =>{
    if(b==0){
        teststart();
        b=1;}
    if(event.key=='Enter'){
        let checktest = text[no].split(' ');
            endtime = (((new Date()).getTime())-starttime)/1000;
            txtarea.disabled=true;
            let typedtest = txtarea.value.split(' ');
            for(i=0;i<checktest.length;i++){
                if(checktest[i]==typedtest[i]){
                    marks++;
                }
            }
            let speed = Math.floor((marks/5)/(endtime/60));
            let error= checktest-marks;
            document.write('score '+ marks+'<br>Net speed '+speed+' words per minute<br>errors '+error);
        }
})