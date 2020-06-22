const Pasaje = require('../models/pasaje'); 

const PasajeCtrl = {}

PasajeCtrl.getPasajes = async (req, res) => {
    pasaje = await Pasaje.find().populate("Adelanto");
    res.json(pasaje);
}

PasajeCtrl.createPasaje = async (req, res) => {
    const pasaje = new Pasaje (req.body);
    await pasaje.save();
    res.json({
        'status': 'Pasaje saved',
        'pasaje': pasaje
    });
}

PasajeCtrl.editPasaje = async (req, res) => {
    const vPasaje =  new Pasaje (req.body);

    await Pasaje.findByIdAndUpdate(req.params.id, {$set: vPasaje}, {new: true});
    res.json({
        'status': 'Pasaje updated'
    })
}

PasajeCtrl.getPasaje = async (req, res) => {
    const pasaje = await (await Pasaje.findById(req.params.id)).populate("pasaje");
    res.json(pasaje);
}

PasajeCtrl.deletePasaje = async (req, res)=>{
    await Pasaje.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Pasaje removed'
    })
}

module.exports= PasajeCtrl;