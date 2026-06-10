// ==UserScript==
// @name         X/Twitter Cleaner
// @namespace    http://tampermonkey.net/
// @version      1.6
// @description  Removes ads, widgets and other junk from X/Twitter
// @author       You
// @match        https://x.com/*
// @match        https://www.x.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    function clean() {

        // Hide ad tweets in timeline
        document.querySelectorAll('article[data-testid="tweet"]').forEach(article => {
            if (article.dataset.cleaned) return;
            article.querySelectorAll('span').forEach(span => {
                if (span.innerText === 'Ad') {
                    article.dataset.cleaned = 'true';
                    const cell = article.closest('div[data-testid="cellInnerDiv"]') || article;
                    cell.style.display = 'none';
                }
            });
        });

        // Remove "Who to follow"
        document.querySelectorAll('aside[aria-label="Who to follow"]').forEach(el => {
            el.closest('div[class*="r-kemksi"]')?.style.setProperty('display', 'none', 'important') || (el.style.display = 'none');
        });

        // Remove "What's happening / Trending"
        document.querySelectorAll('div[aria-label="Timeline: Trending now"]').forEach(el => {
            el.closest('div[class*="r-kemksi"]')?.style.setProperty('display', 'none', 'important') || (el.style.display = 'none');
        });

        // Remove "Today's News"
        document.querySelectorAll('div[data-testid="news_sidebar"]').forEach(el => {
            el.closest('div[class*="r-kemksi"]')?.style.setProperty('display', 'none', 'important') || (el.style.display = 'none');
        });

        // Remove "Subscribe to Premium"
        document.querySelectorAll('aside[aria-label="Subscribe to Premium"]').forEach(el => {
            el.closest('div[class*="r-kemksi"]')?.style.setProperty('display', 'none', 'important') || (el.style.display = 'none');
        });

        // Remove sidebar Google ad
        document.querySelectorAll('div[data-testid="whoToFollowSspAd"]').forEach(el => {
            el.style.display = 'none';
        });
    }

    setTimeout(function() {
        clean();
        setInterval(clean, 500);
    }, 2000);

})();
