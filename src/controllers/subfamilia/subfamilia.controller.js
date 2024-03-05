import { Op } from "sequelize"; 
import { SubFamilyModel } from "../../models/subfamilia.model.js"

const getPagingActiveList = async (req, res) => {
	const page = Number(req.params.page) || 1;
	const limit = 20;
	const offset = (page - 1) * limit;

	try {
		const { count, rows } = await SubFamilyModel.findAndCountAll({
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
		console.error('Error al obtener las subfamilias', error.message);
		return res.status(500).json({ Error: 'Error al obtener las familias' });
	}
};

const getPagingInactiveList = async (req, res) => {
	const page = Number(req.params.page) || 1;
	const limit = 20;
	const offset = (page - 1) * limit;

	try {
		const { count, rows } = await SubFamilyModel.findAndCountAll({
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
		console.error('Error al obtener las subfamilias', error.message);
		return res.status(500).json({ Error: 'Error al obtener las familias' });
	}
};

const getPagingListAll = async (req, res) => {
	const page = Number(req.params.page) || 1;
	const limit = 20;
	const offset = (page - 1) * limit;

	try {
		const { count, rows } = await SubFamilyModel.findAndCountAll({
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
		console.error('Error al obtener las subfamilias', error.message);
		return res.status(500).json({ Error: 'Error al obtener las familias' });
	}
};

const getActiveList = async (req, res) => {
	try {
        const listFamily = await SubFamilyModel.findAll({
            where: {
				Activo: true
            }
        });
		
		return res.status(200).json({
            status: 'Ok', listFamily
        });

    } catch (error) {
		console.error('Error al obtener las subfamilias', error.message);
		return res.status(500).json({
            Error: 'Error al obtener las subfamilias'
        });
    }
};

const getInactiveList = async (req, res) => {
	try {
        const listFamily = await SubFamilyModel.findAll({
            where: {
				Activo: false
            }
        });
		
		return res.status(200).json({
            status: 'Ok', listFamily
        });

    } catch (error) {
		console.error('Error al obtener las subfamilias', error.message);
		return res.status(500).json({
            Error: 'Error al obtener las subfamilias'
        });
    }
};

const getListAll = async (req, res) => {
	try {
        const listFamily = await SubFamilyModel.findAll();
		
		return res.status(200).json({
            status: 'Ok', listFamily
        });

    } catch (error) {
		console.error('Error al obtener las subfamilias', error.message);
		return res.status(500).json({
            Error: 'Error al obtener las subfamilias'
        });
    }
};

const getByName = async (req, res) => {
	const { NombreFamilia } = req.params;
	console.log(req.params)


	try {
		const FamilyByName = await SubFamilyModel.findAll({
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

const create = async (req, res) => {
	const data = req.body;

	try {
        const newSubFamily = SubFamilyModel.build({
			FamiliaId: data.FamiliaId,
            NombreFamilia: data.NombreFamilia,
			CreadoPor: data.CreadoPor,
			CreadoEn: new Date()
		});
		await newFamily.save();

		return res.status(200).json({ Message: 'OK', newSubFamily });

	} catch (error) {
		console.error('Error al crear la subfamilia', error.message);
		return res.status(500).json({ Error: 'Error al crear la subfamilia' });
	}
};

const update = async (req, res) => {
	const data = req.body;
	try {
		
		const editFamily = await SubFamilyModel.findOne({where: {FamiliaId: data.FamiliaId}})
        editFamily.FamiliaId = data.FamiliaId,
		editFamily.NombreFamilia = data.NombreFamilia
		editFamily.ActualizadoPor = data.ActualizadoPor
		editFamily.ActualizadoEn = new Date()
		await editFamily.save()

	} catch (error) {
		console.log(error)
		console.error('Error al actualizar la subfamilia', error.message);
		return res.status(500).json({ Error: 'Error al actualizar la subfamilia' });
	}
};

export const methods = {
	getPagingActiveList,
    getPagingInactiveList,
    getPagingListAll,
    getActiveList,
    getInactiveList,
    getListAll,
    getByName,
    create,
    update
};