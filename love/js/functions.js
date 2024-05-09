function show_letter() {
    new TypeIt("#letter", {
        strings: [
            "一开始，我很害怕",
            "害怕这些只是你待人接物的正常方式",
            "害怕我不够特别",
            "害怕这一切都只是我的空想",
            "不得不承认",
            "我已渐渐被你的热情和美丽所吸引",
            "\n",
            "无论结果如何",
            "我都忍不住鼓起勇气告诉你",
            "我喜欢你！",
            "和你在一起的每一分每一秒，我都非常开心",
            "\n",
            "我想和你一起去世界各地看看",
            "想和你一起吃各种吃过或者没吃过的东西",
            "想永远牵着你的手",
            "一起经历充满不确定性的未来",
            "\n",
            "<i><small>2024.5.4 善国峻 </small></i>"
        ],
        speed: 100,
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
