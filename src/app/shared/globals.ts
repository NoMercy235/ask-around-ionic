export class Globals {
    // public static readonly API: string = 'http://localhost:8080'; // local
    public static readonly API: string = 'http://212.237.26.52:3000'; // remote

    public static readonly PAGE_NAMES = {
        home: 'home',
    };

    public static readonly EVENTS = {
        userSettings: {
            enabledChanged: 'enabledChanged',
            settingsChanged: 'settingsChanged',
        },
        motion: {
            changeRinger: 'changeRinger',
        }
    };

    public static readonly SORTING = {
        asc: 1,
        desc: -1,
    };

    public static KEY_CODES = {
        ENTER: 13,
    };
}
