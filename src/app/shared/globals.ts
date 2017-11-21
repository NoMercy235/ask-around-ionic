export class Globals {
    public static readonly API: string = 'http://localhost:8080';

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
}
