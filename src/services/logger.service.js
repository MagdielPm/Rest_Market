const { level } = require("winston");
var winston = require("winston");

class LoggerService {
    
    constructor() {
        this.logger = winston.createLogger({
            transports: [
                new winston.transports.Console({
                    level: "debug"
                }),
                new winston.transports.File({
                    filename: "api.log",
                    maxsize: 100000000,      // 100MB
                    level: "debug"           // Min logging level
                })
            ],
            format: winston.format.combine(
                winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss.SSS" }),
                winston.format.printf((info) => {
                    // Base message
                    let message = `- [${info.timestamp}] [${info.level.toUpperCase()}] :: `;
                    // Append details according to the desired log type
                    switch(info.log_type) {
                        case "request_info":
                            message = message + `${info.verb.toUpperCase()} | ${info.route} | query_parameters: ${JSON.stringify(info.query_parameters)} | headers: ${JSON.stringify(info.headers)}`;
                            break;
                        case "request_debug":
                            message = message + `${info.verb.toUpperCase()} | ${info.route} | body: ${JSON.stringify(info.body)}`;
                            break;
                        case "method_call":
                            message = message + `${info.verb.toUpperCase()} | ${info.route} | method_name: ${info.method_name} | method_parameters: ${JSON.stringify(info.method_parameters)}`;
                            break;
                        case "query":
                            message = message + `${info.verb.toUpperCase()} | ${info.route} | query: ${info.query}`;
                            break;
                        case "error":
                            message = message + `${info.verb.toUpperCase()} | error_message: ${info.error_message} | stack_trace: ${info.stack_trace}`;
                            break;
                        case "validation_error":
                            message = message + `${info.verb.toUpperCase()} | ${info.route} | validation_error: ${info.message}`;
                            break; 
                    }
                    return message;
                })
            )
        });
    }

}

module.exports = LoggerService;
