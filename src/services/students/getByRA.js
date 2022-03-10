const { getProofsByRA } = require ('../../models');

const getByRA = async (ra) => {
    try {
        const proofs = getProofsByRA(ra)
        return proofs;
    } catch (error) {
        return error;
    }
}

module.exports = getByRA;