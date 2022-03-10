const { removeProof } = require ('../../models');

const remove = async (id) => {
    try {
        await removeProof(id)
    } catch (error) {
        return error;
    }
}

module.exports = remove;