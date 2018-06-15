import Vue from 'vue'
import TYPES from './mutation-types'
import jsCookie from 'js-cookie'

const cookie = jsCookie.withConverter({
    read: function (value, name) {
        return value;
    },
    write: function (value, name) {
        return value;
    }
});


export default {
    [TYPES.OPERATMAN](state, data) {
        state.man = Object.assign({}, state.man, data);
    },
   
    [TYPES.OPERAWOMAN](state, data) {
        state.woman = Object.assign({}, state.woman, data);
        cookie.set('user', state.woman, {
            path: '/'
        })
    },

    [TYPES.SAVEWEBDATA](state, data) {
        state.data = data;
       
    },
    
}
