import { Request, Response } from 'express';
import { createMenuObject } from '../helpers/createMenuObjects';
import { Pet } from '../models/pet'

//params page home
const home = (req: Request, res: Response) => {
    let list = Pet.getAll();

    res.render('pages/page', {
        menu: createMenuObject('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list
    });
}

export { home };

//params page dogs
const dogs = (req: Request, res: Response) => {
    let list = Pet.getFromType('dog');
    res.render('pages/page', {
        menu: createMenuObject('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        list
    });
}

export { dogs };

//params page cats
const cats = (req: Request, res: Response) => {
    let list = Pet.getFromType('cat');
    res.render('pages/page', {
        menu: createMenuObject('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        list
    });
}

export { cats };

//params page fishes
const fishes = (req: Request, res: Response) => {
    let list = Pet.getFromType('fish');
    res.render('pages/page', {
        menu: createMenuObject('fish'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        list
    });
}

export { fishes };