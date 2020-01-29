import controllers from './controllers'
import { Application } from 'express'

const routes = (app: Application): void => {
    app.route('/dummy')
        .get(controllers.dummy)
}

export default routes