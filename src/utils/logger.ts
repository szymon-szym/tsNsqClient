import winston from 'winston'

const options: winston.LoggerOptions = {
    transports: [
        new winston.transports.Console({
            level: process.env.NODE_ENV==="production" ? "error" : "debug",
        }),
        new winston.transports.File({
            filename: "Debug.log",
            level: "debug"
        })
    ]
}


export const logger = winston.createLogger(options)

export const stream = {
    write: (message: string): void => {
        logger.info(message)
    }
}

if (process.env.NODE_ENV!=="production") {
    logger.debug("Logginig initialized on debug level")
}




