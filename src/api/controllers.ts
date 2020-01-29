import { Response, Request } from 'express'

const controllers = {
    dummy: (req: Request, res: Response):void => {
        const responseJson:object = {
            title: "I am dummy title",
            body: "I am dummy body"
        };
        res.json(responseJson)
    }
}

export default controllers