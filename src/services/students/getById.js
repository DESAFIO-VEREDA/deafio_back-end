const { getProofById } = require ('../../models');

const getByRA = async (id) => {
    try {
        const proofs = getProofsById(id)
        return proofs;
    } catch (error) {
        return error;
    }
}

module.exports = getByRA;