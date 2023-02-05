import {EventEmitter} from 'events';
import {DebugConfig} from './DebugConfig';

/**
 * A simple logging utility that uses the underlying console.
 */
export class Logger extends EventEmitter {
    public enabled: boolean = false;

    constructor() {
        super();
    }

    public static create(): Logger {
        let log = new Logger();
        let errString: string = "error";

        log.on("log", toConsole);
        log.silly = log.emit.bind(log, "log", "silly");
        log.verbose = log.emit.bind(log, "log", "verbose");
        log.info = log.emit.bind(log, "log", "info");
        log.warn = log.emit.bind(log, "log", "warn");
        log.error = log.emit.bind(log, "log", errString);
        log.debug = log.emit.bind(log, "log", "debug");

        log.enabled = false;
        return log;

        function toConsole() {
            let args = [].slice.call(arguments),
                errorLog = args && args.length > 0 ? args[0] === errString : false;
            if (errorLog || log.enabled || DebugConfig.loggingEnabled) {
                console.log.apply(console, arguments);
                if (errorLog) {
                    console.trace();
                }
            }
        }
    }

    public silly(...any: any[]) {
    }

    public verbose(...any: any[]) {
    }

    public info(...any: any[]) {
    }

    public warn(...any: any[]) {
    }

    public error(...any: any[]) {
    }

    public debug(...any: any[]) {
    }
}
