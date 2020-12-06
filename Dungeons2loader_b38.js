Game.LoadMod("https://rawcdn.githack.com/Cppkies-Team/Cppkies/927bccdbf5438554fd0282af0197cd577c91b901/dist/index.js")
if (!window.CPPKIES_ONLOAD) window.CPPKIES_ONLOAD = []
window.CPPKIES_ONLOAD.push(() => {
    const prefix = location.href.endsWith("cookieclicker/") ? "" : "../"
    const style = document.createElement("style")
    style.textContent = `.map
{
    position:absolute;
    left:0px;
    top:0px;
    overflow:hidden;
    background:#00061b;
}
.map:after{content:'';pointer-events:none;display:block;position:absolute;left:0px;top:0px;width:144px;height:144px;z-index:100000;background:url(img/dungeonOverlay.png);}
.map .tile, .map .thing
{
    width:16px;
    height:16px;
    position:absolute;
    left:0px;
    top:0px;
}
.mapContainer
{
    /* meh. */
    /*
    -webkit-transition: top 0.1s ease-out, left 0.1s ease-out;
    -moz-transition: top 0.1s ease-out, left 0.1s ease-out;
    -ms-transition: top 0.1s ease-out, left 0.1s ease-out;
    -o-transition: top 0.1s ease-out, left 0.1s ease-out;
    transition: top 0.1s ease-out, left 0.1s ease-out;
    */
}
.map .tile {background:url(https://pipe.miroware.io/5db9be8a56a97834b159fd5b/Dungeons2/img/dungeonIcons.png) no-repeat;z-index:100;}
.map .thing {background:url(https://pipe.miroware.io/5db9be8a56a97834b159fd5b/Dungeons2/img/dungeonIcons.png) no-repeat;z-index:200;}
 
.dungeonName
{
    position:absolute;
    top:24px;
    left:-32px;
    width:256px;
    opacity:0.6;
}
.dungeonLog
{
    position:absolute;
    right:0px;
    top:0px;
    width:200px;
    height:100%;
    overflow-y:scroll;
    z-index:100;
}
.dungeonLog div
{
    font-size:10px;
    padding:3px 2px;
    opacity:0.6;
    text-shadow:0px 1px 0px #000;
}
.dungeonLog div.new
{
    opacity:1;
}
.dungeonLog div b{font-weight:bold;}
 
.mobSlot
{
    width:96px;
    height:100%;
    position:absolute;
    left:0px;
    bottom:0px;
}
.mobPic
{
    width:96px;
    height:96px;
    background:transparent center bottom no-repeat;
    position:absolute;
    left:0px;
    bottom:32px;
}
.mobName
{
    position:absolute;
    width:200%;
    left:-50%;
    bottom:16px;
    text-align:center;
    font-size:12px;
}
.hpBar
{
    position:absolute;
    width:100%;
    left:0px;
    top:0px;
    height:100%;
    background:url(${prefix}betadungeons/img/hpBar.png) repeat-x;
    -webkit-transition: width 0.1s ease-out;
    -moz-transition: width 0.1s ease-out;
    -ms-transition: width 0.1s ease-out;
    -o-transition: width 0.1s ease-out;
    transition: width 0.1s ease-out;
}
.hpmBar
{
    position:absolute;
    width:70%;
    left:15%;
    bottom:4px;
    height:8px;
    background:url(${prefix}betadungeons/img/hpmBar.png) repeat-x;
    box-shadow:0px 0px 4px #000;
}
 
.map .thing .mapInfo{display:none;position:absolute;left:0px;top:0px;z-index:1000000;background:#000;padding:4px 8px;}
.map .thing:hover .mapInfo{display:block;}
.special .fighter {position:absolute;width:96px;height:96px;}
a.control
{
    position:absolute;
    width:48px;
    height:48px;
    background:url(img/control.png) no-repeat;
    opacity:0.8;
}
a.control:hover{opacity:1;}
a.control.west{left:0px;top:48px;background-position:0px -48px;}
a.control.east{left:96px;top:48px;background-position:-96px -48px;}
a.control.north{left:48px;top:0px;background-position:-48px 0px;}
a.control.south{left:48px;top:96px;background-position:-48px -96px;}
a.control.middle{left:48px;top:48px;background-position:-48px -48px;}
`
    document.body.appendChild(style)
    Game.LoadMod("https://cdn.jsdelivr.net/gh/pelletsstarPL/Magixmod@master/dungeon2Gen_b2.js")
    Game.LoadMod("https://cdn.jsdelivr.net/gh/pelletsstarPL/Magixmod@master/dungeons2_b38.js")
    const intervalId = setInterval(() => {
        if (!window.LaunchDungeons) return
        clearInterval(intervalId)
        LaunchDungeons()
        Game.Objects.Factory.special()
        Game.Objects.Factory.eachFrame = Game.Objects.Factory.EachFrame
        Game.Objects.Factory.minigame = {
            save: () => ""
        }
        Game.Objects.Factory.minigameLoaded = true
        Game.Objects.Factory.minigameUrl = "kek"
        Game.Objects.Factory.dungeon.Turn = Cppkies.injectCode(Game.Objects.Factory.dungeon.Turn, "img/'+Game.Monsters", `${prefix}betadungeons/`, "before").bind(Game.Objects.Factory.dungeon)
        Game.Objects.Factory.dungeon.Draw = Cppkies.injectCode(Game.Objects.Factory.dungeon.Draw, /height:100%;(.+);position:absolute/, "height:144px;$1;position:static", "replace").bind(Game.Objects.Factory.dungeon)
        Game.Objects.Factory.dungeon.Draw()
        Game.Objects.Factory.minigameName = "Dungeons"
        Game.Objects.Factory.refresh()
		Game.LoadMinigames()
    }, 100)
})
