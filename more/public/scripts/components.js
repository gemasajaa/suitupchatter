let socket = io("http://localhost:3000");
const header = makeElement('header',{
	style:`
		display:flex;
		height:10%;
		align-items:center;
		border-bottom:1px solid white;
		background:#05274a;
		color:white;
		justify-content:space-between;
	`,
	innerHTML:`
		<div
		style="
			margin-left:20px;
			display:flex;
			width:50%;
			align-items:center;
		"
		>
			<div
			style="
				display:flex;
				align-items:center;
				margin-right:5px;
			"
			>
				<img src=/file?fn=logos.png
				style="
					width:32px;
					height:29px;
				"
				>
			</div>
			<div>
				<span
				style="
					font-size:20px;
				"
				>SuitUpChatter</span><br>
				<span>The Drama of Personas.</span>
			</div>
			
		</div>
		<div
		style="
			margin-right:20px;
		"
		>
			<span id=placeId>ID: loading...</span>
		</div>
	`,
	onadded(){
		//setting id info.
		socket.on('connect',()=>{
			this.find('#placeId').innerHTML = `ID: ${socket.id}`;
		})
	}
})

const content = makeElement('content',{
	style:`
		display:flex;
		height:80%;
		align-items:center;
		justify-content:center;
		flex-direction:column;
		background:#05274a;
	`,
	innerHTML:`
		<div
		style="
			font-weight:bold;
			padding:20px;
			background:#04192f;
		"
		>
			<div
			style="
				text-align:center;
			"
			>
				<img src=/file?fn=logos.png
				style="
					padding:5px;
					width:100px;
				"
				>
			</div>
			<div
			style="
				margin-top:20px;
				width:auto;
				padding:10px;
				background:white;
			"
			>
				<span
				>Anda bermain atas kemauan sendiri.</span>
			</div>
			<div
			style="
				margin-top:10px;
				padding:15px 0;
			"
			>
				<div
				>
					<span
					style="
						background:#465fac;
						color:white;
						padding:10px;
						cursor:pointer;
					"
					id=fightbutton
					>Main</span>
				</div>
			</div>
		</div>
	`,
	onadded(){
		this.find('#fightbutton').onclick = ()=>{
			find('main').addChild(openLoading('Bersiap...',(thisel)=>{
				socket.emit('wannafight');
				socket.on('succedjoin',(data)=>{
					setRooms(data);
					JoinProcess(thisel);
				});
				socket.on('someonejoin',(data)=>{
					setRooms(data);
					JoinProcess(thisel);
					console.log('Your rooms is',socket.id+'-rooms');
				});
			}));
		}
	}
})

const setRooms = function(data){
	header.roomid = data[0];
	header.opponentId = data[1];
	socket.roomid = data[0];
}

const JoinProcess = function(removeable){
	removeable.remove();
	content.clear();
	content.addChild(makeElement('div',{
		style:`
			width:100%;
			height:100%;
			display:flex;
			flex-direction:column;
		`,
		innerHTML:`
			<div
			style="
				padding:20px;
				font-weight:bold;
				display:flex;
				justify-content:center;
				background:#05274a;
			"
			>
				<div id=morebutton
				style="
					display:none;
					align-items:center;
				"
				>
					<div
					style="
						margin-right:5px;
					"
					>
						<span
						style="
							padding:5px;
							background:#465fac;
							color:white;
							cursor:pointer;
						"
						id=rematch
						>Rematch</span>
					</div>
					<div>
						<span
						style="
							padding:5px;
							background:#465fac;
							color:white;
							cursor:pointer;
						"
						id=newgame
						>New game</span>
					</div>
				</div>
				<div id=timer
				style="
					padding:5px;
					background:#04192f;
					color:white;
					margin-left:5px;
				"
				>
					<span>
						180s left.
					</span>
				</div>
			</div>
			<div
			style="
				height:90%;
				display:flex;
				align-items:center;
				justify-content:center;
				background:#05274a;
			"
			>
				<div
				style="
					height:100%;
					display:flex;
					align-items:center;
					justify-content:flex-start;
					flex-direction:column;
					margin-right:5px;
					background:#05274a;
				"
				id=choosebucket
				>
					<div
					style="
						margin:10px;
						background:#04192f;
						width:150px;
						height:150px;
						display:flex;
						align-items:center;
						justify-content:center;
						cursor:pointer;
						flex-direction:column;
						margin-top:0;
					"
					>
						<img src=/file?fn=scisors.png
						style="
							width:64px;
							height:64px;
							border-radius:50%;
						"
						>
						<span value=0
						style="
							color:#00f3ff;
							margin-top:5px;
						">Scisors</span>
					</div>
					<div
					style="
						margin:10px;
						background:#04192f;
						width:150px;
						height:150px;
						display:flex;
						align-items:center;
						justify-content:center;
						cursor:pointer;
						flex-direction:column;
						margin-top:0;
					"
					>
						<img src=/file?fn=rock.png
						style="
							width:64px;
							height:64px;
							border-radius:50%;
						"
						>
						<span value=1
						style="
							color:#00f3ff;
							margin-top:5px;
						">Rock</span>
					</div>
					<div
					style="
						width:150px;
						height:150px;
						margin:10px;
						background:#04192f;
						display:flex;
						align-items:center;
						justify-content:center;
						cursor:pointer;
						flex-direction:column;
						margin-top:0;
					"
					>
						<img src=/file?fn=paper.png
						style="
							width:64px;
							height:64px;
							border-radius:50%;
						"
						>
						<span value=2
						style="
							color:#00f3ff;
							margin-top:5px;
						"
						>Paper</span>
					</div>
				</div>
				<div
				style="
					height:100%;
					width:100%;
					display:flex;flex-direction:column;
					justify-content:space-between;
					align-items:center;
					padding:0 10px;
					margin-left:5px;
					background:#05274a;
				"
				>
					<div
					style="
						padding:10px;
						display:flex;
						align-items:center;
						justify-content:flex-start;
						width:100%;
						padding-top:0;
					"
					>
						<input
						style="
							padding:10px;
							margin-right:2px;
						"
						placeholder="Tulis pesanmu disini..."
						><button
						style="
							padding:10px;
							background:#465fac;
							color:white;
						"
						id=sendButton
						>Send</button>
					</div>
					<div
					style="
						height:100%;
						width:100%;
						overflow:auto;
						background:#04192f;
						margin-bottom:10px;
					"
					id=chatBox
					>
						<div
						style="
							padding:10px 10px 0 10px;
							margin-bottom:5px;
							color:white;
						"
						>
							<span
							style="
								font-weight:bold;
								color:#00f3ff;
							"
							>System</span> Talk to your opponent, read the personalities, manipulate, then beat him.
						</div>
					</div>
				</div>
			</div>
		`,
		onadded(){
			let backablebox;
			//give more button, event.
			const mapevent = {
				rematch(el){
					if(header.opponentleft){
						displayMsg(el,'Cannot, Sending Rematch request.','System');
						return;
					}
					displayMsg(el,'Sending Rematch request.','System');
					socket.emit('rematch!',[header.roomid,header.opponentId]);
				},
				newgame(){
					//check for making user room.
					socket.emit('newgame',[header.roomid,header.opponentId]);
				}
			}
			this.findall('#morebutton span').forEach(button=>{
				button.onclick = ()=>{
					mapevent[button.id](this);
				}
			})
			//give event to all box.
			this.findall('#choosebucket div').forEach(box=>{
				box.onclick = ()=>{
					if(header.clicked || header.timesUp)return;
					backablebox = box;
					const value = box.querySelector('span').getAttribute('value');
					socket.emit('choosedsword',[header.roomid,value]);
					header.clicked = true;
					box.style.background = 'rgb(1, 109, 115)';
				}
			})
			//time work.
			let time = 180;
			const timeInterval = setInterval(()=>{
				time-=1;
				this.find('#timer').innerHTML = `${time}s left.`;
				if(time<=0){
					header.timesUp = true;
					if(header.restTime){
						//time to reset all things.
						const roomid = header.roomid;
						if(socket.id===roomid.slice(0,roomid.indexOf('-'))){
							socket.emit('newgame',[roomid]);
						}else location.reload();
					}else{
						//force check.
						//time is up. but, the game logic isnt called yet.
						time = 60;
						displayMsg(this,`${!header.clicked?!header.opponentSetted?'Draw':'You Loze':'You Win'}!`,'System');
						displayMsg(this,'Rest time 60s','System');
						showElement(find('#morebutton'),'flex');
						header.resTime = true;
					}
				}
			},1000)
			const displayMsg = function(el,msg,from){
				const div = makeElement('div',{
					style:`
						padding:0 10px;
						margin-bottom:5px;
						color:white;
					`,
					innerHTML:`
						<span
						style="
							font-weight:bold;
							color:#00f3ff;
						"
						>${from}</span> ${msg}
					`,
				})
				el.find('#chatBox').appendChild(div);
				div.scrollIntoView();
			}
			this.find('#sendButton').onclick = ()=>{
				if(header.opponentleft){
					displayMsg(this,'You alone, cannot send the message.','System');
					return;
				}
				const msg = this.find('input').value.length<1?'Nope...':this.find('input').value;
				this.find('input').value = '';
				socket.emit('sendMsg',[msg,header.opponentId]);
				displayMsg(this,msg,'You');
			}
			socket.on('getMsg',(msg)=>{
				displayMsg(this,msg,'Opponent');
			})
			socket.on('chooserecorded',(id)=>{
				displayMsg(this,`${socket.id===id?'You':'Opponent'} set the JUTSU!`,'System');
				header.opponentSetted = true;
			})
			socket.on('rematch?',data=>{
				rematchHandler();
			});
			socket.on('computeok',data=>{
				time = 60;
				console.log(data);
				if(!data.winner){
					displayMsg(this,'Draw!!!','System');
				}else{
					data.winner===socket.id?displayMsg(this,'You Win!','System'):displayMsg(this,'You Loze!','System');
				}
				displayMsg(this,'Rest time 60s','System');
				header.restTime = true;
				//showing more button.
				showElement(find('#morebutton'),'flex');
			});
			socket.on('opponentleft',()=>{
				header.opponentleft = true;
				header.clicked = true;
				displayMsg(this,'You won against your opponent, suffering cardiac arrest!','System');
				displayMsg(this,'Rest time 60s','System');
				showElement(find('#morebutton'),'flex');
				time = 60;
			})
			socket.on('rematchprocess',()=>{
				time = 180;
				header.restTime = false;
				header.clicked = false;
				header.rematch = true;
				header.timesUp = false;
				if(backablebox)backablebox.style.background = '#04192f';
				hideElement(this.find('#morebutton'));
				this.findall('#chatBox div').forEach((div,i)=>{
					if(i>=1){
						div.remove();
					}
				})
				displayMsg(this,'Rematch Processed!','System');
			});
			socket.on('rematchcancelled',()=>{
				location.reload();
			})
			//work on enter send chat.
			this.find('input').onfocus = ()=>{
				this.find('input').onkeydown = (e)=>{
					if(e.keyCode===13){
						this.find('#sendButton').click();
					}
				}
			}
		}
	}))
}

const rematchHandler = function(){
	find('main').addChild(makeElement('div',{
		style:`
			background:rgb(0,0,0,0.5);
			position:absolute;
			width:100%;
			height:100%;
			top:0;
			left:0;
			display:flex;
			align-items:center;
			justify-content:center;
		`,
		innerHTML:`
			<div
			style="
				padding:20px;
				background:#05274a;
			"
			>
				<div
				style="
					padding:10px;
					color:white;
					font-weight:bold;
				"
				>
					<span>Rematch Request!</span>
				</div>
				<div id=buttons
				style="
					display:flex;
					align-items:center;
					justify-content:center;
				"
				>
					<div
					style="
						padding: 5px;
						background: #465fac;
						color: white;
						margin-right: 5px;
						cursor: pointer;
					"
					>
						<span id=yes>Yes</span>
					</div>
					<div
					style="
						padding: 5px;
						background: #465fac;
						color: white;
						cursor: pointer;
					"
					>
						<span id=no>No</span>
					</div>
				</div>
			</div>
		`,
		onadded(){
			const responsedata = [false,header.roomid,header.opponentId];
			const mapEvent = {
				yes(el){
					responsedata[0] = true;
					socket.emit('responserematch',responsedata);
					el.remove();
				},
				no(el){
					socket.emit('responserematch',responsedata);
					el.remove();
				}
			}
			this.findall('#buttons span').forEach(button=>{
				button.onclick = ()=>{
					mapEvent[button.id](this);
				}
			})
		}
	}))
}

