module.exports = {
    getHouses: (req, res) => {
        const db = req.app.get('db');
        db.get_houses().then(houses => {
            res.status(200).json(houses)
        }).catch(() => {
            res.sendStatus(500)
        })
    },

    addHouse: (req, res) => {
        const { name, address, city, state_name, zipcode, image_url, mortgage, rent } = req.body;
        const db = req.app.get('db');
        db.add_house(name, address, city, state_name, zipcode, image_url, mortgage, rent).then(house => {
            res.status(200).json(house)
        }).catch(() => {
            res.sendStatus(500)
        })
    },

    deleteHouse: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;
        db.delete_house(id).then(() => {
            res.sendStatus(200);
        }).catch(() => {
            res.sendStatus(500);
        })
    }
}