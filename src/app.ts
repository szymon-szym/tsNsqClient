import * as sourceMaps from 'source-map-support'
sourceMaps.install()
import express from 'express'
import * as bodyParser from 'body-parser'
import morgan from 'morgan'

import { logger, stream } from './utils/logger'
import routes from './api/routes'

logger.debug('creating app')

class App {
    public express: express.Application

    constructor() {
        this.express = express()
        this.middleware()
        this.routes()
    }

    private middleware(): void {
        this.express.use(bodyParser.json())
        this.express.use(bodyParser.urlencoded({ extended: false}))
        this.express.use(morgan('combined', { stream }))
    }

    private routes(): void {
        routes(this.express)
    }

}

export default new App().express
