const INITIAL_DIFFICULTY = 3;
const MINE_RATE = 1000;
const DIFFICULTY_SAFEGUARD = 1;

const GENESIS_DATA = {
    timestamp: 1,
    lastHash: '*****',
    hash: 'genesis-hash',
    data: [],
    nonce: 0,
    difficulty: INITIAL_DIFFICULTY
};

module.exports = { GENESIS_DATA, MINE_RATE, DIFFICULTY_SAFEGUARD };