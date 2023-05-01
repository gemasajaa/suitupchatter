module.exports = {
	app(config){
		return `
			<!doctype html>
			<html>
				<head>
					<title>Suit Up Chatter: Drama of personas</title>
					<meta name=viewport content=width=device-width,initial-scale=1>
					<style>
						main{
							-webkit-tap-highlight-color:transparent;
							user-select:none;
						}
						content{
							width:40%;
						}
						.bigfont{
							font-size:18px;
						}
						.smallfont{
							font-size:12px;
						}
						.normal-size:{
							font-size:13px;
						}
						.responsiveWidth{
							width:50%;
						}
						.footerSetting{
							justify-content:space-around;
							width:50%;
						}
						.footerItems{
							margin:0 5px;
						}
						#finder{
							width:50%;
						}
						header{
							width:40%;
							justify-content:space-between;
						}
						input{
							outline:none;
							background:white;
							border:none;
							padding:5px;
						}
						.photocard{
							width:50%;
						}
						.galerycard{
							max-width:50%;
						}
						button{
							background:white;
							border:none;
							padding:5px;
							cursor:pointer;
						}
						video{
							outline:none;
						}
						audio{
							outline:none;
						}
						#contentContainer{
							display:inline-block;
						}
						#lastOne{
							margin-bottom:10px;
						}
						.selectedCategory{
							font-weight:bold;
						}
						#bar-video{
							width:50%;
						}
						#category{
							justify-content:space-around;
						}
						#readerBox{
							width:50%;
						}
						#anouncebox{
							width:auto;
						}
						#contentBox{
							width:200px;
						}
						#contentBox div img{
							width:200px;
						}
						#titletohide{
							display:inline-block;
						}
						@media screen and (max-width:1032px){
							#content{
								width:100%;
							}
							.responsiveWidth{
								width:100%;
							}
							.footerSetting{
								justify-content:space-around;
								width:100%;
							}
							.footerItems{
								margin:0;
							}
							#profilePage{
								position:absolute;
								top:0;
								left:0;	
							}
							#finder{
								width:100%;
								justify-content:space-around;
							}
							header{
								width:100%;
								justify-content:space-around;
							}
							.photocard{
								width:100%;
							}
							.galerycard{
								max-width:95%;
							}
							#bar-video{
								width:100%;
							}
							#category{
								justify-content:space-between;
							}
							#readerBox{
								width:100%;
							}
							#anouncebox{
								width:100%;
							}
							#contentBox{
								width:100%;
							}
							#contentBox div img{
								width:100%;
							}
							#titletohide{
								display:none;
							}
							content{
								width:100%;
							}
						}
					</style>
					<link rel=icon href=file?fn=logos.png>
				</head>
				<body></body>
				<script src="http://localhost:3000/socket.io/socket.io.js"></script>
				<script src=/scripts?fn=infinity></script>
				<script src=/scripts?fn=components></script>
				<script src=/scripts?fn=flex></script>
			</html>
		`;
	}
}