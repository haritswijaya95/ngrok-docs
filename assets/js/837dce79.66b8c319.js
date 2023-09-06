"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[46655],{44463:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>A,frontMatter:()=>i,metadata:()=>r,toc:()=>u});var a=n(51163),o=(n(59496),n(49613));const i={sidebar_position:4,title:"SSH Reverse Tunnel"},s="SSH Reverse Tunnel Agent",r={unversionedId:"secure-tunnels/tunnels/ssh-reverse-tunnel-agent",id:"secure-tunnels/tunnels/ssh-reverse-tunnel-agent",title:"SSH Reverse Tunnel",description:"---",source:"@site/docs/secure-tunnels/tunnels/ssh-reverse-tunnel-agent.md",sourceDirName:"secure-tunnels/tunnels",slug:"/secure-tunnels/tunnels/ssh-reverse-tunnel-agent",permalink:"/docs/secure-tunnels/tunnels/ssh-reverse-tunnel-agent",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/secure-tunnels/tunnels/ssh-reverse-tunnel-agent.md",tags:[],version:"current",lastUpdatedBy:"Russ Savage",lastUpdatedAt:1691862991,formattedLastUpdatedAt:"Aug 12, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"SSH Reverse Tunnel"},sidebar:"docs",previous:{title:"TCP Tunnels",permalink:"/docs/secure-tunnels/tunnels/tcp-tunnels"},next:{title:"Agent ingress",permalink:"/docs/secure-tunnels/agent_ingress"}},l={},u=[{value:"Uploading a Public Key",id:"uploading-a-public-key",level:2},{value:"Copy your SSH public key on MacOS",id:"copy-your-ssh-public-key-on-macos",level:6},{value:"Add your SSH key by pasting it into the ngrok dashboard.",id:"add-your-ssh-key-by-pasting-it-into-the-ngrok-dashboard",level:6},{value:"Examples",id:"examples",level:2},{value:"Start an http tunnel forwarding to port 80",id:"start-an-http-tunnel-forwarding-to-port-80",level:6},{value:"View available http options",id:"view-available-http-options",level:6},{value:"Start an http tunnel on a custom subdomain forwarding to port 8080",id:"start-an-http-tunnel-on-a-custom-subdomain-forwarding-to-port-8080",level:6},{value:"Start an http tunnel on a custom domain with auth",id:"start-an-http-tunnel-on-a-custom-domain-with-auth",level:6},{value:"Start a TCP tunnel",id:"start-a-tcp-tunnel",level:6},{value:"Start a TCP tunnel on a reserved address",id:"start-a-tcp-tunnel-on-a-reserved-address",level:6},{value:"Start a TLS tunnel",id:"start-a-tls-tunnel",level:6},{value:"Start a tunnel in a different region",id:"start-a-tunnel-in-a-different-region",level:6}],d={toc:u},g="wrapper";function A(e){let{components:t,...i}=e;return(0,o.kt)(g,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ssh-reverse-tunnel-agent"},"SSH Reverse Tunnel Agent"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"SSH reverse tunneling is an alternative mechanism to start an ngrok tunnel without needing to download or run the ngrok agent. You can start tunnels via SSH without downloading an ngrok agent by running an SSH reverse tunnel command."),(0,o.kt)("p",null,"The SSH gateway functionality should not be confused with exposing an SSH server via ngrok. If you want to expose your own SSH server for remote access, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"/using-ngrok-with/ssh"},"using ngrok with ssh")," section of the documentation."),(0,o.kt)("p",null,"The main features you miss out on when using the SSH Reverse Tunnel Agent instead of the ngrok agent is the ability to run multiple tunnels at the same time and the resiliency features for automatically reconnecting in case of network outages."),(0,o.kt)("h2",{id:"uploading-a-public-key"},"Uploading a Public Key"),(0,o.kt)("p",null,"Before you can start a tunnel via the SSH gateway, you'll need to upload your SSH public key. To upload your SSH public key, open the file ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.ssh/id_rsa.pub")," and copy its contents. Then go to ",(0,o.kt)("a",{parentName:"p",href:"https://dashboard.ngrok.com/tunnels/ssh-keys"},"the Auth tab on your dashboard")," and paste the contents into the SSH Key input and optionally enter a human description (like the name of your machine). You should now be able to start SSH tunnels!"),(0,o.kt)("h6",{id:"copy-your-ssh-public-key-on-macos"},"Copy your SSH public key on MacOS"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cat ~/.ssh/id_rsa.pub | pbcopy\n")),(0,o.kt)("h6",{id:"add-your-ssh-key-by-pasting-it-into-the-ngrok-dashboard"},"Add your SSH key by pasting it into the ngrok dashboard."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(92646).Z,width:"728",height:"86"})),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"ngrok tries to honor the syntax of ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh -R")," for all of the tunnel commands in its SSH gateway. You may wish to consult ",(0,o.kt)("inlineCode",{parentName:"p"},"man ssh"),", and the section devoted to the ",(0,o.kt)("inlineCode",{parentName:"p"},"-R")," option for additional details. ngrok uses additional command line options to implement features that are not otherwise available via the ",(0,o.kt)("inlineCode",{parentName:"p"},"-R")," syntax."),(0,o.kt)("p",null,"The following examples demonstrate how to use the SSH gateway and provide the equivalent ngrok agent command to help you understand how to achieve similar functionality."),(0,o.kt)("p",null,"Note that following examples use the global address for agent ingress (connect.ngrok-agent.com). There are agent ingress URLs for each of the ",(0,o.kt)("a",{parentName:"p",href:"/secure-tunnels/ngrok-agent/reference/config#region"},"available regions"),". They also use the ",(0,o.kt)("inlineCode",{parentName:"p"},"v2")," version of the SSH gateway's command-line interface by specifying it as the username."),(0,o.kt)("h6",{id:"start-an-http-tunnel-forwarding-to-port-80"},"Start an http tunnel forwarding to port 80"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# equivalent: `ngrok http 80`\nssh -R 443:localhost:80 v2@connect.ngrok-agent.com http\n")),(0,o.kt)("h6",{id:"view-available-http-options"},"View available http options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# equivalent: `ngrok http --help`\nssh -R 443:localhost:80 v2@connect.ngrok-agent.com http --help\n")),(0,o.kt)("h6",{id:"start-an-http-tunnel-on-a-custom-subdomain-forwarding-to-port-8080"},"Start an http tunnel on a custom subdomain forwarding to port 8080"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# equivalent: `ngrok http --domain=custom-subdomain.ngrok.dev 8080`\nssh -R custom-subdomain.ngrok.dev:443:localhost:8080 v2@connect.ngrok-agent.com http\n")),(0,o.kt)("h6",{id:"start-an-http-tunnel-on-a-custom-domain-with-auth"},"Start an http tunnel on a custom domain with auth"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# equivalent: `ngrok http --domain=example.com --basic-auth \"user:password\" 8080`\nssh -R example.com:443:localhost:8080 v2@connect.ngrok-agent.com http --basic-auth 'user:password'\n")),(0,o.kt)("h6",{id:"start-a-tcp-tunnel"},"Start a TCP tunnel"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# equivalent: `ngrok tcp 22`\nssh -R 0:localhost:22 v2@connect.ngrok-agent.com tcp 22\n")),(0,o.kt)("h6",{id:"start-a-tcp-tunnel-on-a-reserved-address"},"Start a TCP tunnel on a reserved address"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# equivalent: `ngrok tcp --remote-addr=1.tcp.ngrok.io:24313 22`\nssh -R 1.tcp.ngrok.io:24313:localhost:22 v2@connect.ngrok-agent.com tcp\n")),(0,o.kt)("h6",{id:"start-a-tls-tunnel"},"Start a TLS tunnel"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# equivalent: `ngrok tls 8443`\nssh -R 443:localhost:8443 v2@connect.ngrok-agent.com tls\n")),(0,o.kt)("h6",{id:"start-a-tunnel-in-a-different-region"},"Start a tunnel in a different region"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# equivalent: `ngrok http --region=eu 80`\nssh -R 443:localhost:80 v2@connect.eu.ngrok-agent.com http\n")))}A.isMDXComponent=!0},92646:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtgAAABWCAIAAAB6lHbTAAAfQ0lEQVR4AezWRZrcMBiGwdz/jtbKWgcUNet3gyEMTYGZquc7guB9M8BfAgBCBAAQIk8GAAgRAAAhAgAIEQBAiAAACBEAQIiUUnLOKaXuSgAAKaWccynllhDpL2qtETFcCQAgImqt/cV1IVJK6fu+tTYAANyhtdb3fSnlihDJOddaBwCAu9Vac85XhEhKKSIGAIC7RURK6YoQ6bpuAAC425IWQuSFAQAhAgAgRAAAIQIAIEQAACES35mZPQ2AEIllMa3NM7NY9tgoARAiS3+0eYdxbZ6ZxWmfd8k3OQIgRO5JkLE89pftLtseppnZeCn2lx1OuzNHAITItwkyxsfmMKz35632Ma7uXunMllswXorNHCXf5sgIQIhcXSH7z/qj7uLjLso2Pmzj/WmbePe6Z/b+tCM75+AkSRJH4fCFz7Zt2w6dNTjbVvDsuz/mbHvtHbbdXWbW3cvKqTnV9lQvK27eF7/IaCN3v9y3mdkZGwEvYAccmU0kAbMIISQ7DCIpKSSZBVERxIiTR9eJ2k7UsqOmHTWsqM5ize+CBXABRsAL2AFHYIqKI2p2JBQDZhFCCGEQUXMhKoVg2tnw5fDaduSAWzOjiiFKuijoYlqTNTVbvflRLJY2U0oBuAAj4AXsgCNtFUfihZuZLIJkzyBCCGEQyTwdkqzIqBTiRV1XDq9VMyrqcvAd74o1HbG6LVa2ZK2IazmLNZ9qRVxKAbgAI+AF7IAjMAW+wBq4A4OSNRpOihBCGESyT4ckKzKGP5NCKoYcZNd25LC7tBkuqocLauHv1fDXuH6psFjzrtRfflgAF2AEvIAdcASmwJeZLJKs0YSCkyKEbFoiMiD5CSLp0yFuKPeF9OIUUjbEZE98XQhe/MG54yPrlg9SisViwQ44AlPgC6yBOzAIHrlpkyKWZY2NjS1YsOA3QkgasAOOwJQsEcRZ+1v15Ssnr99m4sqtWHMWOgrdhU5D1+UuiCR7VOPpEE+udmOeeUqTKeSxL+3Px8ypWocQkgrsgCMwBb7AGrgDg+ARbPpr12qSQjDIFovFVqvVIYSkATvgCEyBL/1TiDu5rHzvKfpzl4nXh8SbI9FbI2z7t+FrQ8bzl5XuOQVdhw7MXRBRu0OseINqw4qKupxtxv/zvpkwdV33PE8QQtKAHXAEpsAXWAN3YBA8gk1qp8hsEBkbG8MIS6HmhFAomAJf/lg3eGT9vfv1Zy4OnzlfPHhC+MBx4oHj2M7RPniCeOZ87ZmLG+/djw7MUxDB3v5kXcb05W8Ra/F0CFa+MedcbethGPaJToRwiRqOwBT4AmvgDgyCR7DJTYKIEmjBggW9Xo9CzQmhUDAFvvR/TPGOY4Inzw7vOzquo9DycpbL6LTiHceqgSgXQSTZIPKPdZmKIX8LgF14WP92XXfOz0oIh06YAl9gDdyBQf9YnUm2iWD9m0JlhFAo+NI/iBSGDw7vPTK453BZdx8eouXlLJfvPbIwcnB+g4juyTOaSrr8XeKiugwiWWZvCCEwBb7AGrgDg+CRnhZEKFRGCIXqH0SCICgM7x/cdUhSB/Ny9suF4QPQgTkKIuocM3V8iObJ38sUdHlGwoIag8hgEAYRWAN3YBA80pIDReCXYBDZ2BAGkekb9/HvOMC//QC2g7bTN+2TvyCSnGOmdqpOa2JVW/xeZRAZDMIgAmvgDgyK96smQUQwiGx8CIPI1PV7+rft69+2D1rv1n029WUv8+Pzf3n6hr3yG0R6cRBRO1V/3eAgEsXQqPkDgwisUftV4VGPQWSTQhhErt3Nu2VP7+Y9N1bbHd7ji8t20UZT7v328p2nb0x/ljayhz68h/vP251R+WrWqLold+3UdbvlNIioo8zqcRBZscFBpNVqDQ0NFQqF/+teKtM0DcP47x+k3MtdLNbrdXTdJv0AjUYDb+S67kZ8zUqlgu+V555H96Lbfd9fv6c7jlMqlQbtNNu2dV3HW2cJInAHBsEjdaxZxiCCF8dn2wzBffny5TiqYaCndLvdZcuW8Z9GkrcgMnn1Tt7obu7IrhnbNVft9OnF21ev33ldj9EeP0O4zp/snAV0W7nSx73MTcrtY2Zm5mLapBxOKWVmZmZmZmZO+8rMnDJDOGYI9fsl02rvu/bepuBvN+dYx+ceeTQajUay5q+RfG3tf+dd6np8J21qOx39Sq2yB6qWOtjgV/tjfr63WrmMqHLQUyPLnQwtvbv6lw83/fPumt+8WLMMnI8jyiVULOmI+7RuelR5KJnR5bUyHbHl0fBh+FMNbbHl91ctdTasjJS+xuedumWLBhA5/uiVgAieuG7duv9vQCQxMZHmli1b5rN09erVlJ4/f95n6cCBA+Pi4nBvPj1Qw4YNe/furSUiJyIiAoGkevXq9enTRy3TZ8+ebdCgQWRkJAytW7e+deuW0E+dOgXx3LlzWjnt27dHsZeACxs3bqxfv760TkMrV65UpbTYtGnT7du3v6jYCxcuoHB4eHhUVFS/fv2uX7+uNKchbZo8ebL/bGs8oLSFhtLxZs2aTZo0KSkpqZAzganISFFR0uDBg0Fyz9UWyBIbG6v63q5dO2xrAET41bwEENmyZcuMgjRr1iw0P3HiBK9S8BN+XbBgAbPUgMdisWzevJmOa+fGvHnzArGcL1oKAJFbtUu5Y8u4Y/I/Lp6GeXt0mZvzh1A3sWfNz+Ixd/kbDNZ2v/KWk2XNSJvcWku/W6fM7WVjcx7fepKTna+wLcPd7S/Qz7T7t+Xkzicel9Ddu+bDnz48kryjyXc+bav7v6AAfbQyHY2+ATFtZCz5jIjSRyO/73l8J+foendsOa0+r56/XafUFx6ImHMvFTUgMmDAgJYtW+JF2LkqonqpNuCAUp8+7/Lly/hynPfSpUt9IpjmzZvjtxSGUL6ZbSWulO31zJkzARnsGinCh125ckV2t0OGDMHzaavg0gAKrwhEpk+fjkqHDh0idMHoIPD27dsSgsJb0BGQxEsAEbDUvn37iDTggUaPHj106FCt5rxZ6OGzRE/9Z1vjAV24cGGHDh2wPPgDhadOnUpncZPGFQWFREdH4+YfP37M6PB1zJgxjRo1Sk9PN9YWa9B9rE0G4LJjxw4UPnbsmAEQuQQQMb8YEFm7du3evXsxJrZlNDdt2rRkyRK++imk9NxfLpCIua2vFUiB9EUDIjWD3dElXVElCvO8Hf31bFtmTsq9zItHU+uVUHRXdMlLoUH7KgXtqVjsUqs/Idza5hdSertm8KHKQf+tUOxkSHA+EJnUSivz8YQWuR6Xe2A1d0wpV+OvZw2t6YouhTRn0l3bgTXu+G+6Y0q7O/za0/2v8KcPjUCyI/6bSoK52z+gWDr9USvT3uArENOGR2dGlDjW6Neex7dydi9wx5WT0nu1gg9WDtpVodiJkGBzeHEol0ODL4YGKwkXQoOvhhXKJrdrFS/yQATnN27cODbl8fHxLKBQWPRnz56NX8EBkFFApHPnzjgqnAebeG85uNLx48ezEacWnD4lw9OpUydOeaDgg30G1e/evUtb1MW1bNiwQVe6detWds9Xr14Vh6orxemOHTsW9did44Z1iy+N4nuGDRuGY9YBEaCGfAWL8BX5OsnLly/v2bOntsqiRYvwkdhKB0QmTpzYVZP2798vIXSYcbStWrXCMym4gByf7/nhmAYgwluAGAUFRPCpMhyS8MRr1qyRnzHOr23btsinRV3Hd+7cCR0epblyiv62rfGAAkS6dOmi5QSLIJxZYVwRnNS3b1+dAkw81DPWVoCIdkFEbUz32oHI4cOHtaJWrFhBmER9JUayePFiun/gwAGFCZgGzB/Gl+pqQTlz5gwTDyIDDWdqaipygDVz586lLgzbtm2TZQEwh4kQO3/+fHoNxNQCkVWrViEhISEByp07d9QMpCGmBGEbIiu7d+8mcqNgHPxoCJ1ZQVjF344qkAJA5GbYJ66IIGdEUMGzmHH+5pTO2WkPPX0qUP16+78r+sWwEndXTcxOuZeT8dh8YgellpY/hX6vZrGLo1rwKvRcW6btZEKO25E2sYVWpm3l8CxL+qmQIHNdTVvRpfJyc65N7Xq3xv/olj6kLpKtDb5qDy/mCA+yhweld/4LFHP732ll2uPKQ3w0JPxY/Z9nZSTlbJ2m9HxUq9i5gXGee4m5DmvGiYSTMd+Hbl495v76GY5nPA82zspYPLAwNrkV9kmRByL9+/dn1SYGfvz4cdmOs2yBNtjaEqJnfVRABEfIZGJV9d5HKh6WUaocPXrUp2QUYL3DK4NLwCs+fQAOmKA6GVZVgue6UiCO+PsePXoQvdAW4bbZBNMckQxc78GDB7Wl6ECLuCLU40SAkIMOiMhFDbAUzli7ZWTLTq8VllJVEIU7xO/qgAhuhj6SEIWhWNPFT+Cc6DgnL9Ql0CIeCzdpPKZaILJnzx5QnQwi2gIKCXuQZ0To77Rp01AM2KGTgIaEc3ThH/ezhBx/2NZgQA2ACOgH9ZjnBhVRGAUAPdqKwgPUM9ZWC0QownMT/WJm+hWIyBkf0EHy/HCAsPSU2A+gAdNB5DYPaAMiMR4FgplIEBliAJnMIqbNnDlzYINCFSiAEuCsKuIMjgwKMHwwKCBCW9CBdMIJvFBNAGcJEfFjZzjWr1+vZhpABMswFmRYEPzuqQIpAESqf+gK/9hZ7yNnvfynQT6l1ofWG+edywaSd1898WDTbHvdfLq17kf31s/IdViy5nbyjI3xHN+McEuLH1Hr6qAYmsneON4zKiJ786S8vNy0Cc20Mt39K8OcvG/d/vDvnqn8QWadp/TsSwcIvZwbGLu/wke3Qz8U/vTBtWHeU/ubOyuV2FW5JM+jrf4BxdzuN1qZ9pgyEBMndXKl3M/av9wZ/onqS2LP0LzsrOxFvTzj47LvJWZePJJBi5ObZdstj2t/Ak9a7Y+zrJmOifGFscmt0I+KNhDB4+IsdX6FMwgWMoOjGdwDJ/pIS3uW2EspHgPJ2sQKiI/01oftL+ugbIiVz1bBGyg0JNt3nJ92a84+T7kiANCgQYO0kocPHy73IVBb7YOVb0ZVnpJhG6qtKEX4ZvaF2io0DXBBBzCH99EMxwR0RCi6BKes+OjTrVu3wgMRFFDIBjujA63gXIkwfdZ9Ghw2pxhY8rPuiNAF/9nWeEC9gQjgAAZiSAYV0dBnGIntPsZBZwNtBYhoE44cur+BCLYFDRAOZLEQwCF08Dr4SQABaFK7jsAJsBCYIkmHIUgKiHgXAR0wgvfRjOJUTSj3AHCBU0IpmB17Ch1sBD0QFAkkfwORGyHvOuu876jzfsHzPYP8jdZ/oJaz5fedEGd3xHnfq12MfEpU2dwsj31KM+HPbPcb2MzNvk/efPmYbfcSJSfLmp46Ll4nP2t2+zyXLS8n+/GORQfrfSutZj7d2ew7uZcOIMf98Mb5YY3PV34P/rSBNXzfBG/7S61MW1RJiAAOmjsaWtpa+9O2Ms8dSNo082yl985Ueu9Gr1DYkpv+0NnoK0/ycm91/hc891r8EqKz6TcLY5ObIe8V+YgIG3c8GV6BwK92TSeyzQbLJxBhMWVxZ5cPURJLquIxkIylCCnjtHAPnHR430VgsrJJVf/16Nixo/YwggUUQKB2vWy+tSs+pxKyrJOOHDlCqboAwQEKW2TlvZBJyEf5ZnFy7P9Y02kCTu0FQBoiktG9e3cOlTCgFoiIrYhSEGPQAhG6CVYjIERG3eUkYI5BJkyYALaQiwugPdQoPBARjIg9pV0JEqA2yqChd10Ghb4oLKg0B8pQSxL+3n+2NR5QbyACokU9vLJBRXST+SZ0LVRCDQbIQFsBIsAsOs6IC94CAfgbiFy7dg1fDling2SIWu0rSOjMHBBADyZYt24dkEXmjHACDl4OiIBgCLcYAxFpApyhuowOhEZ0QIRgIWxyjziQAsmPQKTq245a7zhqPf95b+VYy+XjB/751oF/vn201pc4PbkxMBx6WoffIS296XeFM6NNvi/PbPId8jlOW9K4eCWBU5iUsY29JTtjS3nmdcnLTMq2ZiQ2+L6iu3r9PefYBqTdXTMls8bbqQPCyDsGVoPu6vUPnpYJ8VAyWv9MK80WGQTRumFiniXVknj8WFhpW82npURZrBcOZm6fm7l9jnnPMtjMfSpBd148eG/FGHjujG/pvn9VSTN+YroiD0TQnnWHI3aC2GoBxbHxbwtWbZYzbyDCQoaXxRPfeJZwGIrHQDIHEwJN8Mq9evXyBiLcKZGLDpI4uWBbLM4Sadw95KsqxVGNHDlSe7eDfbAU4bf4yv8FFLTiK0hCSlu0aMFXvJH3HRESGIt4j/qqlY8L1wERtAIccC9EC0SIQ+DhFPwiYUzswD4VZ6NuUGIErIGcwgMRfCcUGiUIQbRf/a9EdxoixxxYElenKAZ3RPxkW+MB9QYiLFXUxTUaVwT5eYeaOJlq06aNsbbed0QADSjsbyACGAIYqegCIZ9jmiSdIuTAjwVcQrSMNUU4CRG9HBAB+hBxNAYiYAuKwNDawzJmiA6IMD8VJAqkQPIfELleyWSv8YY97DnPB9Xecqc+zLGkum+clk9etif5wHpz2Bu2Ln9C2q1mPxPO9NY/42tG42/aa7yZm+W+M6mtkpMPRMY0/KxWHA3KZZtTkzdO19GtywcjMDm2fGq/amQskcGqNK3tr6Ckt/zx//DX+whiyoAwZ4vv5qbeN188fKrKh9DRhzCJ+fi2rNVDs1YNlaezTX5d16x2ruR790LeTDm40b5xgpJm/Lxe+Y0iD0RUKHjEiBFceNQSWRPlSoFPIFLIf9ZoJeMVuHwndECJDoiABuTfEAnPkiggiyPn3OJRVCl3G9WmGbF4aIgqgQ8IY4hkLnMQotCWcoLAsusTiMCJwt63R2EjUqIDIlLEXhzNxTtyXAIKUeu4+Bj40V+BEoCIXBsk8sT+uPBABI+CcBQAwchlAkZHnKvuZ4/BsQ/5wgARP9nWeEB1QAR/jEwo/JyMKwIT0Qf7ay2MQbCqsbbeQIQLEMAaWvQfEMGGQEbuYZDH8jh1UL7xn1yIRAonM+TlgAj4BjvIbEQOUSudEBXqkOoykfgKfv18gEggBYBIRZM99Pmf653+RRXP7A7uqc2ffhLmcCJzq1ZxR0wpim5O736zkskWakpp+VO+ZjT6BrU8dy6mHt2eWMGUWd1kqW7KByKjG2jF3q9ielDFZC4ovVPZlH5mr+34NoRcrWBKCymQFmJKbP8PBNo6/T61bwgZS3iQqp5WEH1Jb/EjrUzurAgQIZ9/xGNJS9q9CoH5+jy4lrR75bWKpsxqtIjwp1W4qcr11XNdQ3JcDmfXP0IpzAfTFXkgwtKDD5Dlhn9LioOUa4xcz+RGJM7v5YCIt2ScFl5BlkVC4jogwk5RnJ/uRgXxBtnyqrMDtXTiyHft2kWeeINsOlVi6UcfFlAiE7DpbhWw9ZTQgvhmeGgXZuARzCzEcrTPFQp4yHCWhMdCcx0QUQaBIkAEN4nO6GYuSFgPTpAKPATnxQjiMoWZfT9dwJVic4aYC8IGQESucEKkv4rCf1VoUc5Z2Oby5DdPiyCk9GeJppXmbJcpkkT8wH+2NR5QgAh5JKAGMQOiF5hCQinGFRkU/jsNnmOi0i+6QzyGFrGhsbYCRDgcZFCIIcn05qDQH3/fRXm6RgiNbnKDR80W/ucCRGCgWThAGxLzYJ4IFOYIiRMoiQnByW8EPWmFrvE0BiIcrHDDg9HnSSBTBgX7gOc4cIHOmOogC2gDZfjNUsT/cbhFi1YBIPK5pAAQufZvk62ayRZi9LSGmLia6ko8pqXz5xQauDEynrznwEpP8r3zA+O2//XdI03/hPDMht+A7praksDJtek9ecPYjn99xMlI2ugGWsl3ulU60fbfOysUT/j3Jxd61uKuhnvF0LTqb1+f2GFvnW9v+/PbB6J+mHFoU57baa8XnNI7BMnmekFKQlqrAiDS7EdamZZaBUCkX5hQnN3/zgWUKxM7Jlc2ued2yXU7L49pvatKmYT/FDsf8wNVy7luvCvpnufRTaEU5nntP6ai/UIzVkC2kvIqLf40IfcB2T6yXuMJiFqLF3whIGIgmU08MiHKe6V4D5Xu/x2cOOjEcpyBHJZ1fIbuoIGEGiR2kPI/Tyi6t1dRnc00gX3duxPwEFThSTAA/0deuoyqaglmNUdVeekW7k2Oz30CERwbRxsAEXW5VSWEyIpPJEMCJzDgq1S4CFBCB9VVWby4MRABasCmAkvivcAi0i5N4MboNXltwrX7vKxKl9HBT7Y1GFAkEI1AW+k1s2LKlCnq5qxxRfL4WvCc6jLMcjhlrC1eWd4dR2JYaRTIQikW8NMLzUASsGmnCuCDAWWUhUfiZOAw4We2cHdEcYJF4JQisIgxEIEH0CPMICE1KFy+FiFAWHqqFcK8pQnRBFXF/gEg8rmkABC5+i+TrarJWsXwWf3dPHume2ZHHT3n3G4+5O3hJbP3r3iSm4PQfMmWNHvMl6Dbqr3lWdz/idsh9Ccep2tQDa2E/FKPS7TJTbqdtXW6rcaH9gZfz71/RYiU5pz9r6t/Nfhd/UKg2esGKQmOgoiIo/mPtDJtNT+C6BwQpijuBb2fZLnt4JXQdz2rR6HGU0dwcI3iSan/rbzcXMfSQUIpzPPav0xF/hXvENkx63afbP1f9NXRhZSMsSCCWuTc+guSUMbn2zVQnm33q5tCMAcLPf5S3JLOJsALMJxsi40TfyHBrSJKR8fLAkFwq0VrecLCL/2Kd4aMK8+gEEEShUyYSF7n779XvEOnFYMmQAkAC23HyfOj865C1+A07qCKc1CdrnkzQ4GutPWeOTL5P88USAEg8g+TtbLJWin/Y6n0avnq79kbfNtWt5SeXuVNe9w3bJHlLVXf9lE35F1b/A/s9b+ho9siytqb/8wa+v6r6+Zbn7olhZ74d9PZv5qORP0fe2fB7DQTRuH9XOGX4O7uDr8AHR90DNdxXMZwxhjH3V2Dw3V3q7dJbrLlNNvr0hZNp+eZd+q6w8M93XeT9LbDAdye/OtkjxfpdtC7tIVgDQf+2GA3J81LNQliGdaoYjoKHRa0eDL2oHfN8xzpCmEQGSP8U4RvcuaeVuxfWXN6l1Vbpp/cmNJzs8e6OIj4nCBS7LOz6u2XDCLpDybPjxw50m7LVQL90OBAo8fj8XzbIAJr4A4Mgkc+dweRqqoq9HeihKRtEMkaJXwThXdi5p7qp7YaZw+FNi9I9bnZo1wYRGRTEDFkbViW+O3selurYhAhJLUgAmvgDgyCR7ApHkTkdwgihDCIjBDeCcI7XlUKl3k5a6TLgoh0gohpRyONUb8h68KyzG/nNNivqxlEUoMwiMAauAOD4BFsglMwC35JBpFvDWEQ+TRceMcKz1iepnyaNdzFQSRgyPqIrAjY+R77XS2DSGoQBhFYA3dgEDwKMIh8VwiDyFDhGc36ksLQuSiIAOnMGzfaUd2KBk3piciqYHy96rIrIR9uJYQkAqbAF7VSFQbBI9gEe2AW/FK+a5qWzNY6hBCYAl8SBJGR/zSMFPEaITzJXebl+hEia9Q/LgsiURVE1Ba88fWqpX47t8He8SjyuMxI+FkJ4erXx6UGfIE1cEetVIVNRlMQUQqpg+UmFIoQCgVT4Es3D7Asq3DFrLJhvzQMF6h65zSZy7xcOuyXohWzMICuCyKW3aY7U+lMitwtaVxzO/ywzPQZnX9cQohXl/dLzdW3w/AF1sCdNn2ZVkEkFAppmlZdXW1ZVrQzCCGwA47AFPjSfRDxvX78bPA/7/uJmiGiHjU0wSlPawaL9/0FBg1D57ogopaJqO6M2q1ZbViWB+xCbyyL4Hce5pwXXeqkWCwW7IAjMAW+wBq4A4NCqi/TaoEIUFkEv/M0TXtBCOkM2AFHYErCRSSmada+e/x83dzrM3penfRnwmJhoDBcGDQMnVqv5pYg0nZvIs6kiCk9ThapCKDhHevRoPONVXivqy2tysKeEp479ayClXHFUv/4YQFcgBHwAnbAEZgCX2AN3IFB8Kj1HkQIId+8faOyiK7rkUgknAQEA6XrukohGEDXBZHmSRG1Q5GAobJIrEdT6o/9J5vviW3Tm/25nbvKjhsAggB4/wNmf8OMyyxlRrMYjnGh6vUBEtut18LPOUoivS5PrikivUxVILoQjYheZDuiI9GUzQqpz4ccXQ65L2CLrDrLf8Cqs1shpzVEDr9stthtke7B1c/TPLy+G+XVkVeD/FLT837m2S7fRK4j/UpVILsQjYheRDuiI9GU/ixaUyuk3tq998shQPOfaMspDpFIs39qte7RjBd5etef5buIn6f5rbOPk3yn5r3IdSdaEF2IRkQvoh39WTZlvL0js39G9fSHCMCJDJHDLbK7RzPbzpFRt0gGMUois+abyHWnH8lGRC+iHTVBsi+7OzJWCHDIEPn/LRJZ5yF1cbBIInHZuTJeXGlEdi2oUtT+WHR9WVkhwI0ZIqX51RypRVKjpCIiVYrlrybIDVcIgCHy8xyprCprEalsSrGu3OEEATBESrNLs8laRA6XR6Wt/AzAELkjjYj8KgB/ZIgAABgiAIAhAgBgiAAAhggAgCECABgiAACGCABgiAAAnNcQAQAMkdd3CgDg/4ZIC5ySwWDQAmfbSv9fQwQc8gCtNESAf2KIgFYaIoBDHqCVhghgiIBWGiKAQx5giNz9EPkOIcqP0nLRdFEAAAAASUVORK5CYII="}}]);