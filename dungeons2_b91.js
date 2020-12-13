/*
Orteil's sloppy Cookie Clicker dungeons

Optimizations to do (not mentioning the dozens of missing features) :
-use canvas instead
-only compute AI for mobs with 2 tiles of view
*/
var LaunchDungeons=function()
{
	var theme=Math.round(Math.random()*5);
	var bunnyTheme=0; //0 or 1 special theme for next level if bunny killed
	var extraDmg=0;//so weaknesses or whatsoever things
	var stg=0; //stage
	var mimicsIntro=0;var shieldedIntro=0;
	
	Game.GetWord=function(type)
	{
		if (type=='secret') return choose(['hidden','secret','mysterious','forgotten','forbidden','lost','sunk','buried','concealed','shrouded','invisible','elder']);
		if (type=='ruined') return choose(['ancient','old','ruined','ravaged','destroyed','collapsed','demolished','burnt','torn-down','shattered','dilapidated','abandoned','crumbling','derelict','decaying']);
		if (type=='magical') return choose(['arcane','magical','mystical','sacred','honed','banished','unholy','holy','demonic','enchanted','necromantic','bewitched','haunted','occult','astral']);
		return '';
	}
	
	/*=====================================================================================
	DUNGEONS
	=======================================================================================*/
	Game.DungeonTypes=[];
	Game.DungeonType=function(name)
	{
		this.name=name;
		this.nameGenerator=function(){return 'Mysterious dungeon';};
		this.roomTypes=[];
		Game.DungeonTypes[this.name]=this;
		return this;
	};
	
	/*=====================================================================================
	CREATE DUNGEON TYPES
	=======================================================================================*/
	new Game.DungeonType('Factory').
	nameGenerator=function(){
		var str='';
		str+=Game.GetWord(choose(['secret','ruined','magical']))+' '+choose(['factory','factories','bakery','bakeries','confectionery','laboratory','research center','chocolate forge','chocolate foundry','manufactory','warehouse','machinery','works','bakeworks','workshop','assembly line']);
		return str;
	};
	
	new Game.DungeonType('Mine').
	nameGenerator=function(){
		var str='';
		str+=Game.GetWord(choose(['secret','ruined','magical']))+' '+choose(['chocolate','chocolate','chocolate','white chocolate','sugar','cacao'])+' '+choose(['mine','mines','pit','pits','quarry','excavation','tunnel','shaft','lode','trench','mountain','vein','cliff','peak','dome','crater','abyss','chasm','hole','burrow']);
		return str;
	};
	
	new Game.DungeonType('Portal').
	nameGenerator=function(){
		var str='';
		str+=Game.GetWord(choose(['secret','ruined','magical']))+' '+choose(['portal','gate','dimension','warpgate','door']);
		return str;
	};
	
	new Game.DungeonType('Secret zebra level').
	nameGenerator=function(){
		var str='';
		str+=Game.GetWord(choose(['secret']))+' '+choose(['zebra level']);
		return str;
	};
	
	
	/*=====================================================================================
	CREATE TILE TYPES
	=======================================================================================*/
	this.Map.prototype.drawDetailed=function()
	{
		//return a string containing a rough visual representation of the map (with graphics)
		var str='';
		var size=16;
		for (var y=0;y<this.h;y++){for (var x=0;x<this.w;x++){
				var room=this.getRoom(x,y);
				//var opacity=Math.max(0.1,room.tiles[this.getRoomTile(room,x,y)].score);
				var opacity=1;
				var title='void';
				if (room!=-1)
				{
					opacity=Math.max(0.1,1-room.gen/5);
					if (this.data[x][y][0]==TILE_ENTRANCE || this.data[x][y][0]==TILE_EXIT) opacity=1;
					title=(room.corridor?'corridor':'room')+' '+room.id+' | depth : '+room.gen+' | children : '+room.children.length;
				}
				var pic=this.getPic(x,y);
				str+='<div style="opacity:'+opacity+';width:'+size+'px;height:'+size+'px;position:absolute;left:'+(x*size)+'px;top:'+(y*size)+'px;display:block;padding:0px;margin:0px;background:#'+colors[this.data[x][y][0]]+' url(https://pipe.miroware.io/5db9be8a56a97834b159fd5b/Dungeons2/img/dungeonTiles.png) '+(-pic[0]*16)+'px '+(-pic[1]*16)+'px;color:#999;" title="'+title+'"></div>';
			}
			str+='<br>';
		}
		str='<div style="box-shadow:0px 0px 12px 6px #00061b;position:relative;width:'+(this.w*size)+'px;height:'+(this.h*size)+'px;background:#00061b;font-family:Courier;font-size:'+size+'px;float:left;margin:10px;">'+str+'</div>';
		return str;
	}//custom sheet
	var D=new DungeonGen();
		function Dungtheme(){
			
	if(theme==0){
	D.loadTiles([
	['alt wall',[4,0],'join'],
	['alt wall corner',[4,0]],
	['alt floor',[4,1],'random3'],
	['alt tiled floor',[4,2],'join'],
	['alt round pillar',[4,4]],
	['alt square pillar',[5,4]],
	['alt potted plant',[6,4]],
	['alt bookshelf',[4,6],'join'],
	['alt door',[4,3],'join'],
	['wall',[1,0],'join'],
	['wall corner',[1,0]],
	['floor',[1,1],'random3'],
	['tiled floor',[1,2],'join'],
	['round pillar',[1,4]],
	['square pillar',[2,4]],
	['potted plant',[3,4]],
	['bookshelf',[4,5],'join'],
	['door',[1,3],'join'],
	['green wall',[7,0],'join'],
	['green wall corner',[7,0]],
	['green floor',[7,1],'random3'],
	['green tiled floor',[7,2],'join'],
	['green round pillar',[7,4]],
	['green square pillar',[8,4]],
	['green potted plant',[9,4]],
	['green bookshelf',[7,6],'join'],
	['green door',[7,3],'join'],
	['water',[1,5]],
	['green water',[2,5]],
	['dark water',[3,5]],
	['wooden wall',[1,7],'join'],
	['wooden floor',[1,6],'random3'],
	['conveyor belt',[7,7],'join'],
	['entrance',[0,1]],
	['alt entrance',[0,3]],
	['exit',[0,2]],
	['alt exit',[0,4]],
	['green entrance',[0,5]],
	['green exit',[0,6]]
		]);
	}else if(theme==1){
	D.loadTiles([
	['alt wall',[14,0],'join'],
	['alt wall corner',[14,0]],
	['alt floor',[14,1],'random3'],
	['alt tiled floor',[14,2],'join'],
	['alt round pillar',[14,4]],
	['alt square pillar',[15,4]],
	['alt potted plant',[16,4]],
	['alt bookshelf',[14,6],'join'],
	['alt door',[14,3],'join'],
	['wall',[11,0],'join'],
	['wall corner',[11,0]],
	['floor',[11,1],'random3'],
	['tiled floor',[11,2],'join'],
	['round pillar',[11,4]],
	['square pillar',[12,4]],
	['potted plant',[13,4]],
	['bookshelf',[14,5],'join'],
	['door',[11,3],'join'],
	['green wall',[17,0],'join'],
	['green wall corner',[17,0]],
	['green floor',[17,1],'random3'],
	['green tiled floor',[17,2],'join'],
	['green round pillar',[17,4]],
	['green square pillar',[18,4]],
	['green potted plant',[19,4]],
	['green bookshelf',[17,6],'join'],
	['green door',[17,3],'join'],
	['water',[11,5]],
	['green water',[12,5]],
	['dark water',[13,5]],
	['wooden wall',[11,7],'join'],
	['wooden floor',[11,6],'random3'],
	['conveyor belt',[17,7],'join'],
	['entrance',[10,1]],
	['alt entrance',[10,3]],
	['exit',[10,2]],
	['alt exit',[10,4]],
	['green entrance',[10,5]],
	['green exit',[10,6]]
		]);
	}else if(theme==2){
	D.loadTiles([
	['alt wall',[24,0],'join'],
	['alt wall corner',[24,0]],
	['alt floor',[24,1],'random3'],
	['alt tiled floor',[24,2],'join'],
	['alt round pillar',[24,4]],
	['alt square pillar',[25,4]],
	['alt potted plant',[26,4]],
	['alt bookshelf',[24,6],'join'],
	['alt door',[24,3],'join'],
	['wall',[21,0],'join'],
	['wall corner',[21,0]],
	['floor',[21,1],'random3'],
	['tiled floor',[21,2],'join'],
	['round pillar',[21,4]],
	['square pillar',[22,4]],
	['potted plant',[23,4]],
	['bookshelf',[24,5],'join'],
	['door',[21,3],'join'],
	['green wall',[27,0],'join'],
	['green wall corner',[27,0]],
	['green floor',[27,1],'random3'],
	['green tiled floor',[27,2],'join'],
	['green round pillar',[27,4]],
	['green square pillar',[28,4]],
	['green potted plant',[29,4]],
	['green bookshelf',[27,6],'join'],
	['green door',[27,3],'join'],
	['water',[21,5]],
	['green water',[22,5]],
	['dark water',[23,5]],
	['wooden wall',[21,7],'join'],
	['wooden floor',[21,6],'random3'],
	['conveyor belt',[27,7],'join'],
	['entrance',[20,1]],
	['alt entrance',[20,3]],
	['exit',[20,2]],
	['alt exit',[20,4]],
	['green entrance',[20,5]],
	['green exit',[20,6]]
		]);
	}else if(theme==3){
	D.loadTiles([
	['alt wall',[34,0],'join'],
	['alt wall corner',[34,0]],
	['alt floor',[34,1],'random3'],
	['alt tiled floor',[34,2],'join'],
	['alt round pillar',[34,4]],
	['alt square pillar',[35,4]],
	['alt potted plant',[36,4]],
	['alt bookshelf',[34,6],'join'],
	['alt door',[34,3],'join'],
	['wall',[31,0],'join'],
	['wall corner',[31,0]],
	['floor',[31,1],'random3'],
	['tiled floor',[31,2],'join'],
	['round pillar',[31,4]],
	['square pillar',[32,4]],
	['potted plant',[33,4]],
	['bookshelf',[34,5],'join'],
	['door',[31,3],'join'],
	['green wall',[37,0],'join'],
	['green wall corner',[37,0]],
	['green floor',[37,1],'random3'],
	['green tiled floor',[37,2],'join'],
	['green round pillar',[37,4]],
	['green square pillar',[38,4]],
	['green potted plant',[39,4]],
	['green bookshelf',[37,6],'join'],
	['green door',[37,3],'join'],
	['water',[31,5]],
	['green water',[32,5]],
	['dark water',[33,5]],
	['wooden wall',[31,7],'join'],
	['wooden floor',[31,6],'random3'],
	['conveyor belt',[37,7],'join'],
	['entrance',[30,1]],
	['alt entrance',[30,3]],
	['exit',[30,2]],
	['alt exit',[30,4]],
	['green entrance',[30,5]],
	['green exit',[30,6]]
		]);
	}else if(theme==4){
	D.loadTiles([
	['alt wall',[44,0],'join'],
	['alt wall corner',[44,0]],
	['alt floor',[44,1],'random3'],
	['alt tiled floor',[44,2],'join'],
	['alt round pillar',[44,4]],
	['alt square pillar',[45,4]],
	['alt potted plant',[46,4]],
	['alt bookshelf',[44,6],'join'],
	['alt door',[44,3],'join'],
	['wall',[41,0],'join'],
	['wall corner',[41,0]],
	['floor',[41,1],'random3'],
	['tiled floor',[41,2],'join'],
	['round pillar',[41,4]],
	['square pillar',[42,4]],
	['potted plant',[43,4]],
	['bookshelf',[44,5],'join'],
	['door',[41,3],'join'],
	['green wall',[47,0],'join'],
	['green wall corner',[47,0]],
	['green floor',[47,1],'random3'],
	['green tiled floor',[47,2],'join'],
	['green round pillar',[47,4]],
	['green square pillar',[48,4]],
	['green potted plant',[49,4]],
	['green bookshelf',[47,6],'join'],
	['green door',[47,3],'join'],
	['water',[41,5]],
	['green water',[42,5]],
	['dark water',[43,5]],
	['wooden wall',[41,7],'join'],
	['wooden floor',[41,6],'random3'],
	['conveyor belt',[47,7],'join'],
	['entrance',[40,1]],
	['alt entrance',[40,3]],
	['exit',[40,2]],
	['alt exit',[40,4]],
	['green entrance',[40,5]],
	['green exit',[40,6]]
		]);
	}else if(theme==5){
	D.loadTiles([
	['alt wall',[54,0],'join'],
	['alt wall corner',[54,0]],
	['alt floor',[54,1],'random3'],
	['alt tiled floor',[54,2],'join'],
	['alt round pillar',[54,4]],
	['alt square pillar',[55,4]],
	['alt potted plant',[56,4]],
	['alt bookshelf',[54,6],'join'],
	['alt door',[54,3],'join'],
	['wall',[51,0],'join'],
	['wall corner',[51,0]],
	['floor',[51,1],'random3'],
	['tiled floor',[51,2],'join'],
	['round pillar',[51,4]],
	['square pillar',[52,4]],
	['potted plant',[53,4]],
	['bookshelf',[54,5],'join'],
	['door',[51,3],'join'],
	['green wall',[57,0],'join'],
	['green wall corner',[57,0]],
	['green floor',[57,1],'random3'],
	['green tiled floor',[57,2],'join'],
	['green round pillar',[57,4]],
	['green square pillar',[58,4]],
	['green potted plant',[59,4]],
	['green bookshelf',[57,6],'join'],
	['green door',[57,3],'join'],
	['water',[51,5]],
	['green water',[52,5]],
	['dark water',[53,5]],
	['wooden wall',[51,7],'join'],
	['wooden floor',[51,6],'random3'],
	['conveyor belt',[57,7],'join'],
	['entrance',[50,1]],
	['alt entrance',[50,3]],
	['exit',[50,2]],
	['alt exit',[50,4]],
	['green entrance',[50,5]],
	['green exit',[50,6]]
		]);
	}else if(theme==6 && bunnyTheme>=1){
	D.loadTiles([
	['alt wall',[64,0],'join'],
	['alt wall corner',[64,0]],
	['alt floor',[64,1],'random3'],
	['alt tiled floor',[64,2],'join'],
	['alt round pillar',[64,4]],
	['alt square pillar',[65,4]],
	['alt potted plant',[66,4]],
	['alt bookshelf',[64,6],'join'],
	['alt door',[64,3],'join'],
	['wall',[61,0],'join'],
	['wall corner',[61,0]],
	['floor',[61,1],'random3'],
	['tiled floor',[61,2],'join'],
	['round pillar',[61,4]],
	['square pillar',[62,4]],
	['potted plant',[63,4]],
	['bookshelf',[64,5],'join'],
	['door',[61,3],'join'],
	['green wall',[67,0],'join'],
	['green wall corner',[67,0]],
	['green floor',[67,1],'random3'],
	['green tiled floor',[67,2],'join'],
	['green round pillar',[67,4]],
	['green square pillar',[68,4]],
	['green potted plant',[69,4]],
	['green bookshelf',[67,6],'join'],
	['green door',[67,3],'join'],
	['water',[61,5]],
	['green water',[62,5]],
	['dark water',[63,5]],
	['wooden wall',[61,7],'join'],
	['wooden floor',[61,6],'random3'],
	['conveyor belt',[67,7],'join'],
	['entrance',[60,1]],
	['alt entrance',[60,3]],
	['exit',[60,2]],
	['alt exit',[60,4]],
	['green entrance',[60,5]],
	['green exit',[60,6]]
		]);
		bunnyTheme--;
	};
}
Dungtheme();
	
		
	
	
	/*=====================================================================================
	CREATE MONSTER TYPES
	=======================================================================================*/
	
	/*
	An explanation of stats :
		-hp : health points
		-speed : determines who attacks first in a fight; bypasses dodging; determines how fast heroes auto-run dungeons
		-might : determines how much damage is done to opponents
		-guard : lowers incoming damage
		-dodge : chance of avoiding incoming attacks completely (affected by the opponent's speed)
		-luck : heroes only, determines drops and rare encounters
		-rarity : monsters only, determines how often a monster is added to the spawn table
		-level : monsters only, determines which average room depth the monster is more likely to spawn in (also determines the loot amount)
	*/
	Game.monsterIconY=10;//offset for dungeonItems.png monsters
	Game.Monsters=[];
	Game.Monster=function(name,pic,icon,level,stats,loot)
	{
		this.name=name;
		this.pic=pic;
		this.icon=icon;
		this.level=level;
		this.stats={};
		for (var i in stats)
		{this.stats[i]=stats[i];}
		this.stats.hpm=this.stats.hp;
		this.stats.rarity=stats.rarity||1;
		this.loot=loot||{};
		this.boss=0;
		this.quotes={};
		Game.Monsters[this.name]=this;
	}
	var basicLoot={cookies:{min:(1*(Game.prestige+1)),max:(5*(Game.prestige+1)),prob:0.5}};
	var goodLoot={cookies:{min:(3*(Game.prestige+1)),max:(8*(Game.prestige+1)),prob:1},gear:{prob:0.05}};
	var bossLoot={gear:{prob:1}};
	var chestLoot={cookies:{min:(2*(Game.prestige+1)),max:(20*(Game.prestige+1)),prob:1},gear:{prob:0.1}};
	var bossLoot={cookies:{min:(10*(Game.prestige+1)),max:(50*(Game.prestige+1)),prob:1},gear:{prob:0.2}};
	new Game.Achievement('Antic','Find and defeat <b>Ancient Elder Doughling</b>, the one of very special doughlings for the first time!',[12,7]);Game.last.pool='dungeon';
	new Game.Achievement('Tier up = Difficulty^2','Defeat <b>Sentient furnace II</b> or other boss which has <b>II</b> at end of its name. <br>Note:These guys are much harder to defeat and can be only found after level 100.',[13,7]);Game.last.pool='dungeon';
	//general monsters
	new Game.Monster('Doughling','doughling',[0,0],1,{hp:5,might:2,guard:2,speed:6,dodge:6,rarity:0.7},basicLoot);
	
	new Game.Monster('Elder doughling','elderDoughling',[1,0],7,{hp:20,might:7,guard:7,speed:4,dodge:4,rarity:0.7},goodLoot);
	new Game.Monster('Outdated Elder doughling','outdatedelderDoughling',[2,0],7,{hp:17,might:17,guard:8,speed:1,dodge:0,rarity:0.2},goodLoot);
	Game.Monsters['Outdated Elder doughling'].onKill=function(){extraDmg--;};Game.Monsters['Outdated Elder doughling'].quotes={fight:'Reeeeh',defeat:'Destroyed doughling unleashed old disgusting smell. Hero attacks are weaker until Boss isn\'t defeated.'};
	new Game.Monster('Ancient Elder doughling','ancientelderDoughling',[3,0],7,{hp:50,might:17,guard:16,speed:2,dodge:0,rarity:0.011},chestLoot);
	Game.Monsters['Ancient Elder doughling'].onKill=function(){extraDmg--;};Game.Monsters['Ancient Elder doughling'].quotes={fight:'Reeeeh',defeat:'Destroyed doughling unleashed old disgusting smell. Hero attacks are weaker until Boss isn\'t defeated.'};
	Game.Monsters['Ancient Elder doughling'].onKill=function(){Game.Win('Antic');extraDmg=extraDmg-1.5;};Game.Monsters['Ancient Elder doughling'].quotes={fight:'Reeeeh',defeat:'The spirit of the ancient seeps into the hero increasing its max health by 1 and healing 15HP. For the cookies!'};
	new Game.Monster('Angry sentient cookie','angrySentientCookie',[5,0],5,{hp:16,might:8,guard:4,speed:5,dodge:5,rarity:1},basicLoot);
	new Game.Monster('Baby sentient cookie','babySentientCookie',[4,0],1,{hp:3,might:1,guard:1,speed:7,dodge:7,rarity:1},basicLoot);
	new Game.Monster('Burnt sentient cookie','burntSentientCookie',[6,0],5,{hp:16,might:12,guard:2,speed:3,dodge:2,rarity:0.2},basicLoot);
	new Game.Monster('Raw sentient cookie','rawSentientCookie',[5,0],5,{hp:16,might:6,guard:4,speed:7,dodge:7,rarity:0.2},basicLoot);
	new Game.Monster('Sugar bunny','sugarBunny',[8,0],5,{hp:10,might:3,guard:8,speed:12,dodge:9,rarity:0.001},{cookies:{min:(1000*(Game.prestige+1)),max:(10000*(Game.prestige+1))}});
	Game.Monsters['Sugar bunny'].onKill=function(){Game.Win('Follow the white rabbit');bunnyTheme++;};Game.Monsters['Sugar bunny'].AI='flee';
	
	//factory monsters
	new Game.Monster('Crazed kneader','crazedKneader',[0,2],6,{hp:18,might:6,guard:8,speed:3,dodge:2,rarity:0.5},goodLoot);
	new Game.Monster('Crazed chip-spurter','crazedDoughSpurter',[0,2],6,{hp:15,might:6,guard:8,speed:5,dodge:3,rarity:0.5},goodLoot);
	new Game.Monster('Alarm bot','alarmTurret',[3,2],2,{hp:6,might:3,guard:5,speed:8,dodge:8,rarity:0.5},basicLoot);
	new Game.Monster('Chirpy','chirpy',[4,2],3,{hp:7,might:4,guard:6,speed:9,dodge:9,rarity:0.01},{cookies:{min:500*(Game.prestige+1),max:5000*(Game.prestige+1)}});
	Game.Monsters['Chirpy'].onKill=function(){Game.Win('Chirped out');};Game.Monsters['Chirpy'].quotes={fight:'oh, hello <3'};
	new Game.Monster('Disgruntled worker','disgruntledWorker',[1,2],4,{hp:14,might:5,guard:5,speed:6,dodge:4,rarity:0.6},basicLoot);
	new Game.Monster('Disgruntled overseer','disgruntledOverseer',[1,2],7,{hp:22,might:7,guard:5,speed:6,dodge:4,rarity:0.5},basicLoot);
	new Game.Monster('Disgruntled cleaning lady','disgruntledCleaningLady',[2,2],4,{hp:13,might:4,guard:5,speed:7,dodge:6,rarity:0.3},basicLoot);
	new Game.Monster('Corrupted grandma','corruptedgrandma',[5,2],4,{hp:30,might:4,guard:5,speed:7,dodge:4,rarity:0.32},basicLoot);
	
	new Game.Monster('Sentient Furnace','sentientFurnace',[0,3],0,{hp:60,might:14,guard:12,speed:4,dodge:0,rarity:1},bossLoot);//boss
	Game.Monsters['Sentient Furnace'].onKill=function(){Game.Win('Getting even with the oven');};Game.Monsters['Sentient Furnace'].AI='static';Game.Monsters['Sentient Furnace'].boss=1;Game.Monsters['Sentient Furnace'].quotes={fight:'YOU ARE NOT READY!',defeat:'OH... BURN.'};
	new Game.Monster('Ascended Baking Pod','ascendedBakingPod',[1,3],0,{hp:60,might:12,guard:14,speed:4,dodge:0,rarity:0.7},bossLoot);//boss
	Game.Monsters['Ascended Baking Pod'].onKill=function(){Game.Win('Now this is pod-smashing');};Game.Monsters['Ascended Baking Pod'].AI='static';Game.Monsters['Ascended Baking Pod'].boss=1;Game.Monsters['Ascended Baking Pod'].quotes={fight:'rrrrrrrise.',defeat:'blrglblg.'};
	new Game.Monster('Sentient Furnace II','sentientFurnace2',[2,3],0,{hp:220,might:20,guard:24,speed:8,dodge:0,rarity:1.2},bossLoot);//boss
	Game.Monsters['Sentient Furnace II'].onKill=function(){Game.Win('Getting even with the oven');Game.Win('Tier up = Difficulty^2');};Game.Monsters['Sentient Furnace II'].AI='static';Game.Monsters['Sentient Furnace II'].boss=1;Game.Monsters['Sentient Furnace II'].quotes={fight:'YOU ARE NOT READY! I AM WAY STRONGER NOW!',defeat:'OH... BURN.'};
	new Game.Monster('Ascended Baking Pod II','ascendedBakingPod2',[3,3],0,{hp:220,might:18,guard:30,speed:7,dodge:0,rarity:0.7},bossLoot);//boss
	Game.Monsters['Ascended Baking Pod II'].onKill=function(){Game.Win('Now this is pod-smashing');Game.Win('Tier up = Difficulty^2');};Game.Monsters['Ascended Baking Pod II'].AI='static';Game.Monsters['Ascended Baking Pod II'].boss=1;Game.Monsters['Ascended Baking Pod II'].quotes={fight:'rrrrrrrise. Now I am STRONGER!',defeat:'blrglblg. fussssss'};
	
	
	Game.BossMonsters=[];
	for (var i in Game.Monsters)
	{
		if (Game.Monsters[i].boss) Game.BossMonsters.push(Game.Monsters[i]);
	}
	
	/*=====================================================================================
	ENTITY MECHANICS
	=======================================================================================*/
	
	Game.Entity=function(type,subtype,dungeon,pic,stats)//objects you could find on the map : doors, mobs, interactables, items, player, exits...
	{
		this.type=type;
		this.subtype=subtype||'';
		this.dungeon=dungeon;
		this.pic=pic||[0,0];
		this.stats={};
		for (var i in stats)
		{this.stats[i]=stats[i];}
		
		this.x=-1;
		this.y=-1;
		this.obstacle=0;
		this.zIndex=1;
		if (this.type=='monster')
		{
			this.obstacle=1;
			this.pic=[Game.Monsters[this.subtype].icon[0],Game.Monsters[this.subtype].icon[1]];
			this.pic[1]+=Game.monsterIconY;
			this.targets=[];
			this.stuck=0;
			this.zIndex=10;
			this.fighting=0;
			this.AI=Game.Monsters[this.subtype].AI||'normal';
			this.onKill=Game.Monsters[this.subtype].onKill||function(){};
			for (var i in Game.Monsters[this.subtype].stats){this.stats[i]=Game.Monsters[this.subtype].stats[i];}
		}
		else if (this.type=='hero')
		{
			this.obstacle=1;
			this.pic=[Game.Heroes[this.subtype].icon[0],Game.Heroes[this.subtype].icon[1]];
			this.targets=[];
			this.stuck=0;
			this.zIndex=100;
			this.fighting=0;
			for (var i in Game.Heroes[this.subtype].stats){this.stats[i]=Game.Heroes[this.subtype].stats[i];}
			
			//increase stats by amount of matching building (change that later to use gear instead)
			var mult=Math.max(0,(Game.Objects[this.dungeon.type].amount/20-1));
			this.stats.hpm+=Math.ceil(mult*2);
			this.stats.hp=this.stats.hpm;
			this.stats.might+=mult/1.75;
			this.stats.guard+=mult/1.75;
			this.stats.speed+=mult/1.75;
			if(Game.Heroes[this.subtype].name!='Chad'){
			this.stats.dodge+=mult/1.75;
			}
		}
		else if (this.type=='item')
		{
			this.zIndex=5;
			this.value=0;
		}
		else if (this.type=='destructible')//crates, doors
		{
			this.obstacle=1;
			this.life=3;
			this.zIndex=15;
			if (this.subtype=='door') this.pic=[0,7];
			else this.pic=[Math.floor(Math.random()*4+2),7];
			
			this.onKill=function()
			{
				if (this.subtype=='random')
				{
					var value=Math.round(Math.pow(Math.random(),6)*(10+this.dungeon.level))*(Game.prestige+1);
					if (value>0)
					{
						var entity=this.dungeon.AddEntity('item','cookies',this.x,this.y);
						entity.value=value;
					}
				}
			}
		}
		else if (this.type=='special')
		{
			this.zIndex=5;
			this.value='';
			this.obstacle=1;
		}
		
		this.Say=function(what)
		{
			if (this.type=='monster')
			{
				if (Game.Monsters[this.subtype].quotes[what]) this.dungeon.Log(this.subtype+' : "<span style="color:#f96;">'+choose(Game.Monsters[this.subtype].quotes[what].split('|'))+'</span>"');
			}
		}
		this.Draw=function()//return the string to draw this
		{
			var name='?';
			if (this.subtype=='random') name='clutter'; else name=this.subtype;
			if (this.type=='item' && this.subtype=='cookies' && this.value>0)
			{
				if (this.value<2) this.pic=[0,5];
				else if (this.value<3) this.pic=[1,5];
				else if (this.value<4) this.pic=[2,5];
				else if (this.value<6) this.pic=[3,5];
				else if (this.value<10) this.pic=[4,5];
				else if (this.value<20) this.pic=[5,5];
				else if (this.value<30) this.pic=[7,5];
				else if (this.value<70) this.pic=[6,5];
				else if (this.value<200) this.pic=[8,5];
				else this.pic=[6,6];// if (this.value<1000) this.pic=[1,5];
			}
			else if (this.type=='special' && this.subtype=='upgrade')
			{
				if (this.value!='') this.pic=[7,6]; else this.pic=[8,6];
			}
			return '<div class="thing" title="'+name+'" style="z-index:'+(200+this.zIndex)+';left:'+(this.x*16)+'px;top:'+(this.y*16)+'px;background-position:'+(-this.pic[0]*16)+'px '+(-this.pic[1]*16)+'px;"></div>';
		}
		this.Wander=function()//AI to move around aimlessly
		{
			this.targets=[];
			this.targets.push([-1,0],[1,0],[0,-1],[0,1]);
			this.Move();
		}
		this.GoTo=function(x,y)//AI to move to a specific point
		{
			this.targets=[];
			if (this.x<x) this.targets.push([1,0]);
			if (this.x>x) this.targets.push([-1,0]);
			if (this.y<y) this.targets.push([0,1]);
			if (this.y>y) this.targets.push([0,-1]);
			if (!this.Move())//really stuck? try to maneuver laterally!
			{
				this.targets=[];
				if (this.x==x) this.targets.push([1,0],[-1,0]);//somehow this feels inverted... but it doesn't work the other way
				if (this.y==y) this.targets.push([0,1],[0,-1]);//hypothesis : *MAGIC*
				this.Move();
			}
		}
		this.Flee=function(x,y)//AI to run away from a specific point
		{
			this.targets=[];
			if (this.x>x) this.targets.push([1,0]);
			if (this.x<x) this.targets.push([-1,0]);
			if (this.y>y) this.targets.push([0,1]);
			if (this.y<y) this.targets.push([0,-1]);
			if (!this.Move())//really stuck? try to maneuver laterally!
			{
				this.targets=[];
				if (this.x==x) this.targets.push([1,0],[-1,0]);//somehow this feels inverted... but it doesn't work the other way
				if (this.y==y) this.targets.push([0,1],[0,-1]);//hypothesis : *MAGIC*
				this.Move();
			}
		}
		this.Move=function()//AI to move to the target
		{
			if (this.targets.length>0)
			{
				var goodTargets=[];
				if (this.type=='hero') goodTargets=this.targets;
				else
				{
					for (var i in this.targets)
					{
						var thisTarget=this.targets[i];
						if (this.dungeon.CheckObstacle(this.x+thisTarget[0],this.y+thisTarget[1])!=-1) goodTargets.push([thisTarget[0],thisTarget[1]]);
					}
				}
				if (goodTargets.length>0)
				{
					var target=choose(goodTargets);
					var obstacle=this.dungeon.CheckObstacle(this.x+target[0],this.y+target[1]);
					if (obstacle==this) obstacle=0;
					if (obstacle==0 && this.AI!='static')
					{
						this.x+=target[0];
						this.y+=target[1];
					}
					else this.stuck+=2;
					if (obstacle!=0 && obstacle!=-1)
					{
						obstacle.HitBy(this);
					}
					if (obstacle==-1) return 0;
				}
				else {this.stuck+=2;return 0;}
				if (this.AI=='static') this.stuck=0;
				return 1;
			}
			return 0;
		}
		this.HitBy=function(by)//attacked by another entity
		{
			if (this.type=='destructible' && by.type=='hero')//break destructibles
			{
				by.stuck=0;
				if(Game.Heroes[by.subtype].name=='Chad'){
				this.life-=1.5; //The only one that can destroy doors within 2 hits.
				}else{
				this.life--;	
				}
				if (this.life<=0)
				{
					if (this.onKill) this.onKill();
					this.Destroy();
				}
				else this.pic=[this.pic[0],this.pic[1]+1];
			}
			else if (this.type=='special' && this.subtype=='upgrade')//upgrade relic
			{
				this.obstacle=0;
				if (Game.Upgrades[this.value]) Game.Upgrades[this.value].earn();
				this.value='';
			}
			else if ((this.type=='monster' && by.type=='hero') || (this.type=='hero' && by.type=='monster') && this.stats.hp>0)//it's a fight!
			{
				by.stuck=0;
				
				var monster=(this.type=='hero'?by:this);
				var hero=(this.type=='hero'?this:by);
				this.dungeon.currentOpponent=monster;
				
				if (monster.fighting==0)//first meeting
				{
					Game.Heroes[hero.subtype].Say('meet '+Game.Monsters[monster.subtype].name);
					this.Say('fight');
				}
				if (this.fighting==0)
				{
					this.fighting=1;
					by.fighting=1;
				}
				
				var attackStr='';
				var attackerName='';
				var defenderName='';
				if (by.type=='hero') attackerName=Game.Heroes[by.subtype].name;
				else if (by.type=='monster') attackerName=Game.Monsters[by.subtype].name;
				if (this.type=='hero') defenderName=Game.Heroes[this.subtype].name;
				else if (this.type=='monster') defenderName=Game.Monsters[this.subtype].name;
				
				//battle formulas (have fun with these)
				attackStr+=attackerName+' swings at '+defenderName+'!';
				var damage=Math.round(Math.max(1,Math.min(by.stats.might,Math.pow(((by.stats.might+2.5)/Math.max(1,this.stats.guard)),2)))*(0.8+Math.random()*0.4+Math.pow(Math.random()*0.8,6)));
				var dodge=Math.random()>(by.stats.speed/Math.max(1,this.stats.dodge+2.5));
				if (dodge)
				{
					attackStr+=' '+defenderName+' dodged the attack.';
				}
				else
				{
					if(attackerName!='Chad'){
					if (by.stats.luck && by.type=='hero' && Math.random()<by.stats.luck*0.01) {damage*=2;attackStr+=' <b>It\'s a critical!</b>';}//very rare critical based on luck
					attackStr+=' <b>'+damage+'</b> damage!';
					}else if(attackerName=='Chad'){
					if (by.stats.luck && by.type=='hero' && Math.random()<by.stats.luck*0.01) {damage*=3;attackStr+=' <b>It\'s a critical!</b>';}//very rare critical based on luck. x3 only for Chad
					attackStr+=' <b>'+damage+'</b> damage!';	
					}
					
					this.stats.hp-=damage;
					this.stats.hp=Math.max(this.stats.hp,0);
					if (this.stats.luck && this.type=='hero')
					{
						if (this.stats.hp==0 && Math.random()<this.stats.luck*0.01) {this.stats.hp=1;attackStr+=' '+defenderName+' was saved from certain death!';}//very rare life-saving based on luck
					}
				}
				
				if (this.type=='hero') attackStr='<span style="color:#f99;">'+attackStr+'</span>';
				if (attackStr!='') this.dungeon.Log(attackStr);
				
				if (this.stats.hp<=0)//die
				{
					this.dungeon.Log(attackerName+' crushed '+defenderName+'!');
					if (this.type=='hero')
					{
						Game.Heroes[this.subtype].Say('defeat');
						this.dungeon.Log('<span style="color:#f66;">'+Game.Heroes[this.subtype].name+' has been defeated.</span>');
						this.dungeon.FailLevel();
					}
					if (this.type=='monster' && by.type=='hero')
					{
						l('monsterSlot'+this.dungeon.id).style.visibility='hidden';
						this.dungeon.monstersKilledThisRun+=1;
						if (Math.random()<0.05) Game.Heroes[by.subtype].Say('win');
						Game.Heroes[by.subtype].Say('win against '+Game.Monsters[this.subtype].name);
						this.Say('defeat');
						if (Game.Monsters[this.subtype].loot)
						{
							var loot=Game.Monsters[this.subtype].loot;
							if (loot.gear && (!loot.gear.prob || Math.random()<loot.gear.prob)) {}//drop gear
							if (loot.cookies && (!loot.cookies.prob || Math.random()<loot.cookies.prob))
							{
								var entity=this.dungeon.AddEntity('item','cookies',this.x,this.y);//drop cookies
								entity.value=Math.round(loot.cookies.min+Math.random()*(loot.cookies.max-loot.cookies.min));
							}
						}
						if (this.onKill) this.onKill();
						this.Destroy();
					}
				}
			}
		}
		this.Turn=function()//do this every turn (walk around, heal up...)
		{
			if (this.type=='monster')
			{
				var howManyTurns=this.GetInitiative();
				for (var i=0;i<howManyTurns;i++)
				{
					if (1==1)//this.AI!='static')
					{
						if (this.AI=='flee') this.Flee(this.dungeon.heroEntity.x,this.dungeon.heroEntity.y);//flee from the player
						else
						{
							this.GoTo(this.dungeon.heroEntity.x,this.dungeon.heroEntity.y);//track the player
							if (this.stuck || this.targets.length==[]) this.Wander();//can't reach the player? walk around randomly
						}
					}
				}
			}
			if (this.type=='monster' || this.type=='hero')
			{
				if (this.stuck>0) this.stuck--;
				this.stuck=Math.min(10,this.stuck);
				this.targets=[];
			}
			if ((this.type=='hero' || this.type=='monster') && this.fighting==0 && this.stats.hp<this.stats.hpm) this.stats.hp++;//heal up
			if (this.type=='hero')//collect items and cookies
			{
				var entities=this.dungeon.GetEntities(this.x,this.y);
				for (var i in entities)
				{
					if (entities[i].type=='item' && entities[i].subtype=='cookies')
					{
						var entity=entities[i];
						var value=Math.ceil(entity.value*Game.Objects[this.dungeon.type].amount*50*(1+Math.random()*((this.stats.luck)/20)));//temporary; scale with matching building CpS later
						if (value>0)
						{
							this.dungeon.Log('<span style="color:#9f9;">Found <b>'+Beautify(value)+'</b> cookie'+(value==1?'':'s')+'!</span>');
							this.dungeon.cookiesMadeThisRun+=value;
							Game.Earn(value);
						}
						entity.Destroy();
					}
				}
			}
			if (this.type=='hero') this.fighting=0;
		}
		this.Destroy=function()
		{
			this.dungeon.entities.splice(this.dungeon.entities.indexOf(this),1);
		}
		this.GetInitiative=function()
		{
			return randomFloor((this.stats.speed/5)*(1/Math.max(1,(this.dungeon.heroEntity.stats.speed/5))));
		}
	}
	
	/*=====================================================================================
	DUNGEON MECHANICS
	=======================================================================================*/
	
	Game.Dungeons=[];
	Game.Dungeon=function(type,id)
	{
		this.type=type;
		this.id=id;
		Game.Dungeons[this.id]=this;
		this.log=[];
		this.logNew=0;
		this.name=Game.DungeonTypes[this.type].nameGenerator();
		this.hero=null;
		this.currentOpponent=0;
		this.level=0;
		this.auto=1;
		this.portalPic='';
		
		this.cookiesMadeThisRun=0;
		this.monstersKilledThisRun=0;
		
		this.Log=function(what,nested)
		{
			if (typeof what==='string')
			{
				this.log.unshift(what);
				this.logNew++;
			}
			else {for (var i in what) {this.Log(what[i],1);}}
			//if (!nested) this.UpdateLog();
		}
		
		this.UpdateLog=function()
		{
			this.log=this.log.slice(0,30);
			var str='';
			for (var i in this.log)
			{
				if (i<this.logNew) str+='<div class="new">'+this.log[i]+'</div>';
				else str+='<div>'+this.log[i]+'</div>';
			}
			this.logNew=0;
			l('dungeonLog'+this.id).innerHTML=str;
		}
		
		this.entities=[];
		this.GetEntities=function(x,y)//returns the first entity found on tile x,y
		{
			var entities=[];
			for (var i in this.entities) {if (this.entities[i].x==x && this.entities[i].y==y) entities.push(this.entities[i]);}
			return entities;
		}
		this.AddEntity=function(type,subtype,x,y)
		{
			//this.RemoveEntities(x,y);
			var entity=new Game.Entity(type,subtype,this);
			entity.x=x;
			entity.y=y;
			entity.dungeon=this;
			this.entities.push(entity);
			return entity;
		}
		this.RemoveEntities=function(x,y)
		{
			var entities=this.GetEntities(x,y);
			for (var i in entities)
			{
				entities[i].Destroy();
			}
		}
		this.DrawEntities=function()
		{
			var str='';
			for (var i in this.entities) {str+=this.entities[i].Draw();}
			return str;
		}
		
		this.CheckObstacle=function(x,y)//returns 0 for no obstacle; -1 for a wall; an entity if there's at least one entity on this tile
		{
			if (x<0 || x>=this.map.w || y<0 || y>=this.map.h) return -1;
			var entities=this.GetEntities(x,y);
			for (var i in entities)
			{
				if (entities[i].obstacle) return entities[i];
			}
			return this.map.isObstacle(x,y)?-1:0;
		}
		
		
		this.map={};
		this.Generate=function()
		{
			if(bunnyTheme==0){
			theme=Math.round(Math.random()*5);
			Dungtheme();
			}else if(bunnyTheme>=1){
				theme=6;
			Dungtheme();
			}
			if (this.level==0) this.name=Game.DungeonTypes[this.type].nameGenerator();
			this.entities=[];
			var M=new D.Map(46,46,Math.random(),{
				roomSize:10,
				corridorSize:5,
				fillRatio:1/2,
				corridorRatio:0.3,
				pillarRatio:Math.random()*0.8+0.2,
				waterRatio:Math.random(),
				branching:Math.ceil(Math.random()*6),
				sizeVariance:0.4
			});
			r=0;
			while (r!=1)
			{
				r=M.dig();
			}
			//all done! decorate and render.
			M.finish();
			//spawn treasure
			/*
			for (var i in M.rooms)
			{
				if (M.rooms[i].freeTiles>1)
				{
					for (var ii=0;ii<Math.ceil(Math.sqrt(M.rooms[i].freeTiles*(M.rooms[i].gen*0.25+0.1))/2);ii++)
					{
						if (Math.random()<0.95 && M.rooms[i].freeTiles>1)
						{
							var spot=M.getBestSpotInRoom(M.rooms[i]);
							M.data[spot.x][spot.y][0]=0;
							spot.score=0;
							M.rooms[i].freeTiles--;
						}
					}
				}
			}*/
			
			for (var i in M.doors)//place door entities on door positions
			{
				//M.data[M.doors[i][0]][M.doors[i][1]][0]=TILE_FLOOR_EDGE;
				this.AddEntity('destructible','door',M.doors[i][0],M.doors[i][1]);
			}
			//set tile graphics
			for (var i in M.rooms)
			{
				var altStr=choose(['alt ','green ','']);
				var tiles={
				'void':altStr+'void',
				'wall':altStr+'wall',
				'wall corner':altStr+'wall corner',
				'floor':altStr+'tiled floor',
				'floor edges':altStr+'floor',//choose([altStr+'floor',altStr+'floor edges']),
				'door':altStr+'door',
				'water':choose(['water','green water','dark water']),
				'pillar':choose([altStr+'wall',altStr+'round pillar',altStr+'square pillar',altStr+'potted plant','conveyor belt']),
				'entrance':altStr+'entrance',
				'exit':altStr+'exit',
				};
				if (Math.random()<0.1) {tiles['wall corner']='wooden wall';tiles['wall']='wooden wall';tiles['floor edges']='wooden floor';tiles['pillar']='wooden wall';}
				if (Math.random()<0.1) {tiles['wall corner']=altStr+'bookshelf';tiles['wall']=altStr+'bookshelf';tiles['pillar']=altStr+'bookshelf';}
				M.assignTiles(M.rooms[i],tiles);
			}
			this.map=M;
			this.map.str=this.map.getStr();
			
			//place a boss
			var tile=this.map.exit;
			var monsters=[];
			for (var ii in Game.BossMonsters)
			{
				if(stg<=100){
				var me=Game.BossMonsters[ii];
				if (me.level<=(depth+this.level) && Math.random()<(me.stats.rarity||1)) monsters.push(me.name);
				}else{
					var me=Game.BossMonsters[ii];
				if (me.level<=(depth+this.level) && me.name.endswith(" II") && Math.random()<(me.stats.rarity||1)) monsters.push(me.name);
				}
			}
			//if(stg<=100){if (monsters.length==0) monsters=[choose(Game.BossMonsters).name];}
			//else{if (monsters.length==0) monsters=[choose(Game.BossMonsters).name+" II"];};
			if (monsters.length==0) monsters=[choose(Game.BossMonsters).name];
			
			if (monsters.length>0)
			{
				if(stg>=100){
					do{
						monsters=[choose(Game.BossMonsters).name];
						var chosen=monsters;
					}while(chosen!='Ascended Baking Pod II' && chosen!='Sentient Furnace II');
				}else{
					do{
						monsters=[choose(Game.BossMonsters).name];
						var chosen=monsters;
					}while(chosen=='Ascended Baking Pod II' || chosen=='Sentient Furnace II');
				}
				this.AddEntity('monster',choose(monsters),tile[0],tile[1]);
				this.map.removeFreeTile(tile[0],tile[1]);
			}
			
			//place relics
			/*
			var tile=this.map.getBestSpotInRoom(this.map.getRoom(this.map.exit[0],this.map.exit[1]));
			var entity=this.AddEntity('special','upgrade',tile.x,tile.y);
			entity.value='Dungeon cookie upgrade';
			this.map.removeFreeTile(tile.x,tile.y);
			for (var i=0;i<Math.floor(Math.pow(Math.random(),2)*3);i++)
			{
				var room=choose(this.map.rooms);
				if (room.freeTiles.length>10)
				{
					var tile=this.map.getBestSpotInRoom(room);
					var entity=this.AddEntity('special','upgrade',tile.x,tile.y);
					entity.value='Dungeon cookie upgrade';
					this.map.removeFreeTile(tile.x,tile.y);
				}
			}*/
			
			//sprinkle monsters and treasure
			for (var i=0;i<Math.ceil(this.map.freeTiles.length*0.7);i++)//let's fill this up with A LOT of stuff
			{
				var tile=choose(this.map.freeTiles);
				if (tile!=-1)
				{
					var room=this.map.getRoom(tile[0],tile[1]);
					var depth=room.gen+1;
					if (Math.random()<0.2)//2 in 10 spawns are monsters
					{
						var monsters=[];
						for (var ii in Game.Monsters)
						{
							var me=Game.Monsters[ii];
							if (me.level!=0 && me.level<=(depth+this.level) && Math.random()<(me.stats.rarity||1)) monsters.push(me.name);//spawn type depending on monster level and rarity
						}
						if (monsters.length>0)
						{
							this.AddEntity('monster',choose(monsters),tile[0],tile[1]);
							this.map.removeFreeTile(tile[0],tile[1]);
						}
					}
					else//the rest of the spawns are destructibles or loot
					{
						if (Math.random()<0.6)
						{
							var value=(Math.round(Math.pow(Math.random(),6)*(10+this.level)))*(Game.prestige+1);
							if (value>0)
							{
								var entity=this.AddEntity('item','cookies',tile[0],tile[1]);//random cookies
								entity.value=value;
							}
						}
						else this.AddEntity('destructible','random',tile[0],tile[1]);//random crates etc
						this.map.removeFreeTile(tile[0],tile[1]);
					}
				}
			}
		}
		
		this.onTile=-1;
		
		this.Draw=function()
		{
			var str='';
			var x=-this.hero.x;
			var y=-this.hero.y;
			str+='<div id="map'+this.id+'" class="map" style="width:'+(9*16)+'px;height:'+(9*16)+'px;"><div class="mapContainer" id="mapcontainer'+this.id+'" style="position:absolute;left:'+(x*16)+'px;top:'+(y*16)+'px;"><div id="mapitems'+this.id+'"></div>'+this.map.str+'</div></div>';
			str+='<div style="position:absolute;left:'+(9*16+16)+'px;">'+
			'<a class="control west" onclick="Game.HeroesById['+this.hero.id+'].Move(-1,0);"></a><br>'+
			'<a class="control east" onclick="Game.HeroesById['+this.hero.id+'].Move(1,0);"></a><br>'+
			'<a class="control north" onclick="Game.HeroesById['+this.hero.id+'].Move(0,-1);"></a><br>'+
			'<a class="control south" onclick="Game.HeroesById['+this.hero.id+'].Move(0,1);"></a><br>'+
			'<a class="control middle" onclick="Game.HeroesById['+this.hero.id+'].Move(0,0);"></a><br>'+
			'</div>';
			str+='<div style="position:absolute;left:'+(9*16+16+48*3)+'px;bottom:16px;height:100%;">'+
			'<div class="dungeonName"><a onclick="Game.ObjectsById['+this.id+'].setSpecial(0);">Exit</a> - <span class="title" style="font-size:12px;">'+this.name+'</span> lvl.'+(this.level+1)+'</div>'+
			'<div id="heroSlot'+this.id+'" class="mobSlot"><div id="picHero'+this.id+'" class="mobPic"></div><div id="nameHero'+this.id+'" class="title mobName"></div><div class="hpmBar"><div id="hpHero'+this.id+'" class="hpBar"></div></div></div>'+
			'<div id="monsterSlot'+this.id+'" class="mobSlot" style="left:128px;"><div id="picMonster'+this.id+'" class="mobPic"></div><div id="nameMonster'+this.id+'" class="title mobName"></div><div class="hpmBar"><div id="hpMonster'+this.id+'" class="hpBar"></div></div></div>'+
			'</div>'+
			'<div id="dungeonLog'+this.id+'" class="dungeonLog"></div>';
			l('rowSpecial'+this.id).innerHTML='<div style="width:100%;height:100%;z-index:10000;position:absolute;left:0px;top:0px;">'+str+'</div>';
			
			l('picHero'+this.id).style.backgroundImage='url(https://pipe.miroware.io/5db9be8a56a97834b159fd5b/Dungeons2/img/'+this.hero.portrait+'.png)';
			l('nameHero'+this.id).innerHTML=this.hero.name;
		}
		this.Refresh=function()
		{
			if (!l('mapcontainer'+this.id)) this.Draw();
			var x=4-this.hero.x;
			var y=4-this.hero.y;
			l('mapcontainer'+this.id).style.left=(x*16)+'px';
			l('mapcontainer'+this.id).style.top=(y*16)+'px';
			l('mapitems'+this.id).innerHTML=this.DrawEntities();
		}
		this.RedrawMap=function()
		{
			this.map.str=this.map.getStr();
			this.Draw();
		}
		this.Turn=function()
		{
			for (var i in this.entities)
			{
				if (this.entities[i] && this.entities[i].type) this.entities[i].Turn();
			}
			if (this.currentOpponent)
			{
				l('monsterSlot'+this.id).style.visibility='visible';
				l('hpMonster'+this.id).style.width=Math.round((this.currentOpponent.stats.hp/this.currentOpponent.stats.hpm)*100)+'%';
				l('picMonster'+this.id).style.backgroundImage='url(http://pipe.miroware.io/5db9be8a56a97834b159fd5b/Dungeons2/img/'+Game.Monsters[this.currentOpponent.subtype].pic+'.png)';
				l('nameMonster'+this.id).innerHTML=Game.Monsters[this.currentOpponent.subtype].name;
				l('picHero'+this.id).style.backgroundImage='url(https://pipe.miroware.io/5db9be8a56a97834b159fd5b/Dungeons2/img/'+this.hero.pic+'.png)';
			}
			else
			{
				l('monsterSlot'+this.id).style.visibility='hidden';
				l('hpMonster'+this.id).style.width='100%';
				l('picHero'+this.id).style.backgroundImage='url(https://pipe.miroware.io/5db9be8a56a97834b159fd5b/Dungeons2/img/'+this.hero.portrait+'.png)';
			}
			this.currentOpponent=0;
			l('hpHero'+this.id).style.width=Math.round((this.heroEntity.stats.hp/this.heroEntity.stats.hpm)*100)+'%';
				
			this.Refresh();
			this.UpdateLog();
			
			if (this.hero.x==this.map.exit[0] && this.hero.y==this.map.exit[1])
			{
				this.CompleteLevel();
			}
		}
		
		this.DrawButton=function()
		{
			var str='';
			//str+='<div style="text-align:center;margin:48px auto;color:#999;"><a onclick="Game.ObjectsById['+this.id+'].setSpecial(1);">Enter</a></div>';
			str+='<div style="width:144px;height:144px;position:absolute;left:0px;bottom:0px;"><a class="specialButtonPic" style="background-image:url(img/'+this.portalPic+'.png);" onclick="Game.ObjectsById['+this.id+'].setSpecial(1);"><div class="specialButtonText">Enter dungeons</div></a></div>';
			return str;
		}
		
		this.CompleteLevel=function()
		{
			if(this.level>=75 & mimicsIntro==0){ //Mimics appear since L75
			new Game.Monster('Mimic','mimic',[2,-3],1,{hp:90,might:3,guard:22,speed:3,dodge:0,rarity:0.2},basicLoot);
	Game.Monsters['Mimic'].AI='static';
	new Game.Monster('mimic','mimic1',[4,-3],1,{hp:40,might:5,guard:8,speed:3,dodge:0,rarity:0.2},basicLoot);
	Game.Monsters['mimic'].AI='static';
				mimicsIntro++;
			}
			if(this.level>=175 & shieldedIntro==0){ //Shielded general monsters appear since L175. It is ok if you will still face unshielded one :)
	new Game.Monster('Shielded doughling','Shdoughling',[0,1],1,{hp:8,might:2,guard:23,speed:6,dodge:6,rarity:0.7},basicLoot);
	new Game.Monster('Shielded elder doughling','ShelderDoughling',[1,1],7,{hp:23,might:7,guard:28,speed:4,dodge:4,rarity:0.7},goodLoot);
	new Game.Monster('Shielded outdated E.d.','ShoutdatedelderDoughling',[2,1],7,{hp:20,might:7,guard:24,speed:1,dodge:0,rarity:0.2},goodLoot);
	Game.Monsters['Shielded outdated E.d.'].onKill=function(){extraDmg--;};Game.Monsters['Shielded outdated E.d.'].quotes={fight:'Reeeeh',defeat:'Destroyed doughling unleashed old disgusting smell. Hero attacks are weaker until Boss isn\'t defeated.'};
	new Game.Monster('Shielded Anc. E.d.','ShancientelderDoughling',[3,1],7,{hp:53,might:17,guard:37,speed:2,dodge:0,rarity:0.011},chestLoot);
	Game.Monsters['Shielded Anc. E.d.'].onKill=function(){extraDmg--;};Game.Monsters['Shielded Anc. E.d.'].quotes={fight:'Reeeeh',defeat:'Destroyed doughling unleashed old disgusting smell. Hero attacks are weaker until Boss isn\'t defeated.'};
	Game.Monsters['Shielded Anc. E.d.'].onKill=function(){Game.Win('Antic');extraDmg=extraDmg-1.5;};Game.Monsters['Shielded Anc. E.d.'].quotes={fight:'Reeeeh',defeat:'The spirit of the ancient seeps into the hero increasing its max health by 1 and healing 15HP. For the cookies!'};
	new Game.Monster('Shielded angry sen. cookie','ShangrySentientCookie',[5,1],5,{hp:19,might:8,guard:25,speed:5,dodge:5,rarity:1},basicLoot);
	new Game.Monster('Shielded baby sen. cookie','babySentientCookie',[4,1],1,{hp:6,might:1,guard:22,speed:7,dodge:7,rarity:1},basicLoot);
	new Game.Monster('Shielded burnt sen. cookie','ShburntSentientCookie',[6,1],5,{hp:19,might:12,guard:23,speed:3,dodge:2,rarity:0.2},basicLoot);
	new Game.Monster('Shielded raw sen. cookie','ShrawSentientCookie',[5,1],5,{hp:19,might:6,guard:25,speed:7,dodge:7,rarity:0.2},basicLoot);
				shieldedIntro++;
			}
			this.hero.Say('completion');
			this.level++;
			stg=this.level;
			this.Generate();
			Game.HeroesById[0].EnterDungeon(this,this.map.entrance[0],this.map.entrance[1]);
			this.Draw();
			extraDmg=0;
		}
		this.FailLevel=function()
		{
			this.Log('Cookies made this run : '+Beautify(this.cookiesMadeThisRun)+' | Monsters defeated this run : '+Beautify(this.monstersKilledThisRun));
			this.cookiesMadeThisRun=0;
			this.monstersKilledThisRun=0;
			this.level=0;
			this.Generate();
			Game.HeroesById[0].EnterDungeon(this,this.map.entrance[0],this.map.entrance[1]);
			this.Draw();
		}
	}
	
	Game.DungeonLocationChain=function(map,x,y)//return an array of the rooms between the root room and this tile's room, inclusive
	{//we shouldn't need all this if we used A*...
		var room=map.getRoom(x,y);
		var chain=[];
		if (room!=-1)
		{
			while (room.parent)
			{
				chain.push(room);
				room=room.parent;
			}
		}
		chain.reverse();
		return chain;
	}
	Game.DungeonLinkLocationChains=function(start,end)//return the room in which the first location chain should go to to get closer to the second location chain
	{
		/*
		4 cases
		-we're already in the same room
		-the target is in a different branch
		-the target is above in the same branch
		-the target is below in the same branch
		*/
		start.reverse();
		end.reverse();
		if (start[0].id==end[0].id) return start[start.length-1];//same room
		for (var i in end)
		{
			if (start[0]==end[i].parent) return end[i];//inferior branch, go to the inferior room
		}
		if (start.length>1) return start[1];//different or superior branch, go to the superior room
		return start[0];//eeeh, let's just stay in the same room
	}
	
	/*=====================================================================================
	CREATE DUNGEONS
	=======================================================================================*/
	Game.Objects['Factory'].special=function()
	{
		this.dungeon=new Game.Dungeon('Factory',this.id);
		this.dungeon.Generate();
		this.specialDrawFunction=function(){this.dungeon.Refresh();};
		this.drawSpecialButton=function(){return this.dungeon.DrawButton();};
		this.dungeon.timer=0;
		this.dungeon.timerWarmup=5;
		this.dungeon.portalPic='dungeonFactory';
		
		this.EachFrame=function()
		{
			if (this.dungeon.auto)
			{
				if (this.dungeon.timer>0) this.dungeon.timer--;
				if (this.dungeon.timer==0)
				{
					this.dungeon.timer=Game.fps*(Math.max(0.1,2-(this.dungeon.hero.stats.speed*0.2))+Math.max(this.dungeon.timerWarmup,0));
					if (this.dungeon.timerWarmup>0) this.dungeon.timerWarmup--;
					
					var dungeon=this.dungeon;
					var hero=dungeon.heroEntity;
					
					var targetRoom=Game.DungeonLinkLocationChains(Game.DungeonLocationChain(dungeon.map,hero.x,hero.y),Game.DungeonLocationChain(dungeon.map,dungeon.map.exit[0],dungeon.map.exit[1]));
					var targetTile=(targetRoom.gen==0 || targetRoom.id==dungeon.map.getRoom(hero.x,hero.y).id)?[dungeon.map.exit[0],dungeon.map.exit[1]]:targetRoom.door;
					hero.GoTo(targetTile[0],targetTile[1]);
					if (hero.stuck) hero.Wander();
					dungeon.hero.x=hero.x;
					dungeon.hero.y=hero.y;
					dungeon.Turn();
				}
			}
		}
		
		if (document.addEventListener)//clean this up later
		{
			l('rowSpecial'+this.dungeon.id).removeEventListener('keydown',arguments.callee,false);
			l('rowSpecial'+this.dungeon.id).addEventListener('keydown',function(event)
			{
				var dungeon=Game.Objects['Factory'].dungeon;
				var control=0;
				if (event.keyCode==37) {dungeon.hero.Move(-1,0);control=1;}
				else if (event.keyCode==38) {dungeon.hero.Move(0,-1);control=1;}
				else if (event.keyCode==39) {dungeon.hero.Move(1,0);control=1;}
				else if (event.keyCode==40) {dungeon.hero.Move(0,1);control=1;}
				else if (event.keyCode==32) {dungeon.hero.Move(0,0);control=1;}//space
				else if (event.keyCode==65)//A (auto)
				{
					if (dungeon.auto)
					{
						dungeon.auto=0;
						dungeon.timerWarmup=-1;
					}
					else
					{
						dungeon.auto=1;
						dungeon.timer=0;
						dungeon.timerWarmup=0;
					}
					event.preventDefault();
				}
				
				if (control)
				{
					event.preventDefault();
					dungeon.timer=Game.fps*10;
					dungeon.timerWarmup=5;
				}
			}
			);
		}
		
		var hero=choose(Game.HeroesById);
		hero.EnterDungeon(this.dungeon,this.dungeon.map.entrance[0],this.dungeon.map.entrance[1]);
	}
	
	/*=====================================================================================
	HEROES
	=======================================================================================*/
	Game.Heroes=[];
	Game.HeroesById=[];
	Game.Hero=function(name,pic,portrait,icon)
	{
		this.name=name;
		this.pic=pic;
		this.portrait=portrait;
		this.icon=icon;
		this.stats={
			hp:25,
			hpm:25,
			might:5+extraDmg,
			guard:5,
			speed:5,
			dodge:5,
			luck:5
		};
		this.dialogue={
			'greeting':'Oh hey.|Sup.',
			'entrance':'Here we go.|So exciting.',
			'completion':'That was easy.|All done here.',
			'defeat':'Welp.|Better luck next time.'
		};
		this.gear={
			'armor':-1,
			'weapon':-1
		};
		this.inDungeon=-1;
		this.completedDungeons=0;
		
		this.x=0;
		this.y=0;
		
		this.EnterDungeon=function(dungeon,x,y)
		{
			this.inDungeon=dungeon.id;
			dungeon.hero=this;
			this.x=x;
			this.y=y;
			dungeon.heroEntity=dungeon.AddEntity('hero',dungeon.hero.name,x,y);
			var room=dungeon.map.getRoom(this.x,this.y);
			if (room!=-1 && room.hidden) {room.hidden=0;dungeon.RedrawMap();}
			Game.Dungeons[this.inDungeon].Refresh();
			dungeon.Log('--------------------');
			if (dungeon.level==0) this.Say('greeting');
			this.Say('entrance');
			l('monsterSlot'+dungeon.id).style.visibility='hidden';
		}
		this.Move=function(x,y)
		{
			var dungeon=Game.Dungeons[this.inDungeon];
			dungeon.heroEntity.targets=[[x,y]];
			if (dungeon.heroEntity.Move())
			{
				this.x=dungeon.heroEntity.x;
				this.y=dungeon.heroEntity.y;
				dungeon.Turn();
			}
		}
		
		this.Say=function(what)
		{
			if (this.dialogue[what]) Game.Dungeons[this.inDungeon].Log(this.name+' : "<span style="color:#99f;">'+choose(this.dialogue[what].split('|'))+'</span>"');
		}
		
		this.save=function()
		{
			var str='';
			str+=
			this.inDungeon+','+
			this.completedDungeons+','+
			this.gear.armor+','+
			this.gear.weapon
			;
			return str;
		}
		this.load=function(data)
		{
			var str=data.split(',');
			this.inDungeon=parseInt(str[0]);
			this.completedDungeons=parseInt(str[1]);
			this.gear.armor=parseInt(str[2]);
			this.gear.weapon=parseInt(str[3]);
		}
		this.id=Game.HeroesById.length;
		Game.HeroesById.push(this);
		Game.Heroes[this.name]=this;
	}
	
	/*=====================================================================================
	CREATE HEROES
	=======================================================================================*/
	var hero=new Game.Hero('Chad','boyscoutChad','portraitChad',[6,0]);
	hero.dialogue={
		'intro':'Chad the Cookieclad at your service!|I am Chad.',
		'greeting':'I can\'t wait anymore till my fist will crush some doughlings.|Boxing time!|I am slow but heavy.',
		'win':'Take that!|Hah!|You r no match against my fists|That\'ll teach you.|BOOM!|WA BEAAM!',
		'entrance':'Chipping in!|Let me prepare for while.|I wonder what I\'ll find!|Hey, this place is new!|This place seems familiar.|Let\'s make it happen.',
		'completion':'See?|Oh yeah!|Let the show continue!|That was easy!|That sure was fun!|I\'m not lost, am I?|Let\'s go further.|More boxing vs douglings? Sure thing|More boxing vs disgruntled workers? Y not?',
		'defeat':'Eek.|Oh gosh|I yield! I yield!|Damn|I\'ll come back with stronger fists.|I think I scraped my knee!|Owie.|Woopsie!|OOF',
		'win against Sentient Furnace':'Oh boy.|Take that you big metal piece of garbage.|Bakery closed today.',
		'meet Ascended Baking Pod':'Hmm. Let me help you outta here.',
		'meet Ascended Baking Pod II':'Hmm. Let me help you outta here.|Your roars just make me stronger!',
		'win against Ascended Baking Pod':'Such a weak pod|That was disturbing.|How I could break your glass cover just with one kick?.|How I could break your glass cover just with one heavy punch?',
		'win against Ascended Baking Pod II':'That was a fight!|That was disturbing.|Yea boi.',
		'win against Mimic':'Nice try!|Good catch but I am still the winner.|BEAAM faker.',
		'win against mimic':'Nice try!|Good catch but I am still the winner.|BEAAM faker.'
	};
	hero.stats={
		hp:10,
		hpm:10,
		might:1.5+extraDmg,
		guard:33,
		speed:0.75,
		dodge:0, //at cost of 3x crits
		luck:3.25
	};
  	var hero=new Game.Hero('Zee','boyscoutZee','portraitZee',[5,0]);
	hero.dialogue={
		'intro':'I\'m Zee! I just really like exploring and modding stuff. Let\'s go have a modding!',
		'greeting':'Hello there!|I\'m ready!|I do not need eyesight to predict your moves!|Adventure!',
		'win':'Take that!|Hah!|You think that I don\'t see makes me lose?|That\'ll teach it',
		'entrance':'Chipping in!|Whatever is this place ik I can deal with it.|I wonder what I\'ll find!|Hey, this place is new!|This place seems familiar.|Let\'s make it happen.',
		'completion':'Smort|Oh yeah!|Let\'s explore some more!|That was easy!|That sure was fun!|I\'m not lost, am I?|More exploring? Sure, why not!',
		'defeat':'B-b-better luck next time.|That really hurt!|I yield! I yield!|That went so abd.|No half-baked excuses next time.|I think I scraped my knee!|Owie.|Woopsie!|OOF',
		'win against Sentient Furnace':'The irony, it burns! (...it\'s funny because it was burning. And made of iron. ...Moving on.)',
		'win against Ascended Baking Pod':'Where is your pod now?|That was disturbing.|Who\'s the man here? Who?!',
		'win against Mimic':'Your texture is just programmed to seem like obstacle!|You can\'t cheat programmer.',
		'win against mimic':'Your texture is just programmed to seem like obstacle!|You can\'t cheat programmer.'
	};
	hero.stats={
		hp:27,
		hpm:32,
		might:5.5+extraDmg,
		guard:4,
		speed:3,
		dodge:8,
		luck:3
	};
	var hero=new Game.Hero('Chip','girlscoutChip','portraitChip',[1,0]);
	hero.dialogue={
		'intro':'I\'m Chip! I just really like exploring stuff. Let\'s go have an adventure!',
		'greeting':'Hello there!|I\'m ready!|Where are we going today?|Adventure!',
		'win':'Take that!|Hah!|That\'s right.',
		'entrance':'Chipping in!|Welp, here goes nothing!|I wonder what I\'ll find!|Hey, this place is new!|This place seems familiar.|Let\'s make it happen.',
		'completion':'I\'m one smart cookie.|Oh yeah!|Let\'s explore some more!|That was easy!|That sure was fun!|I\'m not lost, am I?|More exploring? Sure, why not!',
		'defeat':'B-better luck next time.|That really hurt!|I yield! I yield!|That went badly.|No half-baked excuses next time.|I think I scraped my knee!|Owie.|Woopsie!',
		'win against Sentient Furnace':'The irony, it burns! (...it\'s funny because it was burning. And made of iron. ...Moving on.)',
		'win against Ascended Baking Pod':'Where is your pod now?|That was disturbing.',
		'win against Mimic':'Oh you fakey.|Nice try.|Oh nice camouflage.',
		'win against mimic':'Oh you fakey.|Nice try.|Oh nice camouflage.'
	};
	hero.stats={
		hp:30,
		hpm:30,
		might:5+extraDmg,
		guard:5,
		speed:5,
		dodge:5,
		luck:5
	};
	var hero=new Game.Hero('Crumb','girlscoutCrumb','portraitCrumb',[2,0]);
	hero.dialogue={
		'intro':'I\'m Crumb. I look like this because of a baking accident when I was little. Big deal. At least now I don\'t get hurt as easily as others, I guess.',
		'greeting':'Hi there.|Ready for adventure, I guess.|Reporting for duty.',
		'win':'Oh sorry, did that hurt?|Should have moved out of the way.|Oops. My bad.',
		'entrance':'Let\'s do this, I guess.|Well, let\'s go...|I gotta go in there?|Are we really doing this?|I hope I won\'t get lost like last time.|Let\'s get this over with.',
		'completion':'I... I did it...|I\'m glad that\'s over.|What, there\'s more?|In I go, I guess.|It doesn\'t end, does it?|But it\'s dark in there.',
		'defeat':'I, uh, ouch.|Why does that always happen to me?|I\'m just no good, am I?|Oh no.|I\'m... I\'m not crying.|Well that wasn\'t fun at all.|I\'m sorry I failed you.|Please... make them go away...',
		'meet Ascended Baking Pod':'That thing shouldn\'t even be alive.|Is that where they all came from?',
		'win against Ascended Baking Pod':'Hm. Fascinating.',
		'win against Mimic':'Ha... ha... ha. Very funny|I am better prankster than you.',
		'win against mimic':'Ha... ha... ha. Very funny|I am better prankster than you.'
	};
	hero.stats={
		hp:25,
		hpm:25,
		might:5+extraDmg,
		guard:7,
		speed:4,
		dodge:4,
		luck:5
	};
	var hero=new Game.Hero('Doe','girlscoutDoe','portraitDoe',[3,0]);
	hero.dialogue={
		'intro':'H-hey. Name\'s Doe. I\'m pretty fast. I uh, I promise I\'ll do my best.',
		'greeting':'H-hey.|Oh, uh, h-hi there.|C-can I join?',
		'win':'Th-that looks like it hurt... awesome...|D-did I do that?|N-neat... there\'s pieces everywhere.',
		'entrance':'Alright, let\'s do this!|I-if I really have to.|I-in there? By myself?|...won\'t you come with me this time?|H-here I go!',
		'completion':'Oh... oh my.|That\'s... I uh, I\'m glad.|Y-yeah that was real easy. Piece of pie!|T-too easy, right?|S-so many cookies...|Ooh? F-fascinating.',
		'defeat':'I-if you can\'t beat them... join them.|I-it\'s because I stutter, isn\'t it?|W-well that\'s just no good at all.|I, uh, I meant for that to happen.|H-how embarrassing.',
		'meet Ascended Baking Pod':'W-whoah... it\'s... magnificent...',
		'win against Ascended Baking Pod':'I\'m sorry, buddy.|I... I think I hurt it...|Oh no... I-I think I broke it...',
		'win against Mimic':'Ooo.|i w-w-would l-like to have c-camouflage as well.|Oh n-no. You l-lost your camoufl-l-age?.',
		'win against mimic':'Ooo.|i w-w-would l-like to have c-camouflage as well.|Oh n-no. You l-lost your camoufl-l-age?.'
	};
	hero.stats={
		hp:25,
		hpm:25,
		might:4+extraDmg,
		guard:4,
		speed:7,
		dodge:5,
		luck:5
	};
	var hero=new Game.Hero('Lucky','girlscoutLucky','portraitLucky',[4,0]);
	hero.dialogue={
		'intro':'Oh joy! My name\'s Lucky. Guess what I\'m good at?',
		'greeting':'I\'m feeling lucky!|It\'s a bright day today!|Let\'s do great things together.',
		'win':'Ooh lucky shot!|Pow! One more.|Damn straight!',
		'entrance':'Glad to be of service!|Oooh this one\'ll be interesting.|This will be a good one, I can feel it!|Here I come!',
		'completion':'Over already?|Let\'s explore some more!|That was lucky!|That was no luck, I\'m just that good.|Alright, let\'s move on!|I\'m just getting warmed up!',
		'defeat':'I can\'t believe it!|...This is a joke, right?|Hey! No fair!|B-but...|I\'m gonna need a bandaid. And some hot chocolate.|I\'ll, uh, try again later.|Bad luck! Bad luck!',
		'win against Ascended Baking Pod':'Golly, that was peculiar.',
		'meet Ancient Elder Doughling':'It is you. But why are you angry?|That\'s one from atlases|That\'s one from ancient stories.',
		'win against Ancient Elder Doughling':'I met you... And destroyed you.|That\'s one from atlases|That\'s one from ancient stories.',
		'meet Shielded Anc. E.d.':'It is you. But why are you angry? Oh you now glow.|That\'s one from atlases|That\'s one from ancient stories.',
		'win against Shielded Anc. E.d.':'Whatever it was , however it was helping you I destroyed you.',
		'win against Mimic':'really?',
		'win against mimic':'really?'
	};
	hero.stats={
		hp:25,
		hpm:25,
		might:5+extraDmg,
		guard:4,
		speed:4,
		dodge:5,
		luck:7.1
	};

};
