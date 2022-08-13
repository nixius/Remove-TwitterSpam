# Remove TwitterSpam
Uses 'Run Javascript' Chrome Desktop Extension and a JS script, to remove elements I don't want to see in twitter feed on Chrome

# What does it do?

Removes following tweet types:
* Based on Your likes
* Viral tweets
* Popular images
* non-subscribed topics

# How can I use it?
You can get the Chrome Extension here:

https://chrome.google.com/webstore/detail/run-javascript/lmilalhkkdhfieeienjbiicclobibjao 

Their website is listed there, and here is the github:

https://github.com/ao/RunJavascript_ChromeExtension 

I haven't looked into this to see if it's harmful, run at your own risk.

The JS script I made creates a loop that runs every 200ms and checks for any 'articles' in the DOM that have a span that matches the above, then simply removes them (not hide, as would run into resource issues eventually).

Once you have the run-js extension installed and set to only run on https://twitter.com, you can simply click on the extension and it will show a pop-up - copy + paste the script in and you're good to go. 

# Problems

Twitter are liable to change how their markup works, so this could fail at any moment. 
The 200ms refresh might be a bit much.
If you subscribe to lots of topics on Desktop as the spam is minimal, you may end up with tons of crap on mobile.

# Future

Put into an extension of it's own rather than relying on another one.

# License/Dislcaimer

I am not really a JS Dev, so this is probably not good, so feel free to take and improve.

I have some ad-block stuff set-up that removes some of the crap already, as well as Pi-Hole on a network level, so I haven't tested this for a more regular scenario, so it might just not work.

Any usage is at your own risk and by using you take on all liability.
