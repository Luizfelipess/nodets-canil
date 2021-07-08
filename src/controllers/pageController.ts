import { Request, Response } from 'express';

const home = (req: Request, res: Response) => {
    res.send('Home with controller')
    //res.render(pages/page)
}

export { home };

const dogs = (req: Request, res: Response) => {
    //res.render(pages/page)
}

export { dogs };

const cats = (req: Request, res: Response) => {
    //res.render(pages/page)
}

export { cats };

const fishes = (req: Request, res: Response) => {
    //res.render(pages/page)
}

export { fishes };