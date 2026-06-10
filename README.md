# Clean X/Twitter

A Tampermonkey userscript that removes ads and junk widgets from X (formerly Twitter).

# Status

Working as of June 2026, using Tampermonkey. The old "Run JavaScript" Chrome extension approach no longer works due to X's Content Security Policy blocking eval() and etc.

The old label-based filtering (such as 'based on your likes', 'Viral tweets' etc.) no longer works as X has removed those labels from the markup and it seems tweets are now injected without telling you why.

# What does it do?

- Removes ad tweets from the timeline
- Removes "Who to follow" widget
- Removes "What's happening / Trending" widget
- Removes "Today's News" widget
- Removes "Subscribe to Premium" widget
- Removes sidebar Google ads

# How can I use it?

1. Install [Tampermonkey](https://www.tampermonkey.net/) for Chrome
2. Open the Tampermonkey dashboard and click the **+** tab to create a new script
3. Paste in the script from this repo
4. Save with Ctrl+S
5. Make sure to enable "Allow scripts" in Tampermonkey's extension settings in Chrome

The script only matches/runs on `https://x.com/*`. The script checks for junk every 500ms after an initial 2 second delay on page load.

# Problems

- X are liable to change their markup at any moment, breaking selectors again :(
- Ad tweets are hidden rather than removed, as X re-renders them if removed from the DOM
- Algorithmic tweet filtering (based on likes, viral tweets etc.) is no longer possible as X removed the labels that identified them

# License/Disclaimer

Not a professional JS dev — feel free to take and improve.
Any usage is at your own risk and by using you take on all liability.
