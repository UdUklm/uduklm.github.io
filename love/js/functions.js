function show_letter() {
    new TypeIt("#letter", {
        strings: [
            "我并不急着找到你",
            "你看你的电影",
            "我看我的书",
            "我们心里都装着某座",
            "既陌生又向往的城市",
            "\n",
            "相信总有那么一天",
            "我们会一起看同一部电影",
            "一起看同一本书",
            "一起在同一座城市里快乐地生活",
            "\n",
            "日子还很长",
            "终有一天我会慢慢遇见你~"
        ],
        speed: 74,
        waitUntilVisible: true
    }).go();
}

var iBase = {
    Id: function(name) {
        return document.getElementById(name);
    },
    SetOpacity: function(ev, v) {
        ev.filters ? ev.style.filter = 'alpha(opacity=' + v + ')' : ev.style.opacity = v / 100;
    }
}

function fade_out(elem, speed, opacity) {
    speed = speed || 20;
    opacity = opacity || 0;
    var val = 100;
    (function() {
        iBase.SetOpacity(elem, val);
        val -= 10;
        if (val >= opacity) {
            setTimeout(arguments.callee, speed);
        } else if (val < 0) {
            elem.style.display = 'none';
        }
    })();
}

function show_egg() {
    console.log("%c  ___  _     __  __       ____  _ _\n / _ \\| |__ |  \\/  |_   _/ ___|(_) |_ ___  ___\n| | | | '_ \\| |\\/| | | | \\___ \\| | __/ _ \\/ __|\n| |_| | | | | |  | | |_| |___) | | |_| __/\\__ \\\n \\___/|_| |_|_|  |_|\\__, |____/|_|\\__\\___||___/\n                    |___/", "color:#f03752; font-weight: bold;");
    console.log("\n%cCopyright%c善国峻%c\n\n", "padding: 8px; background: #c02c38; font-family: 'Sitka Heading'; font-weight: bold; font-size: large; color: white;", "padding: 8px; background: #f03752; font-family: 'Sitka Text'; font-size: large; color: white;", '');
    console.log("%c🌏主站：www.ohmysites.com%c", "font-weight: bold; font-size: large", '');
}

window.onload = function() {
    this.show_egg();
    var heart = this.document.getElementById("heart");
    heart.onclick = function() {
        fade_out(iBase.Id('header'), 30, 0);
        fade_out(iBase.Id('heart'), 30, 0);
        show_letter();
        return false;
    }
}
