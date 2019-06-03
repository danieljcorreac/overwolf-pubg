$(function () {
    $.connection.hub.url = "http://localhost:9000/signalr";

    var hub = $.connection.overwolfHub;

    var g_interestedInFeatures = [
        'kill',
        'revived',
        'death',
        'killer',
        'match',
        'rank',
        'location',
        'me',
        'team',
        'phase',
        'map',
        'roster',
        'inventory',
        'match_info'
    ];

    function registerEvents() {
        overwolf.games.events.onError.addListener(function (info) {
            writeConsole("Error: " + JSON.stringify(info));
        });

        overwolf.games.events.onInfoUpdates2.addListener(function (info) {
            var data = JSON.stringify(info);
            writeConsole("Info UPDATE: " + data);
            hub.server.sendData(data);
        });

        overwolf.games.events.onNewEvents.addListener(function (info) {
            var data = JSON.stringify(info);
            writeConsole("EVENT FIRED: " + data);
            hub.server.sendData(data);
        });
    }

    function gameLaunched(gameInfoResult) {
        if (!gameInfoResult) {
            return false;
        }

        if (!gameInfoResult.gameInfo) {
            return false;
        }

        if (!gameInfoResult.runningChanged && !gameInfoResult.gameChanged) {
            return false;
        }

        if (!gameInfoResult.gameInfo.isRunning) {
            return false;
        }

        if (Math.floor(gameInfoResult.gameInfo.id / 10) != 10906) {
            return false;
        }

        writeConsole("PUBG Launched");
        return true;
    }

    function gameRunning(gameInfo) {

        if (!gameInfo) {
            return false;
        }

        if (!gameInfo.isRunning) {
            return false;
        }

        if (Math.floor(gameInfo.id / 10) != 10906) {
            return false;
        }

        writeConsole("PUBG running");
        return true;
    }

    function setFeatures() {
        overwolf.games.events.setRequiredFeatures(g_interestedInFeatures, function (info) {
            if (info.status == "error") {
                window.setTimeout(setFeatures, 2000);
                return;
            }

            var data = JSON.stringify(info);
            writeConsole("Set required features:", data);
            hub.server.sendData(data);
        });
    }

    function writeConsole(text, data) {
        console.log(text, data);

        var encodedText = $('<div />').text(text).html();
        var encodedData = $('<div />').text(data).html();
        $('#console').append('<strong>' + encodedText + '</strong>:' + encodedData);
    }

    hub.client.message = function (data) {
        var encodedData = $('<div />').text(data).html();
        $('#console').append('<li><strong>' + encodedData + '</strong></li>');
    };

    $.connection.hub.start().done(function () {
        overwolf.games.onGameInfoUpdated.addListener(function (res) {
            if (gameLaunched(res)) {
                registerEvents();
                setTimeout(setFeatures, 1000);
            }

            var data = JSON.stringify(res);
            writeConsole("onGameInfoUpdated:", data);
            hub.server.sendData(data);
        });

        overwolf.games.getRunningGameInfo(function (res) {
            if (gameRunning(res)) {
                registerEvents();
                setTimeout(setFeatures, 1000);
            }

            var data = JSON.stringify(res);
            writeConsole("getRunningGameInfo:", data);
            hub.server.sendData(data);
        });
    });
});