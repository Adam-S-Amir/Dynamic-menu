var menuIdentifier = "";
// -- Deluxe Tuner Style Names
var itemStylesNames = [];
var menuStylesNames = [];
// -- End of Deluxe Tuner Style Names

//--- Common
var isHorizontal = 0;
var smColumns = 1;
var smOrientation = 0;
var dmRTL = 0;
var pressedItem = -2;
var itemCursor = "default";
var itemTarget = "_self";
var statusString = "";
var blankImage = "";
var pathPrefix_img = "";
var pathPrefix_link = "";

//--- Dimensions
var menuWidth = "fit-content";
var menuHeight = "-webkit-fill-available";
var smWidth = "fit-content";
var smHeight = "-webkit-fill-available";

//--- Positioning
var absolutePos = 0;
var posX = "10px";
var posY = "0px";
var topDX = 30;
var topDY = "50px";
var DX = 0;
var DY = 0;
var subMenuAlign = "left";
var subMenuVAlign = "top";

//--- Font
var fontStyle = [""];
var fontColor = ["#000000", "#ffffff"];
var fontDecoration = ["none", "none"];
var fontColorDisabled = "#AAAAAA";

//--- Appearance
var menuBackColor = "var(--ButtonFace)";
var menuBackImage = "";
var menuBackRepeat = "repeat";
var menuBorderColor = "Grey Black Black Grey";
var menuBorderWidth = null;
var menuBorderStyle = "solid";

//--- Item Appearance
var itemBackColor = ["", "#000080"];
var itemBackImage = ["", ""];
var beforeItemImage = ["", ""];
var afterItemImage = ["", ""];
var beforeItemImageW = "";
var afterItemImageW = "";
var beforeItemImageH = "";
var afterItemImageH = "";
var itemBorderWidth = null;
var itemBorderColor = "";
var itemBorderStyle = "solid";
var itemSpacing = "0px";
var itemPadding = "3px";
var itemAlignTop = "left";
var itemAlign = "left";
// var itemPadding = "4px";
// var itemBorderWidth = 1;

//--- Icons/size
var iconTopWidth = 32;
var iconTopHeight = 32;
var iconWidth = 32;
var iconHeight = 32;
var arrowWidth = 7;
var arrowHeight = 7;
var arrowImageMain = ["./black.gif", "./white.gif"];
var arrowWidthSub = 0;
var arrowHeightSub = 0;
var arrowImageSub = ["./black.gif", "./white.gif"];


//--- Separators
var separatorImage = "";
var separatorWidth = "100%";
var separatorHeight = "4px";
var separatorColor = "black";
var separatorAlignment = "right";
var separatorVImage = "";
var separatorVWidth = "5px";
var separatorVHeight = "100%";
var separatorPadding = "0px";

// var separatorHeight = "1px";
// var separatorPadding = "10px";

//--- Floatable Menu
var floatable = 1;
var floatIterations = 5;
var floatableX = 1;
var floatableY = 1;
var floatableDX = 15;
var floatableDY = 15;

//--- Movable Menu
var movable = 0;
var moveWidth = 0;
var moveHeight = 0;
var moveColor = "#AAFFFF";
var moveImage = "";
var moveCursor = "move";
var smMovable = 0;
var closeBtnW = 11;
var closeBtnH = 11;
var closeBtn = "";

//--- Transitional Effects & Filters
var transparency = "100";
var transition = 0;
var transOptions = "";
var transDuration = 0;
var transDuration2 = 200;
var shadowLen = 0;
var shadowColor = "";
var shadowTop = 1;

//--- CSS Support (CSS-based Menu)
var cssStyle = "display:inline-table;font-size:10px;";
var cssSubmenu = "";
var cssItem = ["", ""];
var cssItemText = ["", ""];
// var cssStyle=1;
// var cssSubmenu="dmSubmenu";
// var cssItem=["dmItem1","dmItem2"];
// var cssItemText=["dmText1","dmText2"];

//--- Advanced
var dmObjectsCheck = 0;
var saveNavigationPath = 1;
var showByClick = 0;
var noWrap = 1;
var smShowPause = 100;
var smHidePause = 500;
var smSmartScroll = 1;
var topSmartScroll = 0;
var smHideOnClick = 1;
var dm_writeAll = 0;
var useIFRAME = 0;
var dmSearch = 0;

//--- AJAX-like Technology
var dmAJAX = 0;
var dmAJAXCount = 0;
var ajaxReload = 0;

//--- Dynamic Menu
var dynamic = 0;

//--- Popup Menu
var popupMode = 0;

//--- Keystrokes Support
var keystrokes = 1;
var dm_focus = 1;
var dm_actKey = 113;

//--- Sound
var onOverSnd = "";
var onClickSnd = "";

var itemStyles = [];
var menuStyles = [];

let pic = "-32x32.png";

var menuItems = [
    //"title", "link", "icon", "null", "description", "null", "null", "- separater" "_ = disabled", "| = one up", "|| = two up", "| = one down",
    // ! IF YOU NEED TO RUN A SCRIPT, USE javascript: BEFORE THE FUNCTION NAME
    ["Games", "", "./assets/images/icons/joystick" + pic, "", "", "", "", "", "", "", "", ],
    ["|2048", "", "./assets/images/icons/2048" + pic, "", "", "", "", "", "", "", "", ],
    ["||4", "javascript:Four()", "./assets/images/icons/2048" + pic, "", "", "", "", "", "", "", "", ],
    ["||2048", "javascript:Twenty()", "./assets/images/icons/2048" + pic, "", "", "", "", "", "", "", "", ],
    ["||2048 3D", "javascript:Three()", "./assets/images/icons/2048" + pic, "", "", "", "", "", "", "", "", ],
    ["||2048 AI", "javascript:AI()", "./assets/images/icons/2048" + pic, "", "", "", "", "", "", "", "", ],
    ["||2048<br>Hardcore", "javascript:Hardcore()", "./assets/images/icons/2048" + pic, "", "", "", "", "", "", "", "", ],
    ["||Flappy<br>2048", "javascript:One()", "./assets/images/icons/2048" + pic, "", "", "", "", "", "", "", "", ],
    ["||Flappy<br>2048 2.0", "javascript:Two()", "./assets/images/icons/2048" + pic, "", "", "", "", "", "", "", "", ],
    ["|FPS Games", "", "./assets/images/icons/FPS" + pic, "", "", "", "", "", "", "", "", ],
    ["||Ultimate<br>Doom", "javascript:Doom()", "./assets/images/icons/Doom" + pic, "", "", "", "", "", "", "", "", ],
    ["||Doom 2", "javascript:Doom2()", "./assets/images/icons/Doom2" + pic, "", "", "", "", "", "", "", "", ],
    ["||Ultimate<br>Doom 2", "javascript:UD2()", "./assets/images/icons/UD2" + pic, "", "", "", "", "", "", "", "", ],
    ["||Master Levels<br>for Doom 2", "javascript:Master()", "./assets/images/icons/Master" + pic, "", "", "", "", "", "", "", "", ],
    ["||Brutal Doom 2", "javascript:BDoom2()", "./assets/images/icons/Brutal" + pic, "", "", "", "", "", "", "", "", ],
    ["||Doom 64", "javascript:Sixty()", "./assets/images/icons/64" + pic, "", "", "", "", "", "", "", "", ],
    ["||Doom 4", "javascript:D4()", "./assets/images/icons/4" + pic, "", "", "", "", "", "", "", "", ],
    ["||Duke Nukem", "javascript:Duke()", "./assets/images/icons/Duke" + pic, "", "", "", "", "", "", "", "", ],
    ["||FreeDoom", "", "./assets/images/icons/FreeDoom" + pic, "", "", "", "", "", "", "", "", ],
    ["||Heretic", "javascript:Heretic()", "./assets/images/icons/Heretic" + pic, "", "", "", "", "", "", "", "", ],
    ["||Heretic 2", "javascript:Heretic2()", "./assets/images/icons/Heretic2" + pic, "", "", "", "", "", "", "", "", ],
    ["||Hexen", "javascript:Hexen()", "./assets/images/icons/Hexen" + pic, "", "", "", "", "", "", "", "", ],
    ["||Plutonia", "javascript:Plutonia()", "./assets/images/icons/Plutonia" + pic, "", "", "", "", "", "", "", "", ],
    ["||Plutonia 2", "javascript:Plutonia2()", "./assets/images/icons/Plutonia2" + pic, "", "", "", "", "", "", "", "", ],
    ["||Final Doom", "javascript:TNT()", "./assets/images/icons/FDoom" + pic, "", "", "", "", "", "", "", "", ],
    ["||Chex Quest", "javascript:Chex1()", "./assets/images/icons/Chex" + pic, "", "", "", "", "", "", "", "", ],
    ["||Chex Quest 2", "javascript:Chex2()", "./assets/images/icons/Chex2" + pic, "", "", "", "", "", "", "", "", ],
    ["||Chex Quest 3", "javascript:Chex3()", "./assets/images/icons/Chex3" + pic, "", "", "", "", "", "", "", "", ],
    ["||Quake", "javascript:Quake()", "./assets/images/icons/Quake" + pic, "", "", "", "", "", "", "", "", ],
    ["||Quake Mission<br>Pack 1", "javascript:QuakeM1()", "./assets/images/icons/Q1M" + pic, "", "", "", "", "", "", "", "", ],
    ["||Quake Mission<br>Pack 2", "javascript:QuakeM2()", "./assets/images/icons/Q1M" + pic, "", "", "", "", "", "", "", "", ],
    ["||Quake 2", "javascript:Quake2()", "./assets/images/icons/Quake2" + pic, "", "", "", "", "", "", "", "", ],
    ["||School Shooter<br>Doom 2", "javascript:Shool()", "./assets/images/icons/School" + pic, "", "", "", "", "", "", "", "", ],
    ["||Batman Doom", "javascript:BatDoom()", "./assets/images/icons/Batman" + pic, "", "", "", "", "", "", "", "", ],
    ["||Mario Doom", "javascript:Dario1()", "./assets/images/icons/Mario" + pic, "", "", "", "", "", "", "", "", ],
    ["||Mario Doom 2", "javascript:Dario2()", "./assets/images/icons/Mario" + pic, "", "", "", "", "", "", "", "", ],
    ["||StarWars Doom", "javascript:StarDoom()", "./assets/images/icons/StarDoom" + pic, "", "", "", "", "", "", "", "", ],
    ["||Castle<br>Wolfenstein", "javascript:Castle()", "./assets/images/icons/Castle" + pic, "", "", "", "", "", "", "", "", ],
    ["||Wolfenstein 3D", "javascript:Wolf3D()", "./assets/images/icons/Wolf" + pic, "", "", "", "", "", "", "", "", ],
    ["||Spear of<br>Destiny", "javascript:Spear()", "./assets/images/icons/Spear" + pic, "", "", "", "", "", "", "", "", ],
    ["||Strife", "javascript:Strife()", "./assets/images/icons/Strife" + pic, "", "", "", "", "", "", "", "", ],
    ["||Rekkr", "javascript:Rekkr()", "./assets/images/icons/Rekkr" + pic, "", "", "", "", "", "", "", "", ],
    ["||GoreScript<br>Classic", "javascript:Gore()", "./assets/images/icons/Gore" + pic, "", "", "", "", "", "", "", "", ],
    ["||Doom<br>Zero", "javascript:Zero()", "./assets/images/icons/Zero" + pic, "", "", "", "", "", "", "", "", ],
    ["||<hr class='clear-hr'>"],
    ["|Brain Games", "", "./assets/images/icons/Brain" + pic, "", "", "", "", "", "", "", "", ],
    ["||Contranoid", "javascript:Contranoid()", "./assets/images/icons/Contranoid" + pic, "", "", "", "", "", "", "", "", ],
    ["||Hextris", "javascript:Hextris()", "./assets/images/icons/Hextris" + pic, "", "", "", "", "", "", "", "", ],
    ["||Oh Hi", "javascript:Hi()", "./assets/images/icons/0HH1" + pic, "", "", "", "", "", "", "", "", ],
    ["||Oh No", "javascript:No()", "./assets/images/icons/0HN0" + pic, "", "", "", "", "", "", "", "", ],
    ["||Quento", "javascript:Quento()", "./assets/images/icons/Quento" + pic, "", "", "", "", "", "", "", "", ],
    ["|Arcade Games", "", "./assets/images/icons/joystick" + pic, "", "", "", "", "", "", "", "", ],
    ["||PacMan", "javascript:Pac()", "./assets/images/icons/Pacman" + pic, "", "", "", "", "", "", "", "", ],
    ["||Google PacMan<br>1.0", "javascript:Google1()", "./assets/images/icons/Pacman" + pic, "", "", "", "", "", "", "", "", ],
    ["||Google PacMan<br>1.2", "javascript:Google2()", "./assets/images/icons/Pacman" + pic, "", "", "", "", "", "", "", "", ],
    ["||Pong", "javascript:Pong()", "./assets/images/icons/pong" + pic, "", "", "", "", "", "", "", "", ],
    ["||Space Invaders", "javascript:SpaceI()", "./assets/images/icons/Space" + pic, "", "", "", "", "", "", "", "", ],
    ["||Tetris 1.0", "javascript:Tetriz()", "./assets/images/icons/Tetris" + pic, "", "", "", "", "", "", "", "", ],
    ["||Tetris 2.0", "javascript:Cubes()", "./assets/images/icons/Tetris" + pic, "", "", "", "", "", "", "", "", ],
    ["||Jelly Tetris", "javascript:Jelly()", "./assets/images/icons/Tetris" + pic, "", "", "", "", "", "", "", "", ],
    ["||Tetris with AI", "javascript:AIT()", "./assets/images/icons/Tetris" + pic, "", "", "", "", "", "", "", "", ],
    ["||<hr class='clear-hr'>"],
    ["|Mario Games", "", "./assets/images/icons/Mario" + pic, "", "", "", "", "", "", "", "", ],
    ["||Super Mario", "javascript:Mario2()", "./assets/images/icons/Mario" + pic, "", "", "", "", "", "", "", "", ],
    ["||Infinite Mario", "javascript:iMario()", "./assets/images/icons/Mario" + pic, "", "", "", "", "", "", "", "", ],
    ["||Mari0", "javascript:Mari0()", "./assets/images/icons/Mario" + pic, "", "", "", "", "", "", "", "", ],
    ["||Super Mario<br>World DX", "javascript:SMWDX()", "./assets/images/icons/Mario" + pic, "", "", "", "", "", "", "", "", ],
    ["||Mario Maker", "javascript:MarMakr()", "./assets/images/icons/Mario" + pic, "", "Coming Soon!", "", "", "", "", "", "", ],
    ["||Jelly Mario", "javascript:JellyM()", "./assets/images/icons/Mario" + pic, "", "Coming Soon!", "", "", "", "", "", "", ],
    ["|Microsoft<br>Surf", "", "./assets/images/icons/Surf" + pic, "", "", "", "", "", "", "", "", ],
    ["||Surf 1.0", "javascript:Surf1()", "./assets/images/icons/Surf" + pic, "", "", "", "", "", "", "", "", ],
    ["||Surf 2.0", "javascript:Surf2()", "./assets/images/icons/Surf" + pic, "", "", "", "", "", "", "", "", ],
    ["||Surf 3.0", "javascript:Surf3()", "./assets/images/icons/Surf" + pic, "", "", "", "", "", "", "", "", ],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["|MineCrap", "", "./assets/images/icons/Minecraft" + pic, "", "", "", "", "", "", "", "", ],
    ["||MineCrap<br>Alpha", "javascript:MinecrapA()", "./assets/images/icons/Minecraft" + pic, "", "", "", "", "", "", "", "", ],
    ["||MineCrap<br>1.3", "", "./assets/images/icons/Minecraft" + pic, "", "Coming Soon!", "", "", "", "", "", "", ],
    ["|||Coming Soon!", "", "./assets/images/icons/warning" + pic, "", "Coming Soon!", "", "", "", "", "", "", ],
    ["||MineCrap<br>1.5.2", "javascript:Minecrap5()", "./assets/images/icons/Minecraft" + pic, "", "", "", "", "", "", "", "", ],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
//  ["||&nbsp;", "", "" , "", "", "", "", "", "", "", "", ],
    ["|Emulators", "", "./assets/images/icons/joystick" + pic, "", "", "", "", "", "", "", "", ],
    ["||Gameboy /<br>Gameboy Color", "javascript:GBC()", "./assets/images/icons/joystick" + pic, "", "", "", "", "", "", "", "", ],
    ["||Gameboy Advance", "javascript:GBA()", "./assets/images/icons/joystick" + pic, "", "", "", "", "", "", "", "", ],
    ["||Misc Games", "javascript:Emulator()", "./assets/images/icons/joystick" + pic, "", "", "", "", "", "", "", "", ],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["|Chrome Dino<br>Games", "", "./assets/images/icons/Dino" + pic, "", "", "", "", "", "", "", "", ],
    ["||Regular Game", "javascript:CDG()", "./assets/images/icons/Dino" + pic, "", "", "", "", "", "", "", "", ],
    ["||3D", "javascript:D3D()", "./assets/images/icons/Dino" + pic, "", "", "", "", "", "", "", "", ],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["|Ice Dodo", "", "./assets/images/icons/ice" + pic, "", "", "", "", "", "", "", "", ],
    ["||Ice Dodo 1.0", "javascript:Ice()", "./assets/images/icons/ice" + pic, "", "", "", "", "", "", "", "", ],
    ["||Ice Dodo 2.0", "javascript:Ice2()", "./assets/images/icons/ice" + pic, "", "", "", "", "", "", "", "", ],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["|Undertale<br>Boss Fight", "", "./assets/images/icons/Sans" + pic, "", "", "", "", "", "", "", "", ],
    ["||Sans", "", "./assets/images/icons/Sans" + pic, "", "", "", "", "", "", "", "", ],
    ["||Riolu", "", "./assets/images/icons/Rioluvania" + pic, "", "", "", "", "", "", "", "", ],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["|Spelunky", "javascript:Spelunky()", "./assets/images/icons/Spelunky" + pic, "", "", "", "", "", "", "", "", ],
    ["|Funky Karts", "javascript:Funky()", "./assets/images/icons/Funky" + pic, "", "", "", "", "", "", "", "", ],
    ["|Rocket<br>Custa", "javascript:Rocket()", "./assets/images/icons/Rocket" + pic, "", "", "", "", "", "", "", "", ],
    ["|HexGL", "javascript:Hex()", "./assets/images/icons/Hex" + pic, "", "", "", "", "", "", "", "", ],
    ["|Boxel<br>Rebound", "javascript:Box()", "./assets/images/icons/Box" + pic, "", "", "", "", "", "", "", "", ],
    ["|Drift<br>Hunters", "javascript:Drift()", "./assets/images/icons/Drift" + pic, "", "", "", "", "", "", "", "", ],
    ["|The Binding<br> of Isaac", "javascript:TBOI()", "./assets/images/icons/TBOI" + pic, "", "", "", "", "", "", "", "", ],
    ["|There is<br>No Game", "javascript:NoGame()", "./assets/images/icons/NoGame" + pic, "", "", "", "", "", "", "", "", ],
    ["|Frank Zamboni", "javascript:Zamboni()", "./assets/images/icons/Zamboni" + pic, "", "", "", "", "", "", "", "", ],
    ["|<hr class='clear-hr'>"],
    ["Programs", "", "./assets/images/icons/programs" + pic, "", "", "", "", "", "", "", "", ],
    ["|Time<br>Wasting", "", "./assets/images/icons/fonts-folder" + pic, "", "", "", "", "", "", "", "", ],
    ["||Acid Box", "javascript:AcidBox()", "./assets/images/icons/AcidBox" + pic, "", "", "", "", "", "", "", "", ],
    ["||Clock", "javascript:Clock()", "./assets/images/icons/Clock" + pic, "", "", "", "", "", "", "", "", ],
    ["||Button", "javascript:Button()", "./assets/images/icons/Button" + pic, "", "", "", "", "", "", "", "", ],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["||<hr class='clear-hr'>"],
    ["|MagnusWare<br>Software<br>Center", "javascript:Store()", "./assets/images/icons/Store" + pic, "", "", "", "", "", "", "", "", ],
    ["|Chat Room", "javascript:Chat()", "./assets/images/icons/Chat" + pic, "", "", "", "", "", "", "", "", ],
    ["|Sound<br>Recorder", "javascript:SoundRecorder()", "./assets/images/icons/speaker" + pic, "", "", "", "", "", "", "", "", ],
    ["|Calculator", "javascript:Calculator()", "./assets/images/icons/Calculator" + pic, "", "", "", "", "", "", "", "", ],
    ["|WinAMP", "javascript:openWinamp()", "./assets/images/icons/winamp2" + pic, "", "", "", "", "", "", "", "", ],
    ["|VLC Media<br>Player", "javascript:VLC()", "./assets/images/icons/VLC.svg", "", "", "", "", "", "", "", "", ],
    ["|Theme Creator", "javascript:Theme1()", "./assets/images/icons/themes" + pic, "", "", "", "", "", "", "", "", ],
    ["|MS-Paint", "javascript:Paint()", "./assets/images/icons/paint" + pic, "", "", "", "", "", "", "", "", ],
    ["|NotePad", "javascript:Notepad()", "./assets/images/icons/notepad" + pic, "", "", "", "", "", "", "", "", ],
    ["|Da Hood", "javascript:Network()", "./assets/images/icons/network" + pic, "", "", "", "", "", "", "", "", ],
    ["|MS-CMD", "javascript:MSCMD()", "./assets/images/icons/msdos" + pic, "", "", "", "", "", "", "", "", ],
    ["|<hr class='clear-hr'>"],
    ["<hr class='hr-style'>"],
    ["Settings", "javascript:Settings();", "./assets/images/icons/settings" + pic, "", "", "", "", "", "", "", "", ],
    ["<hr class='hr-style'>"],
    ["About", "", "./assets/images/icons/document" + pic, "", "Coming Soon!", "", "", "", "", "", "", ],
    ["<hr class='hr-style'>"],
    ["Factory<br>Reset", "javascript:reinstall()", "./assets/images/icons/shutdown" + pic, "", "If you click this, you will NOT be able to get your save data back!", "", "", "", "", "", "", ],
];
dm_init();