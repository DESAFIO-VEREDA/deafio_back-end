const { updateProof } = require ('../../models');

const update = async (id, { ra, name, grade, year, evaluationName, discipline, grade2 }) => {
    try {
        await updateProof(id, { ra, name, grade, year, evaluationName, discipline, grade2 })
    } catch (error) {
        return error;
    }
}

module.exports = update;