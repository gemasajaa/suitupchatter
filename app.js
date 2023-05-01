const server = require('./more/flexserve');
const routes = require('./more/routes');
//can define it well, here.
server.Routes.invalidHandle = function(res){
	res.string(404);
}
//server routing is fine.
server.setRoutes(routes);

//init the socket.
const startIo = function(){
	const io = require('socket.io')(3000);
	const rooms = {};
	io.on('connection',(socket)=>{
		//handle disconnect user.
		socket.on('disconnect',()=>{
			for(let i in rooms){
				if(rooms[i].includes(socket.id)){
					const socketindex = rooms[i].indexOf(socket.id);
					const opponentId = rooms[i][socketindex===1?0:1];
					if(rooms[i][2])socket.to(opponentId).emit('opponentleft');
					delete rooms[i];
					break;
				}
			}
		})
		socket.on('wannafight',()=>{
			if(Object.keys(rooms).length===0){
				rooms[socket.id+'-rooms'] = [socket.id];
			}else{
				for(let i in rooms){
					if(i===Object.keys(rooms)[Object.keys(rooms).length-1]){
						if(rooms[i].length<2){
							rooms[i].push(socket.id);
							socket.emit('succedjoin',[i,rooms[i][0]]);
							socket.to(rooms[i][0]).emit('someonejoin',[i,rooms[i][1]]);
						}else {rooms[socket.id+'-rooms'] = [socket.id]}
					}else if(rooms[i].length<2){
						rooms[i].push(socket.id);
						break;
					}
				}
			}
		})
		socket.on('sendMsg',(data)=>{
			socket.to(data[1]).emit('getMsg',data[0]);
		})
		socket.on('choosedsword',(datas)=>{
			const thisroom = rooms[datas[0]];
			if(!thisroom[2]){
				thisroom[2] = [[socket.id,datas[1]]];
				socket.emit('chooserecorded',socket.id);
				for(let i=0;i<2;i++){
					if(thisroom[i] != socket.id){
						socket.to(thisroom[i]).emit('chooserecorded',socket.id);
					}
				}
			}else{
				thisroom[2].push([socket.id,datas[1]]);
				//check the winner logic.
				let winner = null;
				const data = [Number(thisroom[2][0][1]),Number(thisroom[2][1][1])];
				if(data[0]!=data[1]){
					//draw handling.
					if(data[0]+data[1]===1){
						winner = data[0]===1?0:1;
					}else if(data[0]+data[1]===3){
						winner = data[0]===2?0:1;
					}else if(data[0]+data[1]===2){
						winner = data[0]===0?0:1;
					}
				}
				const datatosend = {
					winner:winner===null?false:thisroom[2][winner][0],
					people:[thisroom[0],thisroom[1]],
					loser:winner===null?false:thisroom[2][winner===1?0:1][0]
				}
				socket.emit('computeok',datatosend);
				socket.to(thisroom[2][0][0]).emit('computeok',datatosend);
			}
		})
		socket.on('newgame',data=>{
			delete rooms[data[0]];
			socket.emit('rematchcancelled');
			if(data[1])socket.to(data[1]).emit('rematchcancelled');
		})
		socket.on('rematch!',data=>{
			socket.to(data[1]).emit('rematch?',null);
		})
		socket.on('responserematch',data=>{
			if(!data[0]){
				//delete rooms.
				//cause user dont want to rematch.
				delete rooms[data[1]];
				socket.emit('rematchcancelled');
				socket.to(data[2]).emit('rematchcancelled');
			}else{
				rooms[data[1]].pop();
				socket.emit('rematchprocess');
				socket.to(data[2]).emit('rematchprocess');
			}
		})
	})
}

server.start(8080,()=>{
	console.log('server running on port 8080');
	//trying to improve, the system.
	startIo();
});

