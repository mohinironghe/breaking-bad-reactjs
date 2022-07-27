"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSearch = exports.removeFavorite = exports.addFavorite = exports.UPDATE_SEARCH = exports.REMOVE_FAVORITE = exports.ADD_FAVORITE = void 0;
exports.ADD_FAVORITE = 'ADD_FAVORITE';
exports.REMOVE_FAVORITE = 'REMOVE_FAVORITE';
exports.UPDATE_SEARCH = 'UPDATE_SEARCH';
var addFavorite = function (data) { return ({
    type: exports.ADD_FAVORITE,
    payload: data
}); };
exports.addFavorite = addFavorite;
var removeFavorite = function (data) { return ({
    type: exports.REMOVE_FAVORITE,
    payload: data
}); };
exports.removeFavorite = removeFavorite;
var updateSearch = function (data) { return ({
    type: exports.UPDATE_SEARCH,
    payload: data
}); };
exports.updateSearch = updateSearch;
