let socket=io("http://localhost:3000");const header=makeElement("header",{style:"\n\t\tdisplay:flex;\n\t\theight:10%;\n\t\talign-items:center;\n\t\tborder-bottom:1px solid white;\n\t\tbackground:#05274a;\n\t\tcolor:white;\n\t\tjustify-content:space-between;\n\t",innerHTML:'\n\t\t<div\n\t\tstyle="\n\t\t\tmargin-left:20px;\n\t\t\tdisplay:flex;\n\t\t\twidth:50%;\n\t\t\talign-items:center;\n\t\t"\n\t\t>\n\t\t\t<div\n\t\t\tstyle="\n\t\t\t\tdisplay:flex;\n\t\t\t\talign-items:center;\n\t\t\t\tmargin-right:5px;\n\t\t\t"\n\t\t\t>\n\t\t\t\t<img src=/file?fn=logos.png\n\t\t\t\tstyle="\n\t\t\t\t\twidth:32px;\n\t\t\t\t\theight:29px;\n\t\t\t\t"\n\t\t\t\t>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<span\n\t\t\t\tstyle="\n\t\t\t\t\tfont-size:20px;\n\t\t\t\t"\n\t\t\t\t>SuitUpChatter</span><br>\n\t\t\t\t<span>The Drama of Personas.</span>\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\t\t<div\n\t\tstyle="\n\t\t\tmargin-right:20px;\n\t\t"\n\t\t>\n\t\t\t<span id=placeId>ID: loading...</span>\n\t\t</div>\n\t',onadded(){socket.on("connect",()=>{this.find("#placeId").innerHTML=`ID: ${socket.id}`})}}),content=makeElement("content",{style:"\n\t\tdisplay:flex;\n\t\theight:80%;\n\t\talign-items:center;\n\t\tjustify-content:center;\n\t\tflex-direction:column;\n\t\tbackground:#05274a;\n\t",innerHTML:'\n\t\t<div\n\t\tstyle="\n\t\t\tfont-weight:bold;\n\t\t\tpadding:20px;\n\t\t\tbackground:#04192f;\n\t\t"\n\t\t>\n\t\t\t<div\n\t\t\tstyle="\n\t\t\t\ttext-align:center;\n\t\t\t"\n\t\t\t>\n\t\t\t\t<img src=/file?fn=logos.png\n\t\t\t\tstyle="\n\t\t\t\t\tpadding:5px;\n\t\t\t\t\twidth:100px;\n\t\t\t\t"\n\t\t\t\t>\n\t\t\t</div>\n\t\t\t<div\n\t\t\tstyle="\n\t\t\t\tmargin-top:20px;\n\t\t\t\twidth:auto;\n\t\t\t\tpadding:10px;\n\t\t\t\tbackground:white;\n\t\t\t"\n\t\t\t>\n\t\t\t\t<span\n\t\t\t\t>Anda bermain atas kemauan sendiri.</span>\n\t\t\t</div>\n\t\t\t<div\n\t\t\tstyle="\n\t\t\t\tmargin-top:10px;\n\t\t\t\tpadding:15px 0;\n\t\t\t"\n\t\t\t>\n\t\t\t\t<div\n\t\t\t\t>\n\t\t\t\t\t<span\n\t\t\t\t\tstyle="\n\t\t\t\t\t\tbackground:#465fac;\n\t\t\t\t\t\tcolor:white;\n\t\t\t\t\t\tpadding:10px;\n\t\t\t\t\t\tcursor:pointer;\n\t\t\t\t\t"\n\t\t\t\t\tid=fightbutton\n\t\t\t\t\t>Main</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t',onadded(){this.find("#fightbutton").onclick=(()=>{find("main").addChild(openLoading("Bersiap...",t=>{socket.emit("wannafight"),socket.on("succedjoin",n=>{setRooms(n),JoinProcess(t)}),socket.on("someonejoin",n=>{setRooms(n),JoinProcess(t),console.log("Your rooms is",socket.id+"-rooms")})}))})}}),setRooms=function(t){header.roomid=t[0],header.opponentId=t[1],socket.roomid=t[0]},JoinProcess=function(t){t.remove(),content.clear(),content.addChild(makeElement("div",{style:"\n\t\t\twidth:100%;\n\t\t\theight:100%;\n\t\t\tdisplay:flex;\n\t\t\tflex-direction:column;\n\t\t",innerHTML:'\n\t\t\t<div\n\t\t\tstyle="\n\t\t\t\tpadding:20px;\n\t\t\t\tfont-weight:bold;\n\t\t\t\tdisplay:flex;\n\t\t\t\tjustify-content:center;\n\t\t\t\tbackground:#05274a;\n\t\t\t"\n\t\t\t>\n\t\t\t\t<div id=morebutton\n\t\t\t\tstyle="\n\t\t\t\t\tdisplay:none;\n\t\t\t\t\talign-items:center;\n\t\t\t\t"\n\t\t\t\t>\n\t\t\t\t\t<div\n\t\t\t\t\tstyle="\n\t\t\t\t\t\tmargin-right:5px;\n\t\t\t\t\t"\n\t\t\t\t\t>\n\t\t\t\t\t\t<span\n\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\tpadding:5px;\n\t\t\t\t\t\t\tbackground:#465fac;\n\t\t\t\t\t\t\tcolor:white;\n\t\t\t\t\t\t\tcursor:pointer;\n\t\t\t\t\t\t"\n\t\t\t\t\t\tid=rematch\n\t\t\t\t\t\t>Rematch</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<span\n\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\tpadding:5px;\n\t\t\t\t\t\t\tbackground:#465fac;\n\t\t\t\t\t\t\tcolor:white;\n\t\t\t\t\t\t\tcursor:pointer;\n\t\t\t\t\t\t"\n\t\t\t\t\t\tid=newgame\n\t\t\t\t\t\t>New game</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div id=timer\n\t\t\t\tstyle="\n\t\t\t\t\tpadding:5px;\n\t\t\t\t\tbackground:#04192f;\n\t\t\t\t\tcolor:white;\n\t\t\t\t\tmargin-left:5px;\n\t\t\t\t"\n\t\t\t\t>\n\t\t\t\t\t<span>\n\t\t\t\t\t\t180s left.\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div\n\t\t\tstyle="\n\t\t\t\theight:90%;\n\t\t\t\tdisplay:flex;\n\t\t\t\talign-items:center;\n\t\t\t\tjustify-content:center;\n\t\t\t\tbackground:#05274a;\n\t\t\t"\n\t\t\t>\n\t\t\t\t<div\n\t\t\t\tstyle="\n\t\t\t\t\theight:100%;\n\t\t\t\t\tdisplay:flex;\n\t\t\t\t\talign-items:center;\n\t\t\t\t\tjustify-content:flex-start;\n\t\t\t\t\tflex-direction:column;\n\t\t\t\t\tmargin-right:5px;\n\t\t\t\t\tbackground:#05274a;\n\t\t\t\t"\n\t\t\t\tid=choosebucket\n\t\t\t\t>\n\t\t\t\t\t<div\n\t\t\t\t\tstyle="\n\t\t\t\t\t\tmargin:10px;\n\t\t\t\t\t\tbackground:#04192f;\n\t\t\t\t\t\twidth:150px;\n\t\t\t\t\t\theight:150px;\n\t\t\t\t\t\tdisplay:flex;\n\t\t\t\t\t\talign-items:center;\n\t\t\t\t\t\tjustify-content:center;\n\t\t\t\t\t\tcursor:pointer;\n\t\t\t\t\t\tflex-direction:column;\n\t\t\t\t\t\tmargin-top:0;\n\t\t\t\t\t"\n\t\t\t\t\t>\n\t\t\t\t\t\t<img src=/file?fn=scisors.png\n\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\twidth:64px;\n\t\t\t\t\t\t\theight:64px;\n\t\t\t\t\t\t\tborder-radius:50%;\n\t\t\t\t\t\t"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<span value=0\n\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\tcolor:#00f3ff;\n\t\t\t\t\t\t\tmargin-top:5px;\n\t\t\t\t\t\t">Scisors</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div\n\t\t\t\t\tstyle="\n\t\t\t\t\t\tmargin:10px;\n\t\t\t\t\t\tbackground:#04192f;\n\t\t\t\t\t\twidth:150px;\n\t\t\t\t\t\theight:150px;\n\t\t\t\t\t\tdisplay:flex;\n\t\t\t\t\t\talign-items:center;\n\t\t\t\t\t\tjustify-content:center;\n\t\t\t\t\t\tcursor:pointer;\n\t\t\t\t\t\tflex-direction:column;\n\t\t\t\t\t\tmargin-top:0;\n\t\t\t\t\t"\n\t\t\t\t\t>\n\t\t\t\t\t\t<img src=/file?fn=rock.png\n\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\twidth:64px;\n\t\t\t\t\t\t\theight:64px;\n\t\t\t\t\t\t\tborder-radius:50%;\n\t\t\t\t\t\t"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<span value=1\n\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\tcolor:#00f3ff;\n\t\t\t\t\t\t\tmargin-top:5px;\n\t\t\t\t\t\t">Rock</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div\n\t\t\t\t\tstyle="\n\t\t\t\t\t\twidth:150px;\n\t\t\t\t\t\theight:150px;\n\t\t\t\t\t\tmargin:10px;\n\t\t\t\t\t\tbackground:#04192f;\n\t\t\t\t\t\tdisplay:flex;\n\t\t\t\t\t\talign-items:center;\n\t\t\t\t\t\tjustify-content:center;\n\t\t\t\t\t\tcursor:pointer;\n\t\t\t\t\t\tflex-direction:column;\n\t\t\t\t\t\tmargin-top:0;\n\t\t\t\t\t"\n\t\t\t\t\t>\n\t\t\t\t\t\t<img src=/file?fn=paper.png\n\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\twidth:64px;\n\t\t\t\t\t\t\theight:64px;\n\t\t\t\t\t\t\tborder-radius:50%;\n\t\t\t\t\t\t"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<span value=2\n\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\tcolor:#00f3ff;\n\t\t\t\t\t\t\tmargin-top:5px;\n\t\t\t\t\t\t"\n\t\t\t\t\t\t>Paper</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div\n\t\t\t\tstyle="\n\t\t\t\t\theight:100%;\n\t\t\t\t\twidth:100%;\n\t\t\t\t\tdisplay:flex;flex-direction:column;\n\t\t\t\t\tjustify-content:space-between;\n\t\t\t\t\talign-items:center;\n\t\t\t\t\tpadding:0 10px;\n\t\t\t\t\tmargin-left:5px;\n\t\t\t\t\tbackground:#05274a;\n\t\t\t\t"\n\t\t\t\t>\n\t\t\t\t\t<div\n\t\t\t\t\tstyle="\n\t\t\t\t\t\tpadding:10px;\n\t\t\t\t\t\tdisplay:flex;\n\t\t\t\t\t\talign-items:center;\n\t\t\t\t\t\tjustify-content:flex-start;\n\t\t\t\t\t\twidth:100%;\n\t\t\t\t\t\tpadding-top:0;\n\t\t\t\t\t"\n\t\t\t\t\t>\n\t\t\t\t\t\t<input\n\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\tpadding:10px;\n\t\t\t\t\t\t\tmargin-right:2px;\n\t\t\t\t\t\t"\n\t\t\t\t\t\tplaceholder="Tulis pesanmu disini..."\n\t\t\t\t\t\t><button\n\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\tpadding:10px;\n\t\t\t\t\t\t\tbackground:#465fac;\n\t\t\t\t\t\t\tcolor:white;\n\t\t\t\t\t\t"\n\t\t\t\t\t\tid=sendButton\n\t\t\t\t\t\t>Send</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div\n\t\t\t\t\tstyle="\n\t\t\t\t\t\theight:100%;\n\t\t\t\t\t\twidth:100%;\n\t\t\t\t\t\toverflow:auto;\n\t\t\t\t\t\tbackground:#04192f;\n\t\t\t\t\t\tmargin-bottom:10px;\n\t\t\t\t\t"\n\t\t\t\t\tid=chatBox\n\t\t\t\t\t>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\tpadding:10px 10px 0 10px;\n\t\t\t\t\t\t\tmargin-bottom:5px;\n\t\t\t\t\t\t\tcolor:white;\n\t\t\t\t\t\t"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\tfont-weight:bold;\n\t\t\t\t\t\t\t\tcolor:#00f3ff;\n\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t>System</span> Talk to your opponent, read the personalities, manipulate, then beat him.\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t',onadded(){let t;const n={rematch(t){header.opponentleft?i(t,"Cannot, Sending Rematch request.","System"):(i(t,"Sending Rematch request.","System"),socket.emit("rematch!",[header.roomid,header.opponentId]))},newgame(){socket.emit("newgame",[header.roomid,header.opponentId])}};this.findall("#morebutton span").forEach(t=>{t.onclick=(()=>{n[t.id](this)})}),this.findall("#choosebucket div").forEach(n=>{n.onclick=(()=>{if(header.clicked||header.timesUp)return;t=n;const e=n.querySelector("span").getAttribute("value");socket.emit("choosedsword",[header.roomid,e]),header.clicked=!0,n.style.background="rgb(1, 109, 115)"})});let e=180;setInterval(()=>{if(e-=1,this.find("#timer").innerHTML=`${e}s left.`,e<=0)if(header.timesUp=!0,header.restTime){const t=header.roomid;socket.id===t.slice(0,t.indexOf("-"))?socket.emit("newgame",[t]):location.reload()}else e=60,i(this,`${header.clicked?"You Win":header.opponentSetted?"You Loze":"Draw"}!`,"System"),i(this,"Rest time 60s","System"),showElement(find("#morebutton"),"flex"),header.resTime=!0},1e3);const i=function(t,n,e){const i=makeElement("div",{style:"\n\t\t\t\t\t\tpadding:0 10px;\n\t\t\t\t\t\tmargin-bottom:5px;\n\t\t\t\t\t\tcolor:white;\n\t\t\t\t\t",innerHTML:`\n\t\t\t\t\t\t<span\n\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\tfont-weight:bold;\n\t\t\t\t\t\t\tcolor:#00f3ff;\n\t\t\t\t\t\t"\n\t\t\t\t\t\t>${e}</span> ${n}\n\t\t\t\t\t`});t.find("#chatBox").appendChild(i),i.scrollIntoView()};this.find("#sendButton").onclick=(()=>{if(header.opponentleft)return void i(this,"You alone, cannot send the message.","System");const t=this.find("input").value.length<1?"Nope...":this.find("input").value;this.find("input").value="",socket.emit("sendMsg",[t,header.opponentId]),i(this,t,"You")}),socket.on("getMsg",t=>{i(this,t,"Opponent")}),socket.on("chooserecorded",t=>{i(this,`${socket.id===t?"You":"Opponent"} set the JUTSU!`,"System"),header.opponentSetted=!0}),socket.on("rematch?",t=>{rematchHandler()}),socket.on("computeok",t=>{e=60,console.log(t),t.winner?t.winner===socket.id?i(this,"You Win!","System"):i(this,"You Loze!","System"):i(this,"Draw!!!","System"),i(this,"Rest time 60s","System"),header.restTime=!0,showElement(find("#morebutton"),"flex")}),socket.on("opponentleft",()=>{header.opponentleft=!0,header.clicked=!0,i(this,"You won against your opponent, suffering cardiac arrest!","System"),i(this,"Rest time 60s","System"),showElement(find("#morebutton"),"flex"),e=60}),socket.on("rematchprocess",()=>{e=180,header.restTime=!1,header.clicked=!1,header.rematch=!0,header.timesUp=!1,t&&(t.style.background="#04192f"),hideElement(this.find("#morebutton")),this.findall("#chatBox div").forEach((t,n)=>{n>=1&&t.remove()}),i(this,"Rematch Processed!","System")}),socket.on("rematchcancelled",()=>{location.reload()}),this.find("input").onfocus=(()=>{this.find("input").onkeydown=(t=>{13===t.keyCode&&this.find("#sendButton").click()})})}}))},rematchHandler=function(){find("main").addChild(makeElement("div",{style:"\n\t\t\tbackground:rgb(0,0,0,0.5);\n\t\t\tposition:absolute;\n\t\t\twidth:100%;\n\t\t\theight:100%;\n\t\t\ttop:0;\n\t\t\tleft:0;\n\t\t\tdisplay:flex;\n\t\t\talign-items:center;\n\t\t\tjustify-content:center;\n\t\t",innerHTML:'\n\t\t\t<div\n\t\t\tstyle="\n\t\t\t\tpadding:20px;\n\t\t\t\tbackground:#05274a;\n\t\t\t"\n\t\t\t>\n\t\t\t\t<div\n\t\t\t\tstyle="\n\t\t\t\t\tpadding:10px;\n\t\t\t\t\tcolor:white;\n\t\t\t\t\tfont-weight:bold;\n\t\t\t\t"\n\t\t\t\t>\n\t\t\t\t\t<span>Rematch Request!</span>\n\t\t\t\t</div>\n\t\t\t\t<div id=buttons\n\t\t\t\tstyle="\n\t\t\t\t\tdisplay:flex;\n\t\t\t\t\talign-items:center;\n\t\t\t\t\tjustify-content:center;\n\t\t\t\t"\n\t\t\t\t>\n\t\t\t\t\t<div\n\t\t\t\t\tstyle="\n\t\t\t\t\t\tpadding: 5px;\n\t\t\t\t\t\tbackground: #465fac;\n\t\t\t\t\t\tcolor: white;\n\t\t\t\t\t\tmargin-right: 5px;\n\t\t\t\t\t\tcursor: pointer;\n\t\t\t\t\t"\n\t\t\t\t\t>\n\t\t\t\t\t\t<span id=yes>Yes</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div\n\t\t\t\t\tstyle="\n\t\t\t\t\t\tpadding: 5px;\n\t\t\t\t\t\tbackground: #465fac;\n\t\t\t\t\t\tcolor: white;\n\t\t\t\t\t\tcursor: pointer;\n\t\t\t\t\t"\n\t\t\t\t\t>\n\t\t\t\t\t\t<span id=no>No</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t',onadded(){const t=[!1,header.roomid,header.opponentId],n={yes(n){t[0]=!0,socket.emit("responserematch",t),n.remove()},no(n){socket.emit("responserematch",t),n.remove()}};this.findall("#buttons span").forEach(t=>{t.onclick=(()=>{n[t.id](this)})})}}))};