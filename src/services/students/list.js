const { listProofs } = require ('../../models');

const list = async () => {
    try {
        const proofs = listProofs()
        return proofs;
    } catch (error) {
        return error;
    }
}

module.exports = list;