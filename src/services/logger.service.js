const { level } = require("winston");
var winston = require("winston");

export default class LoggerService {
    
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
                            message = message + `${info.verb.toUpperCase()} | ${info.route} | query_parameters: ${JSON.stringify(OSD(info.query_parameters))} | headers: ${JSON.stringify(OSD(info.headers))}`;
                            break;
                        case "request_debug":
                            message = message + `${info.verb.toUpperCase()} | ${info.route} | body: ${JSON.stringify(OSD(info.body))}`;
                            break;
                        case "method_call":
                            message = message + `${info.verb.toUpperCase()} | ${info.route} | method_name: ${info.method_name} | method_parameters: ${JSON.stringify(OSD(info.method_parameters))}`;
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

// Utilitary function to obfuscate sensible data in "user_token", "password", "user.password" and "numberPhone" variables into "first layer"
// and "data layer"
function OSD(data) {
    let obfuscated_data = JSON.parse(JSON.stringify(data));
    for (var variableName in obfuscated_data) {
        // Obfuscate fist layer
        if (variableName == "user_token" || variableName == "password" || variableName == "user.password" || variableName == "numberPhone") {
            obfuscated_data[variableName] = obfuscated_data[variableName].replace(new RegExp(".", "gi"), "#");
        }
        // Obfuscate data layer
        if (variableName == "data") {
            for (var variableNameInData in obfuscated_data[variableName]) {
                if (variableNameInData == "user_token" || variableNameInData == "password" || variableNameInData == "user.password" || variableNameInData == "numberPhone") {
                    obfuscated_data[variableName][variableNameInData] = obfuscated_data[variableName][variableNameInData].replace(new RegExp(".", "gi"), "#");
                }
            }
        }
    }
    return obfuscated_data;
}

// Utilitary function to obfuscate a sensible string. If typeof query_parameter == "string", it gets obfuscated; otherwise query_parameter is returned
// with no changes.
export function OSQP(query_parameter) {
    if (typeof query_parameter == "string") {
        return query_parameter.replace(new RegExp(".", "gi"), "#");
    }
}
