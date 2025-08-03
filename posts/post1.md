3/8/25 12:04
I think I might be an idiot. I've been paying (GitHub's money not mine) for a droplet when using static apps are free, so that's 50$ down the drain.
However the other 150$ is expiring this month, which I didn't know it could do, and I'm trying to figure out ways (AI?) on how to burn the money away!

# The workings of this website
## An overview
This website is hosted using DigitalOcean. I think I got free credits from GitHub or something for being a student, so I figured I might as well use them.  
After creating the droplet, I began my search for a good domain. I stumbled on [riggi.me](https://riggi.me "This website silly") and bought it for cheap on Cloudflare.
Then began the struggle of DNS tables and the like. I didn't think it would be that hard but I spent several days fixing random issues where for whatever reason the domain and my droplet weren't working together. I forget much of the details but I don't think they'd be of interest anyway. Everything I learnt is online anyway.  
I had no idea how to make a website. I knew some html, but were do I put it? I was used to just `python -m http.server 8000` but now I had to do stuff like using Nginx etc. Fortunately, DigitalOcean has some great resources on how to set everything up so I don't have any memory of something traumatic happening.  
Still, my knowledge of HTML and CSS was limited enough to not be able to begin without some help. Here comes the power of LLMs (ChatGPT) where I simply asked it to make it for me. Obviously I didn't end it there and further customised it to my liking. It was a great way to learn about all the different types of `div`s and "aside" stuff. Half of the time was figuring out how to show the rocky background without it getting tiled.  
I had an idea to incorporate a blog. Again, I ask trusty ChatGPT to give me some wisdom and it sort of delivered. I never programmed JavaScript and honestly I'd rather stay away from it as much as I can. If I could imagine the opposite of C, it would be JS. Anyway most of the code that powers this basic blog is by ChatGPT©™.  
This also means that the code kind of sucks. Right now I manually enter a key-value pairs in the same dictionary where the key is the tab you click on, and the value is `something-post.md`. I'm using some script I found to convert markdown to HTML.

## How I access this place
I had to remind myself on how to do this today, because I haven't edited the website at all in 5 months. First, I open Debian WSL.  
```bash
ssh -i webkey root@xxx.xx.xxx.xx
```  
You can set this up easily through DigitalOcean. Once I hacked into my own server, I go to `/var/www/riggi.me/html` and start editing stuff. For some reason, I was accessing git through HTTPS and I don't even have a single personal access token.
```bash
git remote set-url origin git@github.com/camurriusu/website.git
```
Then I enter the password for the private key I have ready. Once I'm logged in, it's a simple `git commit -am "hello"` and `git push`. Who needs branches?  

## Conclusion
I just thought it would be cool if each post showed the posted date/time. But then I realised I can just look at the clock and type it here.
16/1/2025 19:59:282930313233...
