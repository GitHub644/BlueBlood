import TYPES from './mutation-types'

export default {
  [TYPES.OPERATMAN_ACTION]({commit,state,dispatch}, argsJson) {
    commit(TYPES.OPERATMAN, argsJson);
  },
  [TYPES.MEMBER_GET_BALANCE]({commit,state,dispatch}, argsJson) {
    commit(TYPES.OPERATMAN, argsJson);
  },
  [TYPES.ACTION_SAVEWEBDATA]({commit,state,dispatch}, argsJson) {
    commit(TYPES.SAVEWEBDATA, argsJson);
  },
}
