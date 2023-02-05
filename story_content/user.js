function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5vloObnWahM":
        Script1();
        break;
      case "6DjFgIiub21":
        Script2();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var score = player.GetVar("S_zedo_bonus");
window.parent.postMessage({score:score}, "*")
}

function Script2()
{
  var player = GetPlayer();
var score = player.GetVar("zedo");
window.parent.postMessage({score:score}, "*")
}

