import { Op } from "sequelize"; 
import { FamilyModel } from "../../models/familia.model.js"

const getListFamilyActivePage = async (req, res) => {
	const page = Number(req.params.page) || 1;
	const limit = 20;
	const offset = (page - 1) * limit;

	try {
		const { count, rows } = await FamilyModel.findAndCountAll({
			limit,
			offset,
			where: {
				Activo: true
            }
		});
 
		const totalPages = Math.ceil(count / limit);

		return res.status(200).json({
			info: {
				totalPages,
				currentPage: page,
				totalItems: count,
			},
			items: rows,
		});
	} catch (error) {
		console.error('Error al obtener las familias', error.message);
		return res.status(500).json({ Error: 'Error al obtener las familias' });
	}
};

const getListFamilyInctivePage = async (req, res) => {
	const page = Number(req.params.page) || 1;
	const limit = 20;
	const offset = (page - 1) * limit;

	try {
		const { count, rows } = await FamilyModel.findAndCountAll({
			limit,
			offset,
			where: {
				Activo: false,
            }
		});
 
		const totalPages = Math.ceil(count / limit);

		return res.status(200).json({
			info: {
				totalPages,
				currentPage: page,
				totalItems: count,
			},
			items: rows,
		});
	} catch (error) {
		console.error('Error al obtener las familias', error.message);
		return res.status(500).json({ Error: 'Error al obtener las familias' });
	}
};

const getListFamilyPageAll = async (req, res) => {
	const page = Number(req.params.page) || 1;
	const limit = 20;
	const offset = (page - 1) * limit;

	try {
		const { count, rows } = await FamilyModel.findAndCountAll({
			limit,
			offset,
		});
 
		const totalPages = Math.ceil(count / limit);

		return res.status(200).json({
			info: {
				totalPages,
				currentPage: page,
				totalItems: count,
			},
			items: rows,
		});
	} catch (error) {
		console.error('Error al obtener las familias', error.message);
		return res.status(500).json({ Error: 'Error al obtener las familias' });
	}
};

const getListFamilyActive = async (req, res) => {
	try {
        const listFamily = await FamilyModel.findAll({
            where: {
				Activo: true
            }
        });
		
		return res.status(200).json({
            status: 'Ok', listFamily
        });

    } catch (error) {
		console.error('Error al obtener las familias', error.message);
		return res.status(500).json({
            Error: 'Error al obtener las familias'
        });
    }
};

const getListFamilyInactive = async (req, res) => {
	try {
        const listFamily = await FamilyModel.findAll({
            where: {
				Activo: false
            }
        });
		
		return res.status(200).json({
            status: 'Ok', listFamily
        });

    } catch (error) {
		console.error('Error al obtener las familias', error.message);
		return res.status(500).json({
            Error: 'Error al obtener las familias'
        });
    }
};

const getListFamilyAll = async (req, res) => {
	try {
        const listFamily = await FamilyModel.findAll();
		
		return res.status(200).json({
            status: 'Ok', listFamily
        });

    } catch (error) {
		console.error('Error al obtener las familias', error.message);
		return res.status(500).json({
            Error: 'Error al obtener las familias'
        });
    }
};

const getFamilyByName = async (req, res) => {
	const { NombreFamilia } = req.params;
	console.log(req.params)


	try {
		const FamilyByName = await FamilyModel.findAll({
			where: {
				NombreFamilia: {
					[Op.like]: NombreFamilia,
				},
				Activo: true,
			},
		});

		if (!FamilyByName) {
			return res.status(400).json({ Error: 'La familia no existe' });
		}

		return res.status(200).json({ Message: 'OK', FamilyByName });
		
	} catch (error) {
		console.error('Error al obtener la familia', error.message);
		return res.status(500).json({ Error: 'Error al obtener la familia' });
	}
};

const createFamily = async (req, res) => {
	const data = req.body;
	console.log(req.body)
	try {
        const newFamily = FamilyModel.build({
			NombreFamilia: data.NombreFamilia,
			CreadoPor: data.CreadoPor,
			CreadoEn: new Date()
		});
		await newFamily.save();

		return res.status(200).json({ Message: 'OK', newFamily });

	} catch (error) {
		console.error('Error al crear la familia', error.message);
		return res.status(500).json({ Error: 'Error al crear la familia' });
	}
};

const updateFamily = async (req, res) => {
	const data = req.body;
	console.log(req.body)

	try {
		
		const editFamily = await FamilyModel.update({FamiliaId: data.FamiliaId})
		editFamily.NombreFamilia = data.NombreFamilia
		editFamily.ActualizadoPor = data.ActualizadoPor
		editFamily.ActualizadoEn = new Date()
		await editFamily.save()

		return res.status(200).json({ Message: 'OK', editFamily });

	} catch (error) {
		console.log(error)
		console.error('Error al actualizar la familia', error.message);
		return res.status(500).json({ Error: 'Error al actualizar la familia' });
	}
};

export const methods = {
	getListFamilyActivePage,
    getListFamilyInctivePage,
    getListFamilyPageAll,
    getListFamilyActive,
    getListFamilyInactive,
    getListFamilyAll,
    getFamilyByName,
    createFamily,
    updateFamily
};